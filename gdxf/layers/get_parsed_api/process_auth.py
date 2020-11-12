from flask import g

def process_auth(api_dict):
    level_auth_code = g.get("level_auth", "")
    if not level_auth_code:
        return api_dict
    from app import app
    LEVEL_AUTH_MAP = app.config.get("LEVEL_AUTH_MAP", {})
    auth_ceiling = LEVEL_AUTH_MAP.get("level_auth_code", {})  # 如果code=440100, 权限天花板：{"shij_02": "广州市"}

    # 如何判断越权

    # 简单实现
    if api_dict.get("shej_02") and "shij_02" in auth_ceiling:
        api_dict.pop("shej_02")
        api_dict.update(auth_ceiling)
    return api_dict