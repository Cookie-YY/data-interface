APIS_PLUGIN = [
    {
        # 根据正则匹配url，问号前的\是转义
        "url": "/api/xf/\?gd_id=hb_xfrfx_jbxx",   # 河北_信访人分析_基本信息
        # 最终要的字段，以及匹配取值
        "map": {"xbmc": "性别", "sjh": "电话", "hkszd": "户口所在地", "zzmcxq": "居住地", "age": "年龄", "zjhm": "证件号码","xfjc":"信访件次","day":"最新信访日期"},
        # 分析库（输入库）的URL
        # "db": "FX_DB",  # FX_DB 或者 ZB_DB
        "fx_db_url": """
        SELECT xm, xbmc, age, sjh,zjhm, hkszd, zzmcxq FROM xf_xfrxx WHERE zjhm = '{zjhm}' AND xbmc IS NOT NULL AND age IS NOT NULL ORDER BY create_time DESC LIMIT 1;
        """,
        # 指标库（输出库）的URL
        "zb_db_url": """
        SELECT xf_xfr_cy_zjhm_xm_xfjc.xfjc, xf_xfr_cy_zjhm_xm_xfjc.zjhm,xf_xfr_cd_zjhm_xfrq_xfsx_xfjc.day FROM xf_xfr_cy_zjhm_xm_xfjc join xf_xfr_cd_zjhm_xfrq_xfsx_xfjc on xf_xfr_cy_zjhm_xm_xfjc.zjhm=xf_xfr_cd_zjhm_xfrq_xfsx_xfjc.zjhm WHERE xf_xfr_cy_zjhm_xm_xfjc.zjhm ='{zjhm}' order by xf_xfr_cd_zjhm_xfrq_xfsx_xfjc.day desc limit 1;
        """,
        # 用哪个字段进行连接
        "on": "zjhm"
    },

{
        # 根据正则匹配url，问号前的\是转义
        "url": "/api/xf/\?gd_id=hb_xfrfx_xfgjfxnr",   # 河北_信访人分析_信访轨迹分析内容
        # 最终要的字段，以及匹配取值
        "map": {"xfjbh": "信访编号", "xfrq": "信访日期", "nrflmc": "内容分类", "xfxsmc": "信访形式", "xfmdmc": "信访目的", "wtsdmc": "问题属地","djjgmc":"登记单位","xfjztmc":"信访状态"},
        # 分析库（输入库）的URL
        # "db": "FX_DB",  # FX_DB 或者 ZB_DB
        "fx_db_url": """
        SELECT xfjbh,xfrq,nrflmc,xfxsmc,xfmdmc,wtsdmc,djjgmc,xfjztmc FROM xf_xfjxx WHERE xfsxid = '{xfsxid}' AND check_flag = 0;

        """,
        # 指标库（输出库）的URL
        "zb_db_url": """
         """,
        # 用哪个字段进行连接
        # "on": "zjhm"
    },

    {
        # 根据正则匹配url，问号前的\是转义
        "url": "/api/xf/\?gd_id=hb_xfrfx_xfgjfxsjz&zjhm=.*&xfrq=.*",  # 河北_信访人分析_信访轨迹分析时间轴
        # 最终要的字段，以及匹配取值
        "map": {"xfjbh": "信访编号", "xfrq": "信访日期", "nrflmc": "内容分类", "xfxsmc": "信访形式", "xfmdmc": "信访目的", "wtsdmc": "问题属地",
                "djjgmc": "登记单位", "xfjztmc": "信访状态"},
        # 分析库（输入库）的URL
        # "db": "FX_DB",  # FX_DB 或者 ZB_DB
        "fx_db_url": """
         """,
        # 指标库（输出库）的URL
        "zb_db_url": """
        select xfjc, day, xfsx from ((select xfjc, day, xfsx from xf_xfr_cd_zjhm_xfrq_xfsx_xfjc where zjhm = '130623197709052130' order by day desc limit 3) union (select xfjc, day, xfsx from xf_xfr_cd_zjhm_xfrq_xfsx_xfjc where zjhm = '{zjhm}' order by day limit 1)) as tb order by day;
         """,
        # 用哪个字段进行连接
        # "on": "zjhm"
    },

]
