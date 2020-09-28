import numpy as np

from utils.get_unilist import get_unilist


def del_item(item, list_):
    if item in list_:
        list_.remove(item)
    return list_


def groupby_and_sum(df, value):
    # df = pd.DataFrame(data)
    groupby_list = list(df.columns)
    groupby_list = del_item(value, groupby_list)  # value 指定的内容不做 groupby
    groupby_list = del_item("zb", groupby_list)   # zb 列不做 groupby
    groupby_list = del_item("tb", groupby_list)  # zb 列不做 groupby
    groupby_list = del_item("hb", groupby_list)  # zb 列不做 groupby

    # groupby 的四种情况
    # 1. value列是数字      对 groupby_list 做 groupby 对 value 做 sum
    # 2. value列是汉字      对 groupby_list 做 groupby 对 value 做 concatenate

    if np.issubdtype(df[value].dtype, np.number):  # 判断这一列是否是数字
        if groupby_list:
            grouped = df.groupby(groupby_list, as_index=False)[value].sum()
        else:
            grouped = df[value].sum()
    else:
        if groupby_list:
            grouped = df.groupby(groupby_list, as_index=True)[value].apply(lambda x: get_unilist((x.str.cat(sep=',')).split(","))).reset_index()
        else:
            df["temp"] = 1
            grouped = df.groupby(["temp"], as_index=True)[value].apply(lambda x: get_unilist((x.str.cat(sep=',')).split(","))).reset_index()
            grouped = grouped.drop(columns=["temp"])
    return grouped


def parse_groupby(df_list, apis_copy):
    """
    除了数值列和可能的"zb"列，所有其他的列都 groupby
    """
    value = apis_copy.get("value")
    results = []
    for table in df_list:
        one = []
        for df in table:
            if not df.empty:
                one.append(groupby_and_sum(df, value))
        results.append(one)
    return results

