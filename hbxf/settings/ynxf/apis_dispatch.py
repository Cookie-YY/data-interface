# apis分发-云南
"""
   云南大屏问题分类地图
   目前的模块：信访工作形势研判、信访态势统计分析
"""
URL_DISPATCH_MAP = {
    # 1、信访工作形势研判
    # 1.1、信访工作形势研判_信访部门
    "信访工作形势研判_信访部门_区域年度受理量排行": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfjg_cy_shij_dwjc&name=shij_02&value=dwjc&order=-dwjc&full=true&year=2020",
    "信访工作形势研判_信访部门_办理方式": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfjg_cy_shej_blfs_bmjc&name=blfs&value=bmjc&transformer=@groupby&full=true&year=2020",
    "信访工作形势研判_信访部门_信访形式": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfjg_cy_shej_xfxs_bmjc_zb&name=xfxs&value=bmjc&transformer=@groupby&full=true&year=2020",
    "信访工作形势研判_信访部门_投诉问题分布": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfjg_cy_shej_yjnr_bmjc_zb&name=yjnr&value=bmjc&transformer=@groupby&full=true&year=2020",
    "信访工作形势研判_信访部门_受理量走势_年度": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfjg_cy_shej_blfs_bmjc&name=year&value=bmjc&transformer=@groupby",
    "信访工作形势研判_信访部门_受理量走势_月度": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfjg_cm_shej_bmsljc&name=month&value=bmsljc&transformer=@groupby",
    "信访工作形势研判_信访部门_信访评价_年度": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfjg_cy_shej_bmjssllv&value=bmjssllv&name=year&stack=year&extra_index=table@to:xf_xfjg_cy_shej_bmcplv;value@to:bmcplv,table@to:xf_xfjg_cy_shej_bmmylv;value@to:bmmylv&main_name=及时受理率,参评率,满意率",
    "信访工作形势研判_信访部门_信访评价_月度": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfjg_cm_shej_bmjssllv&value=bmjssllv&name=month&stack=month&extra_index=table@to:xf_xfjg_cm_shej_bmcplv;value@to:bmcplv,table@to:xf_xfjg_cm_shej_bmmylv;value@to:bmmylv&main_name=及时受理率,参评率,满意率",
    # 1.2、信访工作形势研判_责任单位
    "信访工作形势研判_责任单位_区域年度受理排行": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfjg_cy_shij_dwjc&name=shij_02&value=dwjc&order=-dwjc&full=true&year=2020",
    "信访工作形势研判_责任单位_办理方式": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfjg_cy_shej_blfs_dwjc&name=blfs&value=dwjc&transformer=@groupby&full=true&year=2020",
    "信访工作形势研判_责任单位_信访来源": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfjg_cy_shej_xfly_dwjc&name=xfly&value=dwjc&transformer=@groupby&full=true&year=2020",
    "信访工作形势研判_责任单位_投诉问题分布": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfjg_cy_shej_yjnr_dwjc_zb&name=yjnr&value=dwjc&transformer=@groupby&full=true&year=2020",
    "信访工作形势研判_责任单位_受理量走势_年度": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfjg_cy_shej_dwbljc&name=year&value=dwbljc&transformer=@groupby",
    "信访工作形势研判_责任单位_受理量走势_月度": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfjg_cm_shej_dwbljc&name=month&value=dwbljc&transformer=@groupby",
    "信访工作形势研判_责任单位_信访评价_年度": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfjg_cy_shej_dwjssllv&value=dwjssllv&name=year&stack=year&extra_index=table@to:xf_xfjg_cy_shej_dwcplv;value@to:dwcplv,table@to:xf_xfjg_cy_shej_dwmylv;value@to:dwmylv&main_name=及时受理率,参评率,满意率",
    "信访工作形势研判_责任单位_信访评价_月度": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfjg_cm_shej_dwjssllv&value=dwjssllv&name=month&stack=month&extra_index=table@to:xf_xfjg_cm_shej_dwcplv;value@to:dwcplv,table@to:xf_xfjg_cm_shej_dwmylv;value@to:dwmylv&main_name=及时受理率,参评率,满意率",


    # 二. 信访态势统计分析
    # 1.总量分析
    "信访态势统计分析_总量分析_区域年度信访量排行?":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shij_xfjc&name=shij_02&value=xfjc&stack=shij_02&year=2020&order=-xfjc&full=true&extra_index=transformer@to:@tb;order@drop;month@to:now&main_name=信访件次,同比",
    "信访态势统计分析_总量分析_全省信访量":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shej_xfjc&value=xfjc&shej_02=1&main_name=%E5%85%A8%E7%9C%81%E4%BF%A1%E8%AE%BF%E9%87%8F&full=true&year=2020",
    "信访态势统计分析_总量分析_各市信访量?":"http://39.107.240.28:3391/api/xf/?table=xf_xfj_cy_shij_xfjc&name=shij_02&value=xfjc&stack=shij_02&year=2020&extra_index=table@to:&full=true",
    "信访态势统计分析_总量分析_信访量月度走势":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cm_xfjc&name=month&value=xfjc&stack=month&extra_index=year@math:-1&main_name=今年,去年&year=2020",
    "信访态势统计分析_总量分析_年度三率指数":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfjg_cy_bmjssllv&value=bmjssllv&full=true&extra_index=table@to:xf_xfjg_cy_bmcplv;value@to:bmcplv,table@to:xf_xfjg_cy_bmmylv;value@to:bmmylv&main_name=部门受理率,部门参评率,满意率&year=2020",
    # 2.内容分类
    # a.地域分布
    "信访态势统计分析_内容分类_地域分布_一级内容分类信访量":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cd_shej_yjnr_xfjc&name=shej_02&value=xfjc&transformer=@groupby&full=true&day=[2020-10-01,2020-10-20]",
    "信访态势统计分析_内容分类_地域分布_三类指数":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cd_shej_yjnr_xfjc&name=yjnr&value=xfjc&stack=yjnr&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_shej_yjnr_xfrc;value@to:xfrc,transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&day=[2019-01-01,2020-12-10]&full=true",
    "信访态势统计分析_内容分类_地域分布_饼图":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cd_shej_yjnr_xfjc&name=yjnr&value=xfjc&stack=yjnr&transformer=@groupby&full=true&day=[2019-01-01,2020-12-10]",
    "信访态势统计分析_内容分类_地域分布_**信访量分布?":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cd_shij_yjnr_xfjc&name=shij_02&value=xfjc&stack=shij_02&transformer=@groupby&extra_index=table@to:xf_xfj_cd_shij_yjnr_xfrc;value@to:xfrc&main_name=件次,人次,&day=[2019-01-01,2020-12-10]&full=true&yjnr=卫生计生",
    # b.问题分类
    "信访态势统计分析_内容分类_问题分类_二级内容分类信访量?":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shej_ejnr_xfjc&name=shej_02&value=xfjc&stack=shej_02&transformer=@groupby&year=2020&order=-xfjc&extra_index=transformer@to:@tb;order@drop;month@to:now&main_name=件次,同比&full=true",
    "信访态势统计分析_内容分类_问题分类_各级内容分类占比分布?":"",
    # 3.信访形式
    # a.来信
    "信访态势统计分析_信访形式_来信_区域来信信访量排行(来信)":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cd_shij_xfxs_xfjc&name=shij_02&value=xfjc&xfxs=来信&day=[2019-01-01,2020-12-10]&order=-xfjc&full=true",
    "信访态势统计分析_信访形式_来信_来信信访量信访初件重件联名件分布_全省来信信访量":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cd_shej_xfxs_xfjc&value=xfjc&xfxs=来信&day=[2019-01-01,2020-12-10]&full=true",
    "信访态势统计分析_信访形式_来信_来信信访量信访初件重件联名件分布_初件重件联名件数量和比例":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cd_xfxs_cfxfbz_xfjc&name=xfxs&value=xfjc&stack=xfxs&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_xfxs_cfxfbz_xfrc;value@to:xfrc,transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&day=[2019-01-01,2020-12-10]&full=true",
    "信访态势统计分析_信访形式_来信_来信信访量信访初件重件联名件分布_联名件非联名件圆环图":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cd_xfxs_lmj_xfjc&name=lmj&value=xfjc&stack=lmj&full=true&transformer=@groupby&extra_index=transformer@to:@zb&main_name=件次,占比&full=true&day=[2019-01-01,2020-12-10]&xfxs=来信",
    "信访态势统计分析_信访形式_来信_来信信访量信访初件重件联名件分布_初件重件圆环图":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cd_xfxs_cfxfbz_xfjc&name=cfxfbz&value=xfjc&stack=cfxfbz&full=true&transformer=@groupby&extra_index=transformer@to:@zb&main_name=件次,占比&full=true&day=[2019-01-01,2020-12-10]&xfxs=来信",
    "信访态势统计分析_信访形式_来信_来信信访量信访初件重件联名件走势_年度?":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cd_xfxs_cfxfbz_xfjc&name=xfxs&value=xfjc&stack=xfxs&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_xfxs_cfxfbz_xfrc;value@to:xfrc,transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&day=[2019-01-01,2020-12-10]&full=true",
    "信访态势统计分析_信访形式_来信_来信信访量信访初件重件联名件走势_月度?":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cd_xfxs_cfxfbz_xfjc&name=xfxs&value=xfjc&stack=xfxs&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_xfxs_cfxfbz_xfrc;value@to:xfrc,transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&day=[2019-01-01,2020-12-10]&full=true",
    # b.来访?
    # c.网信?
    # 4.信访目的
    "信访态势统计分析_信访目的_信访目的分布":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shej_xfmd_xfjc&name=xfmd&value=xfjc&&transformer=@groupby&year=2020&full=true",
    "信访态势统计分析_信访目的_信访目的分布趋势_年度":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shej_xfmd_xfjc&name=year&value=xfjc&stack=year&year=[now-5,now]&xfmd=求决&extra_index=xfmd@to:意见建议,xfmd@to:揭发控告,xfmd@to:申诉,xfmd@to:其他&main_name=求决,意见建议,揭发控告,申诉,其他&full=true",
    "信访态势统计分析_信访目的_信访目的分布趋势_月度":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cm_shej_xfmd_xfjc&name=month&value=xfjc&stack=month&xfmd=求决&extra_index=xfmd@to:意见建议,xfmd@to:揭发控告,xfmd@to:申诉,xfmd@to:其他&main_name=求决,意见建议,揭发控告,申诉,其他&full=true",
    "信访态势统计分析_信访目的_信访量四级登记机构-信访目的分布_全国":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shej_djjg_xfmd_xfjc&name=xfmd&value=xfjc&&transformer=@groupby&year=2020&djjg=全国&full=true",
    "信访态势统计分析_信访目的_信访量四级登记机构-信访目的分布_省级":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shej_djjg_xfmd_xfjc&name=xfmd&value=xfjc&&transformer=@groupby&year=2020&djjg=省级&full=true",
    "信访态势统计分析_信访目的_信访量四级登记机构-信访目的分布_市级":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shej_djjg_xfmd_xfjc&name=xfmd&value=xfjc&&transformer=@groupby&year=2020&djjg=市级&full=true",
    "信访态势统计分析_信访目的_信访量四级登记机构-信访目的分布_县级":"http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shej_djjg_xfmd_xfjc&name=xfmd&value=xfjc&&transformer=@groupby&year=2020&djjg=县级&full=true",
    # 2.5、信访态势统计分析_初件重件
    "信访态势统计分析_初件重件_信访量初件重件分布_总数": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_cfxfbz_xfjc&value=xfjc&year=2020",
    "信访态势统计分析_初件重件_信访量初件重件分布_件次/人次占比": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_cfxfbz_xfjc&name=cfxfbz&stack=cfxfbz&value=xfjc&transformer=@groupby&extra_index=transformer@to:@zb,value@to:xfrc;table@to:xf_xfj_cy_cfxfbz_xfrc;transformer@to:@groupby,transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&full=true&year=2020",
    "信访工作形势研判_初件重件_初件_信访量地区分布": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shij_cfxfbz_xfjc&name=shij_02&value=xfjc&transformer=@groupby&full=true&year=2020&cfxfbz=初件",
    "信访工作形势研判_初件重件_初件_ 信访量信访次数分布": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shij_xfcsrange_cfxfbz_xfjc&name=xfcsrange&value=xfjc&transformer=@groupby&full=true&year=2020&cfxfbz=初件",
    "信访工作形势研判_初件重件_初件_地区信访人群年龄分布": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shij_nlrange_cfxfbz_xfrc&name=nlrange&value=xfrc&transformer=@groupby&full=true&year=2020&cfxfbz=初件&shij_02=昆明市",
    "信访工作形势研判_初件重件_初件_地区信访量信访目的分布": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shij_xfmd_cfxfbz_xfjc&name=xfmd&value=xfjc&transformer=@groupby&full=true&year=2020&cfxfbz=初件&shij_02=昆明市",
    "信访工作形势研判_初件重件_初件_地区信访量投诉问题分布": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shij_yjnr_cfxfbz_xfjc&name=yjnr&value=xfjc&transformer=@groupby&full=true&year=2020&cfxfbz=初件&shij_02=昆明市",
    "信访工作形势研判_初件重件_初件_地区信访量信访次数分布": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shij_xfcsrange_cfxfbz_xfjc&name=xfcsrange&value=xfjc&transformer=@groupby&full=true&year=2020&cfxfbz=初件&shij_02=昆明市",
    "信访工作形势研判_初件重件_重件_信访量地区分布": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shij_cfxfbz_xfjc&name=shij_02&value=xfjc&transformer=@groupby&full=true&year=2020&cfxfbz=重件",
    "信访工作形势研判_初件重件_重件_ 信访量信访次数分布": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shij_xfcsrange_cfxfbz_xfjc&name=xfcsrange&value=xfjc&transformer=@groupby&full=true&year=2020&cfxfbz=重件",
    "信访工作形势研判_初件重件_重件_地区信访人群年龄分布": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shij_nlrange_cfxfbz_xfrc&name=nlrange&value=xfrc&transformer=@groupby&full=true&year=2020&cfxfbz=重件&shij_02=昆明市",
    "信访工作形势研判_初件重件_重件_地区信访量信访目的分布": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shij_xfmd_cfxfbz_xfjc&name=xfmd&value=xfjc&transformer=@groupby&full=true&year=2020&cfxfbz=重件&shij_02=昆明市",
    "信访工作形势研判_初件重件_重件_地区信访量投诉问题分布": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shij_yjnr_cfxfbz_xfjc&name=yjnr&value=xfjc&transformer=@groupby&full=true&year=2020&cfxfbz=重件&shij_02=昆明市",
    "信访工作形势研判_初件重件_重件_地区信访量信访次数分布": "http://www.fuyaofy.com:3391/api/xf/?table=xf_xfj_cy_shij_xfcsrange_cfxfbz_xfjc&name=xfcsrange&value=xfjc&transformer=@groupby&full=true&year=2020&cfxfbz=重件&shij_02=昆明市"

    }
