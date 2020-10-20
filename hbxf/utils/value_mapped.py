import re
import pandas as pd


def value_mapped(content, map_type=None, apis_copy=None):
    """
    支持df类型 默认走VALUE_MAP
    支持dict类型 默认走PARAM_MAP
    """
    temp = lambda x: after if re.match(condition, str(x)) else x
    if isinstance(content, dict):
        default_map, default_apis_copy = "PARAM_MAP", None
        map_func = lambda x: temp(x)

    elif isinstance(content, pd.DataFrame):
        default_map, default_apis_copy = "VALUE_MAP", None
        map_func = lambda x: x.apply(temp)

    else:
        return
    map_type = map_type or default_map
    apis_copy = apis_copy or default_apis_copy

    if apis_copy is None:
        apis_copy = {}
    from app import app
    config_map = app.config.get(map_type, {})  # {"shij_02": {"网信"： "网上投诉|网上信访"}}
    for col, mapping in config_map.items():
        if col in content:
            for after, condition in mapping.items():
                content[col] = map_func(content[col])
    return content




#
# def dict_value_mapped(dt, map_type="PARAM_MAP", apis_copy=None):
#     temp = lambda x: after if re.match(condition, str(x)) else x
#     if apis_copy is None:
#         apis_copy = {}
#     from app import app
#     parm_map = app.config.get(map_type, {})  # {"shij_02": {"网信"： "网上投诉|网上信访"}}
#     for col, mapping in parm_map.items():
#         if col in dt:
#             for after, condition in mapping.items():
#                 dt[col] = temp(dt[col])
#     return dt
#
#
# def df_value_mapped(df, map_type="VALUE_MAP", apis_copy=None):
#     # df = dataframe["df"]
#     # value_map_bool = dataframe.get("value_map")  # value_map: "xfxs:true;"
#     if apis_copy is None:
#         apis_copy = {}
#     from app import app
#     value_map = app.config.get(map_type, {})  # {"xfxs": {"网信"： "网上投诉|网上信访"}}
#     for col, mapping in value_map.items():
#         if col in df.columns:
#             for after, condition in mapping.items():
#                 df[col] = df[col].apply(lambda x: after if re.match(condition, str(x)) else x)
#     return df
#
