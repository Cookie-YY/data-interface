import datetime


def day_initialized(day):
    day_splited = day.strip("[").strip("]").split(",")
    begin_date = day_splited[0]
    end_date = day_splited[1]

    date_list = []
    from app import app
    TIME_FORMAT = app.config["TIME_FORMAT"]
    begin_date = datetime.datetime.strptime(begin_date, "%Y-%m-%d")
    end_date = datetime.datetime.strptime(end_date, "%Y-%m-%d")
    while begin_date <= end_date:
        date_str = begin_date.strftime(TIME_FORMAT)
        date_list.append(date_str)
        begin_date += datetime.timedelta(days=1)
    return date_list


if __name__ == '__main__':
    print(day_initialized("[2018-01-01,2019-01-01]"))