from layers.convert_dataframe.parse_one_dataframe import parse_one_dataframe
from layers.convert_dataframe.pase_muti_dataframs import pase_muti_dataframs


def convert_dataframe(data_frame_list):
    if len(data_frame_list) == 1:
        results = parse_one_dataframe(data_frame_list[0])
        if results.get("code") != 200:
            return results.get("code"), results.get("msg"), {}
    else:
        code, msg, results = pase_muti_dataframs(data_frame_list)
        if code != 200:
            return code, msg, {}

    return 200, "success", results


if __name__ == '__main__':
    res = convert_dataframe(data_frame_list)
    print(res)
