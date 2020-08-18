import datetime


def params_parse_tb_or_hb(flag, conditions_dict):
    """
    输入：flag: "tb", "hb"
    输入：day_condition: "2019-02-11,2019-02-13"
    输出：如果同比：返回    "2018-02-11,2018-02-13"
    输出：如果环比：返回    "2018-02-08,2018-02-10"
    """
    day_condition = conditions_dict.get("day")
    if flag == "tb":
        min_value, max_value = day_condition.strip("[").strip("]").split(",")
        min_date = datetime.datetime.strptime(min_value, "%Y-%m-%d")
        max_date = datetime.datetime.strptime(max_value, "%Y-%m-%d")
        last_min_date = min_date.replace(year=min_date.year-1)
        last_max_date = max_date.replace(year=max_date.year-1)

    elif flag == "hb": # "hb"
        min_value, max_value = day_condition.strip("[").strip("]").split(",")
        min_date = datetime.datetime.strptime(min_value, "%Y-%m-%d")
        max_date = datetime.datetime.strptime(max_value, "%Y-%m-%d")
        diff = max_date - min_date
        last_min_date = min_date - diff - datetime.timedelta(days=1)
        last_max_date = max_date - diff - datetime.timedelta(days=1)

    else:
        return
    conditions_dict["day"] = f"{last_min_date.strftime('%Y-%m-%d')},{last_max_date.strftime('%Y-%m-%d')}"
    return conditions_dict


if __name__ == '__main__':
    flag = "hb"
    day_condition = {"day": "2019-02-11,2019-02-13"}
    test = params_parse_tb_or_hb(flag, day_condition)
    print(test)