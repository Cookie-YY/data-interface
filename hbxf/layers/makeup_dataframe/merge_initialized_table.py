import os

import pandas as pd
import random
import itertools
import copy
from layers.makeup_dataframe.day_initialized import day_initialized

# df_dict: 输入的dict
# df_list: 输入的df列名
# df_short_list: 输入的df列名不包含存在txt中的列名
# text_value_lists: 初始化内容中再加上txt中的内容
from layers.makeup_dataframe.year_initialized import year_initialized


def make_df_res(df_dict, df_list,df_short_list, text_value_lists):
    val_str = ""  # txt_str为需要初始化的数据
    for i in df_short_list:
        val_list = df_dict[i]
        val_str += str(val_list) + ','
    val_str += str(text_value_lists)  # val_str 是dict和txt文件内容
    val_str.strip(',')
    rows_l = []
    for i in itertools.product(*eval(val_str)):
        rows_l.append(i)
    rows = [dict(zip(df_list, d)) for d in rows_l]
    res = pd.DataFrame(rows)
    return res

# 更新df数据
# df: 输入的df
# df_list: 输入df列名的 list
# update_data: 需要更新数据的列名
# init_df: 初始化的df

def fill_random_or_real(x, df_dict, s):
    if pd.isna(x):
        if str(df_dict.get(s)[0]).startswith("random"):
            return eval(df_dict.get(s)[0])
        else:
            return df_dict.get(s)[0]
    else:
        return x



def update_df(df_dict, df, df_list, update_data, init_df):
    on = []
    for l in df_list:
        if l not in update_data:
            on.append(l)
    del_l = []
    for s in update_data:
        del_l.append(s + "_x")
    res = pd.merge(init_df, df, how="outer", on=on, suffixes=("_x", ""))
    res = res.dropna(subset=[s + "_x"])  # 删除df中不在初始化表中的数据
    res = (res.drop(del_l, axis=1))
    # res = (res.drop(del_l, axis=1)).fillna(0)
    res[s] = res[s].apply(lambda x: fill_random_or_real(x, df_dict, s))

    # res = pd.merge(init_df, df, how="outer", on=on, suffixes=("", "_x"))
    # res = (res.drop(del_l, axis=1))
    return res


"""
{
'timetype': 'cd', 
'lx': 'sjnr', 
'name': 'day', 
'value': 'xfjc',  # 要更新的数据
'stack': 'sjnr', 
'transformer': {'@groupby': ''}, 
'day': '[2019-01-01,2020-03-03]', 
'ejnr': '法制建设', 
'full': 'true', 
'realm': 'xf', 
'index': 'xfjc_zb', 
'busin': 'xfj', 
'limit': '999999999', 
'df':          day         sjnr     xfjc
            0 2019-12-16  法制建设     1
            1 2019-12-17  法制建设     1
            2 2019-12-30  法制建设     1
            3 2020-02-18  法制建设     1, 
'main_name': ''
}
"""
def merge_initialized_table(dataframe):
    # print(dataframe)
    """
    df 是计算后的数据框，需要根据 df.columns 初始化一个数据框
    融合两个数据框，更新 update_data中的数据
    """
    df = dataframe["df"]
    update_data = [dataframe["value"]]
    name = dataframe.get("name")

    # 加载字段可能取值 & 联动字段文件的目录
    from app import app
    df_dict = app.config.get("INITIALIZATION")

    file_root_path = app.config.get("INITIALIZATION_FILE_PATH")

    if name == "day":
        day = dataframe.get("day")  # 当name=day时需要
        day_list = day_initialized(day)
        df_dict["day"] = day_list
    if name == "year":
        year = dataframe.get("year")
        year_list = year_initialized(year)
        df_dict["year"] = year_list
    df_list = list(df)  # 输入的df列名列表

    # 如果只有一列，说明只取了value,也只能有一行
    if len(df_list) == 1:
        column = df_list[0]
        df[column] = df[column].apply(lambda x: fill_random_or_real(x, df_dict, column))
        return df

    # 获取所有文件
    file_path_list = [os.path.join(file_root_path, i) for i in os.listdir(file_root_path)]
    d_index = []
    d_list = []
    for file_path in file_path_list:
        with open(file_path, encoding="utf-8", errors="ignore") as f:
            d = ((f.readline()).strip("\n")).split("\t")
            d_index.append(file_path)
            d_list.append(d)
    txt_index = dict(zip(d_index, d_list))

    # 确定是否走文件
    d_res_list = []   # d_res_list列表不为空时走txt文件和dict 选择t列表中最大的值
    for d in d_list:
        d_value = [False for txt_columns_list in d if txt_columns_list not in df_list]
        if d_value:
            # print("不包含")
            pass
        else:
            # print("包含")
            d_res_list.append(d)
    if len(d_res_list) > 0:
        txt_columns_lists = max(d_res_list)  # 文件列名
        txt_name = list(txt_index.keys())[list(txt_index.values()).index(txt_columns_lists)]  # 根据列名在txt_index对应的字典中获得文件名
        f = open(txt_name, encoding="utf-8", errors="ignore")
        txt_list = []
        while True:
            lines = f.readline()
            if lines:
                break
            line = [i for i in lines.split("\t")]
            txt_list.append(line)
        text_value_lists = copy.deepcopy(txt_list)  # text_value_lists为获取的文件内容
        del text_value_lists[0], text_value_lists[-1]
        df_short_list = []  # df_short_list为输入列名中不包含txt列名的列表
        [df_short_list.append(i) for i in df_list if i not in txt_columns_lists]
        # 将初始化的数据和列名组成dict格式   # 更新数据
        res = make_df_res(df_dict, df_list, df_short_list, text_value_lists)
        result_df = update_df(df_dict, df, df_list, update_data, res)
        return result_df
    else:
        txt_col = []
        txt_name = ''  # C:\Users\bdsoft130\Desktop\hbxf01\hbxf\init_files\sjnr.txt
        for i in file_path_list:
            for j in df_list:
                if j in i:
                    txt_col.append(j)
                    txt_name = i
        if txt_name != '':
            f = open(txt_name, encoding="utf-8", errors="ignore")
            txt_l1 = []
            d = f.readlines()
            for i in d:
                txt_l1.append((i.strip("\n")).split("\t"))
            txt_l2 = []  # ['法制宣传', '立法规划', '司法改革'] 文件中根据条件筛选出的部分内容
            screen_codition = txt_l1[0][1]  # 从文件中获得的筛选条件 ejnr/shj_02
            screen_ccontent = dataframe.get(screen_codition)  # 筛选的条件内容 法制建设/None
            [txt_l2.append(i[-1]) for i in txt_l1 if screen_ccontent in i]
            if len(txt_l2) > 0 and screen_ccontent != None:
                df_short_list = []  # df_short_list为输入列名中不包含txt列名的列表 ['day', 'xfjc']
                [df_short_list.append(i) for i in df_list if i != txt_col[0]]
                new_df_list = df_short_list + txt_col  # 初始化df表的列名 ['day', 'xfjc', ’sjnr']
                # 将初始化的数据和列名组成dict格式   # 更新数据
                res = make_df_res(df_dict, new_df_list, df_short_list, txt_l2)
                result_df = update_df(df_dict, df, df_list, update_data, res)
                return result_df
            else:
                if txt_col[0] in df_dict.keys():
                    res = make_df_res(df_dict, df_list, df_list, '')
                    result_df = update_df(df_dict, df, df_list, update_data, res)
                    return result_df
                else:
                    [txt_l2.append(i[-1]) for i in txt_l1]
                    txt_l2 = txt_l2[1:]
                    df_short_list = []  # df_short_list为输入列名中不包含txt列名的列表 ['day', 'xfjc']
                    [df_short_list.append(i) for i in df_list if i != txt_col[0]]
                    new_df_list = df_short_list + txt_col  # 初始化df表的列名 ['day', 'xfjc', ’sjnr']
                    # 将初始化的数据和列名组成dict格式   # 更新数据
                    res = make_df_res(df_dict, new_df_list, df_short_list, txt_l2)
                    result_df = update_df(df_dict, df, df_list, update_data, res)
                    return result_df
        else:
            # 更新数据
            res = make_df_res(df_dict, df_list, df_list, '')
            result_df = update_df(df_dict, df, df_list, update_data, res)
            return result_df


if __name__ == '__main__':
    data = {
            'shej_02': ["贵州省", "贵州省"],
            'shij_02': ["贵阳市", "六盘水市"],
            'zql': [10, 20],
            'zb': [1, 2]}

    df = pd.DataFrame(data)
    update_data = ["zql", "zb"]
    t = merge_initialized_table(df)

