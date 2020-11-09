from sqlalchemy.orm import Session
import pandas as pd

def get_none_df(apis_copy):
    from utils.get_unilist import get_unilist
    columns = [apis_copy.get("name", ""), apis_copy.get("stack", ""), apis_copy.get("value", "")]
    columns = get_unilist(columns)
    nonedf = [[pd.DataFrame([[None]*len(columns)], columns=columns)]]
    return nonedf


def params_search(waiting_for_search, apis_copy):
    """
    waiting_for_search: [
        {"table": "", "ex_table": ex_table, "columns": ["year", "month", "xfjc"], "conditions": [ [ ],[ ] ]},
        {"table": "", "ex_table": ex_table, "columns": ["year", "month", "xfjc"], "conditions": [ [ ],[ ] ]}
    ]
    """
    if not waiting_for_search:
        nonedf = get_none_df(apis_copy)
        return 200, "success", nonedf
    # 获取order, limit
    order, limit = apis_copy["direct_order"], apis_copy["direct_limit"]
    # 获取数据库连接
    from utils.db_connection import zb_engine
    session = Session(zb_engine)
    searched = []

    # 开始查库
    for search_one_table in waiting_for_search:  # 第一张表
        columns = search_one_table["columns"]
        ex_table = search_one_table["ex_table"]
        # 查找表格中的字段
        search_table = []
        for col in columns:
            hascol = hasattr(ex_table.columns, col)
            if not hascol:
                from app import app
                NOCOLUMN_ERROR = app.config.get("NOCOLUMN_ERROR", True)
                if NOCOLUMN_ERROR:
                    return 400, f"NoSuchColumnError: The table {search_one_table['table']} has no specific columns [{col}]", []
                nonedf = get_none_df(apis_copy)
                return 200, f"NoSuchColumnError: the {ex_table.fullname} has no condition columns [{col}]", nonedf

        tar_vs = [getattr(ex_table.columns, i) for i in columns]
        # 当前表中的多组条件
        for conditions in search_one_table["conditions"]:  # 第一组条件
            results = session.query(*tar_vs).filter(*conditions)  # results直接print是sql语句
            if order:
                if "-" in order:  # sqlalchemy新版本中order_by 的用法需要用字段.desc()
                    results = results.order_by(getattr(ex_table.columns, order.replace("-", "")).desc())
                else:
                    results = results.order_by(order)
            if limit:
                results = results.limit(limit)
            from utils.results2df import results2df
            from utils.get_unilist import get_unilist
            data = results2df(results, get_unilist(columns), apis_copy)
            search_table.append(data)
        searched.append(search_table)
    session.close()
    return 200, "success", searched
