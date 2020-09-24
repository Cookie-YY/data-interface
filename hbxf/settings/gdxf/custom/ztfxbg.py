# -*- coding: utf-8 -*-
import datetime

from utils.db_connection import zb_pymysql


# now = datetime.datetime.now().strftime("%Y{y}%m{m}%d{d}").format(y="年", m="月", d="日")

def search_sb(sql, value1, value2):
    try:
        # conn = pymysql.connect(
        #     host=DB_HOST, user=DB_USER, passwd=DB_PASSWD,
        #     port=DB_PORT, db=DB_DBNAME, charset='utf8')
        pre = '<span class="index">'
        post = '</span>'
        cur = zb_pymysql.cursor()
        cur.execute(sql % value1)  # 查询数据
        res = cur.fetchall()  # 获取结果
        total_num = res[0][0]
        cur.execute(sql % value2)  # 查询数据
        res = cur.fetchall()  # 获取结果)
        last_total_num = res[0][0]
        if last_total_num == None:
            total_num = str(total_num) if total_num != None else str(0)
            tb = str(0)
            total_num, tb = f'{pre}{total_num}{post}', f'{pre}{tb}{post}'
        else:
            tb = str(int(total_num) / last_total_num)  # 同比
        return f'{pre}{total_num}{post}', f'{pre}{tb}{post}'
    except Exception as e:
        print(e)


def run(start, end, zt, **kwargs):
    s_time = start
    e_time = end
    s_time1 = datetime.datetime.strptime(s_time, "%Y-%m-%d")
    e_time1 = datetime.datetime.strptime(e_time, "%Y-%m-%d")
    str1 = s_time1.strftime("%Y{y}%m{m}%d{d}").format(y="年", m="月", d="日")
    str2 = e_time1.strftime("%Y{y}%m{m}%d{d}").format(y="年", m="月", d="日")
    last_s_time = str(s_time1.year - 1) + s_time[4:]
    last_e_time = str(e_time1.year - 1) + e_time[4:]

    total_time = str1 + "至" + str2  # 具体时间
    now_time = datetime.datetime.now().strftime("%Y-%m-%d")

    sql = "select sum(xfjc) from xf_xfj_cd_zt_xj_xfjc where zt='"+zt+"' and `day` >= '%s' AND `day` <= '%s' "
    sql_xfxs = "select sum(xfjc) from xf_xfj_cd_zt_xj_xfxs_xfjc where zt='"+zt+"' and xfxs='%s' AND `day` >= '%s' AND `day` <= '%s' "
    sql_djjg = "select sum(xfjc) from xf_xfj_cd_zt_xj_djjg_xfjc where zt='"+zt+"' and djjg='%s' AND `day` >= '%s' AND `day` <= '%s' "
    sql_jtf = "select sum(xfjc) from xf_xfj_cd_zt_xj_jtf_xfjc where zt='"+zt+"' and jtf='集体访' AND `day` >= '%s' AND `day` <= '%s' "
    # 全省-同比
    total_num, tb_qs = search_sb(sql, (s_time, e_time), (last_s_time, last_e_time))
    # xfxs_tb
    total_num_lx, tb_lx = search_sb(sql_xfxs, ('来信', s_time, e_time), ('来信', last_s_time, last_e_time))
    total_num_lf, tb_lf = search_sb(sql_xfxs, ('来访', s_time, e_time), ('来访', last_s_time, last_e_time))
    total_num_wx, tb_wx = search_sb(sql_xfxs, ('网信', s_time, e_time), ('网信', last_s_time, last_e_time))
    # djjg_tb
    total_num_gj, tb_gj = search_sb(sql_djjg, ('国家', s_time, e_time), ('国家', last_s_time, last_e_time))  # 国家
    total_num_fsf, tb_fsf = search_sb(sql_djjg, ('省级', s_time, e_time), ('省级', last_s_time, last_e_time))  # 赴省访
    total_num_dsf, tb_dsf = search_sb(sql_djjg, ('市级', s_time, e_time), ('市级', last_s_time, last_e_time))  # 到市访
    total_num_dqx, tb_dqx = search_sb(sql_djjg, ('县级', s_time, e_time), ('县级', last_s_time, last_e_time))  # 到区县
    # jtf
    total_num_jtf, tb_jtf = search_sb(sql_jtf, (s_time, e_time), (last_s_time, last_e_time))  # 集体访

    data1 = '一：基本情况' + '</span><span class="time_span">' + total_time + '</span><span>'+ '，全省信访系统共登记受理' + zt + '类信访件' + total_num + '件次' + '，同比浮动'+ tb_qs + '%。'
    data2 = '二：信访指标分析' + '</span><span>' + total_time + '</span><span>'+ '，' + zt + '类来信' + total_num_lx + '件次' + '，同比浮动'+ tb_lx + '%； 来访' + total_num_lf + '件次， 同比浮动' + tb_lf + '%； 网上信访'  + total_num_wx + '件次， 同比浮动' + tb_wx + '%。'
    data3 = '三：信访态势分析' + '</span><span>' + total_time + '</span><span>'+ '，' + zt + '类国家件' + total_num_gj + '件次，同比浮动' + tb_gj + '%，赴省访' + total_num_fsf + '件次，同比浮动'+ tb_fsf + '%；到市访' + total_num_dsf + '件次，同比浮动' + tb_dsf + '%；到区县信访' + total_num_dqx + '件次，同比浮动' + tb_dqx + '%'
    data4 = '四：信访秩序分析' + '</span><span>' + total_time + '</span><span>'+ '，' + zt + '类集体访' + total_num_jtf + '件次，同比浮动' + tb_jtf + '%。'

    data1 = '<span class="subtitle">' + data1
    data2 = '<span class="subtitle">' + data2
    data3 = '<span class="subtitle">' + data3
    data4 = '<span class="subtitle">' + data4


    # data = '广东省'+ zt + '信访专题分析报告' + data1 + '\n' + data2 + '\n' + data3 + '\n' + data4 + '\n' + '  '*55 + '报告生成时间：' + str(now_time)
    data = '<span class="title">' + '广东省'+ zt + '信访专题分析报告' + '</span><span class="date">'+now_time + '</span>' + data1 + data2 + data3 + data4 + '<span class="report_time">' + '报告生成时间：' + str(now_time) + '</span>'
    return 200, "success", '<span class="report">'+data+'</span>'


if __name__ == '__main__':
    request = {"day": ["2020-01-01","2020-01-03"], "zt": "涉众型经济案件"}
    code, msg, res = run(**request)
    print(res)