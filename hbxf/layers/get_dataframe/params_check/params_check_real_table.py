import re
from sqlalchemy import Table



def get_candidate_tables(table, realm, busin, timetype, qh, lx, index):
    # qh=shej但是库里没有shej    qh是空，但是库里有shej
    # index 有_zb，但是库里没有 _zb    qh没有zb但是库里有占比

    # table: 如果存在table参数，table指定唯一的表
    if table:
        return [table]

    shej = ["shej", ""]
    index_list = [index.replace("_zb", ""), index.replace("_zb", "") + "_zb"]
    qh_theother = "none"
    if qh in shej:
        shej.remove(qh)
        qh_theother = shej[0]

    index_list.remove(index)
    index_theother = index_list[0]

    table1 = f"{realm}_{busin}_{timetype}_{qh}_{lx}_{index}"
    table3 = f"{realm}_{busin}_{timetype}_{qh}_{lx}_{index_theother}"
    table1 = re.sub(r'_+', '_', table1)
    table3 = re.sub(r'_+', '_', table3)
    if qh_theother != "none":
        table2 = f"{realm}_{busin}_{timetype}_{qh_theother}_{lx}_{index}"
        table4 = f"{realm}_{busin}_{timetype}_{qh_theother}_{lx}_{index_theother}"
        table2 = re.sub(r'_+', '_', table2)
        table4 = re.sub(r'_+', '_', table4)
        return [table1, table2, table3, table4]

    return [table1, table3]


def get_real_table(table, realm, busin, timetype, qh, lx, index):
    candidate_tables = get_candidate_tables(table, realm, busin, timetype, qh, lx, index)
    from utils.db_connection import metadata
    from utils.db_connection import zb_engine
    metadata.reflect(bind=zb_engine)
    tables = metadata.tables.keys()
    for table in candidate_tables:
        if table in tables:
            ex_table = Table(table, metadata, autoload=True, autoload_with=zb_engine)
            return 200, "success", {"table": table, "ex_table": ex_table}

        # return 400, f"ConnectionError: Please check for net connection or check for driver for database(eg: pymysql for mysql)", {}
    return 400, f" NoSuchTableError: ater trying all of the candidate tables, nothing found {candidate_tables}", {}
