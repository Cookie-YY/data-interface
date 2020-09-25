# -*- coding: utf-8 -*-
# @Time    : 2020/1/28 19:36
# @Author  : Cookie付尧
# @Email   : fuyao@beidasoft.com
# @File    : settings.py
# @Software: PyCharm
import os
import urllib.parse

# 项目的根目录
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SETTINGS_DIR = os.path.dirname(os.path.abspath(__file__))
# 初始化指标需要的txt文件夹位置
INITIALIZATION_FILE_PATH = os.path.join(SETTINGS_DIR, "init_files")

# 前端大屏相关
DP_CONTAINER = "client"    # 大屏的路径
DP_ROOT = "gdxfdp"

DP_DIR_1 = "AidDecisionMaking"                 # url 就是 /DP_ROOT/DP_DIR1
DP_URL_1 = "/AidDecisionMaking"                # 访问大屏的url

DP_DIR_2 = "LeadCockpit"                       # url 就是 /DP_ROOT/DP_DIR2
DP_URL_2 = "/LeadCockpit"

# 计算后（占比/同比/环比）保留的小数位数，可能百分比显示
SIGNIFICANT_DIGITS = 4
# SQLALCHEMY_ECHO = True

# 项目默认的时间格式：当name=day时生效，如果不写或为空：%Y-%m-%d
TIME_FORMAT = "%Y-%m-%d"

# 设定判断超时的时间
TIMEOUT = 3

# DEBUG模式开关（仅开发模式有用）
DEBUG = True

# 分析库：业务表和码表的位置
FX_DB = 'mysql+pymysql://root:Beidas0ft@39.107.240.28:3307/pt_dev_dabot_gd'
# FX_DB = 'mysql+pymysql://admin_xfxx3:%s@19.15.64.203:15133/zhxf_pre' % urllib.parse.unquote_plus('S65@aG3c')
# FX_DB = 'mysql+pymysql://root:%s@localhost:3306/sys' % urllib.parse.quote_plus("@123%")

# 指标库：指标表的位置
ZB_DB = 'mysql+pymysql://root:Beidas0ft@39.107.240.28:3306/pt_dev_dabot_gd'
# ZB_DB = 'mysql+pymysql://admin_xfxx8:%s@19.15.64.203:15152/zhxf_fzjc' % urllib.parse.unquote_plus("8cU5XQ%D")
# ZB_DB = 'mysql+pymysql://root:%s@localhost:3306/sys' % urllib.parse.quote_plus("@123%")

# 如果没有数据---1：返回零数据 0：返回一个空对象
RETURN_ZERO_DATA = 1

# $反向解析：name=$timetype  =>  name=cy  => name=year
URL_REFERENCE = {
    "cy": "year",
    "cm": "month",
    "shij": "shij_02",
    "shej": "shej_02"
}