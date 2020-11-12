from layers.get_parsed_api.process_drop import process_drop
from layers.get_parsed_api.process_dollar import process_dollar
from layers.get_parsed_api.process_now import process_now
from layers.get_parsed_api.process_invalid import process_invalid


def get_parsed_apis(api_dicts):
    """
    输入：{"信访件次": {'value': ['xfjc@zb'], 'lx': ["xfxs_cfxfbz"], 'xfxs': ["drop"]}
    输出：{"信访件次": {'value': ['xfjc@zb'], 'lx': ["cfxfbz"]}
    需要解决：
        1. drop问题
        2. $引用问题
        3. now问题
        4. invalid问题
    """
    result = {}
    for main_name, api_dict in api_dicts.items():
        # 处理默认值问题
        from layers.get_parsed_api.process_default import process_default
        code, msg, result_this = process_default(api_dict)
        if code != 200:
            return code, msg, {}


        # 处理drop问题
        code, msg, result_this = process_drop(result_this)
        if code != 200:
            return code, msg, {}

        # 处理$引用问题
        code, msg, result_this = process_dollar(result_this)
        if code != 200:
            return code, msg, {}

        # 处理now问题
        code, msg, result_this = process_now(result_this)
        if code != 200:
            return code, msg, {}

        # 处理invalid问题
        code, msg, result_this = process_invalid(result_this)
        if code != 200:
            return code, msg, {}

        # 处理参数映射
        from utils.value_mapped import value_mapped
        result_this = value_mapped(result_this)

        # 处理权限问题
        from layers.get_parsed_api.process_auth import process_auth
        result_this = process_auth(result_this)

        # 处理parm_trans
        from layers.get_parsed_api.process_paramtrans import process_paramtrans
        result_this = process_paramtrans(result_this)

        result[main_name] = result_this
    return 200, "success", result


if __name__ == '__main__':
    api_dicts = {"1": {'value': 'xfjc@zb', 'lx': "xfxs_cfxfbz", "name": "$index-xxx", "index": "xfjc", "stack": "$index", "transformer":"@groupby:$stack + @zb:xfxs/xfxs", "xfxs": "drop", "day": "[2018-02-02,2019-02-02]"},
                 "2": {'value': 'xfjc@zb', 'lx': "xfxs_cfxfbz", "name": "$index", "index": "xfjc", "xfxs": "drop", "year": "[now-2,now]"}}
    code, msg, test = get_parsed_apis(api_dicts)
    print(code, msg)
    for i in test:
        print(i, test[i])
    # print(code, msg, test)
    # python test.py $1
    # python test.py test.py