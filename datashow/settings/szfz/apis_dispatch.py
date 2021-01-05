# apis分发-深圳
URL_DISPATCH_MAP = {
    ################################ 执法监督 ################################
    # 日常统计分析-总量分析 year=2020&xj_02=市辖区
    # 前端动态参数 "参数=默认值": year=2020&xj_02=市辖区
    "执法监督_首页_案件总量": "127.0.0.1:3389/api/fz/?table=jd_cf_cy_xj_ajlx_cnt&year=2020&xj_02=市辖区",
    "执法监督_首页_职权总量": "127.0.0.1:3389/api/fz/?table=jd_zq_cy_xj_zqlx_cnt&name=zqlx&year=2020&xj_02=市辖区",
    "执法监督_首页_关联职权法律规范": "127.0.0.1:3389/api/fz/?table=jd_zq_cy_xj_xljb_cnt&name=xljb&year=2020&xj_02=市辖区",
    "执法监督_首页_行政许可": "127.0.0.1:3389/api/fz/?table=jd_xk_cy_xj_jdlx_cnt&name=jdlx&year=2020&xj_02=市辖区",
    "执法监督_首页_行政检查": "127.0.0.1:3389/api/fz/?table=jd_jc_cy_xj_jcxs_cnt&name=jcxs&year=2020&xj_02=市辖区",
    "执法监督_首页_行政处罚": "127.0.0.1:3389/api/fz/?table=jd_cf_cy_xj_ajlx_cnt&name=ajlx&year=2020&xj_02=市辖区",
    "执法监督_首页_行政强制": "127.0.0.1:3389/api/fz/?table=jd_qz_cy_xj_qzlx_cnt&name=qzlx&year=2020&xj_02=市辖区",
    "执法监督_首页_执法要素-监督机关": "127.0.0.1:3389/api/fz/?table=jd_jdjg_cy_shij_cj_cnt&extra_index=table@to:jd_jdjg_cy_xj_cj_cnt&main_name=市级,区级&year=2020",
    "执法监督_首页_执法要素-行政机关": "127.0.0.1:3389/api/fz/?table=jd_xzjg_cy_shij_cj_cnt&extra_index=table@to:jd_xzjg_cy_xj_cj_cnt&main_name=市级,区级&year=2020",
    "执法监督_首页_执法要素-执法主体": "127.0.0.1:3389/api/fz/?table=jd_zfzt_cy_shij_cj_cnt&extra_index=table@to:jd_zfzt_cy_xj_cj_cnt&main_name=市级,区级&year=2020",
    "执法监督_首页_执法要素-执法人员": "127.0.0.1:3389/api/fz/?table=jd_zfry_cy_shij_ryxz_cnt&name=ryxz&year=2020",
    "执法监督_首页_执法要素-监督人员": "127.0.0.1:3389/api/fz/?table=jd_jdry_cy_shij_cj_cnt&extra_index=table@to:jd_jdry_cy_xj_cj_cnt&main_name=市级,区级&year=2020",

    # 日常统计分析-总量分析 year=2020&is_ga=true/false
    # 前端动态参数 "参数=默认值": year=2020&is_ga=true/false 【含公安传is_ga=true不含公安传is_ga=false】
    "执法监督_预警监控_预警案件总量": "127.0.0.1:3389/api/fz/?table=jd_yj_cy_shij_yjlx_yjdj_cnt&name=yjlx&stack=yjdj&year=2020",

    # 日常统计分析-总量分析 year=2020&is_ga=true/false
    # 前端动态参数 "参数=默认值": year=2020&is_ga=true/false 【含公安传is_ga=true不含公安传is_ga=false】
    # 左侧固定
    "执法监督_行政处罚_案件量_处罚职权总数": "127.0.0.1:3389/api/fz/?table=jd_cf_cy_shij_zqcnt_lxratio&value=zqcnt&year=2020",
    "执法监督_行政处罚_案件量_处罚案件总数": {'code':200,'msg':'success','data':[{'name':'总数','value':'139784'},{'name':'一般','value':'133605'},{'name':'简易','value':'6179'},{'name':'同比','value':'1.7005'},{'name':'环比','value':'0.0927'}]},
    "执法监督_行政处罚_案件量_处罚职权履行率": "127.0.0.1:3389/api/fz/?table=jd_cf_cy_shij_zqcnt_lxratio&year=2020",
    # 变化
    "执法监督_行政处罚_案件量_全行业行政处罚案件量分析_drop": "127.0.0.1:3389/api/fz/?table=jd_cf_cy_shij_hy_ajlx_ajcnt&name=hy&stack=ajlx&year=2020",
    "执法监督_行政处罚_案件量_全行业行政处罚案件量分析_(.*?)": "127.0.0.1:3389/api/fz/?table=jd_cf_cy_xj_hy_ajlx_ajcnt&name=xj_02&stack=ajlx&year=2020&hy={gd_id5}",
    "执法监督_行政处罚_案件量_全市区行政处罚案件量分析_drop": "127.0.0.1:3389/api/fz/?table=jd_cf_cy_xj_hy_ajlx_ajcnt&name=xj_02&stack=ajlx&year=2020",
    "执法监督_行政处罚_案件量_全市区行政处罚案件量分析_(.*?)": "127.0.0.1:3389/api/fz/?table=jd_cf_cy_xj_hy_ajlx_ajcnt&name=hy&stack=ajlx&year=2020&xj_02={gd_id5}",
    "执法监督_行政处罚_案件量_办理环节案件量分析": "127.0.0.1:3389/api/fz/?table=jd_cf_cy_shij_hy_bahj_ajcnt&name=bahj&year=2020",
    "执法监督_行政处罚_案件量_处罚案件办结类型分析": "127.0.0.1:3389/api/fz/?table=jd_cf_cy_shij_hy_jalx_ajcnt&name=jalx&year=2020",
    "执法监督_行政处罚_案件量_全措施分析": "127.0.0.1:3389/api/fz/?table=jd_cf_cy_shij_hy_cslx_ajcnt&name=cslx&year=2020",
    "执法监督_行政处罚_案件量_全行业处罚案件执行类型": "127.0.0.1:3389/api/fz/?table=jd_cf_cy_shij_hy_zxlx_ajcnt&name=hy&stack=zxlx&year=2020",
    "执法监督_行政处罚_案件量_全市区处罚案件执行类型": "127.0.0.1:3389/api/fz/?table=jd_cf_cy_xj_hy_zxlx_ajcnt&name=xj_02&stack=zxlx&year=2020",
    "执法监督_行政处罚_案件量_行政处罚案件量月趋势分析": "127.0.0.1:3389/api/fz/?table=jd_cf_cm_shij_hy_ajlx_ajcnt&name=month&year=2020",
    "执法监督_行政处罚_案件量_处罚案件执行类型月趋分析_半年": "127.0.0.1:3389/api/fz/?table=jd_cf_cm_shij_hy_zxlx_ajcnt&name=month&stack=zxlx&year=2020",
    "执法监督_行政处罚_案件量_处罚案件执行类型月趋分析_季度": "127.0.0.1:3389/api/fz/?table=jd_cf_cm_shij_hy_zxlx_ajcnt&name=month&stack=zxlx&year=2020",
    "执法监督_行政处罚_案件量_处罚案件执行类型月趋分析_月度": "127.0.0.1:3389/api/fz/?table=jd_cf_cm_shij_hy_zxlx_ajcnt&name=month&stack=zxlx&year=2020",
    "执法监督_行政处罚_案件量_行政处罚案件来源分析": "127.0.0.1:3389/api/fz/?table=jd_cf_cy_shij_hy_ajly_ajcnt&name=ajly&year=2020",
    "执法监督_行政处罚_案件量_行政处罚对象类型分析": "127.0.0.1:3389/api/fz/?table=jd_cf_cy_shij_hy_dxlx_ajcnt&name=dxlx&year=2020",
    "执法监督_行政处罚_案件量_历年行政处罚案件量分析": {'code':200,'msg':'success',"map": {"value_g0_1": "总量","value_g0_2": "一般案件","value_g0_3": "简易案件"},'data':[{'name':'2017','value_g0_1':'123','value_g0_2':'93','value_g0_3':'30'},{'name':'2018','value_g0_1':'123','value_g0_2':'93','value_g0_3':'30'},{'name':'2019','value_g0_1':'123','value_g0_2':'93','value_g0_3':'30'},{'name':'2020','value_g0_1':'123','value_g0_2':'93','value_g0_3':'30'}]},
}
