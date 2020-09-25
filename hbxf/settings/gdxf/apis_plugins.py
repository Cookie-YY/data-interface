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
]