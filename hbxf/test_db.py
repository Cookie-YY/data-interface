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

import pandas as pd
from pandas import CategoricalDtype

init_dicts = {"a": ["ni", "bu", "hao"], "value": [0]}

df = pd.DataFrame({"a": ["ni", "hao"], "value": [1,2]})

# for col in df.columns:
on = list(df.columns)
on.remove("value")
init_df = pd.DataFrame(product(*[init_dicts[i] for i in df.columns]), columns=df.columns)
# init_df.columns =
res = pd.merge(init_df, df, how="left", on=on)
res["value"] =
print(res)