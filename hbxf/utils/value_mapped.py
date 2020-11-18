import re
import pandas as pd


def value_mapped(df, map_type="VALUE_MAP", apis_copy=None):
    """
    将计算完的结果做一次映射
    """
    if apis_copy is None:
        apis_copy = {}
    from app import app
    config_map = app.config.get(map_type, {})  # {"xfxs": {"网信"： "网上投诉|网上信访"}}
    for col, mapping in config_map.items():
        if col in df:  # 如果目标字段在df中
            for after, condition in mapping.items():  # 字段的多中映射方法
                df[col] = df[col].apply(lambda x: after if re.match(condition, str(x)) else x)
    return df

