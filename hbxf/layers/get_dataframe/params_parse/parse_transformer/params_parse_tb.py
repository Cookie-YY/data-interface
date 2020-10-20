import datetime


def params_parse_tb(conditions_dict):
    day_condition = conditions_dict.get("day")
    year_condition = conditions_dict.get("year")
    month_condition = conditions_dict.get("month")
    if day_condition:
        min_value, max_value = day_condition.strip("[").strip("]").split(",")
        min_date = datetime.datetime.strptime(min_value, "%Y-%m-%d")
        max_date = datetime.datetime.strptime(max_value, "%Y-%m-%d")
        last_min_date = min_date.replace(year=min_date.year - 1)
        last_max_date = max_date.replace(year=max_date.year - 1)
        conditions_dict["day"] = f"{last_min_date.strftime('%Y-%m-%d')},{last_max_date.strftime('%Y-%m-%d')}"
    elif year_condition and month_condition:
        conditions_dict["year"] = int(year_condition) - 1
        conditions_dict["month"] = month_condition
    else:
        return
    return conditions_dict

