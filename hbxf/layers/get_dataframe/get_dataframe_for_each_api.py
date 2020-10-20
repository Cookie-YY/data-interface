from layers.get_dataframe.get_dataframe_common import get_dataframe_common
from layers.get_dataframe.get_dataframe_extensions import get_dataframe_extensions


def get_dataframe_for_each_api(apis):
    apis_copy = apis.copy()

    # 特殊参数的校验，和删除
    from app import app
    sys_special = app.config.get("SPECIAL_PARAMS", {})
    cus_special = app.config.get("CUS_SPECIAL_PARAMS", {})
    special = {**sys_special, **cus_special}
    for k, v in special.items():
        if not ((v[0] is False or isinstance(v[0], str)) and (v[1] is None or isinstance(v[1], str))):
            return 400, "ConfigError: The element in SPECIAL_PARAMS must be (False or str, str)", {}
        apis.pop(k, "")  # 删除所有特殊参数

    # 区分普通过程和extension过程
    transformer = apis_copy.get("transformer", "@")  # 此时还没有经过check的步骤
    if transformer[1:] in app.config.get("CUS_EXTENSIONS", []):
        code, msg, dataframe = get_dataframe_extensions(apis_copy, apis, special)
    else:
        code, msg, dataframe = get_dataframe_common(apis_copy, apis, special)
    if code != 200:
        return code, msg, {}
    return 200, "success", dataframe
