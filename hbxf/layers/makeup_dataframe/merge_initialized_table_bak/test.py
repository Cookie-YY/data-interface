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
from column_filter import column_filter
from merge import merge_dataframe
from product_unzip import product_unzip
from query import query_norelation_list, query_relation_list
from random_init import random_init

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
d = {'day': ['第一天'], 'shej_02': [3], 'shij_02': [1], 'xj_02': [1], 'ejnr': [1],
     'sjnr': [1], 'xfjc': [99999]}
dataframe = pd.DataFrame(data=d)

if __name__ == '__main__':
    value_col = 'xfjc'  # 必要参数 指定value列
    print(dataframe)
    no_re_col, re_col_file, df_cols_list = column_filter(dataframe)  # 没有关系的列 有关系的列对应的文件 df的所有列
    print(no_re_col, re_col_file)
    re_list, re_col = query_relation_list(re_col_file)  # 查询关系 返回 有关系的列的所有可能情况 有关系的列 （有顺序）
    no_re_list, no_re_col = query_norelation_list(no_re_col)  # 查询没有关系的列 返回 没有关系的列的所有可能情况 没有关系的列（无顺序）
    full_df = product_unzip(re_list, no_re_list, re_col, no_re_col)  # 用有关系的所有情况与无关系的所有情况做笛卡尔积 按顺序拼接列名赋给新的df 返回 填补后的df
    print(full_df)
    merge_df = merge_dataframe(dataframe, full_df, value_col)  # 根据真实值替换填补后df中的None值 返回填充了真实值的df
    print(merge_df)
    random_df = random_init(merge_df, value_col)  # 对于df中剩下的None值采用根据类型随机初始化的方法进行随机初始化 返回完成full的df
    print(random_df)
