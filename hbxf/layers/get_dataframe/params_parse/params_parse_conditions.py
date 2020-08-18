import re

def get_conditions(ex_table, conditions_dict):
    if not conditions_dict:
        return 400, "There must be some conditions in the url", {}
    conditions = []

    for k, value in conditions_dict.items():
        if "," in str(value):
            value_splited = value.split(",")
            if len(value_splited) != 2:
                return 400, "the condition which contains [] is in a wrong format, it should be [yyyy-mm-dd,yyyy-mm-dd] or [a,b]", {}
            min_value = value_splited[0]
            max_value = value_splited[1]
            conditions.append(getattr(ex_table.columns, k).between(min_value, max_value))

            # conditions.append(getattr(ex_table.columns, k) >= datetime.strptime(min_value, "%Y-%m-%d"))
            # conditions.append(getattr(ex_table.columns, k) >= min_value)
            # conditions.append(getattr(ex_table.columns, k) <= datetime.strptime(max_value, "%Y-%m-%d"))
            # conditions.append(getattr(ex_table.columns, k) <= max_value)
        else:
            k = k.strip("C")
            if not hasattr(ex_table.columns, k):
                return 400, f"the {ex_table.fullname} has no column [{k}]", {}
            conditions.append(getattr(ex_table.columns, k) == value)
    return 200, "success", conditions
