import datetime

from libs.extensions import Extension
import pandas as pd
import numpy as np


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
        self.df_beforepredict = self.db_results[0][0]

        # 1.获取待预测时间段
        predict_start, predict_end = self.process_predict_date()

        # 2.预测
        df = self.predict_df(predict_start, predict_end)

        # 3.判断是否携带之前的数据
        if not self.apis_copy.get("ext") or self.apis_copy.get("ext") == "only_predict":
            pass
        elif self.apis_copy.get("ext") == "include_before":
            df = pd.concat([df, self.df_beforepredict], ignore_index=True)
        else:
            return {}
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

    # 核心预测函数：目前仅支持天
    def predict_df(self, predict_start, predict_end):
        # self.df_beforepredict (待预测的df)
        # predict_start, predict_end (经过处理的需要预测的时间跨度)
        pass

    def process_predict_date(self):
        if not self.args:
            start = datetime.datetime.now()
            end = start + datetime.timedelta(days=7)
        elif len(self.args) == 1:
            predict_time_span = self.args[0]
            start = datetime.datetime.now()
            end = start + datetime.timedelta(days=int(predict_time_span.strip("d")))
        elif len(self.args) == 2:  # 目前不支持
            start, end = self.args
        else:
            return "", ""
        return start, end  # datetime.datetime类型

