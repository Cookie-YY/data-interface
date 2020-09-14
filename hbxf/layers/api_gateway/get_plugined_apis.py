import re
import pandas as pd

from flask import request


def get_data_from_db(fx_db_url, zb_db_url, mapping, kwargs):
    fx_db_url = fx_db_url.format(**kwargs)
    zb_db_url = zb_db_url.format(**kwargs)
    fx_db_results, zb_db_results = [], []
    from utils.db_connection import fx_engine, zb_engine
    from utils.results2df import results2df
    if fx_db_url:  # 需要走分析库
        try:
            fx_db_results = fx_engine.execute(fx_db_url)
        except:
            return 400, "PluginSQLError: There must be some error in the fx_db_url", {}
        fx_db_results = results2df(fx_db_results)
        # fx_db_results = [dict(zip(result.keys(), result)) for result in fx_db_results]
    if zb_db_url:  # 需要走指标库
        try:
            zb_db_results = zb_engine.execute(zb_db_url)
        except:
            return 400, "PluginSQLError: There must be some error in the zb_db_url", {}
        zb_db_results = results2df(zb_db_results)
        # zb_db_results = [dict(zip(result.keys(), result)) for result in zb_db_results]
    return 200, "success", {"fx_db_results": fx_db_results, "zb_db_results": zb_db_results}


def check_plugin_args(plugin_apis):
    if len(plugin_apis) != 1:
        return 400, "PluginLengthError: There are more than 1 plugin_config match", {}
    plugin_api = plugin_apis[0]
    # sql = plugin_api["sql"]
    fx_db_url = plugin_api.get("fx_db_url")
    zb_db_url = plugin_api.get("zb_db_url")
    map = plugin_api.get("map")
    on = plugin_api.get("on")
    if not map:
        return 400, "PluginMapError: No 'map' Found", {}
    if not fx_db_url and not zb_db_url:
        return 400, "PluginURLError: At least one URL, specify fx_db_url or zb_db_url"
    return 200, "success", {"fx_db_url": fx_db_url, "zb_db_url": zb_db_url, "map": map, "on": on}


def merge_and_select_data(fx_db_data, zb_db_data, mapping, on):
    fx_db_df = pd.DataFrame(fx_db_data)
    zb_db_df = pd.DataFrame(zb_db_data)
    if not on:
        on = list(set(fx_db_df.columns) & set(zb_db_df.columns))
    result_df = pd.merge(fx_db_df, zb_db_df, on=on)
    result_df = result_df[[*mapping.keys()]]

    res_list = []
    for value in result_df.values.tolist():
        res_one = {list(result_df.columns)[i]: value[i] for i in range(len(value))}
        res_list.append(res_one)
    return 200, "success", res_list


def get_plugined_apis(request_args):
    from app import app
    plugin_apis = [i for i in app.config.get("APIS_PLUGIN") if re.match(i.get("url"), request.full_path)]
    if plugin_apis:
        code, msg, results = check_plugin_args(plugin_apis)
        if code != 200:
            return code, msg, {}
        fx_db_url = results.get("fx_db_url")
        zb_db_url = results.get("zb_db_url")
        on = results.get("on")
        mapping = results.get("map")
        code, msg, data = get_data_from_db(fx_db_url, zb_db_url, mapping, request_args)
        if code != 200:
            return code, msg, {}
        fx_db_data, zb_db_data = data.get("fx_db_results"), data.get("zb_db_results")

        if bool(fx_db_url) + bool(zb_db_url) == 1:
            data = fx_db_data or zb_db_data
        else:
            code, msg, data = merge_and_select_data(fx_db_data, zb_db_data, mapping, on)
            if code != 200:
                return code, msg, data
        return 202, "success", {"map": mapping, "data": data}
    return 200, "success", {}
