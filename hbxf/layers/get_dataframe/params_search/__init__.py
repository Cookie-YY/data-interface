from sqlalchemy.orm import Session


def params_search(waiting_for_search, order, limit):
    """
    waiting_for_search: [
        {"table": "", "ex_table": ex_table, "columns": ["year", "month", "xfjc"], "conditions": [ [ ],[ ] ]},
        {"table": "", "ex_table": ex_table, "columns": ["year", "month", "xfjc"], "conditions": [ [ ],[ ] ]}
    ]
    """
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
        try:
            tar_vs = [getattr(ex_table.columns, i) for i in columns]
        except AttributeError as e:
            return 400, f"The table {search_one_table['table']} has no specific columns {e.args}", []
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
            from utils.results2df import results2df_ready
            data = results2df_ready(results, columns)
            search_table.append(data)
        searched.append(search_table)
    session.close()
    return 200, "success", searched
