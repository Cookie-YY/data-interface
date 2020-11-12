# apis分发-广东
"""
# 全局业务监控_信访形式分布
1）总数：
gd_id03=信访日期/ 登记日期/ 交换日期
http://39.107.240.28:3390/api/xf/?gd_id01=全局业务监控&gd_id02=信访形式分布1&gd_id02=信访日期&day=[2019-01-01,2019-01-09]
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_xfrqxfjc&value=xfrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_djrqxfjc&value=djrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_jhrqxfjc&value=jhrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]
2）列表：
gd_id03=信访日期/ 登记日期/ 交换日期
http://39.107.240.28:3390/api/xf/?gd_id01=全局业务监控&gd_id02=信访形式分布2&gd_id02=信访日期&day=[2019-01-01,2020-12-02]
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_xfrqxfjc&name=xfxs&value=xfrqxfjc&stack=xfxs&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_shej_xfxs_xfrqxfrc;value@to:xfrqxfrc,table@to:xf_xfj_cd_shej_xfxs_xfrqxfrc;value@to:xfrqxfrc;transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&day=[2019-01-01,2020-02-02]&full=true
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_djrqxfjc&name=xfxs&value=djrqxfjc&stack=xfxs&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_shej_xfxs_djrqxfrc;value@to:djrqxfrc,table@to:xf_xfj_cd_shej_xfxs_djrqxfrc;value@to:djrqxfrc;transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&day=[2019-01-01,2020-02-02]&full=true
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_jhrqxfjc&name=xfxs&value=jhrqxfjc&stack=xfxs&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_shej_xfxs_jhrqxfrc;value@to:jhrqxfrc,table@to:xf_xfj_cd_shej_xfxs_jhrqxfrc;value@to:jhrqxfrc;transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&day=[2019-01-01,2020-02-02]&full=true
3）饼图：
gd_id03=信访日期/ 登记日期/ 交换日期
http://39.107.240.28:3390/api/xf/?gd_id01=全局业务监控&gd_id02=信访形式分布3&gd_id02=信访日期&day=[2019-01-01,2020-12-02]
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_xfrqxfjc&name=xfxs&value=xfrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2020-12-02]&full=true
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_djrqxfjc&name=xfxs&value=djrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2020-12-02]&full=true
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_jhrqxfjc&name=xfxs&value=jhrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2020-12-02]&full=true
（2） 四级登记机构-信访形式分布
圆环图 1） 2）3） 4） djjg=国家/省级/市级/县级
信访日期：xf_xfj_cd_djjg_xfxs_xfrqxfjc
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_djjg_xfxs_xfrqxfjc&name=xfxs&value=xfrqxfjc&transformer=@groupby&djjg=国家&day=[2019-01-01,2020-12-02]&full=true
登记日期：xf_xfj_cd_djjg_xfxs_djrqxfjc
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_djjg_xfxs_djrqxfjc&name=xfxs&value=djrqxfjc&transformer=@groupby&djjg=国家&day=[2019-01-01,2020-12-02]&full=true
交换日期：xf_xfj_cd_djjg_xfxs_jhrqxfjc
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_djjg_xfxs_jhrqxfjc&name=xfxs&value=jhrqxfjc&transformer=@groupby&djjg=国家&day=[2019-01-01,2020-12-02]&full=true

"""

"""
# 全局业务监控_内容分类
http://39.107.240.28:3390/api/xf/?gd_id1=全局业务监控&gd_id2=内容分类1&gd_id3=信访日期&day=[2019-01-01,2019-01-09]
总数:
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_yjnr_xfrqxfjc&value=xfrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_yjnr_djrqxfjc&value=xfrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_yjnr_jhrqxfjc&value=xfrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]

列表:
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_yjnr_djrqxfjc&name=yjnr&value=djrqxfjc&stack=yjnr&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_shej_yjnr_djrqxfrc;value@to:djrqxfrc,table@to:xf_xfj_cd_shej_yjnr_djrqxfrc;value@to:djrqxfrc;transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&day=[2019-01-01,2020-02-02]&full=true
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_yjnr_jhrqxfjc&name=yjnr&value=jhrqxfjc&stack=yjnr&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_shej_yjnr_jhrqxfrc;value@to:jhrqxfrc,table@to:xf_xfj_cd_shej_yjnr_jhrqxfrc;value@to:jhrqxfrc;transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&day=[2019-01-01,2020-02-02]&full=true

饼图:
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_yjnr_xfrqxfjc&name=yjnr&value=xfrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]&full=true
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_yjnr_djrqxfjc&name=yjnr&value=djrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]&full=true
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_yjnr_jhrqxfjc&name=yjnr&value=jhrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]&full=true

"""

"""
# 全局业务监控_问题属地1
1) 总数：gd_id3=信访日期/登记日期/交换日期
http://39.107.240.28:3390/api/xf/?gd_id1=全局业务监控&gd_id2=问题属地1&gd_id3=信访日期&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_xfrqxfjc&value=xfrqxfjc&transformer=@groupby&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_djrqxfjc&value=djrqxfjc&transformer=@groupby&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_jhrqxfjc&value=jhrqxfjc&transformer=@groupby&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]
2)地图：
http://39.107.240.28:3390/api/xf/?gd_id1=全局业务监控&gd_id2=问题属地2&gd_id3=信访日期&shej_02=广东省&shij_02=invalid&xj_02=invalid&name=shij_02&day=[2019-01-01,2019-01-09]
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_xfrqxfjc&name=shij_02&value=xfrqxfjc&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_djrqxfjc&name=shij_02&value=djrqxfjc&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_jhrqxfjc&name=shij_02&value=jhrqxfjc&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true

3）折线图：
http://39.107.240.28:3390/api/xf/?gd_id1=全局业务监控&gd_id2=问题属地3&gd_id3=信访日期&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_xfrqxfjc&name=day&value=xfrqxfjc&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_djrqxfjc&name=day&value=djrqxfjc&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_jhrqxfjc&name=day&value=jhrqxfjc&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true

4）条形图：
http://39.107.240.28:3390/api/xf/?gd_id1=全局业务监控&gd_id2=问题属地4&gd_id3=信访日期&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_nlrange_xfrqxfjc&name=nlrange&value=xfrqxfjc&transformer=@groupby&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_nlrange_djrqxfjc&name=nlrange&value=djrqxfjc&transformer=@groupby&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_nlrange_jhrqxfjc&name=nlrange&value=jhrqxfjc&transformer=@groupby&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true
5)圆环图：
http://39.107.240.28:3390/api/xf/?gd_id1=全局业务监控&gd_id2=问题属地4&gd_id3=信访日期&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_xb_xfrqxfjc&name=xb&value=xfrqxfjc&transformer=@groupby&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_xb_djrqxfjc&name=xb&value=djrqxfjc&transformer=@groupby&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true
http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_xb_jhrqxfjc&name=xb&value=jhrqxfjc&transformer=@groupby&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true

"""


URL_DISPATCH_MAP = {
    # 全局业务监控_信访形式分布
    "全局业务监控_信访形式分布1_信访日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_xfrqxfjc&value=xfrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]",
    "全局业务监控_信访形式分布1_登记日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_djrqxfjc&value=djrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]",
    "全局业务监控_信访形式分布1_交换日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_jhrqxfjc&value=jhrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]",

    "全局业务监控_信访形式分布2_信访日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_xfrqxfjc&name=xfxs&value=xfrqxfjc&stack=xfxs&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_shej_xfxs_xfrqxfrc;value@to:xfrqxfrc,table@to:xf_xfj_cd_shej_xfxs_xfrqxfrc;value@to:xfrqxfrc;transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&day=[2019-01-01,2020-02-02]&full=true",
    "全局业务监控_信访形式分布2_登记日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_djrqxfjc&name=xfxs&value=djrqxfjc&stack=xfxs&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_shej_xfxs_djrqxfrc;value@to:djrqxfrc,table@to:xf_xfj_cd_shej_xfxs_djrqxfrc;value@to:djrqxfrc;transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&day=[2019-01-01,2020-02-02]&full=true",
    "全局业务监控_信访形式分布2_交换日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_jhrqxfjc&name=xfxs&value=jhrqxfjc&stack=xfxs&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_shej_xfxs_jhrqxfrc;value@to:jhrqxfrc,table@to:xf_xfj_cd_shej_xfxs_jhrqxfrc;value@to:jhrqxfrc;transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&day=[2019-01-01,2020-02-02]&full=true",

    # "全局业务监控_信访形式分布3_信访日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_xfrqxfjc&name=xfxs&value=xfrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]&full=true",
    # "全局业务监控_信访形式分布3_登记日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_djrqxfjc&name=xfxs&value=djrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]&full=true",
    # "全局业务监控_信访形式分布3_交换日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_jhrqxfjc&name=xfxs&value=jhrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]&full=true",
    "全局业务监控_信访形式分布3_信访日期": "http://39.107.240.28:3390/api/xf/?gd_id=gd_qjywjk_xfxstc&query_date=信访日期",
    "全局业务监控_信访形式分布3_登记日期": "http://39.107.240.28:3390/api/xf/?gd_id=gd_qjywjk_xfxstc&query_date=登记日期",
    "全局业务监控_信访形式分布3_交换日期": "http://39.107.240.28:3390/api/xf/?gd_id=gd_qjywjk_xfxstc&query_date=交换日期",

    "全局业务监控_四级登记机构_国家_信访日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_djjg_xfxs_xfrqxfjc&name=xfxs&value=xfrqxfjc&transformer=@groupby&djjg=国家&day=[2019-01-01,2019-01-09]&full=true",
    "全局业务监控_四级登记机构_国家_登记日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_djjg_xfxs_djrqxfjc&name=xfxs&value=djrqxfjc&transformer=@groupby&djjg=国家&day=[2019-01-01,2020-12-02]&full=true",
    "全局业务监控_四级登记机构_国家_交换日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_djjg_xfxs_jhrqxfjc&name=xfxs&value=jhrqxfjc&transformer=@groupby&djjg=国家&day=[2019-01-01,2020-12-02]&full=true",

    "全局业务监控_四级登记机构_省级_信访日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_djjg_xfxs_xfrqxfjc&name=xfxs&value=xfrqxfjc&transformer=@groupby&djjg=省级&day=[2019-01-01,2019-01-09]&full=true",
    "全局业务监控_四级登记机构_省级_登记日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_djjg_xfxs_djrqxfjc&name=xfxs&value=djrqxfjc&transformer=@groupby&djjg=省级&day=[2019-01-01,2020-12-02]&full=true",
    "全局业务监控_四级登记机构_省级_交换日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_djjg_xfxs_jhrqxfjc&name=xfxs&value=jhrqxfjc&transformer=@groupby&djjg=省级&day=[2019-01-01,2020-12-02]&full=true",

    "全局业务监控_四级登记机构_市级_信访日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_djjg_xfxs_xfrqxfjc&name=xfxs&value=xfrqxfjc&transformer=@groupby&djjg=市级&day=[2019-01-01,2019-01-09]&full=true",
    "全局业务监控_四级登记机构_市级_登记日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_djjg_xfxs_djrqxfjc&name=xfxs&value=djrqxfjc&transformer=@groupby&djjg=市级&day=[2019-01-01,2020-12-02]&full=true",
    "全局业务监控_四级登记机构_市级_交换日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_djjg_xfxs_jhrqxfjc&name=xfxs&value=jhrqxfjc&transformer=@groupby&djjg=市级&day=[2019-01-01,2020-12-02]&full=true",

    "全局业务监控_四级登记机构_县级_信访日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_djjg_xfxs_xfrqxfjc&name=xfxs&value=xfrqxfjc&transformer=@groupby&djjg=市级&day=[2019-01-01,2019-01-09]&full=true",
    "全局业务监控_四级登记机构_县级_登记日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_djjg_xfxs_djrqxfjc&name=xfxs&value=djrqxfjc&transformer=@groupby&djjg=市级&day=[2019-01-01,2020-12-02]&full=true",
    "全局业务监控_四级登记机构_县级_交换日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_djjg_xfxs_jhrqxfjc&name=xfxs&value=jhrqxfjc&transformer=@groupby&djjg=市级&day=[2019-01-01,2020-12-02]&full=true",

    # 全局业务监控_内容分类
    "全局业务监控_内容分类1_信访日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_yjnr_xfrqxfjc&value=xfrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]",
    "全局业务监控_内容分类1_登记日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_yjnr_djrqxfjc&value=djrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]",
    "全局业务监控_内容分类1_交换日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_yjnr_jhrqxfjc&value=jhrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]",

    "全局业务监控_内容分类2_信访日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_yjnr_xfrqxfjc&name=yjnr&value=xfrqxfjc&stack=yjnr&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_shej_yjnr_xfrqxfrc;value@to:xfrqxfrc,table@to:xf_xfj_cd_shej_yjnr_xfrqxfrc;value@to:xfrqxfrc;transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&day=[2019-01-01,2020-02-02]&full=true",
    "全局业务监控_内容分类2_登记日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_yjnr_djrqxfjc&name=yjnr&value=djrqxfjc&stack=yjnr&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_shej_yjnr_djrqxfrc;value@to:djrqxfrc,table@to:xf_xfj_cd_shej_yjnr_djrqxfrc;value@to:djrqxfrc;transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&day=[2019-01-01,2020-02-02]&full=true",
    "全局业务监控_内容分类2_交换日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_yjnr_jhrqxfjc&name=yjnr&value=jhrqxfjc&stack=yjnr&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_shej_yjnr_jhrqxfrc;value@to:jhrqxfrc,table@to:xf_xfj_cd_shej_yjnr_jhrqxfrc;value@to:jhrqxfrc;transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&day=[2019-01-01,2020-02-02]&full=true",

    # "全局业务监控_内容分类3_信访日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_yjnr_xfrqxfjc&name=yjnr&value=xfrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]&full=true",
    # "全局业务监控_内容分类3_登记日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_yjnr_djrqxfjc&name=yjnr&value=djrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]&full=true",
    # "全局业务监控_内容分类3_交换日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_yjnr_jhrqxfjc&name=yjnr&value=jhrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]&full=true",
    "全局业务监控_内容分类3_信访日期": "http://39.107.240.28:3390/api/xf/?gd_id=gd_qjywjk_yjnrtc&query_date=信访日期",
    "全局业务监控_内容分类3_登记日期": "http://39.107.240.28:3390/api/xf/?gd_id=gd_qjywjk_yjnrtc&query_date=登记日期",
    "全局业务监控_内容分类3_交换日期": "http://39.107.240.28:3390/api/xf/?gd_id=gd_qjywjk_yjnrtc&query_date=交换日期",

    # 全局业务监控_问题属地1 总数
    "全局业务监控_问题属地1_信访日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_xfrqxfjc&value=xfrqxfjc&transformer=@groupby&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]",
    "全局业务监控_问题属地1_登记日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_djrqxfjc&value=djrqxfjc&transformer=@groupby&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]",
    "全局业务监控_问题属地1_交换日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_jhrqxfjc&value=jhrqxfjc&transformer=@groupby&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]",

    # 全局业务监控_问题属地2 地图
    # "全局业务监控_问题属地2_信访日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_xfrqxfjc&name=shij_02&value=xfrqxfjc&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true",
    # "全局业务监控_问题属地2_登记日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_djrqxfjc&name=shij_02&value=djrqxfjc&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true",
    # "全局业务监控_问题属地2_交换日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_jhrqxfjc&name=shij_02&value=jhrqxfjc&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true",
    "全局业务监控_问题属地2_信访日期": "http://39.107.240.28:3390/api/xf/?gd_id=gd_qjywjk_dttc&query_date=信访日期&name=shij_02",
    "全局业务监控_问题属地2_登记日期": "http://39.107.240.28:3390/api/xf/?gd_id=gd_qjywjk_dttc&query_date=登记日期&name=shij_02",
    "全局业务监控_问题属地2_交换日期": "http://39.107.240.28:3390/api/xf/?gd_id=gd_qjywjk_dttc&query_date=交换日期&name=shij_02",

    # 全局业务监控_问题属地3 折线
    "全局业务监控_问题属地3_信访日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_xfrqxfjc&name=day&value=xfrqxfjc&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true",
    "全局业务监控_问题属地3_登记日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_djrqxfjc&name=day&value=djrqxfjc&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true",
    "全局业务监控_问题属地3_交换日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_jhrqxfjc&name=day&value=jhrqxfjc&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true",

    "全局业务监控_问题属地4_信访日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_nlrange_xfrqxfrc&name=nlrange&value=xfrqxfrc&transformer=@groupby&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true",
    "全局业务监控_问题属地4_登记日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_nlrange_djrqxfrc&name=nlrange&value=djrqxfrc&transformer=@groupby&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true",
    "全局业务监控_问题属地4_交换日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_nlrange_jhrqxfrc&name=nlrange&value=jhrqxfrc&transformer=@groupby&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true",

    "全局业务监控_问题属地5_信访日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_xb_xfrqxfrc&name=xb&value=xfrqxfrc&transformer=@groupby&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true",
    "全局业务监控_问题属地5_登记日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_xb_djrqxfrc&name=xb&value=djrqxfrc&transformer=@groupby&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true",
    "全局业务监控_问题属地5_交换日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_xj_xb_jhrqxfrc&name=xb&value=jhrqxfrc&transformer=@groupby&shej_02=广东省&shij_02=invalid&xj_02=invalid&day=[2019-01-01,2019-01-09]&full=true",

    ####################################### 领导驾驶舱 #######################################
    # 责任单位画像-趋势特征【信访事项待完成】
    "责任单位画像_趋势特征_趋势_信访量": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cd_xj_yjnr_sljc&name=shij_02&value=sljc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]&full=true",
    "责任单位画像_趋势特征_趋势_信访事项": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cd_xj_yjnr_sljc&name=shij_02&value=sljc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]&full=true",

    # 责任单位画像-办理质量【缺full】
    "责任单位画像_办理质量_办理量": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_bljc&order=-bljc&limit=10&name=zrdw&value=bljc&transformer=@groupby&Cqh=广东省&day=[2020-01-01,2020-10-09]",
    "责任单位画像_办理质量_满意率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_myjc&order=-mylv&limit=10&name=zrdw&transformer=@mylv&day=[2020-01-01,2020-10-09]&full=true",
    # 待实现
    "责任单位画像_办理质量_答复率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_myjc&order=-mylv&limit=10&name=zrdw&transformer=@mylv&day=[2020-01-01,2020-10-09]&full=true",
    # 待实现
    "责任单位画像_办理质量_受理率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_myjc&order=-mylv&limit=10&name=zrdw&transformer=@mylv&day=[2020-01-01,2020-10-09]&full=true",

    # 信访事项预警
    "信访事项预警_集体访_信访量": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cd_xj_jtf_xfjc&order=-xfjc&name=shij_02&value=xfjc&jtf=集体访&transformer=@groupby&full=true&day=[2020-01-01,2020-10-09]",
    "信访事项预警_集体访_满意率-信访部门": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cd_xj_jtf_xfbmmyjc&order=-mylv&name=shij_02&jtf=集体访&transformer=@mylv&full=true&day=[2020-01-01,2020-10-09]",
    "信访事项预警_集体访_满意率-责任单位": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cd_xj_jtf_zrdwmyjc&order=-mylv&name=shij_02&jtf=集体访&transformer=@mylv&full=true&day=[2020-01-01,2020-10-09]",

    "信访事项预警_进京访_信访量": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cd_xj_jjf_xfjc&order=-xfjc&name=shij_02&value=xfjc&jjf=进京访&transformer=@groupby&full=true&day=[2020-01-01,2020-10-09]",
    "信访事项预警_进京访_满意率-信访部门": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cd_xj_jjf_xfbmmyjc&order=-mylv&name=shij_02&jjf=进京访&transformer=@mylv&full=true&day=[2020-01-01,2020-10-09]",
    "信访事项预警_进京访_满意率-责任单位": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cd_xj_jjf_zrdwmyjc&order=-mylv&name=shij_02&jjf=进京访&transformer=@mylv&full=true&day=[2020-01-01,2020-10-09]",

    "信访事项预警_赴省访_信访量": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cd_xj_fsf_xfjc&order=-xfjc&name=shij_02&value=xfjc&fsf=赴省访&transformer=@groupby&full=true&day=[2020-01-01,2020-10-09]",
    "信访事项预警_赴省访_满意率-信访部门": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cd_xj_fsf_xfbmmyjc&order=-mylv&name=shij_02&fsf=赴省访&transformer=@mylv&full=true&day=[2020-01-01,2020-10-09]",
    "信访事项预警_赴省访_满意率-责任单位": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cd_xj_fsf_zrdwmyjc&order=-mylv&name=shij_02&fsf=赴省访&transformer=@mylv&full=true&day=[2020-01-01,2020-10-09]",


    # 信访绩效考核
    # 1. 区划分布
    # 【待完成】差一个转交办效率
    "信访绩效考核_区划分布_全省绩效考核_(全部|drop)": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_shej_xfxs_dljc&xfxs=drop&value=dljc&transformer=@groupby&full=true&day=[2020-01-01,2020-10-09]&extra_index=table@to:xf_xfjg_cd_shej_xfxs_dbjc;value@to:dbjc,table@to:xf_xfjg_cd_xj_xfxs_cqwbjjc;value@to:cqwbjjc&main_name=待领,待办,超期未答复",
    "信访绩效考核_区划分布_全省绩效考核_(?!全部)(?!drop)": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_shej_xfxs_dljc&xfxs={gd_id4}&value=dljc&transformer=@groupby&full=true&day=[2020-01-01,2020-10-09]&extra_index=table@to:xf_xfjg_cd_shej_xfxs_dbjc;value@to:dbjc,table@to:xf_xfjg_cd_xj_xfxs_cqwbjjc;value@to:cqwbjjc&main_name=待领,待办,超期未答复",
    # 【待完成】按期答复率+网信占比【暂时只有一个】
    "信访绩效考核_区划分布_总体_(全部|drop)": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc&xfxs=drop&transformer=@mylv&Cqh=广东省&full=true&day=[2020-01-01,2020-10-09]&extra_index=transformer@to:@mylv&main_name=按期答复率,网信占比",
    "信访绩效考核_区划分布_总体_(?!全部)(?!drop)": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc&xfxs={gd_id4}&transformer=@mylv&Cqh=广东省&full=true&full=true&day=[2020-01-01,2020-10-09]&main_name=按期答复率",
    # 【待完成】参评率+满意率+及时受理率【区划下钻未完成】  transformer=@jssllv&xfxs=drop&jsslv_type=sql_qh_all_xfbm_
    "信访绩效考核_区划分布_信访部门_(全部|drop)": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_ypjjc&xfxs=drop&transformer=@cplv&Cqh=广东省&full=true&extra_index=table@to:xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc;transformer@to:@mylv,table@to:xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc;transformer@to:@mylv&main_name=参评率,满意率,及时受理率",
    "信访绩效考核_区划分布_信访部门_(?!全部)(?!drop)": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_ypjjc&xfxs={gd_id4}&transformer=@cplv&Cqh=广东省&full=true&extra_index=table@to:xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc;transformer@to:@mylv,table@to:xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc;transformer@to:@mylv&main_name=参评率,满意率,及时受理率",
    # 【待完成】参评率+满意率+及时受理率【区划下钻未完成】
    "信访绩效考核_区划分布_责任单位_(全部|drop)": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_xfxs_ypjjc&xfxs=drop&transformer=@cplv&Cqh=广东省&extra_index=table@to:xf_xfjg_cd_qh_zrdw_xfxs_myjc;transformer@to:@mylv,table@to:xf_xfjg_cd_qh_zrdw_xfxs_myjc;transformer@to:@mylv&main_name=参评率,满意率,及时受理率",
    "信访绩效考核_区划分布_责任单位_(?!全部)(?!drop)": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_xfxs_ypjjc&xfxs=drop&transformer=@cplv&Cqh=广东省&extra_index=table@to:xf_xfjg_cd_qh_zrdw_xfxs_myjc;transformer@to:@mylv,table@to:xf_xfjg_cd_qh_zrdw_xfxs_myjc;transformer@to:@mylv&main_name=参评率,满意率,及时受理率&day=[2020-01-01,2020-10-01]",

    # 地图
    # 【整体基本都要待开发，因为qh只有一个字段，需要单独维护区划映射】
    # 【full怎么加】
    "信访绩效考核_区划分布_区划_(网信|来信|来访|drop)_总体-按期答复率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_ypjjc&xfxs={gd_id4}transformer=@cplv&name=qh&full=true&bmjb=市级",
    "信访绩效考核_区划分布_区划_(网信|来信|来访|drop)_总体-网信占比": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_ypjjc&xfxs={gd_id4}&transformer=@cplv&name=qh&full=true&bmjb=市级",
    # 已完成【full怎么加】
    "信访绩效考核_区划分布_区划_(网信|来信|来访|drop)_信访部门-参评率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_ypjjc&xfxs={gd_id4}&transformer=@cplv&name=qh&full=true&bmjb=市级",
    # 已完成【full怎么加】
    "信访绩效考核_区划分布_区划_(网信|来信|来访|drop)_信访部门-满意率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc&xfxs={gd_id4}&transformer=@mylv&name=qh&full=true&bmjb=市级",
    "信访绩效考核_区划分布_区划_(网信|来信|来访|drop)_信访部门-及时受理率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_ypjjc&xfxs={gd_id4}&transformer=@cplv&name=qh&full=true&bmjb=市级",
    "信访绩效考核_区划分布_区划_(网信|来信|来访|drop)_责任单位-参评率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_ypjjc&xfxs={gd_id4}&transformer=@cplv&name=qh&full=true&bmjb=市级",
    "信访绩效考核_区划分布_区划_(网信|来信|来访|drop)_责任单位-满意率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_ypjjc&xfxs={gd_id4}&transformer=@cplv&name=qh&full=true&bmjb=市级",
    "信访绩效考核_区划分布_区划_(网信|来信|来访|drop)_责任单位-及时受理率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_ypjjc&xfxs={gd_id4}&transformer=@cplv&name=qh&full=true&bmjb=市级",


    # 2. 信访部门 [xfxs=drop/来信/来访/网信  xfbm=广东省信访局/invalid[默认广东省信访局]
    # 【转交办效率待实现】待领 待办 超期未答复 转交办效率
    "信访绩效考核_信访部门_工作过程监控": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_dljc&value=dljc&transformer=@groupby&full=true&day=[2020-01-01,2020-10-09]&extra_index=table@to:xf_xfjg_cd_bmjb_qh_xfbm_xfxs_dbjc;value@to:dbjc,table@to:xf_xfjg_cd_bmjb_qh_xfbm_xfxs_cqwbjjc;value@to:cqwbjjc&main_name=待领,待办,超期未答复",

    "信访绩效考核_信访部门_参评饼图": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_ypjjc&full=true&value=ypjjc&extra_index=table@to:xf_xfjg_cd_bmjb_qh_xfbm_xfxs_cqwpjjc;value@to:cqwpjjc&main_name=已评价,超期未评价&day=[2020-01-01,2020-10-09]",
    "信访绩效考核_信访部门_参评率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_ypjjc&full=true&transformer=@cplv&day=[2020-01-01,2020-10-09]",

    "信访绩效考核_信访部门_满意饼图": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc&full=true&value=myjc&extra_index=table@to:xf_xfjg_cd_bmjb_qh_xfbm_xfxs_bmyjc;value@to:bmyjc,table@to:xf_xfjg_cd_bmjb_qh_xfbm_xfxs_jbmyjc;value@to:jbmyjc&main_name=满意,不满意,基本满意&day=[2020-01-01,2020-10-09]",
    "信访绩效考核_信访部门_满意率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc&full=true&transformer=@mylv&day=[2020-01-01,2020-10-09]",

    # 待实现
    "信访绩效考核_信访部门_及时受理饼图": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc&full=true&value=myjc&extra_index=table@to:xf_xfjg_cd_bmjb_qh_xfbm_xfxs_bmyjc;value@to:bmyjc,table@to:xf_xfjg_cd_bmjb_qh_xfbm_xfxs_jbmyjc;value@to:jbmyjc&main_name=及时受理,超期未受理,超期受理&day=[2020-01-01,2020-10-09]",
    # 待实现
    "信访绩效考核_信访部门_及时受理率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc&full=true&transformer=@mylv&day=[2020-01-01,2020-10-09]",

    "信访绩效考核_信访部门_网信占比饼图": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_xfjc&name=xfxs&value=xfjc&transformer=@groupby&full=true&day=[2020-01-01,2020-10-09]",
    # 待实现
    "信访绩效考核_信访部门_网信占比": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc&full=true&transformer=@mylv&day=[2020-01-01,2020-10-09]",


    "信访绩效考核_信访部门_排名_参评率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_ypjjc&full=true&transformer=@cplv&name=xfbm&order=-cplv&limit=10&day=[2020-01-01,2020-10-09]",
    "信访绩效考核_信访部门_排名_满意率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc&full=true&transformer=@mylv&name=xfbm&order=-mylv&limit=10&day=[2020-01-01,2020-10-09]",
    # 待实现
    "信访绩效考核_信访部门_排名_及时受理率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc&full=true&transformer=@mylv&name=xfbm&order=-mylv&limit=10&day=[2020-01-01,2020-10-09]",
    # 待实现
    "信访绩效考核_信访部门_排名_网信占比": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfxs_myjc&full=true&transformer=@mylv&name=xfbm&order=-mylv&limit=10&day=[2020-01-01,2020-10-09]",

    # 3. 责任单位
    # 【转交办效率待实现】待领 待办 超期未答复 转交办效率
    "信访绩效考核_责任单位_工作过程监控": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_xfxs_dljc&value=dljc&transformer=@groupby&full=true&day=[2020-01-01,2020-10-09]&extra_index=table@to:xf_xfjg_cd_qh_zrdw_xfxs_dbjc;value@to:dbjc,table@to:xf_xfjg_cd_qh_zrdw_xfxs_cqwbjjc;value@to:cqwbjjc&main_name=待领,待办,超期未答复",

    "信访绩效考核_责任单位_参评饼图": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_xfxs_ypjjc&full=true&value=ypjjc&extra_index=table@to:xf_xfjg_cd_qh_zrdw_xfxs_cqwpjjc;value@to:cqwpjjc&main_name=已评价,超期未评价&day=[2020-01-01,2020-10-09]",
    "信访绩效考核_责任单位_参评率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_xfxs_ypjjc&full=true&transformer=@cplv&day=[2020-01-01,2020-10-09]",

    "信访绩效考核_责任单位_满意饼图": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_xfxs_myjc&full=true&value=myjc&extra_index=table@to:xf_xfjg_cd_qh_zrdw_xfxs_bmyjc;value@to:bmyjc,table@to:xf_xfjg_cd_qh_zrdw_xfxs_jbmyjc;value@to:jbmyjc&main_name=满意,不满意,基本满意&day=[2020-01-01,2020-10-09]",
    "信访绩效考核_责任单位_满意率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_xfxs_myjc&full=true&transformer=@mylv&day=[2020-01-01,2020-10-09]",

    # 待实现
    "信访绩效考核_责任单位_及时受理饼图": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_xfxs_myjc&full=true&value=myjc&extra_index=table@to:xf_xfjg_cd_qh_zrdw_xfxs_bmyjc;value@to:bmyjc,table@to:xf_xfjg_cd_qh_zrdw_xfxs_jbmyjc;value@to:jbmyjc&main_name=及时受理,超期未受理,超期受理&day=[2020-01-01,2020-10-09]",
    "信访绩效考核_责任单位_及时受理率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_xfxs_myjc&full=true&transformer=@mylv&day=[2020-01-01,2020-10-09]",

    "信访绩效考核_责任单位_网信占比饼图": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_xfxs_xfjc&name=xfxs&value=xfjc&transformer=@groupby&full=true&day=[2020-01-01,2020-10-09]",
    "信访绩效考核_责任单位_网信占比": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_xfxs_myjc&full=true&transformer=@mylv&day=[2020-01-01,2020-10-09]",

    "信访绩效考核_责任单位_排名_参评率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_xfxs_ypjjc&full=true&transformer=@cplv&name=zrdw&order=-cplv&limit=10&day=[2020-01-01,2020-10-09]",
    "信访绩效考核_责任单位_排名_满意率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_xfxs_myjc&full=true&transformer=@mylv&name=zrdw&order=-mylv&limit=10&day=[2020-01-01,2020-10-09]",
    # 待实现
    "信访绩效考核_责任单位_排名_及时受理率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_xfxs_myjc&full=true&transformer=@mylv&name=zrdw&order=-mylv&limit=10&day=[2020-01-01,2020-10-09]",
    # 待实现
    "信访绩效考核_责任单位_排名_网信占比": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_xfxs_myjc&full=true&transformer=@mylv&name=zrdw&order=-mylv&limit=10&day=[2020-01-01,2020-10-09]",

    ####################################### 辅助决策 #######################################
    # 全局业务监控-满意度-信访部门
    "全局业务监控_信访部门_参评情况": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_ypjjc&value=ypjjc&extra_index=table@to:xf_xfjg_cd_bmjb_qh_xfbm_cqwpjjc;value@to:cqwpjjc&main_name=已评价,超期未评价&day=[2020-01-01,2020-10-09]",
    # 默认有个xfbm的值
    "全局业务监控_信访部门_参评率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_ypjjc&full=true&transformer=@cplv&day=[2020-01-01,2020-10-09]",
    "全局业务监控_信访部门_评价情况": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_myjc&value=myjc&extra_index=table@to:xf_xfjg_cd_bmjb_qh_xfbm_bmyjc;value@to:bmyjc,table@to:xf_xfjg_cd_bmjb_qh_xfbm_jbmyjc;value@to:jbmyjc&main_name=满意,不满意,基本满意",
    # 默认有个xfbm的值
    "全局业务监控_信访部门_满意率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_myjc&full=true&transformer=@mylv",
    # 需要传信访级别
    "全局业务监控_信访部门_满意率排名": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_myjc&name=xfbm&transformer=@mylv&order=-mylv&limit=10&day=[2020-01-01,2020-10-09]&bmjb=市级",

    # 全局业务监控-满意度-责任单位
    "全局业务监控_责任单位_参评情况": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_ypjjc&value=ypjjc&extra_index=table@to:xf_xfjg_cd_qh_zrdw_cqwpjjc;value@to:cqwpjjc&main_name=已评价,超期未评价&day=[2020-01-01,2020-10-09]",
    # 默认有个zrdw的值
    "全局业务监控_责任单位_参评率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_ypjjc&full=true&transformer=@cplv&day=[2020-01-01,2020-10-09]",
    "全局业务监控_责任单位_评价情况": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_myjc&value=myjc&extra_index=table@to:xf_xfjg_cd_qh_zrdw_bmyjc;value@to:bmyjc,table@to:xf_xfjg_cd_qh_zrdw_jbmyjc;value@to:jbmyjc&main_name=满意,不满意,基本满意&day=[2020-01-01,2020-10-09]",
    # 默认有个zrdw的值
    "全局业务监控_责任单位_满意率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_myjc&full=true&transformer=@mylv&day=[2020-01-01,2020-10-09]",

    # 需要传Cqh
    "全局业务监控_责任单位_满意率排名": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_myjc&full=true&name=zrdw&transformer=@mylv&order=-mylv&limit=10&day=[2020-01-01,2020-10-09]&Cqh=广州市",

    # 矛盾分析预警预判-现状分析
    "矛盾分析预警预判_专项督办信访总量": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cy_zxdbxfjc&value=zxdbxfjc&year=2020",
    "矛盾分析预警预判_专项督办信访饼图": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cy_xfxs_zxdbxfjc&name=xfxs&value=zxdbxfjc&full=true&year=2020",
    # year参数是[now-5,now]
    "矛盾分析预警预判_专项督办信访趋势": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cy_zxdbxfjc&name=year&value=zxdbxfjc&year=[now-5,now]&full=true",
    "矛盾分析预警预判_国家专项督办信访总量": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cy_gjzxdbxfjc&value=gjzxdbxfjc&full=true&year=2020",
    "矛盾分析预警预判_国家专项督办信访饼图": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cy_xfxs_gjzxdbxfjc&name=xfxs&value=gjzxdbxfjc&full=true&year=2020",
    "矛盾分析预警预判_省内专项督办-省级": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cy_xfxs_shezxdbxfjc&name=xfxs&value=shezxdbxfjc&full=true&year=2020",
    "矛盾分析预警预判_省内专项督办-市级": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cy_xfxs_shizxdbxfjc&name=xfxs&value=shizxdbxfjc&full=true&year=2020",
    "矛盾分析预警预判_省内专项督办-县级": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cy_xfxs_xzxdbxfjc&name=xfxs&value=xzxdbxfjc&full=true&year=2020",

    ####################################### 微信端 #######################################



    "考核_信访部门_参评率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_ypjjc&transformer=@cplv&Cqh=广东省",
    "考核_信访部门_参评率饼图": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_ypjjc&transformer=@groupby&value=ypjjc&extra_index=table@to:xf_xfjg_cd_bmjb_qh_xfbm_cqwpjjc;value@to:cqwpjjc&main_name=已评价,超期未评价&Cqh=广东省",
    "考核_信访部门_满意率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_myjc&transformer=@mylv&Cqh=广东省",
    "考核_信访部门_满意率饼图": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_myjc&transformer=@groupby&full=true&value=myjc&extra_index=table@to:xf_xfjg_cd_bmjb_qh_xfbm_jbmyjc;value@to:jbmyjc,table@to:xf_xfjg_cd_bmjb_qh_xfbm_bmyjc;value@to:bmyjc&main_name=满意,基本满意,不满意&Cqh=广东省",
    # 待开发
    "考核_信访部门_及时受理率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_myjc&transformer=@mylv&Cqh=广东省",
    "考核_信访部门_及时受理率饼图": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_myjc&transformer=@groupby&full=true&value=myjc&extra_index=table@to:xf_xfjg_cd_qh_zrdw_jbmyjc;value@to:jbmyjc,table@to:xf_xfjg_cd_qh_zrdw_bmyjc;value@to:bmyjc&main_name=及时受理,超期受理,超期未受理&Cqh=广东省",
    # 待开发
    "考核_信访部门_网信占比": "",
    # 待开发
    "考核_信访部门_网信占比饼图": "",

    "考核_责任单位_参评率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_ypjjc&transformer=@cplv&Cqh=广东省",
    "考核_责任单位_参评率饼图": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_ypjjc&transformer=@groupby&value=ypjjc&extra_index=table@to:xf_xfjg_cd_qh_zrdw_cqwpjjc;value@to:cqwpjjc&main_name=已评价,超期未评价&Cqh=广东省",
    "考核_责任单位_满意率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_myjc&transformer=@mylv&Cqh=广东省",
    "考核_责任单位_满意率饼图": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_myjc&transformer=@groupby&value=myjc&extra_index=table@to:xf_xfjg_cd_qh_zrdw_jbmyjc;value@to:jbmyjc,table@to:xf_xfjg_cd_qh_zrdw_bmyjc;value@to:bmyjc&main_name=满意,基本满意,不满意&Cqh=广东省",
    "考核_责任单位_及时受理率": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_myjc&transformer=@mylv&Cqh=广东省",
    "考核_责任单位_及时受理率饼图": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_myjc&transformer=@groupby&value=myjc&extra_index=table@to:xf_xfjg_cd_bmjb_qh_xfbm_jbmyjc;value@to:jbmyjc,table@to:xf_xfjg_cd_bmjb_qh_xfbm_bmyjc;value@to:bmyjc&main_name=及时受理,超期受理,超期未受理&Cqh=广东省",
    "考核_责任单位_网信占比": "",
    "考核_责任单位_网信占比饼图": "",

    "运行_信访部门_工作过程监控": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_dljc&value=dljc&transformer=@groupby&full=true&day=[2020-01-01,2020-10-09]&extra_index=table@to:xf_xfjg_cd_bmjb_qh_xfbm_dbjc;value@to:dbjc,table@to:xf_xfjg_cd_bmjb_qh_xfbm_cqwbjjc;value@to:cqwbjjc&main_name=待领,待办,超期未答复",
    "运行_信访部门_信访量走势": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_bmjb_qh_xfbm_xfjc&value=xfjc&name=day&transformer=@groupby&full=true&day=[now-30,now]&Cqh=广东省",
    "运行_责任单位_工作过程监控": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_dljc&value=dljc&transformer=@groupby&full=true&extra_index=table@to:xf_xfjg_cd_qh_zrdw_dbjc;value@to:dbjc,table@to:xf_xfjg_cd_qh_zrdw_cqwbjjc;value@to:cqwbjjc&main_name=待领,待办,超期未答复&Cqh=广东省",
    "运行_责任单位_信访量走势": "http://127.0.0.1:3389/api/xf/?table=xf_xfjg_cd_qh_zrdw_xfjc&value=xfjc&name=day&transformer=@groupby&full=true&day=[now-30,now]&Cqh=广东省",

    "态势_信访量": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cd_xj_xfxs_xfjc&value=xfjc&transformer=@groupby&full=true&day=[now-30,now]",
    "态势_信访形式分布": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cd_xj_xfxs_xfjc&value=xfjc&name=xfxs&transformer=@groupby&full=true&day=[now-30,now]",
    "态势_信访量走势": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cd_xj_xfxs_xfjc&transformer=@groupby&value=xfjc&name=day&transformer=@groupby&full=true&day=[now-30,now]",

    "预警_信访量走势": "http://127.0.0.1:3389/api/xf/?table=xf_xfj_cd_xj_xfjc&transformer=@groupby&value=xfjc&name=day&full=true&day=[now-30,now]",

}