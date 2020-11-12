from layers.convert_dataframe.parse_one_dataframe import parse_one_dataframe
from layers.convert_dataframe.pase_muti_dataframs import pase_muti_dataframs
from utils.get_unilist import get_unilist


def convert_dataframe(data_frame_list):
    table_list = []
    if len(data_frame_list) == 1:
        results = parse_one_dataframe(data_frame_list[0])
        if results.get("code") != 200:
            return results.get("code"), results.get("msg"), {}
    else:
        code, msg, results = pase_muti_dataframs(data_frame_list)
        if code != 200:
            return code, msg, {}
    for dataframe in data_frame_list:
        table_list.extend(dataframe["table"])
    results["table"] = get_unilist(table_list)
    return 200, "success", results


if __name__ == '__main__':
    res = convert_dataframe(data_frame_list)
    print(res)
