import math
import os

import pandas as pd
import numpy as np
import random  # eval有可能会用到随机数
import itertools
import copy

# from layers.makeup_dataframe.merge_initialized_table import column_filter

# from layers.makeup_dataframe.day_initialized import day_initialized

# df_dict: 输入的dict
# df_list: 输入的df列名
# df_short_list: 输入的df列名不包含存在txt中的列名
# text_value_lists: 初始化内容中再加上txt中的内容
# from layers.makeup_dataframe.year_initialized import year_initialized
"""
2.根据df中的列从一个大的父子关系表中查到一个list 怎么查？读哪个文件？ 如[爷，父，子] 这个过程中需要完成去重
"""


def query_relation_list(re_col_file):
    """返回值需要包括这种关系的所有情况，返回值的形状：｛1:[[shej_02_1,shiji_02_1,xj_02_1]......],2:[[ejnr_1,sjnr_1]....]｝"""
    """输入的结构：{'shej_02+shij_02+xj_02': 7, 'yjnr+ejnr+sjnr': 6}"""
    dir_name = 'E:\\SYS\\full\\merge_initialized_table\\relation_setting'  # 文件的储存目录 需要提取出来
    re_list = []
    re_cols = []  # 带有关系的列名，并保持顺序
    for k, v in re_col_file.items():
        tmp_re_list = []  # 存储未去重的list
        re_df = pd.read_csv(dir_name + "\\" + k, sep=' ')
        # print(re_df)
        re_df_cols = []  # 这个df中需要处理的列名

        for i in range(0, len(k.split('+'))):
            if (v >> i) & 1:
                re_df_cols.append(k.split('+')[i])
        # print(re_df_cols)
        re_cols.extend(re_df_cols)

        for index, row in re_df[re_df_cols].iterrows():
            tmp_re_list.append(list(row))
        re_list.append(dedupe(tmp_re_list))
    print(re_cols)
    return re_list, re_cols


def query_norelation_list(no_re_col):
    # no_re_map表示 没有关系的列对应的全部取值
    # 我们对value的列要进行随机化处理
    no_re_map = {'day': ['第一天', '第二天']}
    no_re_list = []
    no_re_cols = no_re_col  # 按顺序储存没有关系的列名
    for item in no_re_col:
        if item in no_re_map:
            no_re_list.append(no_re_map[item])
        else:
            no_re_list.append([None])
    return no_re_list,no_re_cols


def dedupe(list1):
    list2 = []
    for i in list1:
        if i not in list2:
            list2.append(i)
    return list2
