import os
import sys
import pandas as pd
from flask import jsonify

from utils.error_page import InvalidUsage


def init_project():
    from app import app

    # # 1. 融合系统参数和项目参数
    # # 融合初始化信息
    # INITIALIZATION = app.config.get("INITIALIZATION", {})
    # CUS_INITIALIZATION = app.config.get("CUS_INITIALIZATION", {})
    # app.config["INITIALIZATION"] = {**INITIALIZATION, **CUS_INITIALIZATION}

    # 1. 融合特殊参数信息
    SYS_SPECIAL_PARAMS = app.config["SYS_SPECIAL_PARAMS"]
    CUS_SPECIAL_PARAMS = app.config.get("CUS_SPECIAL_PARAMS", {})
    app.config["SPECIAL_PARAMS"] = {**SYS_SPECIAL_PARAMS, **CUS_SPECIAL_PARAMS}

    # 2. 融合extension信息[可能重复，CUS中复写了系统的extension]
    SYS_EXTENSIONS = app.config["SYS_EXTENSIONS"]
    CUS_EXTENSIONS = app.config.get("CUS_EXTENSIONS", [])
    EXTENSIONS = SYS_EXTENSIONS + CUS_EXTENSIONS
    app.config["EXTENSIONS"] = EXTENSIONS

    # 3. 融合param_trans信息[可能重复，CUS中复写了系统的param_trans]
    SYS_PARAM_TRANS = app.config["SYS_PARAM_TRANS"]
    CUS_PARAM_TRANS = app.config.get("CUS_PARAM_TRANS", [])
    PARAM_TRANS = SYS_PARAM_TRANS + CUS_PARAM_TRANS
    app.config["PARAM_TRANS"] = PARAM_TRANS

    # 99. 配置检查
    from utils.config_check import ConfigCheck
    ConfigCheck(app.config)
    print("[ok]----Config Checked")

    # 100. 通过shej_02+shij_02+xj_02加载qh_info
    path = app.config["INITIALIZATION_FILE_PATH"]
    if "shej_02+shij_02+xj_02" in os.listdir(path):
        qh_info = "shej_02+shij_02+xj_02"
    else:
        qh_info = "shij_02+xj_02"
    app.config["QH_INFO"] = pd.read_csv(os.path.join(path, qh_info), sep=app.config.get("INITIALIZATION_FILE_SEP", "\t"))




    # @app.errorhandler(400)
    # def error(code):
    #     from utils.get_error_msg import get_error_msg
    #     return {"code": code, "msg": get_error_msg(code)}
    #
    # # 101. 拦截全局异常
    # @app.errorhandler(InvalidUsage)
    # def handle_invalid_usage(error):
    #     response = jsonify(error.to_dict())
    #     # response.status_code = error.status_code
    #     return response