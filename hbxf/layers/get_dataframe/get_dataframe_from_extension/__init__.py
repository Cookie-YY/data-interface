def get_dataframe_from_extension(apis_copy, apis):
    # 0.初始化：加载自定义extension
    # 0.1 判断来自系统的extension还是自定义extension
    extension_name_ = apis_copy["transformer"]
    extension_name_ = extension_name_ if ":" in extension_name_ else extension_name_+":"
    extension_module, params = extension_name_.split(":")
    extension_class = extension_module.capitalize()
    params = params.split(",")  # params=[""] (当params没有传)

    # 0.2 加载extension
    from app import app
    module_path = f"settings.{app.config['PROJECT']}.extensions.{extension_module}" \
        if extension_module in app.config.get("CUS_EXTENSIONS", []) \
        else f"libs.extensions.{extension_module}"
    extension_setting = __import__(module_path, globals(), locals(), [extension_class])  # 导入extension
    Ext = getattr(extension_setting, extension_class)

    # 1. 执行extension的before_search/search/after_search
    ext = Ext(apis_copy, apis, *params)
    ext.before_search()   # search 前准备
    if ext.code != 200:
        return ext.code, ext.msg, {}
    ext.search()          # search 查询
    if ext.code != 200:
        return ext.code, ext.msg, {}
    ext.after_search()    # search 后聚合
    if ext.code != 200:
        return ext.code, ext.msg, {}

    df, apis_copy = ext.df, ext.apis_copy

    # 2.如果df是dataframe（不是np.int64） 且不只是一个列（只有一个列是只有value的情况）
    import pandas as pd
    if isinstance(df, pd.DataFrame) and len(df.columns) > 1:
        df = df.fillna("")

    # 3.封装dateframe对象以供返回
    dataframe = {**apis_copy, **{"df": df}}
    dataframe["table"] = ["SQL"]  # 兼容没有waiting_for_search的情况
    if ext.waiting_for_search:
        dataframe["table"] = [i.get("table") for i in ext.waiting_for_search if "table" in i]
    return 200, "success", dataframe


if __name__ == '__main__':
    apis = {'realm': "xf", 'value': 'xfjc', 'lx': "yjnr", "qh": "shij", "index": "xfjc_zb", "timetype": "cd",
            "name": "yjnr", "day": "2020-01-9,2020-01-10", "transformer": "@grouby:shij_02+@hb"}
    code, msg, test = get_dataframe_for_each_api(apis)

    print(code, msg, test)
