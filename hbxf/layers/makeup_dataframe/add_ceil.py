def add_ceil(dataframe):
    df = dataframe["df"]
    ceil = int(dataframe.get("ceil"))         # params_check中已经校验过，可以直接int
    ceil_value = dataframe.get("ceil_value")
    value = dataframe.get("value")
    df[value] = df[value].apply(lambda x: ceil_value if x >= ceil else x)
    return df
