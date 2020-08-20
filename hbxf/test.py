import pymysql
from pypinyin import pinyin
from tqdm import tqdm

# 创建表search_xfbm_jb
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
    qh varchar(256),
    zrdw varchar(256),
    qh_alpha varchar(32),
    zrdw_alpha varchar(32)
    );
"""

# 获取数据的库
# db1 = pymysql.connect("39.107.240.28", "root", "Beidas0ft", "pt_dev_dabot")
# 写入数据的库
db2 = pymysql.connect("localhost", "root", "sunxiuqi77", "text1")

# 获取数据的库
db1 = pymysql.connect(
        host="39.107.240.28",
        port=3307,
        user="root",
        passwd="Beidas0ft",
        db="pt_dev_dabot",
        charset="utf8"
    )

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
       # print(i)
   return data


# 创建数据表
def create_table(sql, tb_name):
    db = db2
    cursor = db.cursor()
    try:
        cursor.execute(sql)
        print(tb_name)
    except Exception as e:
        print("创建数据表失败：case%s" % e)


# 插入数据 search_xfbm_jb
def write_search_xfbm_jb():
    create_table("DROP TABLE IF EXISTS search_xfbm_jb", "已存在的search_xfbm_jb已删除")
    create_table(sql1, '数据表创建成功：search_xfbm_jb')
    db = db2
    cursor = db.cursor()
    query_sql = """select `company_name`, `sub_level_code`, `pin_yin` from xf_org where org_code <> '1398000000000010319'  and  region_code like '13____000000' and is_use = 1 and is_petition = 1 order by region_code asc, sub_level_code asc, org_code asc"""
    insert_sql = """insert into search_xfbm_jb (jb, xfbm, xfbm_alpha) values (%s,%s,%s)"""
    rows = fetch_data(query_sql)
    for row in tqdm(rows):
        jb = int(row[1]) - 1
        xfbm = row[0]
        xfbm_alpha = (pinyin(xfbm[0]))[0][0][0]
        # xfbm_alpha = (row[-1])[-1]
        values = (jb, str(xfbm), str(xfbm_alpha))
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
    region_sql = """select `region_name`,`region_code` from xf_region where region_code like '13__00000000' and region_code <> '130000000000' ORDER BY region_code asc;"""
    query_sql = """select `company_name`,`sub_level_code`, `region_code` from xf_org where org_code <> '1398000000000010319'  and  region_code like '13____000000' and is_use = 1 and is_petition = 0 order by region_code asc, sub_level_code asc, org_code asc"""
    insert_sql = """insert into search_qh_zrdw_jb (jb, qh, zrdw,qh_alpha, zrdw_alpha) values (%s,%s,%s,%s,%s)"""
    rows = fetch_data(query_sql)
    region_rows = fetch_data(region_sql)
    region_dict = {}
    for range in region_rows:
        region_dict[range[-1]] = range[0]
    region_dict['130000000000'] = '河北省'
    for row in tqdm(rows):
        qh_code = row[-1]
        if region_dict.get(qh_code):
            jb = int(row[1]) - 1
            qh = region_dict[row[-1]]
            zrdw = row[0]
            qh_alpha = (pinyin(qh[0]))[0][0][0]
            zrdw_alpha = (pinyin(zrdw[0]))[0][0][0]
            values = (jb, qh, zrdw, qh_alpha, zrdw_alpha)
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