def get_dataframe_extensions(apis):
    """
        ###########获取相关信息（解析参数）##########
        apis：
            {"realm": "xf", "index": "xfjc", "name": "yjnr-ejnr"}
            {"realm": "xf", "index": "xfjc", "name": "cfxfbz", "transformer": "@groupby:cfxfbz+@zb:cfxfbz/cfxfbz", "day":"[2020-02-02,2020-02-03]"}
            {"realm": "xf", "index": "xfjc", "name": "djjg", "transformer": "@groupby:djjg+@tb", "day":"[2020-02-02,2020-02-03]"}
        输出：dataframe
        输入一个 apis(字典)     输出一个 dataframe
        """
    # 初始化：加载自定义extension
    extension_name = apis["transformer"][1:]
    extension_class = extension_name.capitalize()
    from app import app
    extension_setting = __import__(f"settings.{app.config['PROJECT']}.extensions.{extension_name}", globals(), locals(), [extension_class])  # 导入extension
    Ext = getattr(extension_setting, extension_class)


    # 1. 参数逐一校验（数据表是否存在，在extension中校验）
    from layers.get_dataframe.params_check import params_check_each
    code, msg, apis_and_apis_copy_after_check = params_check_each(apis)
    if code != 200:
        return code, msg, {}
    apis_copy, apis = apis_and_apis_copy_after_check["apis_copy"], apis_and_apis_copy_after_check["apis"]

    # 2. extension的before_search/search/after_search
    ext = Ext(apis_copy, apis)
    ext.before_search()   # search 前准备
    if ext.code != 200:
        return ext.code, ext.msg, {}
    ext.search()          # search 查询
    if ext.code != 200:
        return ext.code, ext.msg, {}
    ext.after_search()    # search 后聚合
    if ext.code != 200:
        return ext.code, ext.msg, {}



    # waiting_for_search = ext.waiting_for_search
    #
    # # 3. 数据库查询，得到dataframe
    # from layers.get_dataframe.params_search import params_search
    # code, msg, results = params_search(waiting_for_search, apis_copy)
    # if code != 200:
    #     return code, msg, {}
    # ext.db_results = results
    #
    # # 4. 将多个dataframe合并成一个（transformer）
    # ext.after_search()
    # if ext.code != 200:
    #     return ext.code, ext.msg, {}
    df, apis_copy = ext.df, ext.apis_copy

    # 如果df是dataframe（不是np.int64） 且不只是一个列（只有一个列是只有value的情况）
    import pandas as pd
    if isinstance(df, pd.DataFrame) and len(df.columns) > 1:
        df = df.fillna("")

    dataframe = {**apis_copy, **{"df": df}}
    dataframe["table"] = [i.get("table") for i in ext.waiting_for_search if "table" in i]
    return 200, "success", dataframe


if __name__ == '__main__':
    apis = {'realm': "xf", 'value': 'xfjc', 'lx': "yjnr", "qh": "shij", "index": "xfjc_zb", "timetype": "cd",
            "name": "yjnr", "day": "2020-01-9,2020-01-10", "transformer": "@grouby:shij_02+@hb"}
    code, msg, test = get_dataframe_for_each_api(apis)

    print(code, msg, test)
