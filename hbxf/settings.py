# -*- coding: utf-8 -*-
# @Time    : 2020/1/28 19:36
# @Author  : Cookie付尧
# @Email   : fuyao@beidasoft.com
# @File    : settings.py
# @Software: PyCharm
import os

# 项目的根目录
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# 初始化指标需要的txt文件位置
INITIALIZATION_FILE_PATH = os.path.join(BASE_DIR, "init_files")

# 保留的小数位数
SIGNIFICANT_DIGITS = 4
# SQLALCHEMY_ECHO = True

# 设定判断超时的时间
TIMEOUT = 3

# DEBUG模式开关
DEBUG = True

# 分析库：业务表和码表的位置
FX_DB = 'mysql+pymysql://root:Beidas0ft@39.107.240.28:3307/pt_dev_dabot'
# FX_DB = 'mysql+pymysql://root:Beidas0ft@193.168.15.25:3306/pt_dev_dabot'
# FX_DB = 'mysql+pymysql://root:Beidas0ft@127.0.0.1:3306/pt_dev_test'

# 指标库：指标表的位置
ZB_DB = 'mysql+pymysql://root:Beidas0ft@39.107.240.28:3306/pt_dev_dabot'
# ZB_DB = 'mysql+pymysql://root:Beidas0ft@193.168.15.25:3306/pt_dev_dabot_zb'
# ZB_DB = 'mysql+pymysql://root:Beidas0ft@127.0.0.1:3306/test'

# 如果没有数据，返回零数据[1] 或者 都是空对象[0]
RETURN_ZERO_DATA = 1
# $反向解析：name=$timetype  =>  name=cy  => name=year
URL_REFERENCE = {
    "cy": "year",
    "cm": "month",
    "shij": "shij_02",
    "shej": "shej_02"
}

# 初始化指标库
COLUMN_VALUES = {
    "shij_02": ["A市", "石家庄市","唐山市","秦皇岛市","邯郸市","邢台市","保定市","张家口市","承德市","沧州市","廊坊市","衡水市"],
    "xfjc": [10]
}

# 初始化指标需要的值
INITIALIZATION = {
    "wtsd": ["省级", "市级", "县级", "乡级"],
        "year": [2016, 2017, 2018, 2019, 2020, 2021, 2022],
        "month": [1,2,3,4,5,6,7,8,9,10,11,12],
        # "day": ["date:2016-2020"],

        "shej_02": ["河北省"],
        "shij_02": ["石家庄市","唐山市","秦皇岛市","邯郸市","邢台市","保定市","张家口市","承德市","沧州市","廊坊市","衡水市"],
        # "xj_02": "D:\\Study\\PKUSE\\all-through\\产品\\指标表初始化\\xj_02.txt",
        "cfxfbz": ["初件", "重件"],
        "lmj": ["联名件", "非联名件"],
        "jjf": ["进京访", "非进京访"],
        "jtf": ["集体访", "个访"],
        "bj": ["办结", "未办结"],
        "hj": ["化解", "未化解"],
        "hjbz": ["化解", "未化解", "未办结"],
        "pjzt": ["满意", "不满意"],
        "xfjc": [0],
        "zb": [0],
        "hjlv": [0],
        "xfrc": [0],
        "zjlv": [0],
        "tb": [0],
        "hb": [0],
        "gfrc":[0],
        "jtfrc":[0],
        "slxfjc": [0],
        "jssllv": [0],
        "cplv": [0],
        "mylv": [0],
        "blxfjc": [0],
        "dwjc": [0],
        "bmjc": [0],
        "bmsljc": [0],
        "bmjssllv": [0],
        "bmcplv": [0],
        "bmmylv": [0],
        "dwbljc": [0],
        "dwjssllv": [0],
        "dwcplv": [0],
        "dwmylv": [0],
        "xfcs": [0],
        "jjfjc": [0],
        "fsfjc": [0],
        "yyjc": [0],
        "jtfjc": [0],
        "yjfjc": [0],
        "cfcs": [0],
        "bajc": [0],
        "wbjbajc": [0],
        "whjbajc": [0],
        "yhjbajc": [0],
        "bahjlv": [0],
        "mdgjhjjc": [0],
        "hjjc": [0],
        "mdgjbjjc": [0],
        "mdgjhjlv": [0],
        "mdgjxfjc": [0],
        "wtsdrc": [0],
        "hjdrc": [0],
        "czdrc": [0],
        "myjc": [0],
        "value": [0],

        "chas": [0],
        "lmwt": ["联名网投", "非联名网投"],
        "zhy": ["无业人员","文体人员","企业管理人员","现役军人","专业技术人员","农民","其他","律师","学生","退（离）休人员","自由职业者","教师","个体经营者","工人","医生","公务员","事业单位工作人员"],
        "fsf": ["赴省访", "非赴省访"],
        "yjf": ["越级访", "非越级访"],
        "yy": ["扬言", "非扬言"],
        "xfbm":["河北省信访局","市中区信访局","邯郸市信访局","承德市信访局","廊坊市信访局","张家口市信访局","邯山区信访局","衡水市信访局(二)","长安区信访局","唐山市信访局","石家庄市信访局","测试一市信访局","中心街道信访处","保定市信访局"],
        # "zrdw": "D:\\Study\\PKUSE\\all-through\\产品\\指标表初始化\\zrdw.txt",

        "blfs": ["存", "直接回复", "转送", "交办", "受理告知", "督办", "不予受理", "不再受理"],
        "xfly":["国家", "省", "市", "县", "乡镇"],
        "ld": ["周焱华","许勤","刘一时","王东峰"],

        "yjnr": ["政法","科技与信息产业","纪检监察","党务政务","国土资源","教育文体","劳动和社会保障","城乡建设","农村农业","卫生计生"," 环境保护","交通运输","民政","经济管理","商贸旅游","组织人事","其他"],
        "ejnr": ["法制建设","信息化建设","党政处分","政治体制","土地资源管理","文物管理","其他","劳动关系","惠农补贴","人口计生","农垦农场","环保管理","诉讼","教育体制","福利慈善","宏观调控","国资监管","科学技术","社会治安","医政监管","社会服务","文化","工资福利","劳动保护","水库移民","干部作风","建设管理","土地征收","野生资源管理","安全生产","考试招生","法律服务","区划地名","体育","建筑市场","教师队伍和待遇","城乡规划","社会救助","公共卫生","优抚","刑案侦破","出租车管理","商业贸易","水利水电","住房保障与房地产","城镇职工社会保险","基层选举和社区建设","招录辞退","林业管理","工程质量","城镇居民社会保险","人力资源","交通管理","救灾募捐","户籍证件","仲裁与调解","市场监管","土地承包经营","动物防疫","集体土地上房屋拆迁与补偿","滥用职权","知识产权","刑罚执行","旅游管理","行政复议","金融财税","教育行政管理","机构改革","质监检验检疫","退休政策及待遇","医患纠纷","表达情感","贪污贿赂","保险证券期货","邮政管理","环境污染","食品药品监管","海洋气象地震","宣传舆论","民族宗教","历史遗留问题","警务督察","党的建设","群众团体","复退安置","电信","选拔任用","草原草场","建设项目审批","村务管理"," 就业培训","国有土地上房屋征收与补偿","军转安置","港澳台侨","失职渎职","村镇建设","农资农技","扶贫开发","领导事务","客货运输","编制职位","失学辍学","教育收费","城市建设和市政管理","矿产资源管理","农副产品流通","能源管理","离休","企业破产","社保基金管理","民间组织","国防外交"],
        # "sjnr": "D:\\Study\\PKUSE\\all-through\\产品\\指标表初始化\\sjnr.txt",
        # "ejnr@file": "D:\\Study\\PKUSE\\all-through\\产品\\指标表初始化\\ejnr.txt",


        "rdwt": ["法制建设","信息化建设","党政处分","政治体制","土地资源管理","文物管理","其他","劳动关系","惠农补贴","人口计生","农垦农场","环保管理","诉讼","教育体制","福利慈善","宏观调控","国资监管","科学技术","社会治安","医政监管","社会服务","文化","工资福利","劳动保护","水库移民","干部作风","建设管理","土地征收","野生资源管理","安全生产","考试招生","法律服务","区划地名","体育","建筑市场","教师队伍和待遇","城乡规划","社会救助","公共卫生","优抚","刑案侦破","出租车管理","商业贸易","水利水电","住房保障与房地产","城镇职工社会保险","基层选举和社区建设","招录辞退","林业管理","工程质量","城镇居民社会保险","人力资源","交通管理","救灾募捐","户籍证件","仲裁与调解","市场监管","土地承包经营","动物防疫","集体土地上房屋拆迁与补偿","滥用职权","知识产权","刑罚执行","旅游管理","行政复议","金融财税","教育行政管理","机构改革","质监检验检疫","退休政策及待遇","医患纠纷","表达情感","贪污贿赂","保险证券期货","邮政管理","环境污染","食品药品监管","海洋气象地震","宣传舆论","民族宗教","历史遗留问题","警务督察","党的建设","群众团体","复退安置","电信","选拔任用","草原草场","建设项目审批","村务管理"," 就业培训","国有土地上房屋征收与补偿","军转安置","港澳台侨","失职渎职","村镇建设","农资农技","扶贫开发","领导事务","客货运输","编制职位","失学辍学","教育收费","城市建设和市政管理","矿产资源管理","农副产品流通","能源管理","离休","企业破产","社保基金管理","民间组织","国防外交"],

        "nlrange": ["30岁以下","31-40岁","41-50岁","51-60岁","60岁以上"],
        "cfcsrange": ["1次","2-5次","6-10次","11-30次","31-50次","50次以上"],
        "rsrange": ["1-5人","6-20人","21-50人","50人以上"],
        "xfcsrange": ["1次","2-5次","6-10次","11-30次","31-50次","50次以上"],
        "jtfrsrange": ["5-10人", "11-20人", "21-50人", "51-100人", "100人以上"],


        "zd": ["网上","手机app","微信","其他"],
        "djjg":["国家","省级","市级","县级"],
        "xfxs":["来信","来访","网信"],
        "xfmd":["揭发控告","意见建议","其他","申诉","求决"],
        # "jglb":"D:\\Study\\PKUSE\\all-through\\产品\\指标表初始化\\jglb.txt",
        "mdgj":["重点领域","重点群体","重点问题","重点人员"],
        "jsfs":["交办","督办"],
        "zfxs": ["越级访", "逐级访"]
    }


# 初始化指标需要的值
URL_DISPATCH_MAP = {

    ###### 问题分类地图 ######
    # 全部_件次
    "全部_件次": "http://39.107.240.28:3389/api/xf/?index=xfjc_zb&timetype=cd&qh=xj&lx=yjnr&name=shij_02&value=xfjc&transformer=@groupby&day=[2019-01-01,2019-02-02]&full=true",
    # 进京访_件次
    "进京访_件次": "http://39.107.240.28:3389/api/xf/?index=xfjc_zb&timetype=cd&qh=xj&lx=yjnr_jjf&name=shij_02&value=xfjc&transformer=@groupby&day=[2019-01-01,2019-02-02]&jjf=进京访&full=true",
    # 赴省访_件次
    "赴省访_件次": "http://39.107.240.28:3389/api/xf/?index=xfjc_zb&timetype=cd&qh=xj&lx=yjnr_fsf&name=shij_02&value=xfjc&transformer=@groupby&day=[2019-01-01,2019-02-02]&fsf=赴省访&full=true",

    # 全部_问题属地人次
    "全部_人次_问题属地": "http://39.107.240.28:3389/api/xf/?index=wtsdrc_zb&timetype=cd&qh=xj&lx=yjnr&name=shij_02&value=wtsdrc&transformer=@groupby&day=[2019-01-01,2019-02-02]&full=true",
    # 进京访_问题属地人次
    "进京访_人次_问题属地": "http://39.107.240.28:3389/api/xf/?index=wtsdrc_zb&timetype=cd&qh=xj&lx=yjnr_jjf&name=shij_02&value=wtsdrc&transformer=@groupby&day=[2019-01-01,2019-02-02]&jjf=进京访&full=true",
    # 赴省访_问题属地人次
    "赴省访_人次_问题属地": "http://39.107.240.28:3389/api/xf/?index=wtsdrc_zb&timetype=cd&qh=xj&lx=yjnr_fsf&name=shij_02&value=wtsdrc&transformer=@groupby&day=[2019-01-01,2019-02-02]&fsf=赴省访&full=true",

    # 全部_户籍地人次
    "全部_人次_户籍地": "http://39.107.240.28:3389/api/xf/?index=hjdrc_zb&timetype=cd&qh=xj&lx=yjnr&name=shij_02&value=hjdrc&transformer=@groupby&day=[2019-01-01,2019-02-02]&full=true",
    # 进京访_户籍地人次
    "进京访_人次_户籍地": "http://39.107.240.28:3389/api/xf/?index=hjdrc_zb&timetype=cd&qh=xj&lx=yjnr_jjf&name=shij_02&value=hjdrc&transformer=@groupby&day=[2019-01-01,2019-02-02]&jjf=进京访&full=true",
    # 【没有表】赴省访_户籍地人次
    "赴省访_人次_户籍地": "http://39.107.240.28:3389/api/xf/?index=hjdrc_zb&timetype=cd&qh=xj&lx=yjnr_fsf&name=shij_02&value=hjdrc&transformer=@groupby&day=[2019-01-01,2019-02-02]&fsf=赴省访&full=true",

    # 全部_常住地人次
    "全部_人次_常住地": "http://39.107.240.28:3389/api/xf/?index=czdrc_zb&timetype=cd&qh=xj&lx=yjnr&name=shij_02&value=czdrc&transformer=@groupby&day=[2019-01-01,2019-02-02]&full=true",
    # 进京访_常住地人次
    "进京访_人次_常住地": "http://39.107.240.28:3389/api/xf/?index=czdrc_zb&timetype=cd&qh=xj&lx=yjnr_jjf&name=shij_02&value=czdrc&transformer=@groupby&day=[2019-01-01,2019-02-02]&jjf=进京访&full=true",
    # 赴省访_常住地人次
    "赴省访_人次_常住地": "http://39.107.240.28:3389/api/xf/?index=czdrc_zb&timetype=cd&qh=xj&lx=yjnr_fsf&name=shij_02&value=czdrc&transformer=@groupby&day=[2019-01-01,2019-02-02]&fsf=赴省访&full=true",
}