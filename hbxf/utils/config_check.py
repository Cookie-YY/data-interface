import sys


class ConfigCheck:
    def __init__(self, config):
        self.config = config
        [getattr(ConfigCheck, i)(self) for i in ConfigCheck.__dict__ if i.startswith("check")]

    # SPECIAL_PARAMS
    def check_SPECIAL_PARAMS(self):
        # 对象：特殊参数的配置
        # 作用：赋予默认值/有特殊含义(不作为筛选条件)
        # 格式标准：SPECIAL_PARAMS = {"demo": (False, "")}
        # 内容标准：在参数中预先定义
        SPECIAL_PARAMS = self.config.get("SPECIAL_PARAMS", {})
        for k, v in SPECIAL_PARAMS.items():
            if not ((v[0] is False or isinstance(v[0], str)) and
                    (v[1] is None or isinstance(v[1], str))):
                sys.exit("ConfigError[SPECIAL_PARAMS]: The element in SPECIAL_PARAMS must be as follow "
                         "(False or str, str)")
