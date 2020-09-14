import datetime

import pandas as pd

def results2df_ready(results, columns):
    data = []
    from app import app
    RETURN_ZERO_DATA = app.config["RETURN_ZERO_DATA"]
    for result in results:
        from utils.time_format import date2datetime
        result2dt = [date2datetime(i) for i in result]
        data.append(dict(zip(result.keys(), result2dt)))

    # data = [dict(zip(result.keys(), result)) for result in results]
    if RETURN_ZERO_DATA and not data:  # 空数据需要返回初始化的0，并且是空数据
        data = [dict(zip(columns, [None] * len(columns)))]  # 返回的结果只有一行，全是None
    return data


def results2df(results, columns):
    return pd.DataFrame(results2df_ready(results, columns))


def df2results(df):
    res_list = []
    for value in df.values.tolist():
        res_one = {list(df.columns)[i]: value[i] for i in range(len(value))}
        res_list.append(res_one)
    return res_list
