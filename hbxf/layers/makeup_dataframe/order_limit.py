import re
import pandas as pd


def order_limit(dataframe):
    df = dataframe["df"]
    order = dataframe.get("order")
    limit = dataframe.get("limit")

    # order 是多个 对多个排序
    # if order and type(order) == list:
    if order and "," in order:
        order = order.split(",")
        rank_col = []
        rank_lx = []
        for i in order:
            if "-" in i:
                rank_col.append(i.strip("-"))
                rank_lx.append(True)
            else:
                rank_col.append(i)
                rank_lx.append(False)
        df = df.sort_values(by=rank_col, axis=0, ascending=rank_lx, inplace=False).reset_index(drop=True)
        dataframe["df"] = df

    # order 只有一个 对一个排序
    if order and order != "":
        if "-" in order:
            order = order.strip("-")
            df = df.sort_values(by=order, axis=0, ascending=False, inplace=False).reset_index(drop=True)
            dataframe["df"] = df
        else:
            df = df.sort_values(by=order, axis=0, ascending=True, inplace=False).reset_index(drop=True)
            dataframe["df"] = df

    rows = df.iloc[:, 0].size
    # limit为 3+其他的情况
    # if limit and limit != "":
    #     if "其他" in limit:
    #         limit = limit.split("+")[0]
    #         df = df.head(int(limit))
    #         print(limit)
    if limit and limit != "-1":
        if int(limit) < rows:
            df = df.head(int(limit))
        else:
            pass
    else:
        pass
    return df


def name_stack_limit(dataframe, condition, need_limit, value):
    df = dataframe['df']
    limit_condition = dataframe.get(condition)
    limit_obj1 = re.search('\d+', limit_condition)
    limit_obj2 = re.findall('\d\+(.*)', limit_condition)
    groupe_df = df.groupby([need_limit], as_index=True)[value].sum().reset_index()
    rows = groupe_df.iloc[:, 0].size
    if limit_obj1 and limit_obj2:
        limit = limit_obj1.group()
        limit_df = groupe_df.loc[:, [need_limit]].head(int(limit))
        value_sum = ((groupe_df.tail(rows - int(limit)))[value]).sum()
        new_df = pd.merge(limit_df, df, how="inner", on=need_limit)
        rows_l = []
        for i in range(len(list(df))):
            rows_l.append(limit_obj2[0])
        df_dict = dict(zip(list(df), rows_l))
        df_dict[value] = value_sum
        new_df = new_df.append([df_dict], ignore_index=False)
        return new_df
    elif limit_obj1 and not limit_obj2:
        limit = limit_obj1.group()
        limit_df = groupe_df.loc[:, [need_limit]].head(int(limit))
        new_df = pd.merge(limit_df, df, how="inner", on=need_limit)
        return new_df
    else:
        return df
