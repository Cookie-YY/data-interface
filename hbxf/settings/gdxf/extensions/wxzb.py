from extensions import Extension
import pandas as pd
import numpy as np


class Wxzb(Extension):
    """网信占比"""
    """
    计算公式：xfxs为网信的和其他数据的比较
    注意：xfxs=网信等价于，xfxs 不等于 来信， 且不等于 来访
    """
    def __init__(self, apis_copy, apis):
        super(Wxzb, self).__init__(apis_copy, apis)  # 执行父类方法，获得self.apis/self.apis_copy

    def after_search(self):
        """
        self.db_results: [[df_yp],[df_wp]]
        :return:
        """
        # 获取结果
        value = self.apis_copy.get("table").split("_")[-1]
        df_wxzb = Extension.groupby_and_sum(self.db_results[0][0], value)
        self.df = df_wxzb
        self.apis_copy.pop("name", "")
        if self.apis_copy.get("ext") == "wxzb":
            self.df = df_wxzb[value][df_wxzb["xfxs"]=="网信"] / df_wxzb[value].sum()
            self.df = float(self.df)
            self.apis_copy["value"] = "wxzb"
