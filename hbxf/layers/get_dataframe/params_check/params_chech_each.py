def params_chech_each(params_dict):
    checked_params = {}
    # ceil & ceil_value
    ceil = params_dict.get("ceil")
    ceil_value = params_dict.get("ceil_value")
    if ceil and not ceil.isdigit():
        return 400, "ParamsStructureError: [Ceil] must be number", {}
    if ceil_value.isdigit():
        checked_params["ceil_value"] = int(ceil_value)

    return 200, "success", checked_params