# from itertools import product
#
# import pymysql
# import sqlalchemy


# conn = pymysql.connect(
#     host="127.0.0.1",
#     port=3306,
#     user="root",
#     passwd="Beidas0ft",
#     db="test",
#     charset="utf8"
# )
#
# cursor = conn.cursor()
#
# sql = "select * from search_qh_gd"
#
# cursor.execute(sql)
#
# res = cursor.fetchall()
#
# print(res)

# import sqlalchemy
# from sqlalchemy import create_engine, MetaData, Table
#
# # import pymysql
# from sqlalchemy.orm import Session
#
# ZB_DB = 'mysql+pymysql://root:Beidas0ft@127.0.0.1:3306/test'
#
# zb_engine = create_engine(ZB_DB,
#                           pool_recycle=-1,
#                           pool_size=100,
#                           max_overflow=0)
# metadata = MetaData()
#
# session = Session(zb_engine)
# ex_table = Table("search_qh_gd", metadata, autoload=True, autoload_with=zb_engine)
# # getattr(ex_table.columns, "shej_01")
# res = session.query(getattr(ex_table.columns, "shej_01")).filter(getattr(ex_table.columns, "shij_02")=="广州市").order_by(getattr(ex_table.columns, "shij_02"))
# for i in res:
#     print(i)
# # print(session.query(getattr(ex_table.columns, "shej_01")))
#
# class Table():
#     shej_01 = Column(32, )
#
# import pandas as pd
# from pandas import CategoricalDtype
#
# init_dicts = {"a": ["ni", "bu", "hao"], "value": [0]}
#
# df = pd.DataFrame({"a": ["ni", "hao"], "value": [1,2]})
#
# # for col in df.columns:
# on = list(df.columns)
# on.remove("value")
# init_df = pd.DataFrame(product(*[init_dicts[i] for i in df.columns]), columns=df.columns)
# # init_df.columns =
# res = pd.merge(init_df, df, how="left", on=on)
# res["value"] =
# # print(res)
#
# import pandas as pd
# #
# def take_smaller(*args):
#     if 1<2:
#         return s1
#     else:
#         return s2
#     # return s1 if s1.sum() < s2.sum() else s2
# #
# #
# # df1 = pd.DataFrame({'A': ["0", "1"], 'B': [100, 200]})
# # df2 = pd.DataFrame({'A': ["0"], 'B': [50]})
# # # take_smaller = lambda s1, s2: s1 if s1.sum() < s2.sum() else s2
# # t = df1.combine(df2, take_smaller)
# # t
#
#
# df1 = pd.DataFrame({'A': ["0", "1", "2"], 'B': [None, None, None]})
# df2 = pd.DataFrame({'A': ["1"], 'B': [50]})
#
# print(df2.combine_first(df1))
#
# # take_smaller = lambda s1, s2: s1
# # print(df1.combine(df2, take_smaller))


# import pandas as pd



# def test(x):
#      return x.sort_values(by=['xfxs'],ascending=False)[:2]
# df = pd.DataFrame({'name':['China','China', 'India', 'India', 'America', 'Japan', 'China', 'India'],
#                    'stack':["lx", "lf", "lx", "lf", "lx", "lf", "wx", "wx"],
#                     'value':[5000, 4320, 1234, 4010, 250, 250, 4500, 4321]})
#
#
#
#
# t = df.groupby(['name'])[['stack']].apply(lambda x:x.sort_values(by=['stack'],ascending=False)[:2])
#
#
# print(t)


# t = dict(zip(["a", "b"], [{"1":1, "2":2}, {"2":1, "1":2}]))
# print(t)

# 引用
# a = [1,2,3]
# b = a
# b.append(1)
# print(a)
#
# # 浅拷贝
# a = [1,2,3]
# b = a.copy()
# b.append(1)
# print(a)
#
# # 深拷贝
# a = [1,2,[3]]
# b = a.copy()
# b[2].append(1)
#
# dt ={"Cqh": "广东省"}
# sql = "aaaaa{Cqh}"
#
# t = f"selct from {sql.format(**{'Cqh': '广东省'})} where a={dt['Cqh']}"
#
# # t = t.format(**{"Cqh": "广东省"})
# print(t)
#
# print(f"{{}}")
#
# tt = {"a": 1, "b": 1}
# print(tt.copy())


def quick_sort2(array):
    l, r = 0, len(array) - 1
    if l >= r:
        return
    stack = []
    stack.append(l)
    stack.append(r)
    while stack:
        low = stack.pop(0)
        high = stack.pop(0)
        if high <= low:
            continue
        x = array[high]
        i = low - 1
        for j in range(low, high):
            if array[j] <= x:
                i += 1
                array[i], array[j] = array[j], array[i]
        array[i + 1], array[high] = array[high], array[i + 1]
        stack.extend([low, i, i + 2, high])

t = [1,19,8,17,5,-1,-6]
quick_sort2(t)