import pandas as pd

from layers.get_dataframe.get_dataframe_from_extension import get_dataframe_from_extension
from layers.get_dataframe.get_dataframe_from_plugin import get_dataframe_from_plugin
from layers.get_dataframe.params_check.params_check_real_table import get_real_table
from layers.get_dataframe.params_check.params_check_each import params_check_each



def get_dataframe(apis):
    """
    输入：{'value': 'xfjc', 'lx': "xfxs_cfxfbz", 'xfxs': "drop"},
    输出：dataframe
    """
    # 1.参数逐一校验【extension/plugin】
    code, msg, apis_and_apis_copy_after_check = params_check_each(apis)
    if code != 200:
        return code, msg, {}
    apis_copy, apis = apis_and_apis_copy_after_check["apis_copy"], apis_and_apis_copy_after_check["apis"]

    # 2.plugin【直接返回数据】
    code, msg, apis_or_result = get_dataframe_from_plugin(apis_copy)
    if code == 202:  # 说明走的是插件的过程，不需要走后面了
        return code, msg, apis_or_result
    if code != 200:
        return code, msg, {}

    # 3.extension【除CUS_EXTENSIONS外，其他的EXTENSION需要寻找real_table】
    # 3.1如果是系统过程，需要获取真实表
    from app import app
    # if apis_copy["transformer"] in app.config["SYS_EXTENSIONS"]:
    #     code, msg, real_table = get_real_table(apis_or_result)
    #     if code != 200:
    #         return code, msg, {}
    #     apis_copy.update(real_table)  # {"table": "", "ex_table": }
    # 3.2获取dateframe对象（封装了df和所有请求参数的对象）
    code, msg, dataframe = get_dataframe_from_extension(apis_or_result, apis)
    if code != 200:
        return code, msg, {}

    # 4.保留有效数字
    SIGNIFICANT_DIGITS = app.config.get("SIGNIFICANT_DIGITS", 4)
    try:
        if isinstance(dataframe["df"], pd.DataFrame):
            dataframe["df"][dataframe.get("value")] = dataframe["df"][dataframe.get("value")].apply(lambda x: round(x, SIGNIFICANT_DIGITS))
        else:
            dataframe["df"] = round(dataframe["df"], SIGNIFICANT_DIGITS)
    except:
        pass
    return 200, "success", dataframe




    # from layers.get_dataframe.get_dataframe_for_each_api import get_dataframe_for_each_api
    # code, msg, dataframe = get_dataframe_for_each_api(apis)
    # if code != 200:
    #     return code, msg, {}
    # return 200, "msg", dataframe
