import datetime
import locale

from pandas.core.dtypes.common import is_datetime64_any_dtype

from app import app

TIME_FORMAT = app.config["TIME_FORMAT"]
locale.setlocale(locale.LC_CTYPE,'chinese')

# def list_formated_time(results, time_format=TIME_FORMAT):
#     time_format = time_format or TIME_FORMAT
#     if not results:
#         return results
#     result = list(results)[0]
#     date_keys = [key for key in result if isinstance(result[key], datetime.datetime)]
#     final_results = []
#     for i in results:
#         for date_key in date_keys:
#             i[date_key] = datetime.datetime.strftime(i[date_key], time_format)
#             final_results.append(i)
#     return final_results


def df_formated_time(results, time_format=TIME_FORMAT):
    time_format = time_format or TIME_FORMAT
    date_columns = [i for i in results.columns if is_datetime64_any_dtype(results[i])]
    for date_column in date_columns:
        results[date_column] = results[date_column].apply(lambda x: datetime.datetime.strftime(x, time_format).format())
    return results
