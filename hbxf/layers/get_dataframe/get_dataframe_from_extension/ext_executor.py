from flask import g


def ext_executor(ext):
    # before_search/search/after_search

    # before_search
    if ext.apis_copy.get("reuse") in ["waiting_for_search", "db_results", "df"]:
        if g.get("waiting_for_search"):  # 兼容它是第一个的情况
            ext.waiting_for_search = g.get("waiting_for_search")
        else:
            ext.before_search()  # search 前准备
    else:
        ext.before_search()   # search 前准备
    g.waiting_for_search = ext.waiting_for_search  # 保存waiting_for_search
    if ext.code != 200:
        return ext.code, ext.msg, {}

    # search
    if ext.apis_copy.get("reuse") in ["db_results", "df"]:
        if g.get("db_results"):
            ext.db_results = g.get("db_results")
        else:             # 兼容它是第一个的情况
            ext.search()  # search 查询 获得ext.db_results
    else:
        ext.search()            # search 查询 获得ext.db_results
    if ext.code != 200:
        return ext.code, ext.msg, {}
    g.db_results = ext.db_results                  # 保存db_results

    # after_search
    if ext.apis_copy.get("reuse") == "df":
        if g.get("df"):
            ext.df = g.get("df")
        else:                   # 兼容它是第一个的情况
            ext.after_search()  # search 后聚合 获得ext.df
    else:
        ext.after_search()      # search 后聚合 获得ext.df
    if ext.code != 200:
        return ext.code, ext.msg, {}

    # ext.reuse_df

    ext.reuse_df()  # 默认是pass


    g.df = ext.df                                  # 保存db_results

    return ext.code, ext.msg, {"df": ext.df, "apis_copy": ext.apis_copy}