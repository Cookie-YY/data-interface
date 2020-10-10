import re

from .params_parse_conditions import get_conditions
from .parse_transformer import parse_transformer_conditions


def params_parse(**kwargs):
    """
    将获得的参数以表名为键的字典形式返回
    1. 第一张表：是从参数中直接拼出来的，需要兼容四种情况（有没有shej，有没有zb）
                条件：参数中剩下的  和 transformer算子的额外需要的
    2. 第二张表：从transformer算子额外需要的【指定table】
    main_name是指标的名字，也可能是"", 没有名字
    apis：
        {"realm": "xf", "index": "xfjc", "name": "yjnr-ejnr"}
        {"realm": "xf", "index": "xfjc", "name": "cfxfbz", "transformer": "@groupby:cfxfbz+@zb:cfxfbz/cfxfbz", "day":"[2020-02-02,2020-02-03]"}
        {"realm": "xf", "index": "xfjc", "name": "djjg", "transformer": "@groupby:djjg+@tb", "day":"[2020-02-02,2020-02-03]"}
    waiting_for_search: [
        {"table": "", "ex_table": ex_table, "columns": ["year", "month", "xfjc"], "conditions": [ [ ],[ ] ]},
        {"table": "", "ex_table": ex_table, "columns": ["year", "month", "xfjc"], "conditions": [ [ ],[ ] ]}
    ]
    """

    # 每个指标最多用到2张表，每张表最多抽取3个字段(name, stack, value)，
    waiting_for_search = []
    table1 = {}
    parsed_content = kwargs.get("parsed_check_content")  # 从参数检查中获得的内容

    # 1.1 解析第一张表的表名[table]
    real_table = parsed_content.get("real_table")
    table1["table"] = real_table.get("table")
    table1["ex_table"] = real_table.get("ex_table")

    # 1.2 解析第一张表的字段[columns]
    columns = f'{kwargs.get("name")},{kwargs.get("stack")},{kwargs.get("value")}'
    columns = [i for i in columns.split(",") if i]  # 从参数中得到第一张表的字段
    table1["columns"] = columns

    # 1.3 解析第一张表的条件[conditions]
    table1["conditions"] = []
    code, msg, condition1_1 = get_conditions(real_table.get("ex_table"), kwargs.get("apis"))  # 把剩下的条件传过去得到条件
    if code != 200:
        return code, msg, {}
    table1["conditions"].append(condition1_1)

    # 1.3 解析第一张表的transformer条件[conditions]
    transformer = kwargs.get("transformer")  # 重点解析对象
    apis = kwargs.get("apis")  # 用于搜索的条件
    """
    {"realm": "xf", "index": "xfjc", "name": "yjnr-ejnr"}
    {"realm": "xf", "index": "xfjc", "name": "cfxfbz", "transformer": "@groupby:cfxfbz+@zb:cfxfbz/cfxfbz", "day":"[2020-02-02,2020-02-03]"}
    {"realm": "xf", "index": "xfjc", "name": "djjg", "transformer": "@groupby:djjg+@tb", "day":"[2020-02-02,2020-02-03]"}
    """
    code, msg, condition1_2 = parse_transformer_conditions(transformer, real_table, apis)
    if code != 200:
        return code, msg, {}
    if condition1_2:
        table1["conditions"].append(condition1_2)

    waiting_for_search.append(table1)

    # 解析第二张表的信息：存在第二张表只有一种情况，transformer 中有 table 出现的情况
    # table2是个大字典：
    #       {"table": "", "ex_table": ex_table, "columns": ["year", "month", "xfjc"], "conditions": [ [ ],[ ] ]}
    # table2 = parse_transformer_table(transformer, kwargs.get("value"))

    return 200, "success", waiting_for_search




