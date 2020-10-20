import json
import os

from flask import Flask, request, Response, render_template, jsonify, send_from_directory
from layers import parse_data  # get_parsed_data是所有的入口
from settings import PROJECT   # 导入项目名称、内置extensions
from flask_caching import Cache

project_settings = __import__(f"settings.{PROJECT}", globals(), locals(), ["DP_CONTAINER", "DP_ROOT"])  # 导入前端配置

DP_CONTAINER, DP_ROOT = project_settings.DP_CONTAINER, project_settings.DP_ROOT

app = Flask(__name__, template_folder=os.path.join(DP_CONTAINER, DP_ROOT), static_folder=os.path.join(DP_CONTAINER, DP_ROOT))

# 读取项目配置
app.config["PROJECT"] = PROJECT
app.config.from_object(f"settings.global")
app.config.from_object(f"settings.{PROJECT}")
app.config.from_object(f"settings.{PROJECT}.init_dicts")
app.config.from_object(f"settings.{PROJECT}.apis_dispatch")
app.config.from_object(f"settings.{PROJECT}.apis_plugins")

cache = Cache()
cache.init_app(app)
cache_timeout = app.config.get("CACHE_TIMEOUT", 60 * 60 * 24)

# 核心数据接口路由
@app.route('/api/<string:realm>/<string:index>/')
@cache.cached(timeout=cache_timeout, key_prefix=lambda : request.full_path)
def data_index_api(realm, index):
    """
    :param xf/xfjc_zb/?busin=xfj&timetype=cy&qh=shej&lx=xfxs
    """
    request_args = dict(request.args)
    # 兼容可能的解析请求参数时得到列表：部署时使用的anaconda3中的环境会解析成列表
    request_args_str = {i: request_args[i] for i in request_args if isinstance(request_args[i], str)}
    request_args_list = {i: request_args[i][0] for i in request_args if isinstance(request_args[i], list)}
    request_args = {**request_args_list, **request_args_str}

    # 得到解析的结果
    # convert层直接返回封装好的结果
    # 如果走插件过程，需要手动补充code和msg
    code, msg, parsed_data = parse_data(realm, index, request_args)
    if not code in [200, 201, 202]:
        parsed_data = {"code": code, "msg": msg, "data": {}}
    else:
        if code == 202:
            parsed_data["code"] = 202
            parsed_data["msg"] = msg
    response = Response(json.dumps(parsed_data, default=lambda x: int(x)), mimetype='application/json')
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'x-requested-with,content-type'
    return response


# 兼容数据接口路由
@app.route("/api/<string:realm>/", methods=['GET'])
@cache.cached(timeout=cache_timeout, key_prefix=lambda : request.full_path)
def data_index_api_noindex(realm):
    index = ""  # 如果路径中没有 index， 请求参数中必须有index
    return data_index_api(realm, index)


# 前端大屏路由
dp_dirs = [app.config[i] for i in dict(app.config) if i.startswith("DP_DIR")]


# index.html
@app.route(f"/<string:dp>/")
def get_index(dp):
    if dp in dp_dirs:
        return render_template(f"{dp}/index.html")
    if dp == "favicon.ico":
        return send_from_directory(os.path.join(app.root_path, DP_CONTAINER), "favicon.ico")
    else:
        return render_template(f"index.html")

# static resource (static/font/map)
def get_static_path(dp_dir, resource_type):
    return os.path.join(app.root_path, DP_CONTAINER, DP_ROOT, dp_dir, resource_type)
@app.route(f"/<string:dp_dir>/<string:resource_type>/<path:filename>")
def get_static(dp_dir, resource_type, filename):
    return send_from_directory(get_static_path(dp_dir, resource_type), filename)
# url.js
@app.route(f"/<string:dp_dir>/url.js")
def get_urljs(dp_dir):
    return send_from_directory(os.path.join(app.root_path, DP_CONTAINER, DP_ROOT, dp_dir), "url.js")
# dead json
@app.route("/api/<string:realm>/<string:dp_dir>/<path:filename>")
def get_deadjson(realm, dp_dir, filename):
    return send_from_directory(os.path.join(app.root_path, DP_CONTAINER, DP_ROOT, dp_dir, "data"), filename)


# 定时刷新任务的路由
@app.route("/refresh/")
def refresh_all():
    refresh = __import__(f"settings.{PROJECT}.refresh", globals(), locals(), ["refresh"])  # 导入前端配置
    refresh.refresh()
    return jsonify({"code": 200, "msg": "done", "data": {}})


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=3389, debug=app.config.get("DEBUG"))
