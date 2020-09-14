APIS_PLUGIN = [
    {
        # 根据正则匹配url，问号前的\是转义
        "url": "/api/xf/\?gd_id=hb_xfrfx_jbxx&zjhm=.*",   # 河北_信访人分析_基本信息
        # 最终要的字段，以及匹配取值
        "map": {"xbmc": "性别", "sjh": "电话", "hkszd": "户口所在地", "zzmcxq": "居住地", "age": "年龄", "zjhm": "证件号码"},
        # 分析库（输入库）的URL
        # "db": "FX_DB",  # FX_DB 或者 ZB_DB
        "fx_db_url": """
        SELECT zjhm, xbmc, sjh, hkszd, zzmcxq FROM xf_xfrxx 
        WHERE zjhm = '{zjhm}' AND xbmc IS NOT NULL AND age IS NOT NULL 
        ORDER BY create_time DESC  LIMIT 1
        """,
        # 指标库（输出库）的URL
        "zb_db_url": """
        SELECT zjhm, xfcs, last_time FROM xf_xfrxx 
        WHERE zjhm = '{zjhm}' AND xbmc IS NOT NULL AND age IS NOT NULL 
        ORDER BY create_time DESC  LIMIT 1
        """,
        # 用哪个字段进行连接
        # "on": "zjhm"
    },


]
