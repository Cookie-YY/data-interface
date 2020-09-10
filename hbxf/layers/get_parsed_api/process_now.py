import re
from datetime import datetime, timedelta

from utils.parse_compute import parse_compute


def process_now(api_dict):
    """
    输入：{'day': "[2020-06-22, 2020-06-24]"}          day 不支持 now
    输入：{'month': "[now-2, now]"}
    输入：{'year': "[now-2, now]"}
    输出：{'day': "2020-06-22, 2020-06-24"}
    输出：{'month': "4, 6"}
    输出：{'year': "2018, 2020"}
    """
    update_dict = {}
    for k, v in api_dict.items():
        value = str(v)
        if k == "year":
            value = value.replace("now", str(datetime.now().year))
        elif k == "month":
            value = value.replace("now", str(datetime.now().month))

        elif k == "day":
            now_time = datetime.now().strftime("%Y-%m-%d")  # 现在时间
            now_time_str = datetime.strptime(now_time, "%Y-%m-%d")  # 转化为字符串
            res = re.findall('(?:\s|-)\d+', v)   #  ['-20', ' 30']  ['7']  ['-30']
            if len(res) == 2:
                num0 = res[0]
                num1 = res[1]
                num0_time0 = timedelta(days=int(num0))
                num0_time1 = timedelta(days=int(num1))
                update_time0 = (now_time_str + num0_time0).strftime("%Y-%m-%d")
                update_time1 = (now_time_str + num0_time1).strftime("%Y-%m-%d")
                if int(num0) > int(num1):
                    value = update_time1 + "," + update_time0
                else:
                    value = update_time0 + "," + update_time1
            else:
                update_num = res[0]
                update_days = timedelta(days=int(update_num))
                update_time = (now_time_str+update_days).strftime("%Y-%m-%d")  # str
                if "-" in update_num:
                    value = update_time + "," + now_time
                else:
                    value = now_time + "," + update_time
            update_dict[k] = value

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
    print(api_dict)
    return 200, "success", api_dict


if __name__ == '__main__':
    api_dict = {'day': "[2020-06-22,2020-06-24]", "year":"[now-3,now]", "month":"[now-3,now]"}
    test = process_now(api_dict)
    print(test)