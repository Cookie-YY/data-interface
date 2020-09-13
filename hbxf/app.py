import json
from flask import Flask, request, Response, render_template, jsonify
from layers import parse_data  # get_parsed_data是所有的入口
from settings import PROJECT   # 导入项目名称
project_settings = __import__(f"settings.{PROJECT}", globals(), locals(), ["DP_DIR", "DP_URL"])  # 导入前端配置

DP_DIR, DP_URL = project_settings.DP_DIR, project_settings.DP_URL

app = Flask(__name__, template_folder=DP_DIR, static_folder=DP_DIR)

# 读取项目配置
app.config.from_object(f"settings.{PROJECT}")
app.config.from_object(f"settings.{PROJECT}.init_dicts")
app.config.from_object(f"settings.{PROJECT}.apis_dispatch")
app.config.from_object(f"settings.{PROJECT}.apis_plugins")

# 跨域配置
from flask_cors import CORS
CORS(app, supports_credentials=True)


# 核心数据接口路由
@app.route('/api/<string:realm>/<string:index>/')
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
    code, msg, parsed_data = parse_data(realm, index, request_args)
    if code == 202:
        parsed_data["code"] = 200
        parsed_data["msg"] = msg
        return Response(json.dumps(parsed_data, default=lambda x: int(x)), mimetype='application/json')
    if code != 200:
        parsed_data = {"code": code, "msg": msg, "data": {}}
    return Response(json.dumps(parsed_data, default=lambda x: int(x)), mimetype='application/json')


# 兼容数据接口路由
@app.route("/api/<string:realm>/", methods=['GET'])
def data_index_api_noindex(realm):
    index = "none"  # 如果路径中没有 index， 请求参数中必须有index
    return data_index_api(realm, index)


# 前端大屏路由
@app.route(f"{DP_URL}")
def hbxfdp():
    return render_template("index.html")


# 定时刷新任务的路由
@app.route("/refresh/")
def refresh_all():
    from refresh import refresh
    refresh()
    return jsonify({200, "success", {}})


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=3389, debug=app.config.get("DEBUG"))
