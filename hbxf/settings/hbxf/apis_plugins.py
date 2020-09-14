APIS_PLUGIN = [
    {
        # 根据正则匹配url，问号前的\是转义
        "url": "/api/xf/\?gd_id=hb_xfrfx_jbxx&zjhm=.*",   # 河北_信访人分析_基本信息
        # 最终要的字段，以及匹配取值
        # 当只有一个sql的时候，返回的数据和map不做校验
        # 当有两个sql的时候，会在融合后的数据表中将map包含的字段抽取出来再返回
        "map": {"xbmc": "性别", "sjh": "电话", "hkszd": "户口所在地", "zzmcxq": "居住地", "age": "年龄", "zjhm": "证件号码","xfjc":"信访件次","day":"最新信访日期"},
        # 分析库（输入库）的SQL
        "fx_db_url": """
        SELECT zjhm, xbmc, sjh, hkszd, zzmcxq, age FROM xf_xfrxx 
        WHERE zjhm = '{zjhm}' AND xbmc IS NOT NULL AND age IS NOT NULL 
        ORDER BY create_time DESC LIMIT 1
        """,
        # 指标库（输出库）的SQL
        "zb_db_url": """
        SELECT xf_xfr_cy_zjhm_xm_xfjc.xfjc, xf_xfr_cy_zjhm_xm_xfjc.zjhm,xf_xfr_cd_zjhm_xfrq_xfsx_xfjc.day FROM xf_xfr_cy_zjhm_xm_xfjc 
        join xf_xfr_cd_zjhm_xfrq_xfsx_xfjc on xf_xfr_cy_zjhm_xm_xfjc.zjhm=xf_xfr_cd_zjhm_xfrq_xfsx_xfjc.zjhm 
        WHERE xf_xfr_cy_zjhm_xm_xfjc.zjhm ='{zjhm}' 
        order by xf_xfr_cd_zjhm_xfrq_xfsx_xfjc.day desc limit 1;
        """,
        # 用哪个字段进行连接
        # 只有一个sql的时候，on字段没有用
        # 当有两个sql的时候，on字段为空，或者没有，自动寻找两个数据表中一样的字段进行匹配
        # 当有两个sql的时候，on字段不为空，以on字段为准进行匹配，其他相同的字段，用_x 和_y进行标识
        # "on": "zjhm"
        # 时间格式
        "time_format": "%Y年%m月%d日"
    },


]
