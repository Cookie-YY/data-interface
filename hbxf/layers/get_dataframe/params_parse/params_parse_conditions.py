import re

def parse_condition(ex_table, k, value):
    # 分段条件
    if "," in str(value):
        value_splited = value.split(",")
        if len(value_splited) != 2:
            return 400, "the condition which contains [] is in a wrong format, it should be [yyyy-mm-dd,yyyy-mm-dd] or [a,b]", {}
        min_value = value_splited[0]
        max_value = value_splited[1]
        return getattr(ex_table.columns, k).between(min_value, max_value)

    # like条件
    elif str(k).startswith("LIKE-"):
        k = k.replace("LIKE-", "")
        return getattr(ex_table.columns, k).like(f"%{value}%")

    # 等或不等条件
    else:
        if str(value).startswith("!"):  # 不等于条件
            return getattr(ex_table.columns, k) != str(value).strip("!")
        else:  # 等于条件
            return getattr(ex_table.columns, k) == value

def get_conditions(ex_table, conditions_dict):
    # if not conditions_dict:
    #     return 400, "There must be some conditions in the url", {}
    conditions = []
    for k, value in conditions_dict.items():
        k = k.strip("C")
        if not hasattr(ex_table.columns, k) and not hasattr(ex_table.columns, k.strip("LIKE-")):
            return 400, f"the {ex_table.fullname} has no condition columns [{k}]", {}
        conditions.append(parse_condition(ex_table, k, value))

        #
        #
        # if "," in str(value):
        #     value_splited = value.split(",")
        #     if len(value_splited) != 2:
        #         return 400, "the condition which contains [] is in a wrong format, it should be [yyyy-mm-dd,yyyy-mm-dd] or [a,b]", {}
        #     min_value = value_splited[0]
        #     max_value = value_splited[1]
        #     conditions.append(getattr(ex_table.columns, k).between(min_value, max_value))
        # else:
        #     k = k.strip("C")
        #     # like条件
        #     if str(k).startswith("LIKE-"):
        #         conditions.append(getattr(ex_table.columns, k) != str(value).strip("!"))
        #
        #     # 等或不等条件
        #     else:
        #         if str(value).startswith("!"):  # 不等于条件
        #             conditions.append(getattr(ex_table.columns, k) != str(value).strip("!"))
        #         else:  # 等于条件
        #             conditions.append(getattr(ex_table.columns, k) == value)
    return 200, "success", conditions
