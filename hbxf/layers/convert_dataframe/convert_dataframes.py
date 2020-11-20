import numpy as np
import pandas as pd

from utils.get_unilist import get_unilist


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


def convert_one_dataframe(dataframe, groupid=0):
    df = dataframe["df"]
    name = dataframe.get("name")
    value = dataframe.get("value")
    stack = dataframe.get("stack")
    main_name = dataframe.get("main_name")
    if isinstance(df, np.int64) or isinstance(df, np.float) or isinstance(df, int) or isinstance(df, float):
        df = pd.DataFrame({value: [df]})
    data = df.to_dict(orient='records')

    # 处理name和value【可处理一个数和name value对的情况】
    if name:   # 处理name问题
        [i.update({"name": i.pop(name)}) for i in data]
    if value:  # 处理value问题
        [i.update({"value": i.pop(value)}) for i in data]

    # 处理main_name问题
    if main_name and not stack:
        data[0]["name"] = main_name

    if stack:  # 处理堆叠问题
        data_stack = []
        [i.update({stack: i.get(stack, i.get("name"))}) for i in data]

        stack_list = [i.get(stack) for i in data]  # 内层嵌套的内容
        stack_uni = get_unilist(stack_list)  # 内层嵌套的内容去重
        main_list = [i.get("name") for i in data]  # 外层包裹的内容
        main_uni = get_unilist(main_list)  # 外层包裹的内容去重
        if name == stack:
            mapping = {f"value_g{groupid}_{1}": main_name}
        else:
            mapping = {f"value_g{groupid}_{stack_index + 1}": stack_uni[stack_index] for stack_index in range(len(stack_uni))}
        for main_one in main_uni:
            dic_one = {"name": main_one}
            for value_index, stack_one in enumerate(stack_uni):
                if name == stack:  # 是为了处理原来只是name&value，不堆叠，但是制定了extra_index，最终需要堆叠的情况，所以即使自己就是一维的键值对也需要改成嵌套形式
                    value_index = 0
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


def convert_muti_dataframs(dataframes):
    parsed_data = {"code": 200, "msg": "success", "data": []}
    all_none = [i.get("stack", "") == "" for i in dataframes]
    if sum(all_none) != 0 and sum(all_none) != len(dataframes):
        return 400, "not all api has stack or not all api doesn't have stack", {}
    for group_id, dataframe in enumerate(dataframes):
        parsed_data_one = convert_one_dataframe(dataframe, group_id)

        parsed_data["code"] = 200 if parsed_data["code"] == 200 and parsed_data_one["code"] == 200 else 400
        parsed_data["msg"] = "success" if parsed_data["msg"] == "success" and parsed_data_one[
            "msg"] == "success" else parsed_data_one["msg"]

        if dataframe.get("stack"):  # 如果有stack，说明需要stack堆叠多个
            if parsed_data.get("map", {}):  # 如果有数，说明已经遍历一次了，需要更新第二个的map进去
                parsed_data["map"] = {**parsed_data["map"], **parsed_data_one["map"]}
            else:  # 如果没数，说明是第一次，把当前遍历的这个的map放上去
                parsed_data["map"] = parsed_data_one["map"]
            if parsed_data["data"]:  # 如果有数，说明已经遍历一次了，需要更新第二个的data进去(列表中的每一个字典)
                parsed_data["data"] = [{**i, **j} for i, j in zip(parsed_data["data"], parsed_data_one["data"])]
            else:  # 如果没数，说明是第一次，把当前遍历的这个的data放上去
                parsed_data["data"] = parsed_data_one["data"]
        else:   # 如果没有stack，说明需要name/value组合
            parsed_data["data"].append({**{"name": dataframe.get("main_name")},**parsed_data_one["data"][0]})
    return 200, "success", parsed_data

