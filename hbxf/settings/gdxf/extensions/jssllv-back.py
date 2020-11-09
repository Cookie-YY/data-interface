from extensions import Extension
import pandas as pd
import numpy as np

sql_1_2 = "1-2"
sql_map = {
    "1-2": ""
}


class Jssllv(Extension):
    """及时受理率"""
    """
    计算公式：使用已提供的SQL语句进行计算
    """
    def __init__(self, apis_copy, apis):
        super(Jssllv, self).__init__(apis_copy, apis)  # 执行父类方法，获得self.apis/self.apis_copy

    def before_search(self):
        return

    def search(self):
        # 区划分布 --> 全部 --> 信访部门 （省） 【一个数】
        sql_qh_all_xfbm_shej = f"select jssl/zs from {(sql_map['1-2'])} where reigon_name='广东省'"
        # 区划分布 --> 全部 --> 信访部门 （xx市） 【一个数】
        sql_qh_all_xfbm_shij = 1_4
        # 区划分布 --> 全部 --> 信访部门 （各个市） 【name/value】
        sql_qh_all_xfbm_allshij = 1_4
        # 区划分布 --> 全部 --> 信访部门 （某个市的某个县） 【value】 ------- 存在权限不清问题
        # 区划分布 --> 全部 --> 信访部门 （某个市的各个县） 【name/value】 ------- 存在权限不清问题/SQL不支持问题

        # 区划分布 --> 全部 --> 责任单位 （省） 【一个数】
        sql_qh_all_zrdw_shej = 2_2
        # 区划分布 --> 全部 --> 责任单位 （xx市） 【一个数】
        sql_qh_all_zrdw_shij = 2_4
        # 区划分布 --> 全部 --> 责任单位 （各个市） 【name/value】
        sql_qh_all_zrdw_allshij = 2_4
        # 区划分布 --> 全部 --> 责任单位 （某个市的某个县） 【value】 ------- 存在权限不清问题
        # 区划分布 --> 全部 --> 责任单位 （某个市的各个县） 【name/value】------- 存在权限不清问题/SQL不支持问题

        # 区划分布 --> 信访形式 --> 信访部门 （省） 【一个数】
        sql_qh_xfxs_xfbm_shej = 1_2
        # 区划分布 --> 信访形式 --> 信访部门 （xx市） 【一个数】
        sql_qh_xfxs_xfbm_shij = 1_4
        # 区划分布 --> 信访形式 --> 信访部门 （各个市） 【name/value】
        sql_qh_xfxs_xfbm_allshij = 1_4
        # 区划分布 --> 信访形式 --> 信访部门 （某个市的某个县） 【value】 ------- 存在权限不清问题
        # 区划分布 --> 信访形式 --> 信访部门 （某个市的各个县） 【name/value】------- 存在权限不清问题/SQL不支持问题

        # 区划分布 --> 信访形式 --> 责任单位 （省） 【一个数】
        sql_qh_xfxs_zrdw_shej = 2_2
        # 区划分布 --> 信访形式 --> 责任单位 （xx市） 【一个数】
        sql_qh_xfxs_zrdw_shij = 2_4
        # 区划分布 --> 信访形式 --> 责任单位 （各个市） 【name/value】
        sql_qh_xfxs_zrdw_allshij = 2_4
        # 区划分布 --> 信访形式 --> 责任单位 （某个市的某个县） 【value】------- 存在权限不清问题
        # 区划分布 --> 信访形式 --> 责任单位 （某个市的各个县） 【name/value】------- 存在权限不清问题/SQL不支持问题


        # 信访部门 --> 全部 （省信访局的三种情况）【name/value】
        sql_xfbm_all_shej_nums = 1_5
        # 信访部门 --> 全部 （省信访局的及时受理率）【一个数】
        sql_xfbm_all_shej = 1_5
        # 信访部门 --> 全部 （某个市信访局的三种情况）【name/value】
        sql_xfbm_all_shij_nums = 1_6
        # 信访部门 --> 全部 （某个市信访局的及时受理率）【一个数】
        sql_xfbm_all_shij = 1_6

        # 信访部门 --> 信访形式 （省信访局的三种情况）【name/value】
        sql_xfbm_xfxs_shej_nums = 1_5
        # 信访部门 --> 信访形式 （省信访局的及时受理率）【一个数】
        sql_xfbm_xfxs_shej = 1_5
        # 信访部门 --> 信访形式 （某个市信访局的三种情况）【name/value】
        sql_xfbm_xfxs_shij_nums = 1_6
        # 信访部门 --> 信访形式 （某个市信访局的及时受理率）【一个数】
        sql_xfbm_xfxs_shij = 1_6

        # 信访部门 --> 全部 --> 排名（省下辖的所有信访局的排名）【name/value】
        sql_xfbm_all_shej_list = 1_5
        # 信访部门 --> 信访形式 --> 排名（省下辖的所有信访局的排名）【name/value】
        sql_xfbm_xfxs_shej_list = 1_5
        # 信访部门 --> 全部 --> 排名（市下辖的所有信访局的排名）【name/value】
        sql_xfbm_all_shij_list = 1_6
        # 信访部门 --> 信访形式 --> 排名（市下辖的所有信访局的排名）【name/value】
        sql_xfbm_xfxs_shij_list = 1_6

        # 责任单位 --> 全部 （某一个责任单位的三种情况）【name/value】
        sql_zrdw_all_nums = 2_5
        # 责任单位 --> 全部 （某一个责任单位的及时受理率）【一个数】
        sql_zrdw_all = 2_5
        # 责任单位 --> 信访形式 （某一个责任单位的三种情况）【name/value】
        sql_zrdw_xfxs_nums = 2_5
        # 责任单位 --> 信访形式 （某一个责任单位的及时受理率）【一个数】
        sql_zrdw_xfxs = 2_5
        # 责任单位 --> 全部 --> 排名（某一个责任单位下辖的所有责任单位的排名）【name/value】--------- 当是省级的时候，需要对结果再次过滤
        sql_zrdw_xfxs_list = 2_5
        # 责任单位 --> 信访形式 --> 排名（某一个责任单位下辖的所有信访局的排名）【name/value】
        sql_zrdw_xfxs_list = 2_5


        from utils import fx_engine
        fx_engine.execute()



    def after_search(self):
        """
        self.db_results: [[df_yp],[df_wp]]
        :return:
        """
        # 获取结果
        df_yp = Extension.groupby_and_sum(self.db_results[0][0], self.value_yp)
        df_wp = Extension.groupby_and_sum(self.db_results[1][0], self.value_wp)
        self.apis_copy["value"] = "cplv"
        if isinstance(df_yp, pd.DataFrame) and isinstance(df_wp, pd.DataFrame):
            # 融合
            df_yp[self.value_yp] = df_yp[self.value_yp].apply(lambda x: 0 if x is None else x)
            df_wp[self.value_wp] = df_wp[self.value_wp].apply(lambda x: 0 if x is None else x)

            columns = list(df_yp.columns)
            columns.remove(self.value_yp)
            if not columns:
                value = (df_yp[self.value_yp][0]) / (df_yp[self.value_yp][0] + df_wp[self.value_wp][0])
                value = 0 if np.isnan(value) else value
                self.df = pd.DataFrame({"cplv": [value]})
            else:
                temp = pd.merge(df_yp, df_wp, on=columns, how="inner")

                # 计算
                df_yp["cplv"] = (temp[self.value_yp])/(temp[self.value_yp]+temp[self.value_wp])
                # 处理计算结果
                df_yp.drop(self.value_yp, axis=1, inplace=True)
                df = df_yp.replace(np.nan, 0)
                df = df.replace([np.inf, -np.inf], 0)
                self.df = df
            # self.final_res = {"df": df, "apis_copy": self.apis_copy}
        else:
            df_yp = 0 if isinstance(df_yp, pd.DataFrame) else df_yp
            df_wp = 0 if isinstance(df_wp, pd.DataFrame) else df_wp
            value = df_yp / (df_yp + df_wp)
            self.df = pd.DataFrame({"cplv": [value]})
            # self.final_res = {"df": pd.DataFrame({"cplv": [value]}), "apis_copy": self.apis_copy}