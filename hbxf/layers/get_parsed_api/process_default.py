def process_default(api_dict):
    # 2.1 默认值
    from app import app
    SPECIAL_PARAMS = app.config["SPECIAL_PARAMS"]
    params_with_default = {k: v[0] for k, v in SPECIAL_PARAMS.items() if isinstance(v[0], str)}
    params_with_default.update(api_dict)
    return 200, "success", params_with_default