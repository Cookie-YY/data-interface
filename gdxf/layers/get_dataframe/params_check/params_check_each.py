import re


def params_check_each(apis, special_name="SPECIAL_PARAMS"):
    apis_copy = apis.copy()

    # 1. 特殊参数的校验，和删除
    from app import app
    SPECIAL_PARAMS = app.config.get(special_name, {})
    for k, v in SPECIAL_PARAMS.items():
        if not ((v[0] is False or isinstance(v[0], str)) and (v[1] is None or isinstance(v[1], str))):
            return 400, "ConfigError: The element in SPECIAL_PARAMS must be (False or str, str)", {}
        apis.pop(k, "")  # 删除所有特殊参数

    checked_params = {}

    # 2. 处理special中的信息
    # 2.1 默认值
    params_with_default = {k: v[0] for k, v in SPECIAL_PARAMS.items() if isinstance(v[0], str)}
    checked_params.update(params_with_default)

    # 2.2 单独的参数校验
    for k, v in apis_copy.items():
        if k in SPECIAL_PARAMS:  # 如果需要检验该参数: special={"timetype": ("", "cy|cm|cd")}
            condition = SPECIAL_PARAMS[k][1]
            if condition and v:  # 如果该参数有条件 并且 v 有值
                if not re.match(condition, v):  # 如果不满足条件
                    return 400, f"ParamsStructureError: [{k}] must match {condition}", {}
    checked_params.update(apis_copy)

    # 3. 处理默认值无法写的参数
    # value
    index = checked_params.get("index")
    table = checked_params.get("table")
    index_defalut = index.split("_")[0] if index else table.split("_")[-1]
    checked_params["value"] = apis_copy.get("value", index_defalut)

    # ceil_value
    checked_params["ceil_value"] = apis_copy.get("ceil_value", checked_params["ceil"])

    # 4. 其他检验
    # 4.1 table和确定table的参数必须有一个
    # 4.2 transformer 的特殊情况
    from app import app
    transformer = checked_params["transformer"]
    if transformer == "@tb":
        checked_params["value_new"] = "tb"
    if transformer == "@tb":
        checked_params["value_new"] = "hb"
    elif transformer == "@zb":
        checked_params["value_new"] = "zb"
        pass
    elif transformer[1:] in app.config["EXTENSIONS"]:
        pass
    elif transformer[1:] == "":
        pass
    else:
        return 400, f"ParamsStructureError: [transformer] must be registered", {}

    return 200, "success", {"apis_copy": checked_params, "apis": apis}
