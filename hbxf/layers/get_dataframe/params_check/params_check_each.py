import re


def params_check_each(apis_copy, special):
    checked_params = {}

    # 处理special中的信息
    # 默认值
    params_with_default = {k: v[0] for k, v in special.items() if isinstance(v[0], str)}
    checked_params.update(params_with_default)

    # 单独的参数校验
    for k, v in apis_copy.items():
        if k in special:  # 如果需要检验该参数
            condition = special[k][1]
            if condition:  # 如果该参数有条件
                if not re.match(condition, v):  # 如果不满足条件
                    return 400, f"ParamsStructureError: [{k}] must match {condition}", {}
    checked_params.update(apis_copy)

    # 处理默认值无法写的参数
    checked_params["value"] = apis_copy.get("value", checked_params["index"].split("_")[0])
    checked_params["ceil_value"] = apis_copy.get("ceil_value", checked_params["ceil"])

    # 其他检验
    # 1. table和确定table的参数必须有一个
    # 2. transformer 的特殊情况
    from app import app
    transformer = checked_params["transformer"]
    if transformer in ["@tb", "@hb"]:
        checked_params["value_new"] = "tb_hb"
    elif transformer == "@zb":
        checked_params["value_new"] = "zb"
    elif transformer[1:] in app.config["CUS_EXTENSIONS"]:
        pass
    elif transformer[1:] in app.config["EXTENSIONS"]:
        pass
    elif transformer[1:] == "":
        pass
    else:
        return 400, f"ParamsStructureError: [transformer] must be registered", {}

    #
    # # 将字段的默认值赋予参数字典
    # apis_copy["busin"] = busin
    # apis_copy["value"] = value
    # apis_copy["db_engine"] = db_engine
    # apis_copy["ceil_value"] = ceil_value
    # if transformer in ["@tb", "@hb"]:
    #     apis_copy["value_new"] = "tb_hb"
    # if transformer == "@zb":
    #     apis_copy["value_new"] = "zb"
    #
    # # ceil & ceil_value
    # ceil = params_dict.get("ceil")
    # ceil_value = params_dict.get("ceil_value")
    # if ceil and not ceil.isdigit():
    #     return 400, "ParamsStructureError: [ceil] must be number", {}
    # if ceil_value.isdigit():
    #     checked_params["ceil_value"] = int(ceil_value)
    #
    # # db_engine
    # db_engine = params_dict.get("db_engine", "zb_db")
    # checked_params["db_engine"] = db_engine
    # if db_engine not in ["zb_db", "fx_db"]:
    #     return 400, "ParamsStructureError: [db_engine] must be fx_db or zb_db", {}

    return 200, "success", checked_params