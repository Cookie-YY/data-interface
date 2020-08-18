import pandas as pd
import numpy as np


def del_item(item, list_):
    if item in list_:
        list_.remove(item)
    return list_


def parse_tb_or_hb(df_list, apis_copy):
    """
    在df_list[0]中会有两个df,
    1. 融合这两个df，保证除了value列和可能的zb列，其他列都一一致
    2. (用第一个df的value列 的value - 第二个value列的df) / 第二个value列的df
    """

    value = apis_copy.get("value")
    if len(df_list[0]) == 2:
        first_df = df_list[0][0]
        second_df = df_list[0][1]
        columns = list(first_df.columns)
        columns_for_merge = del_item(value, columns)
        columns_for_merge = del_item("zb", columns_for_merge)

        df = pd.merge(first_df, second_df, how="outer", on=columns_for_merge, suffixes=('_now', '_last'))

        df[value] = (df[value+"_now"] - df[value+"_last"]) / df[value+"_last"]
    else:
        df = df_list[0][0]
        df[value] = (df[value] - 0) / 0
    df = df.replace(np.nan, "")
    df = df.replace([np.inf, -np.inf], 0)
    return df
