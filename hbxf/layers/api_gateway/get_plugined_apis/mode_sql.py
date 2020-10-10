from itertools import product

from utils.check_sql import check_sql
from utils.parse_compute import parse_judge
from utils.results2df import results2df
from utils.results2df import df2results

import pandas as pd


def get_variables_from_sql_mode(results, format_pool_sql):
    """
    "variables":
        {"v_table": "{query_date}==信访日期 then xf_xfj_cd_djjg_xfxs_xfrqxfjc;"
                    "{query_date}==登记日期 then xf_xfj_cd_djjg_xfxs_djrqxfjc;"
                    "{query_date}==交换日期 then xf_xfj_cd_djjg_xfxs_jhrqxfjc;",
        "v_select": "{query_date}==信访日期 then xfrqxfjc;"
                    "{query_date}==登记日期 then djrqxfjc;"
                    "{query_date}==交换日期 then jhrqxfjc;"},
    """
    variables = results.get("variables", {})
    for k, v in variables.items():
        v = v.format(**format_pool_sql)
        for combine in v.split(";"):
            if "then" in combine:
                condition, value = combine.split("then")
                condition = condition.strip()
                code, msg, res = parse_judge(condition.strip())
                if code != 200:
                    return code, msg, res
                if res:
                    variables[k] = value
    if "then" in "".join(variables.values()):
        return 400, "there are no-match variables in sql mode ", {}
    return 200, "success", variables


def get_initdict_from_sql_mode(results, format_pool_sql):
    """
     "full": {"name": "{INITIALIZATION}['xfxs']", "value": [0], "query": "{INITIALIZATION}['xfxs']"}
    """
    full = results.get("full", {})
    for k, v in full.items():  # {"name": "xfxs", "query": "xfxs"}
        if isinstance(v, list):
            pass
        elif isinstance(v, str):
            from app import app
            if v not in app.config.get("INITIALIZATION"):
                return 400, f"PluginSQLModeError: full params point to wrong direction {v}", {}
            full[k] = app.config.get("INITIALIZATION").get(v)
        else:
            return 400, f"PluginSQLModeError: full params contains invalid key {k}", {}
    return 200, "success", full


def get_value_mapped(df, value_map, format_pool_sql):
    df = df.fillna("")
    for rule in value_map:
        if len(rule) == 4:
            new_column, old_column, rule_one, default = rule
        else:
            column, rule_one, default = rule
            new_column, old_column = column, column
        default = default.format(**format_pool_sql)
        if old_column in df:
            from app import app
            df[new_column] = df[old_column].apply(lambda x: rule_one.format(value=x or default, **app.config, **kwargs))
    return df


def df_after_full(db_results, init_dicts):
    seen = init_dicts.pop("seen", {})  # {"name": ["query"]}
    init_df = pd.DataFrame(product(*[init_dicts.get(i, [""]) for i in db_results.columns]), columns=db_results.columns)
    if "value" in db_results.columns:
        on = list(db_results.columns)
        on.remove("value")
        res = pd.merge(init_df, db_results, how="left", on=on)
        res["value"] = res["value_y"].apply(lambda x: init_dicts["value"][0] if pd.isna(x) else x)
        return res[db_results.columns]
    else:
        return init_df


def get_data_from_db(sql, db, results, format_pool_sql, num, init_dicts):
    time_format = results.get("time_format")
    mapping = results.get("mapping")
    value_map = results.get("value_map")
    sql = sql.format(**format_pool_sql)

    try:
        db_results = db.execute(sql)
    except:
        return 400, f"PluginSQLError: There must be some error in the sql {sql}", {}

    db_results = results2df(db_results, db_results.keys())                 # 转df
    db_results = get_value_mapped(db_results, value_map, format_pool_sql)  # 做映射
    from utils.time_format import df_formated_time
    db_results = df_formated_time(db_results, time_format)                 # 格式化时间
    db_results = df_after_full(db_results, init_dicts)                     # full之后的df
    if num == 1:
        if not set(mapping.keys()) <= set(db_results.columns):
            return 400, f"PluginMapError: There are some errors in the param 'map', " \
                        f"These columns are not in df: [{set(mapping.keys()) - set(db_results.columns)}]", {}
        else:
            db_results = db_results[[*mapping.keys()]]
            db_results = df2results(db_results)
    else:
        db_results = df2results(db_results)
    return 200, "success", db_results


def get_data_from_dbs(results, format_pool_sql, init_dicts):
    """
    从数据库中获取数据，按照df的格式返回
    """
    fx_db_sql = results.get("fx_db_sql")
    zb_db_sql = results.get("zb_db_sql")
    num = check_sql(fx_db_sql) + check_sql(zb_db_sql)
    fx_db_results, zb_db_results = [], []
    from utils.db_connection import fx_engine, zb_engine
    if check_sql(fx_db_sql):  # 需要走分析库
        code, msg, fx_db_results = get_data_from_db(fx_db_sql, fx_engine, results, format_pool_sql, num, init_dicts)
        if code != 200:
            return code, msg, {}
    if check_sql(zb_db_sql):  # 需要走指标库
        code, msg, zb_db_results = get_data_from_db(zb_db_sql, zb_engine, results, format_pool_sql, num, init_dicts)
        if code != 200:
            return code, msg, {}
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

    result_df = result_df[[*mapping.keys()]]
    from utils.time_format import df_formated_time
    result_df = df_formated_time(result_df, time_format)
    res_list = df2results(result_df)
    return 200, "success", res_list


def get_sql_apis(results, format_pool_sql):
    """
    SQL 模式：
    request_args: 请求参数
    results: 解析到的配置
    """
    # 处理sql模式中的自定义变量
    code, msg, variables = get_variables_from_sql_mode(results, format_pool_sql)
    if code != 200:
        return code, msg, {}
    format_pool_sql.update(**variables)

    # 处理sql模式中的full
    code, msg, init_dicts = get_initdict_from_sql_mode(results, format_pool_sql)
    if code != 200:
        return code, msg, {}

    # 从数据库获取数据
    code, msg, data = get_data_from_dbs(results, format_pool_sql, init_dicts)
    if code != 200:
        return code, msg, {}
    fx_db_data, zb_db_data = data.get("fx_db_results"), data.get("zb_db_results")

    # 如果只有一个sql有效，说明可以直接返回
    if check_sql(results.get("fx_db_sql")) + check_sql(results.get("zb_db_sql")) == 1:
        data = fx_db_data or zb_db_data
    # 两个sql都有数据，需要融合两个数据表
    else:
        code, msg, data = merge_and_select_data(fx_db_data, zb_db_data, results)
        if code != 200:
            return code, msg, data
    return 200, "success", data


if __name__ == '__main__':
    variables = {"v_table": "{query_date}==信访日期 then xf_xfj_cd_djjg_xfxs_xfrqxfjc;"
                        "{query_date}==登记日期 then xf_xfj_cd_djjg_xfxs_djrqxfjc;"
                        "{query_date}==交换日期 then xf_xfj_cd_djjg_xfxs_jhrqxfjc;",
            "v_select": "{query_date}==信访日期 then xfrqxfjc;"
                        "{query_date}==登记日期 then djrqxfjc;"
                        "{query_date}==交换日期 then jhrqxfjc;"}
    format_pool_sql = {"query_date": "登记日期"}
    t = get_variables_from_sql_mode(variables, format_pool_sql)
    print(t)
