
import re
import pandas as pd

from flask import request



def check_plugin_args(plugin_apis):
    """
    检查用户配置的 apis_plugins文件
    返回检查后的内容
    """
    if len(plugin_apis) != 1:
        return 400, "PluginLengthError: There are more than 1 plugin_config match", {}
    plugin_api = plugin_apis[0]
    fx_db_sql = plugin_api.get("fx_db_sql")
    zb_db_sql = plugin_api.get("zb_db_sql")
    mapping = plugin_api.get("map")
    on = plugin_api.get("on")
    time_format = plugin_api.get("time_format")
    value_map = plugin_api.get("value_map", [])
    if not mapping:
        return 400, "PluginMapError: No 'map' Found", {}
    if not fx_db_sql and not zb_db_sql:
        return 400, "PluginURLError: At least one URL, specify fx_db_sql or zb_db_sql"
    return 200, "success", {"fx_db_sql": fx_db_sql,
                            "zb_db_sql": zb_db_sql,
                            "mapping": mapping,
                            "on": on,
                            "time_format": time_format,
                            "value_map": value_map}


def get_value_mapped(df, value_map, kwargs, query_data):
    from app import app
    df = df.fillna("")
    for rule in value_map:
        if len(rule) == 4:
            new_column, old_column, rule_one, default = rule
        else:
            column, rule_one, default = rule
            new_column, old_column = column, column
        default = default.format(**kwargs, **app.config, query_data=query_data)
        if old_column in df:
            df[new_column] = df[old_column].apply(lambda x: rule_one.format(value=x or default, **app.config, **kwargs))
    return df


def get_data_from_dbs(results, kwargs):
    """
    从数据库中获取数据，按照df的格式返回
    """
    fx_db_sql = results.get("fx_db_sql")
    zb_db_sql = results.get("zb_db_sql")
    # from app import app
    # TIME_FORMAT = app.config["TIME_FORMAT"]
    # time_format = results.get("time_format", TIME_FORMAT)
    time_format = results.get("time_format")
    mapping = results.get("mapping")
    value_map = results.get("value_map")
    query_data = kwargs.pop("query_data", "")
    query_data = query_data.replace(",", "AND").replace(":", "=")
    from app import app
    fx_db_sql = fx_db_sql.format(query_data=query_data, **kwargs, **app.config)
    zb_db_sql = zb_db_sql.format(query_data=query_data, **kwargs, **app.config)
    fx_db_results, zb_db_results = [], []
    from utils.db_connection import fx_engine, zb_engine
    from utils.results2df import results2df
    from utils.time_format import df_formated_time
    from utils.results2df import df2results

    from utils.check_sql import check_sql
    num = check_sql(fx_db_sql) + check_sql(zb_db_sql)

    if check_sql(fx_db_sql):  # 需要走分析库
        try:
            fx_db_results = fx_engine.execute(fx_db_sql)
        except:
            return 400, "PluginSQLError: There must be some error in the fx_db_sql", {}
        fx_db_results = results2df(fx_db_results, fx_db_results.keys())
        # if value_map:
        fx_db_results = get_value_mapped(fx_db_results, value_map, kwargs, query_data)
        fx_db_results = df_formated_time(fx_db_results, time_format)
        if num == 1:
            if not set(mapping.keys()) <= set(fx_db_results.columns):
                return 400, f"PluginMapError: There are some errors in the param 'map', " \
                            f"These columns are not in df: [{set(mapping.keys()) - set(fx_db_results.columns)}]", {}
            else:
                fx_db_results = fx_db_results[[*mapping.keys()]]
                fx_db_results = df2results(fx_db_results)
        else:
            fx_db_results = df2results(fx_db_results)
    if check_sql(zb_db_sql):  # 需要走指标库
        try:
            zb_db_results = zb_engine.execute(zb_db_sql)
        except:
            return 400, "PluginSQLError: There must be some error in the zb_db_sql", {}
        zb_db_results = results2df(zb_db_results, zb_db_results.keys())
        # if value_map:
        zb_db_results = get_value_mapped(zb_db_results, value_map, kwargs, query_data)
        zb_db_results = df_formated_time(zb_db_results, time_format)

        if num == 1:
            if not set(mapping.keys()) <= set(zb_db_results.columns):
                return 400, f"PluginMapError: There are some errors in the param 'map', " \
                            f"These columns are not in df: [{set(mapping.keys()) - set(zb_db_results.columns)}]", {}
            else:
                zb_db_results = zb_db_results[[*mapping.keys()]]
                zb_db_results = df2results(zb_db_results)
        else:
            zb_db_results = df2results(zb_db_results)
    return 200, "success", {"fx_db_results": fx_db_results, "zb_db_results": zb_db_results}


def merge_and_select_data(fx_db_data, zb_db_data, results):
    """
    如果从指标库和分析库都获取了数据，需要融合两个df
    """
    on = results.get("on")
    mapping = results.get("mapping")
    time_format = results.get("time_format")
    fx_db_df = pd.DataFrame(fx_db_data)
    zb_db_df = pd.DataFrame(zb_db_data)
    if not on:
        on = list(set(fx_db_df.columns) & set(zb_db_df.columns))
    result_df = pd.merge(fx_db_df, zb_db_df, on=on)
    if not set(mapping.keys()) <= set(result_df.columns):
        return 400, f"PluginMapError: There are some errors in the param 'map', " \
                    f"These columns are not in df: [{set(mapping.keys()) - set(result_df.columns)}]", {}

    from utils.time_format import df_formated_time
    from utils.results2df import df2results
    result_df = result_df[[*mapping.keys()]]
    result_df = df_formated_time(result_df, time_format)
    res_list = df2results(result_df)
    return 200, "success", res_list


def get_plugined_apis(request_args):
    from app import app
    plugin_apis = [i for i in app.config.get("APIS_PLUGIN", []) if re.match(i.get("url"), request.full_path)]
    # 如果能够匹配到url，就需要走插件过程，否则直接返回
    if plugin_apis:
        # 检查url
        code, msg, results = check_plugin_args(plugin_apis)
        if code != 200:
            return code, msg, {}
        mapping = results.get("mapping")
        # 从数据库获取数据
        code, msg, data = get_data_from_dbs(results, request_args)
        if code != 200:
            return code, msg, {}
        fx_db_data, zb_db_data = data.get("fx_db_results"), data.get("zb_db_results")

        # 如果只有一个sql有效，说明可以直接返回
        from utils.check_sql import check_sql
        if check_sql(results.get("fx_db_sql")) + check_sql(results.get("zb_db_sql")) == 1:
            data = fx_db_data or zb_db_data
        # 两个sql都有数据，需要融合两个数据表
        else:
            code, msg, data = merge_and_select_data(fx_db_data, zb_db_data, results)
            if code != 200:
                return code, msg, data
        return 202, "success", {"map": mapping, "data": data}
    return 200, "success", {}
