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

# 这个函数用于融合真实df和补充df，用真实df中的VALUE覆盖掉补充df中的VALUE返回融合后的df
def merge_dataframe(real_df, full_df, val_col):
    pre_on = list(real_df.columns)
    pre_on.remove(val_col)
    on = pre_on
    # merge_df = pd.merge(full_df, real_df, how="outer", on=on)
    try:
        # 如果直接merge出错，说明出现了int64和object不能merge的情况，直接全部变成字符串
        merge_df = pd.merge(full_df, real_df, how="outer", on=on, suffixes=("_x", ""))
    except:
        df = real_df.astype("str");
        init_df = full_df.astype("str")
        merge_df = pd.merge(init_df, df, how="outer", on=on, suffixes=("_x", ""))
    merge_df = merge_df.drop([val_col+'_x'],axis=1)
    return merge_df
