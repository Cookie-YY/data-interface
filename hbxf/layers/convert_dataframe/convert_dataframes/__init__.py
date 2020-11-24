
"""
加入判断：生成数据还是图表
    实现方法就是把所有需要的数字，放到parse_data(app的那个入口函数)跑一遍
    图表: 在convert层做  graph=bar     show=data   |   pic   |   show=code
    show=data/pic/code              pic/code[需要指定type=num/bar/line/pie/map]  和 colors    BLUE
"""
from layers.convert_dataframe.convert_dataframes.convert2data import convert_one_dataframe, \
    convert_muti_dataframs


def convert_dataframes(data_frame_list):
    if len(data_frame_list) == 1:
        results = convert_one_dataframe(data_frame_list[0])
        if results.get("code") != 200:
            return results.get("code"), results.get("msg"), {}
    else:
        code, msg, results = convert_muti_dataframs(data_frame_list)
        if code != 200:
            return code, msg, {}
    return 200, "success", results