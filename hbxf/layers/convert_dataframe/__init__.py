from layers.convert_dataframe.add_global_info import add_global_info
from layers.convert_dataframe.convert_dataframes import convert_dataframes


def convert_dataframe(data_frame_list):
    # 0.重排序
    reindex = [int(i) for i in data_frame_list[0].get("reindex").split(",")]
    if reindex[0]:
        if len(reindex) != data_frame_list:
            return 400, "The length of reindex must be equal to the num of index", {}
        data_frame_list_ = {ind + 1: item for ind, item in enumerate(data_frame_list)}
        data_frame_list = [data_frame_list_[i] for i in reindex]

    # 1.转换数据格式
    code, msg, results = convert_dataframes(data_frame_list)
    if code != 200:
        return code, msg, results

    # 2.增加全局属性
    results = add_global_info(data_frame_list, results.copy())
    return 200, "success", results


if __name__ == '__main__':
    res = convert_dataframe(data_frame_list)
    print(res)
