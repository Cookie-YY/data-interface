from extensions import Extension
import pandas as pd
import numpy as np


class Mylv(Extension):
    """满意率"""
    """
    计算公式：使用指标库中表相除计算
        分子：所选时间段内评价为满意+基本满意件次
        分母：所选时间段内评价为满意+基本满意+不满意件次
    例：
        xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc
        xf_xfjg_cd_bmjb_qh_xfbm_xfxs_bmyjc
        xf_xfjg_cd_bmjb_qh_xfbm_xfxs_jbmyjc

    """
    def __init__(self, apis_copy, apis):
        super(Mylv, self).__init__(apis_copy, apis)  # 执行父类方法，获得self.apis/self.apis_copy

    def before_search(self):
        table = self.apis_copy.get("table", "")
        name = self.apis_copy.get("name", "")
        stack = self.apis_copy.get("stack", "")
        # value = self.apis_copy.get("value", "")

        # 处理 table
        table_my = table.replace("_bmyjc", "_myjc").replace("_jbmyjc", "_myjc")
        table_bmy = table.replace("_myjc", "_bmyjc").replace("_jbmyjc", "_bmyjc")
        table_jbmy = table.replace("_bmyjc", "_jbmyjc").replace("_myjc", "_jbmyjc")

        # 处理 columns
        columns_my = f"{name},{stack},myjc"
        columns_bmy = f"{name},{stack},bmyjc"
        columns_jbmy = f"{name},{stack},jbmyjc"

        #
        before_waiting_for_search = [
            {"table": table_my, "columns": columns_my, "conditions": [self.apis]},
            {"table": table_bmy, "columns": columns_bmy, "conditions": [self.apis]},
            {"table": table_jbmy, "columns": columns_jbmy, "conditions": [self.apis]}
        ]

        self.code, self.msg, self.waiting_for_search = Extension.get_waiting_for_search(before_waiting_for_search)

    def after_search(self):
        """
        self.db_results: [[df_my],[df_bmy],[df_jbmy]]
        :return:
        """
        # 获取结果
        df_my = self.db_results[0][0]
        df_bmy = self.db_results[1][0]
        df_jbmy = self.db_results[2][0]

        # 融合
        columns = list(df_my.columns)
        columns.remove("myjc")
        temp = pd.merge(pd.merge(df_my, df_bmy, on=columns, how="inner"), df_jbmy, on=columns, how="inner")

        # 计算
        df_my["extension_float"] = (temp["myjc"]+temp["jbmyjc"])/(temp["myjc"]+temp["jbmyjc"]+temp["bmyjc"])
        self.apis_copy["value"] = "extension_float"
        # 处理计算结果
        df_my.drop("myjc", axis=1, inplace=True)
        df = df_my.replace(np.nan, 0)
        df = df.replace([np.inf, -np.inf], 0)
        self.final_res = {"df": df, "apis_copy": self.apis_copy}
