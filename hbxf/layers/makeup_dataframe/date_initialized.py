import datetime


def date_initialized(date, time_format):
    date_splited = date.strip("[").strip("]").split(",")
    begin_date = date_splited[0]
    end_date = date_splited[1]

    date_list = []
    from app import app
    TIME_FORMAT = time_format or app.config["TIME_FORMAT"]
    begin_date = datetime.datetime.strptime(begin_date, "%Y-%m-%d")
    end_date = datetime.datetime.strptime(end_date, "%Y-%m-%d")
    while begin_date <= end_date:
        date_str = begin_date.strftime(TIME_FORMAT)
        date_list.append(date_str)
        begin_date += datetime.timedelta(days=30)
    return date_list