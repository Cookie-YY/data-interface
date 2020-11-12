import re
from datetime import datetime, timedelta

from utils.parse_compute import parse_compute


def process_now(api_dict):
    """
    输入：{'day': "[2020-06-22, now-4]"}
    输入：{'month': "[now-2, now]"}
    输入：{'year': "[now-2, now]"}
    输出：{'day': "2020-06-22, 2020-06-24"}
    输出：{'month': "4, 6"}
    输出：{'year': "2018, 2020"}
    """
    update_dict = {}
    for k, v in api_dict.items():
        value = str(v)
        if "now" in value:
            if k == "year":
                value = value.replace("now", str(datetime.now().year))
                update_dict[k] = value  # 直接赋值，如果是范围的，在后面可以覆盖
            elif k == "month":
                value = value.replace("now", str(datetime.now().month))
            elif k == "day":
                value = value.replace(" ", "+")  # +会被解析成空格
                value = value.replace("now", datetime.now().strftime("%Y/%m/%d"))

        if value.startswith("[") and value.endswith("]"):
            min_value = value.strip("[").strip("]").split(",")[0]  # "2020-1"
            max_value = value.strip("[").strip("]").split(",")[1]  # "2020"
            code, msg, result1 = parse_compute(min_value)
            if code != 200:
                return code, msg, {}
            code, msg, result2 = parse_compute(max_value)
            if code != 200:
                return code, msg, {}
            value_parsed = f"{result1},{result2}"
            update_dict[k] = value_parsed
    api_dict.update(update_dict)
    return 200, "success", api_dict


if __name__ == '__main__':
    api_dict = {'day': "[2020-06-22,2020-06-24]", "year":"[now-3,now]", "month":"[now-3,now]"}
    test = process_now(api_dict)
    print(test)