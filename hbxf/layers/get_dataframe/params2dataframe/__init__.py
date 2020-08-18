from layers.get_dataframe.params2dataframe.convert_and_compute.simple2df import simple2df
from layers.get_dataframe.params2dataframe.convert_and_compute.parse_groupby import parse_groupby
from layers.get_dataframe.params2dataframe.convert_and_compute.parse_zb import parse_zb
from layers.get_dataframe.params2dataframe.convert_and_compute.parse_tb_or_hb import parse_tb_or_hb
from layers.get_dataframe.params2dataframe.convert_and_compute.parse_divide import parse_divide
from layers.get_dataframe.params2dataframe.convert_and_compute.parse_no_transformer import parse_no_transformer


def params2dataframe(results, apis_copy):
    """
    输入：results:
        [
            [   一个大表
                [{'yjnr': '教育文体', 'xfjc': 1}, {'yjnr': '农村农业', 'xfjc': 4}],   构成一个df
                [{'yjnr': '教育文体', 'xfjc': 1}, {'yjnr': '农村农业', 'xfjc': 1}]    构成一个df
            ],
            [[]]  一个大表，可能存在的另一个大表
        ]
    输出：limit_inner 和 limit_outer后可供转换的一个df
    """
    # 步骤
    # 1. 在一个大表内的多个列表转成df
    # 2. 按照 transformer中的 groupby 对各个df进行分组求和
    #     维护一个列表，列表中有可以groupby求和的那个字段，需要在df中存在这个列，如果不存在报错
    # 3. 按照 transformer 中的 tb/hb/zb 计算对应的结果
    #     zb，需要计算在哪个维度上的占比
    #     同比/环比 在拼接后进行计算
    # 4. 融合一个大表内的多个df，如果匹配不上就是 0

    # 2. 转成df
    df_list = simple2df(results)  # simple2df 简单转成df，不会替换 name 和 stack，得到df_list，后续的tb/hb 需要用两个df
    if None in df_list[0][0].values:
        return 200, "success", df_list[0][0]

    # 处理 transformer 问题
    transformer = apis_copy.get("transformer", "")
    # @zb和@tb和@hb需要增加 @groupby内容
    if "@zb" in transformer or "@tb" in transformer or "@hb" in transformer:
        transformer = "@groupby+" + transformer

    if transformer:
        dict_item = transformer.split("+")
        # {"transformer": "@groupby:cfxfbz+@zb:cfxfbz/cfxfbz", "day":"[2020-02-02,2020-02-03]"}
        # dict_item: {'@groupby': 'cfxfbz', '@zb': 'cfxfbz/cfxfbz'}
        transformer = {}
        for dict_item_one in dict_item:
            dict_item_one = dict_item_one+":" if not ":" in dict_item_one else dict_item_one
            k, v = dict_item_one.split(":")
            transformer[k] = v
        apis_copy["transformer"] = transformer  # 此时把transformer掉包了

    # 开始解析
    from app import app
    sig_digits = app.config["SIGNIFICANT_DIGITS"]

    if "@groupby" in transformer:
        # @groupby单独使用即可，对 value 列之外的所有列（"zb"列也除外）做groupby 对value列求和
        df_list = parse_groupby(df_list, apis_copy)

    if "@zb" in transformer:      # zb情况，只有一个大表，只有一个df，需要计算zb（对谁的占比）
        # @zb:yjnr   或者   @zb:ejnr/yjnr
        df = parse_zb(df_list, apis_copy)
        df[apis_copy.get("value")] = df[apis_copy.get("value")].round(decimals=sig_digits)

    elif "@tb" in transformer or "@hb" in transformer:  # tb/hb 情况，数据库只涉及到一张表，有两个df，需要拼接后计算tb/hb
        df = parse_tb_or_hb(df_list, apis_copy)
        df[apis_copy.get("value")] = df[apis_copy.get("value")].round(decimals=sig_digits)

    # divide 涉及到的 hjlv 存在业务问题，暂缓
    elif "@divide" in transformer:  # hjlv 情况，数据库中两张表，有两个条件，需要拼接后计算 hjlv
        df = parse_divide(df_list, apis_copy)

    else:                           # 普通情况，数据库中只有一张表，只有一个df，不用任何计算,或者只需要 groupby
        df = df_list[0][0]

    # To-do:

    return 200, "success", df


if __name__ == '__main__':
    # results = [
    #     [
    #         [{'yjnr': '教育文体', 'xfjc': 1}, {'yjnr': '农村农业', 'xfjc': 4}],
    #         [{'yjnr': '教育文体', 'xfjc': 1}, {'yjnr': '农村农业', 'xfjc': 1}]
    #     ],
    #     [[]]
    # ]
    # apis_copy = {"transformer": "@groupby+@tb", "day":"[2020-02-02,2020-02-03]", "value": "xfjc", "name": "yjnr"}
    # params2dataframe(results, apis_copy)

    transformer = "@groupby"
    k, v = transformer.split(":")
    print(k, v)