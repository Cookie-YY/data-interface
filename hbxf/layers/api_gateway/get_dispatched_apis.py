import re

def after_param_protect(param_protect, request_args_copy):
    # param_protect = request_args_copy.get("param_protect","")
    black_list = re.search(r"black_list\((.*?)\)", param_protect)
    white_list = re.search(r"white_list\((.*?)\)", param_protect)
    if black_list:
        bk_list = black_list.groups()[0].split(";")
        for i in bk_list:
            request_args_copy.pop(i, "")
    elif white_list:
        wt_list = white_list.groups()[0].split(";")
        [request_args_copy.pop(i) for i in list(request_args_copy.keys()) if i not in wt_list]
    else:
        pass

    return request_args_copy


def url2dict(url):
    url = url.split("?")[1]
    request_args = {}
    for item in url.split("&"):
        if item:
            k, v = item.split("=", 1)
            if k:
                request_args[k] = v
    return request_args


def check_graph_id_dict(graph_id_dict):
    # # 检查是否所有key都是 gd_id0 的格式
    # for graph_id in graph_id_dict:
    #     if not re.match(r"gd_id[-]?\d+", graph_id):
    #         return 400, f"GRAPHIDERROR: The structure must be graph_id and number {graph_id}", {}

    # 按照数字排序
    graph_id_list = sorted(graph_id_dict, key=lambda x: int(x.strip("gd_id")))
    graph_id_list = [graph_id_dict[i] for i in graph_id_list]
    graph_id = "_".join(graph_id_list)

    # 检查是否在settings中存在映射
    from app import app
    url_dispatch_map = app.config["URL_DISPATCH_MAP"]

    url = None
    for graph_id_assigned in url_dispatch_map:
        if re.match(graph_id_assigned, graph_id):
            url = url_dispatch_map[graph_id_assigned]
    if url is None:
    # if graph_id not in url_dispatch_map:
        return 400, f"GRAPHIDERROR: No such specific gd_id combinations {graph_id}", {}
    # url = url_dispatch_map[graph_id]

    return 200, "success", url


def get_dispatched_apis(request_args):
    # 去掉带有 invalid 的项
    request_args = {k: v for k, v in request_args.items() if v and not (v == "invalid" and k.startswith("gd_id"))}
    request_args_copy = request_args.copy()  # 备份，方便遍历/方便最后给url填空

    graph_id_dict = {i: request_args.pop(str(i), "") for i in request_args_copy if re.match(r"gd_id[-]?\d+", i)}
    # graph_id_dict: {"gd_id0": "全部", "gd_id1": "件次"}
    # request_args: 去掉 invalid 和 gd_id\d+开头的项

    if graph_id_dict:  # 如果要走映射[只有gd_id=，插件过程，这里为空]
        code, msg, url = check_graph_id_dict(graph_id_dict)  # 得到映射后的url
        if code != 200:
            return code, msg, {}

        # 得到格式化后的url
        url = url.format(**request_args_copy)
        # url --> dict
        graph_id_url_dict = url2dict(url)
        # 外界可以取消保护
        if "param_protect" in request_args:
            graph_id_url_dict.update({"param_protect": request_args["param_protect"]})
        # url保护  param_protect=black_list|white_list
        request_args = after_param_protect(graph_id_url_dict.get("param_protect", ""), request_args)
        # 更新request_args
        graph_id_url_dict.update(request_args)
        return 200, "success", graph_id_url_dict
    return 200, "success", request_args


if __name__ == '__main__':
    t = url2dict("http://39.107.240.28:3389/api/xf/xfjc_zb/?timetype=cd&qh=shij&lx=yjnr&name=shij_02&value=xfjc&transformer=@groupby&day=[2019-01-01,2019-02-02]")
    print(t)
