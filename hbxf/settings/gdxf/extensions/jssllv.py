from extensions import Extension
import pandas as pd

def get_base_sql_map():
    base_sql_map = {
        "1-2-形式": "1_2",
        "1-4-形式": "1_4",
        "2-2-形式": "2_2",
        "2-4-形式": "2_4",
        "1-5-形式": "1_5",
        "1-6-形式": "1_6",
        '2-5-形式': '2_5',
        "1-2-全": "1_2",
        "1-4-全": "1_4",
        "2-2-全": "2_2",
        "2-4-全": "2_4",
        "1-5-全": "1_5",
        "1-6-全": "1_6",
        '2-5-全': '2_5'
    }
    return base_sql_map


def get_sql_map():
    base_sql_map = get_base_sql_map()
    sql_map = {
        # 区划分布 --> 全部 --> 信访部门 （省） 【一个数】
        "jssllv_qh_all_xfbm_shej" : (f"select a.jssl/a.zs as jssllv from {base_sql_map['1-2-全']} as a where a.region_name='广东省'", ["jssllv"]),
        # 区划分布 --> 全部 --> 信访部门 （xx市） 【一个数】
        "jssllv_qh_all_xfbm_shij" : (f"select a.jssl/a.zs as jssllv from {base_sql_map['1-4-全']} as a where a.region_name='市辖区'", ["jssllv"]),
        # 区划分布 --> 全部 --> 信访部门 （各个市） 【name/value】
        "jssllv_qh_all_xfbm_allshij" : (f"select a.region_name as shij_02,a.jssl/a.zs as jssllv from {base_sql_map['1-4-全']} as a", ["shij_02", "jssllv"]),
        # 区划分布 --> 全部 --> 信访部门 （某个市的某个县） 【value】
        "jssllv_qh_all_xfbm_xj": "",
        # 区划分布 --> 全部 --> 信访部门 （某个市的各个县） 【name/value】
        "jssllv_qh_all_xfbm_allxj": "",
        # 区划分布 --> 全部 --> 责任单位 （省） 【一个数】
        "jssllv_qh_all_zrdw_shej" : (f"select a.jssl/a.zs as jssllv from {base_sql_map['2-2-全']} as a where a.region_name='广东省'", ["jssllv"]),
        # 区划分布 --> 全部 --> 责任单位 （xx市） 【一个数】
        "jssllv_qh_all_zrdw_shij" : (f"select a.jssl/a.zs as jssllv from {base_sql_map['2-4-全']} as a where a.region_name='市辖区'", ["jssllv"]),
        # 区划分布 --> 全部 --> 责任单位 （各个市） 【name/value】
        "jssllv_qh_all_zrdw_allshij" : (f"select a.region_name as shij_02,a.jssl/a.zs as jssllv from {base_sql_map['2-4-全']} as a", ["shij_02", "jssllv"]),
        # 区划分布 --> 全部 --> 责任单位 （某个市的某个县） 【value】
        # 区划分布 --> 全部 --> 责任单位 （某个市的各个县） 【name/value】

        # 区划分布 --> 信访形式 --> 信访部门 （省） 【一个数】
        "jssllv_qh_xfxs_xfbm_shej" : (f"select a.jssl/a.zs as jssllv from {base_sql_map['1-2-形式']} as a where a.region_name='广东省' and a.xfxs='来信'", ["jssllv"]),
        # 区划分布 --> 信访形式 --> 信访部门 （xx市） 【一个数】
        "jssllv_qh_xfxs_xfbm_shij" : (f"select a.jssl/a.zs as jssllv from {base_sql_map['1-4-形式']} as a where a.region_name='市辖区' and a.xfxs='来信'", ["jssllv"]),
        # 区划分布 --> 信访形式 --> 信访部门 （各个市） 【name/value】
        "jssllv_qh_xfxs_xfbm_allshij" : (f"select a.region_name as shij_02,a.jssl/a.zs as jssllv from {base_sql_map['1-4-形式']} as a where a.xfxs='来信'", ["shij_02", "jssllv"]),
        # 区划分布 --> 信访形式 --> 信访部门 （某个市的某个县） 【value】
        # 区划分布 --> 信访形式 --> 信访部门 （某个市的各个县） 【name/value】

        # 区划分布 --> 信访形式 --> 责任单位 （省） 【一个数】
        "jssllv_qh_xfxs_zrdw_shej" : (f"select a.jssl/a.zs as jssllv from {base_sql_map['2-2-形式']} as a where a.region_name='广东省' and a.xfxs='来信'", ["jssllv"]),
        # 区划分布 --> 信访形式 --> 责任单位 （xx市） 【一个数】
        "jssllv_qh_xfxs_zrdw_shij" : (f"select a.jssl/a.zs as jssllv from {base_sql_map['2-4-形式']} as a where a.region_name='广东省' and a.xfxs='来信'", ["jssllv"]),
        # 区划分布 --> 信访形式 --> 责任单位 （各个市） 【name/value】
        "jssllv_qh_xfxs_zrdw_allshij" : (f"select a.region_name as shij_02,a.jssl/a.zs as jssllv from {base_sql_map['2-4-形式']} as a where a.xfxs='来信'", ["shij_02", "jssllv"]),
        # 区划分布 --> 信访形式 --> 责任单位 （某个市的某个县） 【value】
        # 区划分布 --> 信访形式 --> 责任单位 （某个市的各个县） 【name/value】

        # 信访部门 --> 全部 （省信访局的三种情况）【name/value】-------- 结果需要转置
        "jssllv_xfbm_all_shej_nums" : (f"SELECT case jssl when jssl then '及时受理' end as slqk,jssl as 'xfjc' FROM {base_sql_map['1-5-全']}  WHERE region_name = '广东省' UNION SELECT case cqsl when cqsl then '超期受理' end as slqk ,cqsl as 'xfjc'  FROM {base_sql_map['1-5-全']}  WHERE region_name = '广东省'UNION SELECT case cqwsl when cqwsl then '超期未受理' end as slqk ,cqwsl as 'xfjc' FROM {base_sql_map['1-5-全']}  WHERE region_name = '广东省'", ["slqk", "xfjc"]),
        # 信访部门 --> 全部 （省信访局的及时受理率）【一个数】
        "jssllv_xfbm_all_shej_jssllv" : (f"select a.jssl/a.zs as jssllv from {base_sql_map['1-5-全']} as a where a.region_name='广东省' ", ["jssllv"]),
        # 信访部门 --> 全部 （某个市信访局的三种情况）【name/value】-------- 结果需要转置
        "jssllv_xfbm_all_shij_nums" : (f"SELECT case jssl when jssl then 'jssl' end as slqk,jssl as 'xfjc' FROM {base_sql_map['1-6-全']}  WHERE region_name = '广东省' UNION SELECT case cqsl when cqsl then 'cqsl' end as slqk ,cqsl as 'xfjc'  FROM {base_sql_map['1-6-全']}  WHERE region_name = '广东省'UNION SELECT case cqwsl when cqwsl then 'cqwsl' end as slqk ,cqwsl as 'xfjc' FROM {base_sql_map['1-6-全']}  WHERE region_name = '广东省' ", ["slqk", "xfjc"]),
        # 信访部门 --> 全部 （某个市信访局的及时受理率）【一个数】
        "jssllv_xfbm_all_shij_jssllv" : (f"select a.jssl/a.zs as jssllv from {base_sql_map['1-6-全']} as a where a.region_name='市辖区'", ["jssllv"]),

        # 信访部门 --> 信访形式 （省信访局的三种情况）【name/value】-------- 结果需要转置
        "jssllv_xfbm_xfxs_shej_nums" : (f"SELECT case jssl when jssl then 'jssl' end as slqk,jssl as 'xfjc' FROM {base_sql_map['1-5-形式']}  WHERE region_name = '广东省' UNION SELECT case cqsl when cqsl then 'cqsl' end as slqk ,cqsl as 'xfjc'  FROM {base_sql_map['1-5-形式']}  WHERE region_name = '广东省'UNION SELECT case cqwsl when cqwsl then 'cqwsl' end as slqk ,cqwsl as 'xfjc' FROM {base_sql_map['1-5-形式']}  WHERE region_name = '广东省'", ["slqk", "xfjc"]),
        # 信访部门 --> 信访形式 （省信访局的及时受理率）【一个数】
        "jssllv_xfbm_xfxs_shej_jssllv" : (f"select a.jssl/a.zs as jssllv from {base_sql_map['1-5-形式']} as a where a.region_name='广东省' and a.xfxs='来信'", ["jssllv"]),
        # 信访部门 --> 信访形式 （某个市信访局的三种情况）【name/value】-------- 结果需要转置
        "jssllv_xfbm_xfxs_shij_nums" : (f"SELECT case jssl when jssl then 'jssl' end as slqk,jssl as 'xfjc' FROM {base_sql_map['1-6-形式']}  WHERE region_name = '广东省' UNION SELECT case cqsl when cqsl then 'cqsl' end as slqk ,cqsl as 'xfjc'  FROM {base_sql_map['1-6-形式']}  WHERE region_name = '广东省'UNION SELECT case cqwsl when cqwsl then 'cqwsl' end as slqk ,cqwsl as 'xfjc' FROM {base_sql_map['1-6-形式']}  WHERE region_name = '广东省'", ["slqk", "xfjc"]),
        # 信访部门 --> 信访形式 （某个市信访局的及时受理率）【一个数】
        "jssllv_xfbm_xfxs_shij_jssllv" : (f"select a.jssl/a.zs as jssllv from {base_sql_map['1-6-形式']} as a where a.region_name='市辖区' and a.xfxs='来信'", ["jssllv"]),

        # 信访部门 --> 全部 --> 排名（省下辖的所有信访局的排名）【name/value】
        "jssllv_xfbm_all_shej_list" : (f"select a.region_name as xfbm,a.jssl/a.zs as jssllv from {base_sql_map['1-5-全']} as a", ["xfbm", "jssllv"]),
        # 信访部门 --> 信访形式 --> 排名（省下辖的所有信访局的排名）【name/value】
        "jssllv_xfbm_xfxs_shej_list" : (f"select a.region_name as xfbm,a.jssl/a.zs as jssllv from {base_sql_map['1-5-形式']} as a where a.xfxs='来信'", ["xfbm", "jssllv"]),
        # 信访部门 --> 全部 --> 排名（市下辖的所有信访局的排名）【name/value】
        "jssllv_xfbm_all_shij_list" : (f"select a.region_name as xfbm,a.jssl/a.zs as jssllv from {base_sql_map['1-6-全']} as a", ["xfbm", "jssllv"]),
        # 信访部门 --> 信访形式 --> 排名（市下辖的所有信访局的排名）【name/value】
        "jssllv_xfbm_xfxs_shij_list" : (f"select a.region_name as xfbm,a.jssl/a.zs as jssllv from {base_sql_map['1-6-形式']} as a where a.xfxs='来信'", ["xfbm", "jssllv"]),

        # 责任单位 --> 全部 （某一个责任单位的三种情况）【name/value】-------- 结果需要转置
        "jssllv_zrdw_all_nums" : (f"SELECT case jssl when jssl then '及时受理' end as slqk,jssl as 'xfjc' FROM {base_sql_map['2-5-全']} WHERE company_name='广州市住房和城乡建设局' UNION SELECT case cqsl when cqsl then '超期受理' end as slqk ,cqsl as 'xfjc'  FROM {base_sql_map['2-5-全']}  WHERE company_name='广州市住房和城乡建设局' UNION SELECT case cqwsl when cqwsl then '超期未受理' end as slqk ,cqwsl as 'xfjc' FROM {base_sql_map['2-5-全']} where company_name='广州市住房和城乡建设局'", ["slqk","xfjc"]),
        # 责任单位 --> 全部 （某一个责任单位的及时受理率）【一个数】
        "jssllv_zrdw_all_jssllv" : (f"select a.jssl/a.zs as jssllv from {base_sql_map['2-5-全']} as a where a.company_name='公司名'", ["jssllv"]),
        # 责任单位 --> 信访形式 （某一个责任单位的三种情况）【name/value】-------- 结果需要转置
        "jssllv_zrdw_xfxs_nums" : (f"SELECT case jssl when jssl then 'jssl' end as slqk,jssl as 'value' FROM {base_sql_map['2-5-形式']} WHERE company_name='广州市海事局' UNION SELECT case cqsl when cqsl then 'cqsl' end as slqk ,cqsl as 'value'  FROM {base_sql_map['2-5-形式']}  WHERE company_name='广州市海事局' UNION SELECT case cqwsl when cqwsl then 'cqwsl' end as slqk ,cqwsl as 'value' FROM {base_sql_map['2-5-形式']} where company_name='广州市海事局'", ["slqk","xfjc"]),
        # 责任单位 --> 信访形式 （某一个责任单位的及时受理率）【一个数】
        "jssllv_zrdw_xfxs_jssllv" : (f"select a.jssl/a.zs as jssllv from {base_sql_map['2-5-形式']} as a where a.company_name='公司名'", ["jssllv"]),
        # 责任单位 --> 全部 --> 排名（某一个责任单位下辖的所有责任单位的排名）【name/value】--------- 当是省级的时候，需要对结果再次过滤
        "jssllv_zrdw_all_list" : (f"select  a.company_name as zrdw,a.jssl/a.zs as jssllv from {base_sql_map['2-5-全']} as a where a.company_name in ('广东省住房和城乡建设厅','广东省交通运输厅','广东省水利厅','广东省农业农村厅','广东省卫生健康委员会','广东省国资委','广东省市场监督管理局','广东省应急管理厅','广东省地方金融监督管理局','广东省公安厅','广东省民政厅','广东省司法厅','广东省人力资源和社会保障厅','广东省生态环境厅','广东省教育厅','广东省自然资源厅','广东省科技厅','广东省商务厅','广东省退役军人事务厅')", ["zrdw", "jssllv"]),
        # 责任单位 --> 信访形式 --> 排名（某一个责任单位下辖的所有责任单位的排名）【name/value】
        "jssllv_zrdw_xfxs_list" : (f"select a.company_name as zrdw a.jssl/a.zs as jssllv from {base_sql_map['2-5-形式']} as a where a.company_name='公司名'", ["zrdw", "jssllv"]),
    
    
    
    
}
    return sql_map





class Jssllv(Extension):
    """及时受理率"""
    """
    计算公式：使用已提供的SQL语句进行计算
    """

    def __init__(self, apis_copy, apis):
        super(Jssllv, self).__init__(apis_copy, apis)  # 执行父类方法，获得self.apis/self.apis_copy

    def before_search(self):
        self.df = pd.DataFrame([None],columns=["jssllv"])

    def search(self):
        # self.apis_copy["xfjc"] = "jssllv"
        sql_item = self.apis['ext'].split('/')[0]
        sql_map = get_sql_map()

        # 绩效考核：信访部门的三个圈圈
        # http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_ypjjc&
        # xfxs=drop&transformer=@jssllv&Cqh=广东省&full=true&
        # extra_index=table@to:xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc;transformer@to:@mylv,
        # table@to:xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc;transformer@to:@mylv&
        # main_name=参评率,满意率,及时受理率

        # 右侧的区划地图
        # http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_ypjjc&
        # xfxs={gd_id4}transformer=@jssllv&name=qh&full=true&bmjb=市级

        # 信访部门-及时受理的饼图【某一个信访部门的nums】
        # http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc&
        # full=true&value=myjc&extra_index=table@to:xf_xfjg_cd_bmjb_qh_xfbm_xfxs_bmyjc;value@to:bmyjc,
        # table@to:xf_xfjg_cd_bmjb_qh_xfbm_xfxs_jbmyjc;value@to:jbmyjc
        # &main_name=及时受理,超期未受理,超期受理&day=[2020-01-01,2020-10-09]

        # 信访部门-及时受理率
        # http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc&full=true&transformer=@mylv&day=[2020-01-01,2020-10-09]

        # 信访部门-排名【某一个信访部门下属的信访部门的排名】
        # http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc&full=true&transformer=@mylv&name=xfbm&order=-mylv&limit=10&day=[2020-01-01,2020-10-09]

        from utils.db_connection import fx_engine,fx_pymysql
        from utils.results2df import results2df

        # jssllv_type=

        sql, columns = sql_map[sql_item]
        self.apis_copy['value']='jssllv'
        if sql_item.endswith('nums'):
            self.apis_copy['value']='xfjc'
        # cur = fx_pymysql.cursor()
        # cur.execute(sql)
        # results = cur.fetchall()
        results = fx_engine.execute(sql)
        data = results2df(results, columns)
        self.df = data

    def after_search(self):
        return
    # def after_search(self):
    #     """
    #     self.db_results: [[df_yp],[df_wp]]
    #     :return:
    #     """
    #     # 获取结果
    #     df_yp = Extension.groupby_and_sum(self.db_results[0][0], self.value_yp)
    #     df_wp = Extension.groupby_and_sum(self.db_results[1][0], self.value_wp)
    #     self.apis_copy["jssllv"] = "jssllv"
    #     if isinstance(df_yp, pd.DataFrame) and isinstance(df_wp, pd.DataFrame):
    #         # 融合
    #         df_yp[self.value_yp] = df_yp[self.value_yp].apply(lambda x: 0 if x is None else x)
    #         df_wp[self.value_wp] = df_wp[self.value_wp].apply(lambda x: 0 if x is None else x)
    #
    #         columns = list(df_yp.columns)
    #         columns.remove(self.value_yp)
    #         if not columns:
    #             value = (df_yp[self.value_yp][0]) / (df_yp[self.value_yp][0] + df_wp[self.value_wp][0])
    #             value = 0 if np.isnan(value) else value
    #             self.df = pd.DataFrame({"jssllv": [value]})
    #         else:
    #             temp = pd.merge(df_yp, df_wp, on=columns, how="inner")
    #
    #             # 计算
    #             df_yp["jssllv"] = (temp[self.value_yp]) / (temp[self.value_yp] + temp[self.value_wp])
    #             # 处理计算结果
    #             df_yp.drop(self.value_yp, axis=1, inplace=True)
    #             df = df_yp.replace(np.nan, 0)
    #             df = df.replace([np.inf, -np.inf], 0)
    #             self.df = df
    #         # self.final_res = {"d(f": df, "apis_copy": self.apis_copy}
    #     else:
    #         df_yp = 0 if isinstance(df_yp, pd.DataFrame) else df_yp
    #         df_wp = 0 if isinstance(df_wp, pd.DataFrame) else df_wp
    #         value = df_yp / (df_yp + df_wp)
    #         self.df = pd.DataFrame({"jssllv": [value]})
    #         # self.final_res = {"d(f": pd.DataFrame({"jssllv": [value]}), "apis_copy": self.apis_copy}
