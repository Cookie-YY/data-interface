def year_initialized(year):
    year_splited = year.strip("[").strip("]").split(",")
    if len(year_splited) == 2:
        begin_year = int(year_splited[0])
        end_year = int(year_splited[1])
        return list(map(str, list(range(begin_year, end_year+1))))
        # return list(range(begin_year, end_year+1))
    else:
        return [year_splited[0]]
