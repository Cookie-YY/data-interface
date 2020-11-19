from layers.convert_dataframe.add_global_info import add_global_info
from layers.convert_dataframe.convert_dataframes import convert_dataframes


def convert_dataframe(data_frame_list):
    # 1. 转换数据格式
    code, msg, results = convert_dataframes(data_frame_list)
    if code != 200:
        return code, msg, results
    # 2.增加全局属性
    results = add_global_info(data_frame_list, results.copy())
    return 200, "success", results


if __name__ == '__main__':
    res = convert_dataframe(data_frame_list)
    print(res)
