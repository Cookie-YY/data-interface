import os

import pandas as pd
import random  # eval有可能会用到随机数
import itertools
import copy
# from layers.makeup_dataframe.day_initialized import day_initialized

# df_dict: 输入的dict
# df_list: 输入的df列名
# df_short_list: 输入的df列名不包含存在txt中的列名
# text_value_lists: 初始化内容中再加上txt中的内容
# from layers.makeup_dataframe.year_initialized import year_initialized


"""
1.从df中拆出所有的列 筛出无从属关系的列和有从属关系的列 column filter
2.根据df中的列从一个大的父子关系表中查到一个list 怎么查？读哪个文件？ 如[爷，父，子] query
3.利用查到的list和那些无从属关系的list做笛卡尔积 拆掉内部括号 填补 返回一个df  product_unzip
4.融合返回 merge
5.根据value列中的NaN进行随机初始化 random_init
"""

