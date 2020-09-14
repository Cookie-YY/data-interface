def results2df(results):
    from app import app
    RETURN_ZERO_DATA = app.config["RETURN_ZERO_DATA"]
    data = [dict(zip(result.keys(), result)) for result in results]
    if RETURN_ZERO_DATA and not data:  # 空数据需要返回初始化的0，并且是空数据
        data = [dict(zip(results.keys(), [None] * len(results.key())))]  # 返回的结果只有一行，全是None
    return data