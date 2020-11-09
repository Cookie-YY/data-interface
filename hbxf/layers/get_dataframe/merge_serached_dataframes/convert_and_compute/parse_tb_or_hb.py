import pandas as pd
import numpy as np
import pandas as pd


def del_item(item, list_):
    if item in list_:
        list_.remove(item)
    return list_


def _parse_tb_or_hb(df_list, apis_copy, index=0):
    """
    在df_list[0]中会有两个df,
    1. 融合这两个df，保证除了value列和可能的zb列，其他列都一一致
    2. (用第一个df的value列 的value - 第二个value列的df) / 第二个value列的df
    """

    value = apis_copy.get("value")
    if len(df_list[index]) == 2:
        if not isinstance(df_list[index][0], pd.DataFrame) or not isinstance(df_list[index][1], pd.DataFrame):
            get_zero_or_number = lambda x: x if not isinstance(x, pd.DataFrame) else 0
            a = get_zero_or_number(df_list[index][0])
            b = get_zero_or_number(df_list[index][1])
            res = (a-b) / b
            return 0 if res==np.inf else res
        else:
            first_df = df_list[index][0]
            second_df = df_list[index][1]
            columns = list(first_df.columns)
            columns_for_merge = del_item(value, columns)
            columns_for_merge = del_item("zb", columns_for_merge)

            df = pd.merge(first_df, second_df, how="outer", on=columns_for_merge, suffixes=('_now', '_last'))

            df[value] = (df[value+"_now"] - df[value+"_last"]) / df[value+"_last"]
            df.drop(value+"_now", axis=1, inplace=True)
            df.drop(value+"_last", axis=1, inplace=True)
    else:
        df = df_list[index][0]
        df[value] = (df[value] - 0) / 0
    df = df.replace(np.nan, 0)
    df = df.replace([np.inf, -np.inf], 0)
    return df


def parse_tb_or_hb(df_list, apis_copy):
    return _parse_tb_or_hb(df_list, apis_copy, 0)


def parse_tb_and_hb(df_list, apis_copy):
    return (_parse_tb_or_hb(df_list, apis_copy, 0), _parse_tb_or_hb(df_list, apis_copy, 1))
