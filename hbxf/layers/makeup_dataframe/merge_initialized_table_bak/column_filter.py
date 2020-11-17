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
    1.从df中拆出所有的列 筛出无从属关系的列和有从属关系的列
"""

col_file_map = {
    "shij_02": "shej_02+shij_02+xj_02",
    "shej_02": "shej_02+shij_02+xj_02",
    "xj_02": "shej_02+shij_02+xj_02",
    "yjnr": "yjnr+ejnr+sjnr",
    "ejnr": "yjnr+ejnr+sjnr",
    "sjnr": "yjnr+ejnr+sjnr"
}
"""
'df':          day         sjnr     xfjc
            0 2019-12-16  法制建设     1
            1 2019-12-17  法制建设     1
            2 2019-12-30  法制建设     1
            3 2020-02-18  法制建设     1, 
"""
d = {'day': [1, 2, 3], 'shej_02': [1, 2, 3], 'shij_02': [1, 2, 3], 'xj_02': [1, 2, 3], 'ejnr': [1, 2, 3],
     'sjnr': [3, 4, 5], 'xfjc': [1, 2, 3]}
dataframe = pd.DataFrame(data=d)


def column_filter(dataframe):
    # df = dataframe["df"]  # 需要进行拆分的df
    df = dataframe
    # value = dataframe.get("value", "")  # 需要填充数字的那一列
    # 找到有关系的列，直接把对应的关系表丢进dict{"关系表名":"（仿linux权限设计）"}，返回这个dict
    # 剩下的是没有关系的列 用一个list存起来直接返回
    re_col_file = {col_file_map[k]: 0 for k in col_file_map if
                   k in df.columns}  # 储存需要使用的关系表和它里面需要的字段,如果文件中的列名出现在df的列中，就进行初始化
    no_re_col = []  # 没有关系的列
    for item in df.columns:
        if item in col_file_map:
            re_col_file[col_file_map[item]] += 2 ** int(col_file_map[item].split('+').index(item))
        else:
            no_re_col.append(item)

    return no_re_col, re_col_file, list(df.columns)


if __name__ == '__main__':
    no_re_col, re_col_file, df_cols_list = column_filter(dataframe)
    print(no_re_col, re_col_file)
