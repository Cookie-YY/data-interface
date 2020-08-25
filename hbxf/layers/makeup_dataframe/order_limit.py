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
    if limit and limit != "":
        if int(limit) < rows:
            df = df.head(int(limit))
        else:
            pass
    else:
        pass
    return df


def name_stack_limit(dataframe, condition, need_limit, value):
    df = dataframe["df"]
    limit_condition = dataframe.get(condition)
    limit_obj = re.search('\d+', limit_condition)
    if limit_obj:
        limit = limit_obj.group()
        # groupe_df = df.groupby([stack], as_index=True)[name].apply(lambda x: [x.str.cat(sep=',')]).reset_index()
        groupe_df = df.groupby([need_limit], as_index=True)[value].sum().reset_index()
        limit_df = groupe_df.loc[:, [need_limit]].head(int(limit))
        rows = groupe_df.iloc[:, 0].size
        value_sum = ((groupe_df.tail(rows - int(limit)))[value]).sum()
        new_df = pd.merge(limit_df, df, how="inner", on=need_limit)
        rows_l = []
        for i in range(len(list(df))):
            rows_l.append("其他")
        df_dict = dict(zip(list(df), rows_l))
        df_dict[value] = value_sum
        new_df = new_df.append([df_dict], ignore_index=False)
        print(new_df)
        return new_df