import pymysql
from pypinyin import lazy_pinyin

# 创建表search_xfbm_jb
from utils.db_connection import ZB_DB_DICT, FX_DB_DICT

sql1 = """
    create table search_xfbm_jb(
    jb int not null,
    xfbm varchar(64),
    xfbm_alpha varchar(64)
    );
"""

# 创建表search_qh_zrdw_jb
sql2 = """
    create table search_qh_zrdw_jb(
    jb int not null,
    qh varchar(255),
    zrdw varchar(255),
    qh_alpha varchar(32),
    zrdw_alpha varchar(32)
    );
"""

# 写入数据的库
db2 = pymysql.connect(**ZB_DB_DICT)
db1 = pymysql.connect(**FX_DB_DICT)


# 获取源数据
def fetch_data(sql):
   db = db1
   cursor = db.cursor()
   cursor.execute(sql)
   data = []
   rows = cursor.fetchall()
   db.commit()
   for i in rows:
       data.append(i)
   return data


# 创建数据表
def create_table(sql, tb_name):
    db = db2
    cursor = db.cursor()
    try:
        cursor.execute(sql)
        print(f"\n{tb_name}")
    except Exception as e:
        print("创建数据表失败：case%s" % e)


# 插入数据 search_xfbm_jb
def write_search_xfbm_jb():
    create_table("DROP TABLE IF EXISTS search_xfbm_jb", "已存在的search_xfbm_jb已删除")
    create_table(sql1, '数据表创建成功：search_xfbm_jb')
    db = db2
    cursor = db.cursor()
    query_sql = """select `company_name`, `sub_level_code`, `pin_yin` from xf_org where org_code <> '1398000000000010319'  and  region_code like '13____000000' and is_use = 1 and is_petition = 1 and sub_level_code between 2 and 4 order by region_code asc, sub_level_code asc, org_code asc"""
    insert_sql = """insert into search_xfbm_jb (jb, xfbm, xfbm_alpha) values (%s,%s,%s)"""
    rows = fetch_data(query_sql)
    total = len(rows)
    for ind, row in enumerate(rows):
        print(f"\b\b\b\b\b\b\b\b\b{ind+1}/{total}", end="", flush=True)
        jb = int(row[1]) - 1
        xfbm = row[0]
        xfbm_alpha = (lazy_pinyin(xfbm[0]))[0][0]
        # xfbm_alpha = (row[-1])[-1]
        values = (jb, str(xfbm), str(xfbm_alpha).upper())
        try:
            cursor.execute(insert_sql, values)
            db.commit()
        except Exception as e:
            print("插入数据失败：case__%s" % e)
            # 如果发生错误则回滚
            db.rollback()


# 插入数据 search_qh_zrdw_jb
def write_search_qh_zrdw_jb():
    create_table("DROP TABLE IF EXISTS search_qh_zrdw_jb", "search_qh_zrdw_jb：已删除")
    create_table(sql2, '数据表创建成功：search_qh_zrdw_jb')
    db = db2
    cursor = db.cursor()
    region_sql = """select `region_name`,`region_code` from xf_region where region_code like '13____000000' and region_code <> '130000000000' ORDER BY region_code asc;"""
    query_sql = """select `company_name`,`sub_level_code`, `region_code` from xf_org where org_code <> '1398000000000010319'  and  region_code like '13____000000' and is_use = 1 and is_petition = 0 and sub_level_code between 2 and 4 order by region_code asc, sub_level_code asc, org_code asc"""
    insert_sql = """insert into search_qh_zrdw_jb (jb, qh, zrdw,qh_alpha, zrdw_alpha) values (%s,%s,%s,%s,%s)"""
    rows = fetch_data(query_sql)
    region_rows = fetch_data(region_sql)
    region_dict = {}
    for range in region_rows:
        region_dict[range[-1]] = range[0]
    region_dict['130000000000'] = '河北省'
    region_dict['139800000000'] = '雄安新区'
    total = len(rows)
    for ind, row in enumerate(rows):
        print(f"\b\b\b\b\b\b\b\b\b{ind + 1}/{total}", end="", flush=True)
        qh_code = row[-1]
        if region_dict.get(qh_code):
            jb = int(row[1]) - 1
            qh = region_dict[row[-1]]
            zrdw = row[0]
            qh_alpha = (lazy_pinyin(qh[0]))[0][0]
            zrdw_alpha = (lazy_pinyin(zrdw[0]))[0][0]
            values = (jb, qh, zrdw, qh_alpha.upper(), zrdw_alpha.upper())
            try:
                cursor.execute(insert_sql, values)
                db.commit()
            except Exception as e:
                print("插入数据失败：case__%s" % e)
                db.rollback()


if __name__ == "__main__":
    # region_sql = """select `region_name`,`region_code` from xf_region where region_code like '13__00000000' and region_code <> '130000000000' ORDER BY region_code asc;"""
    # xfbm_sql = """select `company_name`, `sub_level_code`, `pin_yin` from xf_org where org_code <> '1398000000000010319'  and  region_code like '13____000000' and is_use = 1 and is_petition = 1 order by region_code asc, sub_level_code asc, org_code asc"""
    # zrdw_sql = """select `company_name`,`sub_level_code`, `region_code` from xf_org where org_code <> '1398000000000010319'  and  region_code like '13____000000' and is_use = 1 and is_petition = 0 order by region_code asc, sub_level_code asc, org_code asc"""
    # fetch_data(region_sql)
    write_search_xfbm_jb()
    write_search_qh_zrdw_jb()