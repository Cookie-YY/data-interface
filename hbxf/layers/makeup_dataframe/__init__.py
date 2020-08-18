from layers.makeup_dataframe.merge_initialized_table import merge_initialized_table
from layers.makeup_dataframe.order_limit import order_limit
from layers.makeup_dataframe.add_unit import add_unit


def makeup_dataframe(dataframe_list):
    """
    1. 排  序 / 补  零
    2. order / limit
    3. value 的单位
    """

    for dataframe in dataframe_list:
        # 排序补零：
        if dataframe.get("full"):
            df = merge_initialized_table(dataframe)  # 融合数据表：加 处理了day的初始化问题
            dataframe["df"] = df

        # 重新排序+limit
        if dataframe.get("order") or dataframe.get("limit"):
            df = order_limit(dataframe)
            dataframe["df"] = df

        # 添加单位
        if dataframe.get("unit"):
            df = add_unit(dataframe)
            dataframe["df"] = df

    return 200, "success", dataframe_list


if __name__ == '__main__':
    pass
