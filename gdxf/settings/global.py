# 设定判断超时的时间（用于数据库连接测试）：Windows下该参数没有用
TIMEOUT = 5

# $反向解析：name=$timetype  =>  name=cy  => name=year
URL_REFERENCE = {
    "cy": "year",
    "cm": "month",
    "shij": "shij_02",
    "shej": "shej_02"
}
# 程序内置transformer，可以直接transformer=@xx使用
EXTENSIONS = ["groupby", "tb", "hb", "zb"]  # 系统内置extension

# extension过程中的初始化值
INITIALIZATION = {
    "ext_int": ["VALUE_FLOAT"],
    "ext_float": ["VALUE_FLOAT"]
}

# 特殊参数，除这些参数以外，其他参数会在数据库中当作条件
# 如要修改特殊参数，在get_dataframe层的params_check中的params_check_for_each
# 键：特殊参数
# 值：字符串代表默认值，False 代表 不可为空或默认值无法表示
SPECIAL_PARAMS = {
    # 确定表的参数
    "realm": (False, None),
    "busin": ("", None),
    "timetype": ("", "cy|cm|cd"),
    "qh": ("", "xj|shij|shej"),
    "lx": ("", None),
    "index": ("", None),
    "table": ("", None),
    "db_engine": ("zb_db", "zb_db|fx_db"),
    
    # 查询数据库的字段
    "name": ("", None),
    "value": (False, None),
    "stack": ("", None),
    "direct_order": ("", None),
    "direct_limit": ("", "\d+"),

    # 辅助查询条件
    "order": ("", None),
    "limit": ("", "\d+|\d\s其他"),  # +会被浏览器转义成空格
    
    # 高级属性
    "transformer": ("", "^@"),
    "full": ("", None),
    "name_limit": ("", "\d+"),
    "stack_limit": ("", "\d+"),
    "ceil": ("", "\d+"),
    "ceil_value": (False, None),
}