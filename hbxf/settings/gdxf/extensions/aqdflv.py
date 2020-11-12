from extensions import Extension
import pandas as pd


def get_base_sql_map():
    base_sql_map = {
        "3-4-全": "3_4",
        "3-4-形式": "3_4",
        "3-2-全": "3_2",
        "3-2-形式": "3_2"
    }
    return base_sql_map


def get_sql_map():
    base_sql_map = get_base_sql_map()
    sql_map = {
        # 区划分布 --> 全部 --> 总体 【一个数】 省级
        "aqdflv_qh_all_shej": (
            f"select a.aqdf/(a.aqdf+a.cqdf+a.wdf+a.cqwdf) as aqdflv from {base_sql_map['3-2-全']} as a where a.region_name='广东省'",
            ["aqdflv"]),
        # 区划分布 --> 全部 --> 总体 【一个数】 市级
        "aqdflv_qh_all_shij": (
            f"select a.aqdf/(a.aqdf+a.cqdf+a.wdf+a.cqwdf) as aqdflv from {base_sql_map['3-4-全']} as a where a.region_name='广东市'",
            ["aqdflv"]),
        # 区划分布 --> 信访形式 --> 总体 【一个数】 省级
        "aqdflv_qh_xfxs_shej": (
            f"select a.aqdf/(a.aqdf+a.cqdf+a.wdf+a.cqwdf) as aqdflv from {base_sql_map['3-2-形式']} as a where a.region_name='广东省'",
            ["aqdflv"]),
        # 区划分布 --> 信访形式 --> 总体 【一个数】 市级
        "aqdflv_qh_xfxs_shij": (
            f"select a.aqdf/(a.aqdf+a.cqdf+a.wdf+a.cqwdf) as aqdflv from {base_sql_map['3-4-形式']} as a where a.region_name='广东市'",
            ["aqdflv"]),

        # 地图
        # 区划分布 --> 全部 --> 总体 【name/value】 省级
        "aqdflv_qh_all_allshej": (
            f"select a.region_name as 'shij_02',a.aqdf/(a.aqdf+a.cqdf+a.wdf+a.cqwdf) as aqdflv from {base_sql_map['3-2-全']} as a where a.region_name !='广东省'",
            ["shij_02", "aqdflv"]),
        # 区划分布 --> 全部 --> 总体 【name/value】 市级
        "aqdflv_qh_all_allshij": (
            f"select a.region_name as 'xj_02',a.aqdf/(a.aqdf+a.cqdf+a.wdf+a.cqwdf) as aqdflv from {base_sql_map['3-4-全']} as a",
            ["xj_02", "aqdflv"]),
        # 区划分布 --> 信访形式 --> 总体 【name/value】 省级
        "aqdflv_qh_xfxs_allshej": (
            f"select a.region_name as 'shij_02',a.aqdf/(a.aqdf+a.cqdf+a.wdf+a.cqwdf) as aqdflv from {base_sql_map['3-2-形式']} as a where a.region_name !='广东省'",
            ["shij_02", "aqdflv"]),
        # 区划分布 --> 信访形式 --> 总体 【name/value】 市级
        "aqdflv_qh_xfxs_allshij": (
            f"select a.region_name as 'xj_02',a.aqdf/(a.aqdf+a.cqdf+a.wdf+a.cqwdf) as aqdflv from {base_sql_map['3-4-形式']} as a",
            ["xj_02", "aqdflv"]),

    }
    return sql_map


class Aqdflv(Extension):
    """及时受理率"""
    """
    计算公式：使用已提供的SQL语句进行计算
    """

    def __init__(self, apis_copy, apis):
        super(Aqdflv, self).__init__(apis_copy, apis)  # 执行父类方法，获得self.apis/self.apis_copy

    def before_search(self):
        self.df = pd.DataFrame([None], columns=["aqdflv"])

    def search(self):
        sql_item = self.apis['ext'].split('/')[0]
        sql_map = get_sql_map()

        # 按期答复率为3-4（市）3-2（省）

        from utils.db_connection import fx_engine, fx_pymysql
        from utils.results2df import results2df

        sql, columns = sql_map[sql_item]
        self.apis_copy['value'] = 'aqdflv'
        results = fx_engine.execute(sql)
        data = results2df(results, columns)
        self.df = data

    def after_search(self):
        return
