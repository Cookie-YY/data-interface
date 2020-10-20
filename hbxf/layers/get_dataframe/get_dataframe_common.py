def get_dataframe_common(apis_copy, apis, special):
    """
    ###########获取相关信息（解析参数）##########
    apis：
        {"realm": "xf", "index": "xfjc", "name": "yjnr-ejnr"}
        {"realm": "xf", "index": "xfjc", "name": "cfxfbz", "transformer": "@groupby:cfxfbz+@zb:cfxfbz/cfxfbz", "day":"[2020-02-02,2020-02-03]"}
        {"realm": "xf", "index": "xfjc", "name": "djjg", "transformer": "@groupby:djjg+@tb", "day":"[2020-02-02,2020-02-03]"}
    输出：dataframe
    输入一个 apis(字典)     输出一个 dataframe
    """
    # 参数校验
    from layers.get_dataframe.params_check import params_check
    code, msg, apis_copy = params_check(apis_copy, special)
    if code != 200:
        return code, msg, {}

    # 参数解析
    waiting_for_search = []
    if apis_copy.get("ex_table") != "test":
        from layers.get_dataframe.params_parse import params_parse
        code, msg, waiting_for_search = params_parse(apis_copy, apis)
        if code != 200:
            return code, msg, {}

    # 数据库查询，得到dataframe
    from layers.get_dataframe.params_search import params_search
    code, msg, results = params_search(waiting_for_search, apis_copy)
    if code != 200:
        return code, msg, {}

    # 将多个dataframe合并成一个（transformer）
    from layers.get_dataframe.merge_serached_dataframes import merge_serached_dataframes
    code, msg, df = merge_serached_dataframes(results, apis_copy)
    if code != 200:
        return code, msg, {}

    # 如果df是dataframe（不是np.int64） 且不只是一个列（只有一个列是只有value的情况）
    import pandas as pd
    if isinstance(df, pd.DataFrame) and len(df.columns) > 1:
        df = df.fillna("")

    dataframe = {**apis_copy, **{"df": df}}
    dataframe["table"] = [i.get("table") for i in waiting_for_search if "table" in i]
    return 200, "success", dataframe


if __name__ == '__main__':
    apis = {'realm': "xf", 'value': 'xfjc', 'lx': "yjnr", "qh": "shij", "index": "xfjc_zb", "timetype": "cd", "name": "yjnr", "day": "2020-01-9,2020-01-10", "transformer": "@grouby:shij_02+@hb"}
    code, msg, test = get_dataframe_common(apis)

    print(code, msg, test)
