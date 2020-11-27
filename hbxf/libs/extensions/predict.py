import datetime
import random

from flask import g

from libs.extensions import Extension
import pandas as pd
import numpy as np
import statsmodels.api as sm
from statsmodels.tsa.arima_model import ARIMA

from utils.init_date_valuelist import day_initialized


class Predict(Extension):
    """预测"""
    # ext
    #   tb/hb/yjzt
    #   ext=include_before:                         涵盖之前的数据
    #   ext=only_predict：                          仅预测【默认】
    # 参数 ext_params-type@to:int
    #   type=int/float                              是否取整【默认int】
    #   p=1,d=1,q=1                                 预测的模型参数
    #   span=7d                                     预测的时长
    #   realdata_show=30d                           展示的时长（预测的时长是day参数）

    def __init__(self, apis_copy, apis, *args, **kwargs):
        # 执行父类方法，获得self.apis/self.apis_copy/self.value
        super(Predict, self).__init__(apis_copy, apis, *args, **kwargs)
        self.predict_unit = self.get_datetime_column()     # 增加一个搜索字段
        self.apis_copy["tmp_search"] = self.predict_unit   # 增加一个搜索字段
        self.span = None    # 预测的天数，解析后获得
        self.today = datetime.date.today()

    def after_search(self):
        """
        self.db_results:
        时间类型和预测的时间单位需要一致 (目前仅支持以天为单位)
        """
        df_beforepredict = Extension.groupby_and_sum(self.db_results[0][0], self.value)  # 找到search之后的结果

        # 1.获取待预测时间段
        self.process_predict_params()  # 解析预测时长，都是字符串类型

        # 2. groupby+预测   or   直接预测   [返回预测返回day+self.value]
        groupby = list(df_beforepredict.columns)
        groupby.remove(self.predict_unit)
        groupby.remove(self.value)
        if groupby:
            df = df_beforepredict.groupby(groupby).apply(lambda x: sum(self.predict_df(x)[self.value]))
            df = df.reset_index()
            df = df.rename(columns={0: self.value})
        else:
            # 传给预测函数的df必须只有两列：day/self.value
            df = self.predict_df(df_beforepredict)

        # 3.获取展示时长[realdate_show]
        if self.apis_copy.get("name") == "day":
            day_start = self.today-datetime.timedelta(days=int(self.kwargs.get("realdata_show").strip("d")))
            day_start = day_start.strftime("%Y-%m-%d %H:%M:%S")
            day_end = self.today+datetime.timedelta(days=self.span)
            day_end = day_end.strftime("%Y-%m-%d %H:%M:%S")
            day_list = day_initialized(f"{day_start},{day_end}")
            g.modified_initialization.update({"day": day_list})
            # df_beforepredict = df_beforepredict.reset_index()
            df = pd.concat([df_beforepredict, df], ignore_index=True)
        elif not self.apis_copy.get("name"):
            df = pd.DataFrame({self.value: df[self.value].sum()})
        else:
            pass

        # 4.ext=tb/hb


        # 5.ext=yjzt




        self.df = df

    def get_datetime_column(self):
        day_condition = self.apis_copy.get("day")
        date_condition = self.apis_copy.get("date")
        year_condition = self.apis_copy.get("year")
        if day_condition:
            return "day"
        if date_condition:
            return "date"
        if year_condition:
            return "year"
        return ""

    def predict_df(self, df):
        predict_start = self.today.strftime("%Y-%m-%d")
        predict_end = self.today + datetime.timedelta(days=int(self.span))
        predict_end = predict_end.strftime("%Y-%m-%d")
        day_list = day_initialized(f"{predict_start+' 00:00:00'},{predict_end+' 00:00:00'}")
        day_list = day_list[:-1]
        from app import app
        PREDICT_MIN_DATA = app.config.get("PREDICT_MIN_DATA", "")
        PREDICT_MIN_MULTI_DATA = app.config.get("PREDICT_MIN_MULTI_DATA", "")
        # 数量没有过阈值
        if (PREDICT_MIN_MULTI_DATA and df.shape[0] < PREDICT_MIN_MULTI_DATA*len(day_list)) or \
                (PREDICT_MIN_DATA and df.shape[0] < PREDICT_MIN_DATA):
            forecast = np.array([df[self.value].mean()]*len(day_list))

        # 过阈值了，开始预测
        else:
            forecast = self._predict_df(df)
        if not self.kwargs.get("type") or self.kwargs.get("type") == "int":
            forecast = np.around(forecast)
        # 结果处理
        return pd.DataFrame({self.value: forecast, "day": day_list})  # 当天的也算预测

    # 核心预测函数：目前仅支持天
    def _predict_df(self, df):
        # self.df_beforepredict (待预测的df)
        # predict_start, predict_end (经过处理的需要预测的时间跨度)

        # 整理查到的数据
        df = df[["day", self.value]]
        df.set_index('day', inplace=True)
        df = df.set_index(pd.to_datetime(df.index))
        pdates = pd.date_range(start=self.apis_copy.get("day").split(",")[0], end=self.apis_copy.get("day").split(",")[1])

        # 用于预测的数据中补零的策略
        from app import app
        strategy, ratio = app.config["PREDICT_STRATEGY_FILL_NA"]
        if strategy == "mean":
            fill_na = df[self.value].mean()
        else:
            fill_na = 0
        df = df.reindex(pdates, fill_value=0)
        df[self.value] = df[self.value].apply(lambda x: random.uniform(fill_na-df[self.value].mean(), fill_na+df[self.value].mean()) if x==0 else x)

        # 如果外界指定参数，直接越过模型搜索
        p = int(self.kwargs.get("p", -1))  # 传递p和q就不用搜索了
        q = int(self.kwargs.get("q", -1))  # 传递p和q就不用搜索了
        d = self.kwargs.get("d") or 1      # 默认值就是1
        if p == -1 or q == -1:
            (p, q) = (sm.tsa.arma_order_select_ic(df, max_ar=3, max_ma=3, ic='aic')['aic_min_order'])
        # 拟合模型
        model = ARIMA(df, (p, int(d), q)).fit()
        # 预测
        forecast = model.forecast(self.span)[0]
        return forecast

    def process_predict_params(self):
        if len(self.args) == 1:
            span = 7
            kwargs_span = self.kwargs.get("predict")  # kwargs里面的predict参数
            span_str = kwargs_span or self.args[0]    # args里面的第一个参数
            if str(span_str).endswith("d"):
                span = int(self.args[0].strip("d"))
            self.span = span
        else:
            return


