def init_project():
    from app import app

    # 1. 融合系统参数和项目参数
    # 融合初始化信息
    INITIALIZATION = app.config["INITIALIZATION"]
    CUS_INITIALIZATION = app.config.get("CUS_INITIALIZATION", {})
    app.config["INITIALIZATION"] = {**INITIALIZATION, **CUS_INITIALIZATION}

    # 融合特殊参数信息
    SPECIAL_PARAMS = app.config["SPECIAL_PARAMS"]
    CUS_SPECIAL_PARAMS = app.config.get("CUS_SPECIAL_PARAMS", {})
    app.config["SPECIAL_PARAMS"] = {**SPECIAL_PARAMS, **CUS_SPECIAL_PARAMS}

    # 融合extension信息[可能重复，CUS中复写了系统的extension]
    EXTENSIONS = app.config["EXTENSIONS"]
    CUS_EXTENSIONS = app.config.get("CUS_EXTENSIONS", [])
    EXTENSIONS.extend(CUS_EXTENSIONS)
    app.config["EXTENSIONS"] = EXTENSIONS
