APIS_PLUGIN = [
    {
        "url": "/api/xf/\?gd_id=hb_xfrfx_jbxx&zjhm=.*",   # 河北_信访人分析_基本信息
        "sql": """
        SELECT xbmc, sjh, hkszd, zzmcxq, age FROM xf_xfrxx 
        WHERE zjhm = '{zjhm}' AND xbmc IS NOT NULL AND age IS NOT NULL 
        ORDER BY create_time DESC  LIMIT 1
        """,
        "db": "FX_DB",  # FX_DB 或者 ZB_DB
        "map": {"xbmc": "性别", "sjh": "电话", "hkszd": "户口所在地", "zzmcxq": "居住地", "age": "年龄"}},
]
