import re

from flask import request

def get_data_from_db(db, sql, kwargs):
    sql = sql.format(**kwargs)
    from utils.db_connection import zb_engine, fx_engine
    db_dict = {"FX_DB": fx_engine, "ZB_DB": zb_engine}
    results = db_dict.get(db).execute(sql)
    data = [dict(zip(result.keys(), result)) for result in results]
    return data

def get_plugined_apis(request_args):
    from app import app
    plugin_apis = [i for i in app.config.get("APIS_PLUGIN") if re.match(i.get("url"), request.full_path)]
    if plugin_apis:
        if len(plugin_apis) != 1:
            return 400, "PluginLengthError: There are more than 1 plugin_config match", {}
        plugin_api = plugin_apis[0]
        sql = plugin_api["sql"]
        db = plugin_api["db"]
        map = plugin_api["map"]
        data = get_data_from_db(db, sql, request_args)
        return 202, "success", {"map": map, "data": data}

    return 200, "success", {}

