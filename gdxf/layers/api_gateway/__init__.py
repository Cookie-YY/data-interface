from layers.api_gateway.authentication import authentication
from layers.api_gateway.get_dispatched_apis import get_dispatched_apis
from layers.api_gateway.get_plugined_apis import get_plugined_apis


def api_gateway(realm, index, request_args):
    """
    如果 request_args中有 graph_id，根据 id 内容和 settings 中的 DISPATCH_MAP 进行分发
    1. 判断是否有 graph_id, 如果没有直接返回 request_args
    2. 如果有，在 settings 中寻找 URL_DISPATCH_MAP，如果没有，返回 code 400
    3. 如果有对应的 ID， 得到 url的字符串，对字符串处理得到字典
    4. 将request_args剩下的部分更新进字典中
    5. 返回更新的字典
    """
    # 1. 参数校验：只校验用户定义的参数限制
    from layers.get_dataframe.params_check import params_check_each
    # code, msg, _ = params_check_each(request_args, special_name="CUS_SPECIAL_PARAMS")
    request_args_copy = request_args.copy()
    code, msg, _ = params_check_each(request_args_copy)
    if code != 200:
        return code, msg, {}

    # 2. 权限验证
    code, msg, result = authentication(request_args)
    if code != 200:
        return code, msg, {}

    # 3. apis 分发
    code, msg, api_dict = get_dispatched_apis(request_args)
    if code != 200:
        return code, msg, {}

    # 4. 插件化开发
    code, msg, result = get_plugined_apis(api_dict)
    if code == 202:  # 说明走的是插件的过程，不需要走后面了
        return code, msg, result
    if code != 200:
        return code, msg, {}
    return 200, "success", api_dict
