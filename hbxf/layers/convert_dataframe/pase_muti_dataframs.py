from layers.convert_dataframe import parse_one_dataframe


def pase_muti_dataframs(dataframes):
    parsed_data = {"code": 200, "msg": "success", "data": []}
    all_none = [i.get("stack", "") == "" for i in dataframes]
    if sum(all_none) != 0 and sum(all_none) != len(dataframes):
        return 400, "not all api has stack or not all api doesn't have stack", {}
    for group_id, dataframe in enumerate(dataframes):
        parsed_data_one = parse_one_dataframe(dataframe, group_id)

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