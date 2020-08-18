# 1. 数据库连接检查
from app import app
# from settings import TIMEOUT
from utils.timeout import timeout
from utils.db_connection import engine


TIMEOUT = app.config["TIMEOUT"]


@timeout(TIMEOUT, error_message="ConnectionError")
def connect_db_test():
    engine.connect()


def env_test():
    connect_db_test()


if __name__ == '__main__':
    env_test()


