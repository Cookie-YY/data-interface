APIS_PLUGIN = [
    # 用于测试大弹窗的样例
    {
        # 河北_信访人分析_基本信息
        # 测试用例：http://127.0.0.1:3389/api/xf/?gd_id=h&query_data=zjhm:130623197709052130
        "url": "/api/xf/\?gd_id=test_dtc&",
        "map": {"name": "信访形式", "value": "信访件次", "query": "查询id"},
        "fx_db_sql": """
        """,
        "zb_db_sql": """
        select xfxs as name, xfrqjc as value, xfxs as query from xf_xxx""",
        # "on": "zjhm",
        # "time_format": "%Y年%m月%d日"
        "value_map": [("query", "cfxfbz:1,yjnr_code:{map}", "")]
    },

    {
        # 广东_自定义主题分析_主题分析报告
        # 测试用例：http://127.0.0.1:3389/api/xf/?gd_id=gd_zdyztfx_ztfxbg&zt=涉众型经济案件&day=[2020-01-01,2020-01-03]
        "url": "/api/xf/\?gd_id=gd_zdyztfx_ztfxbg&",
        "mode": "custom",
        "file": "ztfxbg",
    },
    {
        # 广东_自定义主题分析_主题分析报告
        # 测试用例：http://127.0.0.1:3389/api/xf/?gd_id=gd_qjywjk_bgtc&query=来信&query_date=信访日期&day=[2019-01-01,2020-01-03]
        "url": "/api/xf/\?gd_id=gd_qjywjk_bgtc&",
        "mode": "custom",
        "file": "bgtc",
    },


    # 广东_重点人员消息
    {
        # 广东_信访人分析_基本信息
        # 测试用例：http://39.107.240.28:3389/api/xf/?gd_id=gd_xfrfx_jbxx&sfzhm=44082519581025149X
        "url": "/api/xf/\?gd_id=gd_xfrfx_jbxx&",
        "map": {"tx": "头像", "xm": "姓名", "xbmc": "性别", "age": "年龄", "sjh": "电话", "sfzhm": "身份证号","hkszd": "户籍地", "zzmcxq": "居住地","xfrq":"最新信访时间"},
        "fx_db_sql": """SELECT xf_xfrxx.tx, xf_xfrxx.xm, xf_xfrxx.xbmc, xf_xfrxx.age, xf_xfrxx.sjh, xf_xfrxx.sfzhm, xf_xfrxx.hkszd, xf_xfrxx.zzmcxq, xf_xfjxx.xfrq xfrq FROM xf_xfrxx join xf_xfjxx on xf_xfrxx.xfjbh=xf_xfjxx.xfjbh WHERE xf_xfrxx.sfzhm = '{sfzhm}'  AND xf_xfrxx.xbmc IS NOT NULL AND xf_xfrxx.age IS NOT NULL ORDER BY xf_xfrxx.create_time DESC LIMIT 1""",
        "zb_db_sql": """ """,
        "on": "sfzhm",
        # "time_format": "%Y年%m月%d日"
        "value_map": [("tx", "{FILE_URL}{value}", "default.png")]
    },
    {
        # 广东_信访人分析_信访轨迹分析内容
        # 测试用例：http://39.107.240.28:3389/api/xf/?gd_id=gd_xfrfx_xfgjfxnr&xfsxid=
        "url": "/api/xf/\?gd_id=gd_xfrfx_xfgjfxnr&",
        "map": {"xfjbh": "信访编号", "xfrq": "信访日期", "nrflmc": "内容分类", "xfxsmc": "信访形式", "xfmdmc": "信访目的", "wtsdmc": "问题属地","djjgmc":"登记单位","xfjztmc":"信访状态"},
        "fx_db_sql": """
        SELECT xfjbh,xfrq,nrflmc,xfxsmc,xfmdmc,wtsdmc,djjgmc,xfjztmc FROM xf_xfjxx WHERE xfsxid = '{xfsxid}' AND check_flag = 0

        """,
        "":"""""",
        "zb_db_sql": """
         """,
        # "on": "sfzhm"
        "time_format": "%Y年%m月%d日"
    },
    {
        # 广东_信访人分析_信访轨迹分析时间轴
        # 测试用例：http://39.107.240.28:3389/api/xf/?gd_id=gd_xfrfx_xfgjfxsjz&sfzhm=44082519581025149X
        "url": "/api/xf/\?gd_id=gd_xfrfx_xfgjfxsjz&",
        "map": {"xfrq": "信访日期", "xfsxid": "信访事项id"},
        "fx_db_sql": """select xfrq, xfsxid from((select xfrq, count(*),   group_concat(xfsxid) as xfsxid from (select xf_xfjxx.xfrq, xf_xfjxx.xfsxid from xf_xfjxx join xf_xfrxx on xf_xfjxx.xfjbh=xf_xfrxx.xfjbh where  xf_xfrxx.sfzhm='{sfzhm}') tb group by xfrq order by xfrq limit 1) union (select xfrq, count(*),   group_concat(xfsxid) as xfsxid from (select xf_xfjxx.xfrq, xf_xfjxx.xfsxid from xf_xfjxx join xf_xfrxx on xf_xfjxx.xfjbh=xf_xfrxx.xfjbh where  xf_xfrxx.sfzhm='{sfzhm}') tb group by xfrq order by xfrq desc limit 3
))  as sjz order by xfrq""",
        "zb_db_sql": """""",
        # "on": "sfzhm"
        "time_format": "%Y年%m月%d日"
    },




]