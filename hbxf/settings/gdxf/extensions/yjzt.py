from libs.extensions import Extension
import pandas as pd
import numpy as np


class Yjzt(Extension):
    """预警状态"""
    """
    计算公式：
        当同比或环比的绝对值超过20%即为告警，绝对值超过10%即为异常，否则为平稳

    """
    def __init__(self, apis_copy, apis, *args, **kwargs):
        # 执行父类方法，获得self.apis/self.apis_copy/self.value
        super(Yjzt, self).__init__(apis_copy, apis, *args, **kwargs)  # 执行父类方法，获得self.apis/self.apis_copy

    def before_search(self):
        self._before_search()  # 此时self.before_waiting_for_search中就有了最基本的内容
        condition_tb = Yjzt.params_parse_tb(self.apis.copy())
        condition_hb = Yjzt.params_parse_hb(self.apis.copy())

        condition_tb_container = self.before_waiting_for_search[0]["conditions"].copy()
        condition_hb_container = self.before_waiting_for_search[0]["conditions"].copy()
        condition_tb_container.append(condition_tb)
        condition_hb_container.append(condition_hb)

        # waiting_for_search = [{"conditions: [当前, 同比的上一阶段]"}, {"conditions: [当前, 环比的上一阶段]"}]
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
        self.db_results[0][0] = Extension.groupby_and_sum(self.db_results[0][0], self.value)
        self.db_results[0][1] = Extension.groupby_and_sum(self.db_results[0][1], self.value)
        self.db_results[1][0] = Extension.groupby_and_sum(self.db_results[1][0], self.value)
        self.db_results[1][1] = Extension.groupby_and_sum(self.db_results[1][1], self.value)

        if isinstance(self.db_results[0][0], pd.DataFrame) and self.db_results[0][0][self.value][0] is None:
            self.db_results[0][0] = np.int32(0)
        if isinstance(self.db_results[0][1], pd.DataFrame) and self.db_results[0][1][self.value][0] is None:
            self.db_results[0][1] = np.int32(0)
        if isinstance(self.db_results[1][0], pd.DataFrame) and self.db_results[1][0][self.value][0] is None:
            self.db_results[1][0] = np.int32(0)
        if isinstance(self.db_results[1][1], pd.DataFrame) and self.db_results[1][1][self.value][0] is None:
            self.db_results[1][1] = np.int32(0)

        df_tb, df_hb = Yjzt.calculate_tb_and_hb(self.db_results, self.apis_copy)
        self.apis_copy["value"] = "yjzt"  # 不能放到前面，tb/hb解析的时候接受的db_results中的列名并没有改
        res = "平稳"
        if abs(df_tb) > 0.2 or abs(df_hb) > 0.2:
            res = "告警"
        elif abs(df_tb) > 0.1 or abs(df_hb) > 0.1:
            res = "异常"
        self.df = pd.DataFrame({"yjzt": [res]})
