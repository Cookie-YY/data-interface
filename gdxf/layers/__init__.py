from layers.api_gateway import api_gateway
from layers.convert_dataframe import convert_dataframe
from layers.get_dataframe import get_dataframe
from layers.get_parsed_api import get_parsed_apis
from layers.get_splited_apis import get_splited_apis
from layers.init_project import init_project
from layers.makeup_dataframe import makeup_dataframe


def parse_data(realm, index, request_args):
    """
    组装所有层的方法：
    0. 网关层 [api_gateway]:         权限校验 以及 指标分发                                         request_args -> api_dicts
    1. 拆分层 [get_splited_apis]:    遇到 extra_index和 main_name 把组合指标的 url 拆分              api_dicts   -> api_dicts
    2. 解析层 [get_parsed_apis]:     解析 drop/invalid/$引用/now 的简写情况                         api_dicts   -> api_dicts
    3. 查询层 [get_dataframe]:       按照 api 的内容查库                                           api_dicts   -> dataframes
    # 4. 计算层 [compute_dataframe]
    5. 补充层 [makeup_dataframe]:    按照标准的格式排序补零                                         dataframes   -> dataframes
    6. 转换层 [convert_dataframe]:   将 pandas转成需要的格式                                       dataframes   -> json
    """
    # 初始化项目
    init_project()

    # 0.网关层(apis -> apis)
    # 1. 权限验证
    # 2. 插件化开发
    # 3. apis 分发：如果传过来的request_args只有一个参数 graph_id 那么需要通过 graph_id 做分发
    code, msg, api_dicts_or_result = api_gateway(realm, index, request_args)
    if code != 200:
        return code, msg, api_dicts_or_result

    # 1.拆分层(apis -> apis)
    # 返回 api_dicts = {
    #     "1": "http://host:port/xf/xfjc_zb/?busin=xfj&timetype=cy&qh=shej&lx=xfxs&value=xfjc@zb",
    #     "2": "http://host:port/xf/xfjc_zb/?busin=xfj&timetype=cy&qh=shij&lx=xfxs&value=xfjc@zb"}
    code, msg, api_dicts = get_splited_apis(realm, index, api_dicts_or_result)
    if code != 200:
        return code, msg, {}

    # 2.解析层(apis   -> apis)
    # 返回 api_dicts = {
    #     "1": "http://host:port/xf/xfjc_zb/?busin=xfj&timetype=cy&qh=shej&lx=xfxs&value=xfjc.....",
    #     "2": "http://host:port/xf/xfjc_zb/?busin=xfj&timetype=cy&qh=shij&lx=xfxs&value=xfjc....."}
    code, msg, api_dicts = get_parsed_apis(api_dicts)      # 处理 =drop/$引用问题/=now的解析
    if code != 200:
        return code, msg, {}

    # 3.查询层(apis   -> pandas)
    # 返回 data_frame_list = [{"name": "", "value": "", "df": df, "stack": ""}, {"name": "", "value": "", "df": df}]
    code, msg, data_frame_list = get_dataframe(api_dicts)
    if code != 200:
        return code, msg, []

    # 4.补充层(pandas -> pandas)
    # 返回data = pd.DataFrame()
    code, msg, data_frame_list = makeup_dataframe(data_frame_list)
    if code != 200:
        return code, msg, {}

    # 5.转换层(pandas -> json)
    # 返回data = [{"name": "", "value": ""}, {"name": "", "value": ""}]
    code, msg, data = convert_dataframe(data_frame_list)
    if code != 200:
        return code, msg, {}

    return 200, "success", data


if __name__ == '__main__':
    # parse_data("xf", "xfjc", {"timetype": "cy",
    #                 "lx": "xfxs_cfxfbz",
    #                 "name": "cfxfbz",
    #                 "value": "xfjc",
    #                 "stack": "cfxfbz",
    #                 "extra_index": "value@to:zb,index@to:xfrc_zb;value@to:xfrc,index@to:xfrc_zb;value@to:zb;year@math:-1",
    #                 "main_name": "信访件次,件次占比,信访人次,人次占比",
    #                 "xfxs": "drop",
    #                 "year": "2020"})

    parse_data("xf", "xfjc", {
        "timetype": "cy", "qh": "shij", "name": "shij_02", "stack": "shij_02", "extra_index": "lx@to:xfxs;stack@to:xfxs","main_name": "总数,", "year": 2020
    })
