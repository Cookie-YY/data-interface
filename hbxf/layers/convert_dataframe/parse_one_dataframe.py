import numpy as np
import pandas as pd

from utils.get_unilist import get_unilist


def parse_one_dataframe(dataframe, groupid=0):
    df = dataframe["df"]
    name = dataframe.get("name")
    value = dataframe.get("value")
    stack = dataframe.get("stack")
    main_name = dataframe.get("main_name")
    if isinstance(df, np.int64):
        df = pd.DataFrame({value: [df]})
    data = df.to_dict(orient='records')

    # 处理name和value【可处理一个数和name value对的情况】
    if name:   # 处理name问题
        [i.update({"name": i.pop(name)}) for i in data]
    if value:  # 处理value问题
        [i.update({"value": i.pop(value)}) for i in data]
    if stack:  # 处理堆叠问题
        data_stack = []

        stack_list = [i.get(stack) for i in data]  # 内层嵌套的内容
        stack_uni = get_unilist(stack_list)  # 内层嵌套的内容去重
        main_list = [i.get("name") for i in data]  # 外层包裹的内容
        main_uni = get_unilist(main_list)  # 外层包裹的内容去重
        # num_stack = len(stack_uni)
        # num_main = len(main_uni)
        # stack_uni = stack_uni[:min(limit_inner, num_stack)]  # 内层取前几项
        # main_uni = main_uni[:min(limit_outer, num_main)]  # 外层取前几项
        if name == stack:
            mapping = {f"value_g{groupid}_{1}": main_name}
        else:
            mapping = {f"value_g{groupid}_{stack_index + 1}": stack_uni[stack_index] for stack_index in range(len(stack_uni))}
        for main_one in main_uni:
            dic_one = {"name": main_one}
            for value_index, stack_one in enumerate(stack_uni):
                if name == stack:  # 是为了处理原来只是name&value，不堆叠，但是制定了extra_index，最终需要堆叠的情况，所以即使自己就是一维的键值对也需要改成嵌套形式
                    stack_value = [tar_one.get("value") for tar_one in data if  # 核心：找到name是这个，stack是这个的value值
                                   tar_one.get("name") == main_one and tar_one.get(name) == stack_one]
                else:  # 正常情况
                    stack_value = [tar_one.get("value") for tar_one in data if  # 核心：找到name是这个，stack是这个的value值
                                   tar_one.get("name") == main_one and tar_one.get(stack) == stack_one]
                if stack_value:
                    dic_one[f"value_g{groupid}_{value_index + 1}"] = stack_value[0]

            data_stack.append(dic_one)
        return {"code": 200, "msg": "success", "map": mapping, "data": data_stack}
    return {"code": 200, "msg": "success", "data": data}