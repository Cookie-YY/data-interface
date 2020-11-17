import os
from asyncio import Protocol

import pandas as pd
import random  # eval有可能会用到随机数
import itertools
import copy
from setting.init_dicts import CUS_INITIALIZATION as random_dict # 需要提取的初始化字典
# from typing import Protocol
import numpy as np
import random


# from layers.makeup_dataframe.day_initialized import day_initialized

# df_dict: 输入的dict
# df_list: 输入的df列名
# df_short_list: 输入的df列名不包含存在txt中的列名
# text_value_lists: 初始化内容中再加上txt中的内容
# from layers.makeup_dataframe.year_initialized import year_initialized


#  这个函数用于完成随机初始化
#   总初始化入口  df:需要随机初始化的df  value:指定的需要初始化的列
def random_init(merge_df, val_col):
    # for item in merge_df[val_col]:
    #     item = type_random_init(val_col) if pd.isna(item) else item  # 从文件中查出需要随机初始化的类型，传入工厂，完成随机初始化返回df
    merge_df[val_col] = merge_df.apply(lambda x: query_random_info(x[val_col], val_col), axis=1)
    return merge_df


"""
    "zxdbxfjc": ["VALUE_INT_(0,100)"],
    "shezxdbxfjc": ["VALUE_INT"],
    "shizxdbxfjc": ["VALUE_INT"],
    "xzxdbxfjc": ["VALUE_INT"],
    "gjzxdbxfjc": ["VALUE_INT"],
"""


def query_random_info(item, val_col):  # item df中value列中的一项 val_col value列的列名
    item = type_random_init(val_col) if pd.isna(item) else item
    return item


# 处理需要随机初始化的None，先查类型，再走工厂
def type_random_init(val_col):
    random_str = random_dict[val_col][0] if val_col in random_dict else None  # 先查出需要随机初始化的信息str
    random_range = random_str.split('_')[2] if len(random_str.split('_')) > 2 else None  # 获取到随机初始化的范围
    random_type = random_str.split('_')[1] if len(random_str.split('_')) > 1 else None  # 获取到随机初始化调用的函数类型
    random_production = make_random(random_type, random_range)
    return random_production


def make_random(random_type, random_range):  # 随机化总入口 工厂模式
    try:
        random = next(filter(lambda P: P.random_type == random_type, Random.__subclasses__()))()
        random.random_range = random_range
        return random.product()  # 将生成完毕的随机数返回
    except StopIteration as err:
        raise NotImplementedError from err


# def int_random_init(lower, upper):
#     pass
#
#
# def float_random_init(lower, upper):
#     pass


class RandomABC(Protocol):
    def before_random(self):  # 随机化前处理
        raise NotImplementedError

    def random(self):  # 随机化处理
        raise NotImplementedError

    def after_random(self):  # 随机化后处理
        raise NotImplementedError


class Random(RandomABC):  # random基类实现一些random的通用方法
    random_type = 'None'
    random_range = 'None'
    production = 'None'

    def before_random(self):
        if not self.random_range:
            self.random_range = (0, 9)  # 默认的范围
        return

    def random(self):
        return

    def after_random(self):
        return

    def product(self):
        self.before_random()
        self.production = self.random()
        self.after_random()
        return self.production


class IntRandom(Random):
    random_type = 'INT'
    random_range = 'None'

    def random(self):
        lower = int(self.random_range.replace('(', '').replace(')', '').split(',')[0])
        upper = int(self.random_range.replace('(', '').replace(')', '').split(',')[1])
        random_production = random.randint(lower, upper)
        return random_production


class FloatRandom(Random):
    random_type = "FLOAT"
    random_range = 'None'  # (0,9)

    def random(self):
        lower = float(self.random_range.replace('(', '').replace(')', '').split(',')[0])
        upper = float(self.random_range.replace('(', '').replace(')', '').split(',')[1])
        random_production = random.uniform(lower, upper)
        return random_production


if __name__ == '__main__':
    pass
