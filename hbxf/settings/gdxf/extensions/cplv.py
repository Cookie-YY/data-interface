from extensions import Extension
import pandas as pd
import numpy as np


class Cplv(Extension):
    """参评率"""
    """
    计算公式：使用指标库中表相除计算
        分子：所选时间段内评价为满意+基本满意件次
        分母：所选时间段内评价为满意+基本满意+不满意件次
    例：
        xf_xfjg_cd_bmjb_qh_xfbm_xfxs_ypjjc
        xf_xfjg_cd_bmjb_qh_xfbm_xfxs_cqwpjjc
    """
    def __init__(self, apis_copy, apis):
        super(Cplv, self).__init__(apis_copy, apis)  # 执行父类方法，获得self.apis/self.apis_copy

    def before_search(self):
        table = self.apis_copy.get("table", "")
        name = self.apis_copy.get("name", "")
        stack = self.apis_copy.get("stack", "")
        # value = self.apis_copy.get("value", "")

        table_yp = table.replace("_cqwpjjc", "_ypjjc")
        table_wp = table.replace("_ypjjc", "_cqwpjjc")

        columns_yp = f"{name},{stack},ypjjc"
        columns_wp = f"{name},{stack},cqwpjjc"

        before_waiting_for_search = [
            {"table": table_yp, "columns": columns_yp, "conditions": [self.apis]},
            {"table": table_wp, "columns": columns_wp, "conditions": [self.apis]},
        ]

        self.code, self.msg, self.waiting_for_search = Extension.get_waiting_for_search(before_waiting_for_search)

    def after_search(self):
        """
        self.db_results: [[df_yp],[df_wp]]
        :return:
        """
        # 获取结果
        df_yp = self.db_results[0][0]
        df_wp = self.db_results[1][0]

        # 融合
        columns = list(df_yp.columns)
        columns.remove("ypjjc")
        temp = pd.merge(df_yp, df_wp, on=columns, how="inner")

        # 计算
        df_yp["extension_float"] = (temp["ypjjc"])/(temp["ypjjc"]+temp["cqwpjjc"])
        self.apis_copy["value"] = "extension_float"
        # 处理计算结果
        df_yp.drop("ypjjc", axis=1, inplace=True)
        df = df_yp.replace(np.nan, 0)
        df = df.replace([np.inf, -np.inf], 0)
        self.final_res = {"df": df, "apis_copy": self.apis_copy}