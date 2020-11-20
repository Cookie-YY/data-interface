import datetime

from flask import g

from libs.extensions import Extension
import pandas as pd
import numpy as np
import statsmodels.api as sm
from statsmodels.tsa.arima_model import ARIMA

from utils.init_date_valuelist import day_initialized


class Predict(Extension):
    """预测"""
    # 通过ext判断返回值是否包含原来的值
    # ext=include_before
    # ext=only_predict

    def __init__(self, apis_copy, apis, *args, **kwargs):
        # 执行父类方法，获得self.apis/self.apis_copy/self.value
        super(Predict, self).__init__(apis_copy, apis, *args, **kwargs)
        self.apis_copy["tmp_search"] = self.get_datetime_column()
        self.df_beforepredict = None  # 拿到需要预测的df

    def after_search(self):
        """
        self.db_results: [[df_my],[df_bmy],[df_jbmy]]
        时间类型和预测的时间单位需要一致 (目前仅支持 以天为单位)
        """
        self.df_beforepredict = Extension.groupby_and_sum(self.db_results[0][0], self.value)

        # 1.获取待预测时间段
        predict_start, predict_end = self.process_params()

        # 2.预测
        df = self.predict_df(predict_start, predict_end)

        # 3.判断是否携带之前的数据
        if not self.apis_copy.get("ext") or self.apis_copy.get("ext") == "only_predict":
            day_list = self.day_list

        elif self.apis_copy.get("ext") == "include_before":
            df = pd.concat([self.df_beforepredict, df], ignore_index=True)
            day_start = self.apis_copy.get("day").split(",")[0]
            day_end = self.day_list[-1] + " 00:00:00"
            day_list = day_initialized(f"{day_start},{day_end}")
        else:
            return {}
        modified_initialization = {"day": day_list}
        g.modified_initialization = modified_initialization
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

    def predict_df(self, predict_start, predict_end):
        predict = self._predict_df(predict_start, predict_end)
        if not self.kwargs.get("type") or self.kwargs.get("type") == "int":
            predict[self.value] = predict[self.value].apply(lambda x: round(x))
        return predict

    # 核心预测函数：目前仅支持天
    def _predict_df(self, predict_start, predict_end):
        # self.df_beforepredict (待预测的df)
        # predict_start, predict_end (经过处理的需要预测的时间跨度)

        # 获取结果
        self.df_beforepredict.set_index('day', inplace=True)
        # 如果外界指定参数，直接越过搜索
        p = int(self.kwargs.get("p", 0))  # 传递p和q就不用搜索了
        q = int(self.kwargs.get("q", 0))  # 传递p和q就不用搜索了
        d = self.kwargs.get("d") or 1     # 默认值就是1
        if not (p and q):
            (p, q) = (sm.tsa.arma_order_select_ic(self.df_beforepredict, max_ar=3, max_ma=3, ic='aic')['aic_min_order'])
        # 拟合模型
        model = ARIMA(self.df_beforepredict, (p, int(d), q)).fit()
        # 预测
        time_span = (predict_end - predict_start).days
        forecast = model.forecast(time_span)[0]
        # 结果处理
        day_list = day_initialized(f"{datetime.datetime.strftime(predict_start, '%Y-%m-%d %H:%M:%S')},{datetime.datetime.strftime(predict_end, '%Y-%m-%d %H:%M:%S')}")
        self.df_beforepredict = self.df_beforepredict.reset_index()
        self.day_list = day_list[:-1]
        return pd.DataFrame({self.value: forecast, "day": self.day_list})  # 当天的也算预测


    def process_params(self):
        if len(self.args) == 1:
            span = 7
            if str(self.args[0]).endswith("d"):
                span = int(self.args[0].strip("d"))
            start = datetime.date.today()
            end = start + datetime.timedelta(days=span)
        else:
            return
        return start, end  # datetime.datetime类型


