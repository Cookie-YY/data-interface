def get_dataframe_for_each_api(apis):
    """
    ###########获取相关信息（解析参数）##########
    apis：
        {"realm": "xf", "index": "xfjc", "name": "yjnr-ejnr"}
        {"realm": "xf", "index": "xfjc", "name": "cfxfbz", "transformer": "@groupby:cfxfbz+@zb:cfxfbz/cfxfbz", "day":"[2020-02-02,2020-02-03]"}
        {"realm": "xf", "index": "xfjc", "name": "djjg", "transformer": "@groupby:djjg+@tb", "day":"[2020-02-02,2020-02-03]"}
    输出：dataframe
    输入一个 apis(字典)     输出一个 dataframe
    """
    apis_copy = apis.copy()

    # 确定指标表
    realm = apis.pop("realm")                           # 查询表的成分
    busin = apis.pop("busin", "xfj")                    # 查询表的成分
    timetype = apis.pop("timetype", "")                 # 查询表的成分
    qh = apis.pop("qh", "")                             # 查询表的成分
    lx = apis.pop("lx", "")                             # 查询表的成分
    index = apis.pop("index", "")                       # 查询表的成分
    table = apis.pop("table", "")

    # 查询的字段
    name = apis.pop("name", "")                         # 查询的字段 & 转成pd.df时将这一列命名为 name
    value = apis.pop("value", index.split("_")[0])      # 查询的字段 & 转成pd.df时将这一列命名为 value
    stack = apis.pop("stack", "")                       # 查询的字段 & 给到转换层
    direct_order = apis.pop("direct_order", "")         # 直接在查数据库时就限制，提升性能
    direct_limit = apis.pop("direct_limit", "")         # 直接在查数据库时就限制，提升性能

    transformer = apis.pop("transformer", "")           # 可能的额外的操作，处理 累加/同比/环比/占比
    # 辅助查询条件
    order = apis.pop("order", "").split(",")            # 查询表的条件
    limit = apis.pop("limit", "")                       # 查询表的条件 | 给到包装层    limit=10  limit=10+其他
    if "+" in limit:
        limit = ""
    # 高级属性
    full = apis.pop("full", "")
    makeup = apis.pop("makeup", "")                        # (补零) 避免条件中存在 & 给到包装层
    strictorder = apis.pop("strictorder", "")              # (排序) 避免条件中存在 & 给到包装层
    # limit_inner = apis.pop("limit_inner", "999999999")   # 避免条件中存在 & 给到包装层  limit_inner=10  limit_inner=10+其他
    # limit_outer = apis.pop("limit_outer", "999999999")   # 避免条件中存在 & 给到包装层  limit_outer=10  limit_outer=10+其他
    name_limit = apis.pop("name_limit", "999999999")       # 避免条件中存在 & 给到包装层  limit_inner=10  limit_inner=10+其他
    stack_limit = apis.pop("stack_limit", "999999999")     # 避免条件中存在 & 给到包装层  limit_outer=10  limit_outer=10+其他
    # ceil 和 ceil_value
    ceil = apis.pop("ceil", "")                            # 数值上限
    ceil_value = apis.pop("ceil_value", ceil)              # 达到上限后显示的内容

    query_data = apis.pop("query_data")

    # 将字段的默认值赋予参数字典
    apis_copy["busin"] = busin
    apis_copy["value"] = value
    apis_copy["ceil_value"] = ceil_value

    # # 以下做了假数据处理兼容，正常需要改回来
    # day = apis.pop("day", "")
    # if day:
    #     day = "[2019-01-01,2020-03-03]"
    #     apis_copy["day"] = day
    #     apis["day"] = day

    # 参数校验
    from layers.get_dataframe.params_check import params_check
    code, msg, parsed_check_content = params_check(**locals())
    if code != 200:
        return code, msg, {}
    apis_copy.update(parsed_check_content["checked_params"])  # 检查后的参数可能会有改动，更新给apis_copy

    # 参数解析
    from layers.get_dataframe.params_parse import params_parse
    code, msg, waiting_for_search = params_parse(**locals())
    if code != 200:
        return code, msg, {}

    # 数据库查询
    from layers.get_dataframe.params_search import params_search
    code, msg, results = params_search(waiting_for_search, direct_order, direct_limit)
    if code != 200:
        return code, msg, {}
    if results == [[[]]]:
        return 201, "empty data", {}

    # 得到最终dataframe
    from layers.get_dataframe.params2dataframe import params2dataframe
    # 1. limit=10+其他/limit_inner=10+其他/limit_outer=10+其他
    # 2. name/value/stack
    # 3. makeup/strictorder
    code, msg, df = params2dataframe(results, apis_copy)
    if code != 200:
        return code, msg, {}

    # return 200, "success", results
    dataframe = {**apis_copy, **{"df": df}}
    dataframe["table"] = [i.get("table") for i in waiting_for_search if "table" in i]
    return 200, "success", dataframe


if __name__ == '__main__':
    apis = {'realm': "xf", 'value': 'xfjc', 'lx': "yjnr", "qh": "shij", "index": "xfjc_zb", "timetype": "cd", "name": "yjnr", "day": "2020-01-9,2020-01-10", "transformer": "@grouby:shij_02+@hb"}
    code, msg, test = get_dataframe_for_each_api(apis)

    print(code, msg, test)
