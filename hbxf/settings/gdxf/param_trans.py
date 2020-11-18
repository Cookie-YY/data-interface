from flask import g  # 用于存放变化后的init_dicts
from libs.param_trans import ParamTrans


class PT(ParamTrans):
    # 获得 qh2sheshixj/qh_include_sub/qh_godown
    def __init__(self, apis_copy):
        super(PT, self).__init__(apis_copy)   # 得到self.apis_copy

    def wx_map(self, *args, **kwargs):
        xfxs = self.apis_copy.get("xfxs", "")
        if xfxs == "网信":
            update_dict = {"OR-xfxs": "!来信,!来访"}
            self.apis_copy.update(update_dict)
        return self

    def before_finish(self):
        super(PT, self).before_finish()  # 处理qh的尾巴：当有IN-Cqh时，删除qh

        # 1. 存在OR-xfxs时 删掉xfxs
        or_xfxs = self.apis_copy.get("OR-xfxs", "")
        if or_xfxs:
            self.apis_copy.pop("xfxs", "")
