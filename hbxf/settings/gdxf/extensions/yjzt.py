from extensions import Extension
import pandas as pd
import numpy as np


class Yjzt(Extension):
    """满意率"""
    """
    计算公式：
        信访总量：xf_xfj_cd_xj_xfjc
        国家局上访量：xf_xfj_cd_xj_gjjxfjc
        省局集体访：xf_xfj_cd_xj_jtf_xfjc
    
    
    
    使用指标库中表相除计算
        分子：所选时间段内评价为满意+基本满意件次
        分母：所选时间段内评价为满意+基本满意+不满意件次
    例：
        xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc
        xf_xfjg_cd_bmjb_qh_xfbm_xfxs_bmyjc
        xf_xfjg_cd_bmjb_qh_xfbm_xfxs_jbmyjc

    """
    def __init__(self, apis_copy, apis):
        super(Yjzt, self).__init__(apis_copy, apis)  # 执行父类方法，获得self.apis/self.apis_copy

    def before_search(self):
        self.get_before_waiting_for_search()  # 此时self.before_waiting_for_search中就有了最基本的内容
        condition_tb = Yjzt.params_parse_tb(self.apis.copy())
        condition_hb = Yjzt.params_parse_hb(self.apis.copy())

        condition_tb_container = self.before_waiting_for_search[0]["conditions"].copy()
        condition_hb_container = self.before_waiting_for_search[0]["conditions"].copy()
        condition_tb_container.append(condition_tb)
        condition_hb_container.append(condition_hb)

        self.before_waiting_for_search.append(self.before_waiting_for_search[0].copy())
        self.before_waiting_for_search[0]["conditions"] = condition_tb_container
        self.before_waiting_for_search[1]["conditions"] = condition_hb_container

        self.code, self.msg, self.waiting_for_search = Yjzt.get_waiting_for_search(self.before_waiting_for_search)


    def after_search(self):
        """
        self.db_results: [[df_my],[df_bmy],[df_jbmy]]
        :return:
        """
        # 获取结果
        self.value = self.apis_copy.get("table").split("_")[-1]
        self.db_results[0][0] = Extension.groupby_and_sum(self.db_results[0][0], self.value)
        self.db_results[0][1] = Extension.groupby_and_sum(self.db_results[0][1], self.value)
        self.db_results[1][0] = Extension.groupby_and_sum(self.db_results[1][0], self.value)
        self.db_results[1][1] = Extension.groupby_and_sum(self.db_results[1][1], self.value)
        self.apis_copy["value"] = self.value

        if isinstance(self.db_results[0][0], pd.DataFrame) and self.db_results[0][0][self.value][0] is None:
            self.db_results[0][0] = np.int32(0)
        if isinstance(self.db_results[0][1], pd.DataFrame) and self.db_results[0][1][self.value][0] is None:
            self.db_results[0][1] = np.int32(0)
        if isinstance(self.db_results[1][0], pd.DataFrame) and self.db_results[1][0][self.value][0] is None:
            self.db_results[1][0] = np.int32(0)
        if isinstance(self.db_results[1][1], pd.DataFrame) and self.db_results[1][1][self.value][0] is None:
            self.db_results[1][1] = np.int32(0)

        df_tb, df_hb = Yjzt.parse_tb_and_hb(self.db_results, self.apis_copy)
        self.apis_copy["value"] = "yjzt"
        res = "平稳"
        if abs(df_tb) > 0.2 or abs(df_hb) > 0.2:
            res = "告警"
        elif abs(df_tb) > 0.1 or abs(df_hb) > 0.1:
            res = "异常"
        self.df = pd.DataFrame({"yjzt": [res]})
