from .get_dataframe_for_each_api import get_dataframe_for_each_api


def get_dataframe(apis):
    """
    输入：{"1": {"信访件次": {'value': 'xfjc', 'lx': "xfxs_cfxfbz", 'xfxs': "drop"},
           "": {"信访件次": {'value': 'xfjc', 'lx': "xfxs_cfxfbz", 'xfxs': "drop"}}
    输出：{"1": dataframe1, "2": dataframe2}
    """
    code, msg, dataframe = get_dataframe_for_each_api(apis)
    if code != 200:
        return code, msg, {}
    return 200, "msg", dataframe
