# 1. 数据库连接检查
from app import app
# from settings import TIMEOUT
from search_init import write_search_xfbm_jb, write_search_qh_zrdw_jb
from utils.timeout import timeout
from utils.db_connection import zb_engine, fx_engine

TIMEOUT = app.config["TIMEOUT"]


@timeout(TIMEOUT, error_message="ConnectionError")
def connect_db_test(engine, name):
    engine.connect()
    print(f"{name}：{engine.url}")


def env_test():
    # 连接数据库的测试
    connect_db_test(fx_engine, "分析库")
    connect_db_test(zb_engine, "指标库")
    # 初始化弹窗的search表
    write_search_xfbm_jb()
    write_search_qh_zrdw_jb()


if __name__ == '__main__':
    env_test()


