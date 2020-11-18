import datetime


def init_date_valuelist(dataframe):
    name = dataframe.get("name")
    if name == "year":
        date_list = year_initialized(dataframe.get("year"))
    elif name == "day":
        date_list = day_initialized(dataframe.get("day"))
    elif name == "date":
        date_list = date_initialized(dataframe.get("date"), dataframe.get("time_format"))
    else:
        return {}
    return {name: date_list}


def date_initialized(date, time_format):
    date_splited = date.strip("[").strip("]").split(",")
    begin_date = date_splited[0]
    end_date = date_splited[1]

    date_list = []
    from app import app
    TIME_FORMAT = time_format or app.config["TIME_FORMAT"]
    begin_date = datetime.datetime.strptime(begin_date, "%Y-%m-%d %H:%M:%S")
    end_date = datetime.datetime.strptime(end_date, "%Y-%m-%d %H:%M:%S")
    while begin_date <= end_date:
        date_str = begin_date.strftime(TIME_FORMAT)
        date_list.append(date_str)
        begin_date += datetime.timedelta(days=30)
    return date_list


def day_initialized(day):
    day_splited = day.strip("[").strip("]").split(",")
    begin_date = day_splited[0]
    end_date = day_splited[1]

    date_list = []
    from app import app
    TIME_FORMAT = app.config["TIME_FORMAT"]
    begin_date = datetime.datetime.strptime(begin_date, "%Y-%m-%d %H:%M:%S")
    end_date = datetime.datetime.strptime(end_date, "%Y-%m-%d %H:%M:%S")
    while begin_date <= end_date:
        date_str = begin_date.strftime(TIME_FORMAT)
        date_list.append(date_str)
        begin_date += datetime.timedelta(days=1)
    return date_list


def year_initialized(year):
    year_splited = year.strip("[").strip("]").split(",")
    if len(year_splited) == 2:
        begin_year = int(year_splited[0])
        end_year = int(year_splited[1])
        return list(map(str, list(range(begin_year, end_year+1))))
        # return list(range(begin_year, end_year+1))
    else:
        return [year_splited[0]]
