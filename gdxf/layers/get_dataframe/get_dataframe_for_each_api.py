from layers.get_dataframe.get_dataframe_common import get_dataframe_common
from layers.get_dataframe.get_dataframe_extensions import get_dataframe_extensions


def get_dataframe_for_each_api(apis):
    # 区分普通过程和extension过程
    transformer = apis.get("transformer", "@")  # 此时还没有经过check的步骤
    from app import app
    if transformer[1:] in app.config.get("CUS_EXTENSIONS", []):
        code, msg, dataframe = get_dataframe_extensions(apis)
    else:
        code, msg, dataframe = get_dataframe_common(apis)
    if code != 200:
        return code, msg, {}
    SIGNIFICANT_DIGITS = app.config.get("SIGNIFICANT_DIGITS", 4)
    try:
        dataframe["df"][dataframe.get("value")] = dataframe["df"][dataframe.get("value")].apply(lambda x: round(x, SIGNIFICANT_DIGITS))
    except:
        pass
    return 200, "success", dataframe
