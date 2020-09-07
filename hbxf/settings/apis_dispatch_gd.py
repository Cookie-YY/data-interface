# apis分发-广东
"""
2）总数：
gd_id03=信访日期/ 登记日期/ 交换日期
http://39.107.240.28:3390/api/xf/?gd_id01=全局业务监控&gd_id02=信访形式分布1&gd_id02=信访日期&day=[2019-01-01,2019-01-09]

http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_xfrqxfjc&value=xfrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]

http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_djrqxfjc&value=djrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]

http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_jhrqxfjc&value=jhrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]

2）列表：
gd_id03=信访日期/ 登记日期/ 交换日期
http://39.107.240.28:3390/api/xf/?gd_id01=全局业务监控&gd_id02=信访形式分布2&gd_id02=信访日期&day=[2019-01-01,2020-12-02]

http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_xfrqxfjc&name=xfxs&value=xfrqxfjc&stack=xfxs&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_shej_xfxs_xfrqxfrc;value@to:xfrqxfrc,table@to:xf_xfj_cd_shej_xfxs_xfrqxfrc;value@to:xfrqxfrc;transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&day=[2019-01-01,2020-02-02]&full=true

http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_djrqxfjc&name=xfxs&value=djrqxfjc&stack=xfxs&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_shej_xfxs_djrqxfrc;value@to:djrqxfrc,table@to:xf_xfj_cd_shej_xfxs_djrqxfrc;value@to:djrqxfrc;transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次&day=[2019-01-01,2020-02-02]&full=true

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
URL_DISPATCH_MAP = {
    # 全局业务监控_信访形式分布
    "全局业务监控_信访形式分布1_信访日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_xfrqxfjc&value=xfrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]",
    "全局业务监控_信访形式分布1_登记日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_djrqxfjc&value=djrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]",
    "全局业务监控_信访形式分布1_交换日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_djrqxfjc&value=djrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]",

    "全局业务监控_信访形式分布2_信访日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_xfrqxfjc&name=xfxs&value=xfrqxfjc&stack=xfxs&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_shej_xfxs_xfrqxfrc;value@to:xfrqxfrc,table@to:xf_xfj_cd_shej_xfxs_xfrqxfrc;value@to:xfrqxfrc;transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&day=[2019-01-01,2020-02-02]&full=true",
    "全局业务监控_信访形式分布2_登记日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_djrqxfjc&name=xfxs&value=djrqxfjc&stack=xfxs&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_shej_xfxs_djrqxfrc;value@to:djrqxfrc,table@to:xf_xfj_cd_shej_xfxs_djrqxfrc;value@to:djrqxfrc;transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次&day=[2019-01-01,2020-02-02]&full=true",
    "全局业务监控_信访形式分布2_交换日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_jhrqxfjc&name=xfxs&value=jhrqxfjc&stack=xfxs&transformer=@groupby&extra_index=transformer@to:@zb,table@to:xf_xfj_cd_shej_xfxs_jhrqxfrc;value@to:jhrqxfrc,table@to:xf_xfj_cd_shej_xfxs_jhrqxfrc;value@to:jhrqxfrc;transformer@to:@zb&main_name=信访件次,件次占比,信访人次,人次占比&day=[2019-01-01,2020-02-02]&full=true",

    "全局业务监控_信访形式分布3_信访日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_xfrqxfjc&name=xfxs&value=xfrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]&full=true",
    "全局业务监控_信访形式分布3_登记日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_djrqxfjc&name=xfxs&value=djrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]&full=true",
    "全局业务监控_信访形式分布3_交换日期": "http://39.107.240.28:3390/api/xf/?table=xf_xfj_cd_shej_xfxs_jhrqxfjc&name=xfxs&value=jhrqxfjc&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]&full=true",

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

}
