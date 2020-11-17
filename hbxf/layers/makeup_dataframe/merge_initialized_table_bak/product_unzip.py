import pandas as pd
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
# 3.利用查到的list和那些无从属关系的list做笛卡尔积 拆掉内部括号 填补
# 返回的是填补完成的df


def product_unzip(re_list, no_re_list, re_col, no_re_col):
    # 直接解包re_list,no_re_list就可以处理完有关系的列
    # 对于no_re_col中的每一项 需要查出它的可能取值范围
    product_list = list(itertools.product(*re_list, *no_re_list))
    # print(product_list)
    processed_product_list = unzip_tool(product_list)
    # print(processed_product_list)
    dataframe = pd.DataFrame(processed_product_list,columns=re_col + no_re_col)
    # print(dataframe)
    return dataframe


def unzip_tool(product_list):
    # 转化为str，直接字符串把括号去了，然后用逗号分割返回
    product_str = str(product_list)
    processed_product_str = '[' + product_str.replace('[', '').replace(']', '') + ']'
    processed_product_list = eval(processed_product_str)
    return processed_product_list
