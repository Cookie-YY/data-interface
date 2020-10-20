import numpy as np


class Extension:
    """
    transformer 下的 extension的基类
    1. 定义了除了 transformer其他条件过滤的方法（继承就会有）
    2. 定义了获取所有表的方法，默认就是当前表（table参数）
    before_search方法:
        返回 waiting_for_search = [{"table":"", "ex_table":"", "columns": [], "conditions": []}, {}]
    after_search方法:
        返回 res = [[data_list1, data_list2],[]]
    """
    from layers.get_dataframe.params_check import get_real_table
    from layers.get_dataframe.params_parse.params_parse_conditions import get_conditions

    def __init__(self, apis_copy, apis):  # apis_copy中可以拿到ex_table
        """实现除了transformer其他的条件解析"""
        self.code = 200
        self.msg = "success"
        self.apis_copy = apis_copy
        self.apis = apis
        self.waiting_for_search = None  # [自己调用方法后]调用before_search后，提供该属性用于查库
        self.db_results = None          # [外界传递]当完成数据库查库后获得该属性
        self.final_res = None           # [自己调用方法后]调用after_search后，提供该属性作为最终结果{"df": df, "apis_copy": apis_copy}

    def before_search(self):
        real_table = Extension.get_real_table(self.apis_copy)
        table, ex_table = real_table["table"], real_table["ex_table"]
        columns = f"{self.apis_copy['name']},{self.apis_copy['stack']},{self.apis_copy['value']}"
        conditions = [self.apis]
        before_waiting_for_search = [
            {"table": table, "ex_table": ex_table, "columns": columns, "conditions": conditions},
        ]
        self.code, self.msg, self.waiting_for_search = Extension.get_waiting_for_search(before_waiting_for_search)

        return 200, "success", []

    def after_search(self):
        df = self.db_results[0][0]
        df = df.replace(np.nan, 0)
        df = df.replace([np.inf, -np.inf], 0)
        self.final_res = {"df": df, "apis_copy": self.apis_copy}

    @classmethod
    def get_waiting_for_search(cls, before_waiting_for_search):
        """
        :param before_waiting_for_search:  [
            {"table": table_my, "columns": columns_my, "conditions": [apis_copy]},
            {"table": table_bmy, "columns": columns_bmy, "conditions": [apis_copy]},
            {"table": table_jbmy, "columns": columns_jbmy, "conditions": [apis_copy]}
        ]
        :return: code, msg, waiting_for_search: [{"table":"", "ex_table":"", "columns": [], "conditions": []}, {}]
        """
        for_search_done = []
        for waiting_for_search_each in before_waiting_for_search:
            for_search_each_done = {}
            # 处理 table
            table = waiting_for_search_each["table"]
            for_search_each_done["table"] = table

            # 处理 ex_table
            ex_table = waiting_for_search_each.get("ex_table")
            if not ex_table:
                db_engine = waiting_for_search_each.get("db_engine", "zb_db")
                code, msg, real_table = cls.get_real_table({"table":table, "db_engine": db_engine})
                if code != 200:
                    return code, msg, {}
                ex_table = real_table["ex_table"]
            for_search_each_done["ex_table"] = ex_table

            # 处理 columns
            columns = waiting_for_search_each["columns"]
            columns = [i for i in columns.split(",") if i]
            for_search_each_done["columns"] = columns

            # 处理conditions
            conditions_done = []
            conditions = waiting_for_search_each["conditions"]
            for condition in conditions:
                if not isinstance(condition, dict):  # 说明有多组condition
                    return 400, "ExtensionError: The condition must be list with some dicts", {}
                code, msg, parsed_condition = cls.get_conditions(ex_table, condition)
                if code != 200:
                    return code, msg, {}
                conditions_done.append(parsed_condition)

            for_search_each_done["conditions"] = conditions_done
            for_search_done.append(for_search_each_done)

        return 200, "success", for_search_done

