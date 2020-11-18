from itertools import product

import pymysql
import sqlalchemy


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


import pandas as pd



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