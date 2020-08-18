import os

import pandas as pd
import json
import itertools
import copy

from layers.makeup_dataframe.day_initialized import day_initialized


def merge_initialized_table(dataframe):
    """
    df 是计算后的数据框，需要根据 df.columns 初始化一个数据框
    融合两个数据框，更新 update_data中的数据
    """
    df = dataframe["df"]
    update_data = [dataframe["value"]]
    name = dataframe.get("name")
    day = dataframe.get("day")
    day_list = []
    if name == "day":
        df["day"] = df["day"].apply(lambda x: str(x).split(" ")[0])  # day的初始化只要日期
        day_list = day_initialized(day)  # 通过起止时间初始化每一天的日期

    df_list = list(df)

    # 加载字段可能取值 & 联动字段文件的目录
    from app import app
    df_dict = app.config.get("INITIALIZATION")
    df_dict["day"] = day_list
    file_root_path = app.config.get("INITIALIZATION_FILE_PATH")

    # 获取所有文件
    file_path_list = [os.path.join(file_root_path, i) for i in os.listdir(file_root_path)]
    d_list = []
    for file_path in file_path_list:
        with open(file_path, encoding="utf-8", errors="ignore") as f:
            d = ((f.readline()).strip("\n")).split("\t")
            d_list.append(d)

    # f0 = open("f0.txt", )
    # f1 = open("f1.txt", encoding="utf-8", errors="ignore")
    # d0 = ((f0.readline()).strip("\n")).split("\t")
    # d1 = ((f1.readline()).strip("\n")).split("\t")
    # d_list = [d0, d1]

    # 确定是否走文件
    d_res_list = []
    for d in d_list:
        d_value = [False for txt_columns_list in d if txt_columns_list not in df_list]
        if d_value:
            columns_list = []
            for i in df_dict:
                columns_list.append(i)

            val_str = ""
            for i in df_list:
                val_list = df_dict[i]
                val_str += str(val_list) + ','

            rows_l = []
            for i in itertools.product(*eval(val_str)):
                rows_l.append(i)

            row = json.loads(df.to_json(orient="split", force_ascii=False))
            row_l = row['columns']
            row_data = row['data']
            df_data = [dict(zip(row_l, d)) for d in row_data]
            df_data_new = copy.deepcopy(df_data)
            rows = [dict(zip(df_list, d)) for d in rows_l]
            res = pd.DataFrame(rows)

            # 更新数据
            on = []
            for l in df_list:
                if l not in update_data:
                    on.append(l)
            # print(on)
            del_l = []
            for s in update_data:
                del_l.append(s + "_x")

            res = res.merge(df, how="outer", on=on, suffixes=("_x", ""))
            res = (res.drop(del_l, axis=1)).fillna(0)
            return res
        else:
            # print("包含")
            d_res_list.append(d)

    name_index = d_res_list.index(max(d_res_list))
    txt_name = file_path_list[name_index]
    # txt_name = "f" + str(name_index) + ".txt"
    f = open(txt_name, encoding="utf-8", errors="ignore")

    txt_columns_lists = max(d_res_list)
    txt_list = []
    while True:
        lines = f.readline()
        if not lines:
            break
        line = [i for i in lines.split("\t")]
        # line = [i for i in lines.split()]
        txt_list.append(line)

    text_value_lists = copy.deepcopy(txt_list)
    del text_value_lists[0], text_value_lists[-1]

    dict_l = []
    for i in df_list:
        if i not in txt_columns_lists:
            dict_l.append(i)

    df_short_list = []
    txt_str = ""
    for i in dict_l:
        df_short_list.append(i)
        val_list = df_dict[i]
        txt_str += str(val_list) + ','
    txt_str += str(text_value_lists)

    rows_l = []
    for i in itertools.product(*eval(txt_str)):
        rows_l.append(i)
    t = ""
    txt_new_lists = []
    for i in txt_columns_lists:
        t += i + "-"
    t = t.strip("-")
    txt_new_lists.append(t)

    columns_list = df_short_list + txt_new_lists

    rows = [dict(zip(columns_list, d)) for d in rows_l]
    res = pd.DataFrame(rows)

    txt_value_df = res[t].apply(pd.Series, index=txt_columns_lists)


    # 更新数据
    df_res = pd.concat([res.drop([t], axis=1), txt_value_df], axis=1, join='outer')

    on = []
    for l in df_list:
        if l not in update_data:
            on.append(l)
    del_l = []
    for s in update_data:
        del_l.append(s + "_x")
    df_result = ((df_res.merge(df, how="outer", on=on, suffixes=("_x", ""))).drop(del_l, axis=1)).fillna(0)
    # t = [i.strip("_y") for i in list(df_result)]
    # df_result.columns = t

    return df_result


if __name__ == '__main__':
    data = {
            'shej_02': ["贵州省", "贵州省"],
            'shij_02': ["贵阳市", "六盘水市"],
            'zql': [10, 20],
            'zb': [1, 2]}

    df = pd.DataFrame(data)
    update_data = ["zql", "zb"]
    t = merge_initialized_table(df, update_data)
    print(t)
