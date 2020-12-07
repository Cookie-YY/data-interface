import os

from flask import g  # 用于存放变化后的init_dicts
from libs.param_trans import ParamTrans
import pandas as pd


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

    def bm_godown(self, *args, **kwargs):
        from app import app
        file = "shejxfbm+shijxfbm+xjxfbm"
        path = app.config.get("INITIALIZATION_FILE_PATH")
        sep = app.config.get("INITIALIZATION_FILE_SEP", "\t")
        xfbm = pd.read_csv(os.path.join(path, file), sep=sep)
        target = self.apis_copy.get("xfbm")
        if target:
            childxfbm = []
            if target in xfbm["shejxfbm"].tolist():
                childxfbm = xfbm["shijxfbm"].tolist()
            if target in xfbm["shijxfbm"].tolist():
                childxfbm = xfbm["xjxfbm"][xfbm["shijxfbm"] == target].tolist()
            from utils.get_unilist import get_unilist
            childxfbm = get_unilist(childxfbm)
            g.modified_initialization.update({"xfbm": childxfbm})
            self.apis_copy.update({"name": "xfbm", "IN-xfbm": ",".join(childxfbm)})
        return self

    def zrdw_godown(self, *args, **kwargs):
        zrdw_shej_under = ['广东省住房和城乡建设厅', '广东省交通运输厅', '广东省水利厅', '广东省农业农村厅', '广东省卫生健康委员会',
                           '广东省国资委', '广东省市场监督管理局', '广东省应急管理厅', '广东省地方金融监督管理局', '广东省公安厅',
                           '广东省民政厅', '广东省司法厅', '广东省人力资源和社会保障厅', '广东省生态环境厅', '广东省教育厅',
                           '广东省自然资源厅', '广东省科技厅', '广东省商务厅', '广东省退役军人事务厅']
        if self.apis_copy.get("Cqh"):
            if self.apis_copy.get("Cqh") == "广东省":
                self.apis_copy.pop("Cqh", "")
                self.apis_copy.update({"name": "zrdw", "IN-zrdw": ",".join(zrdw_shej_under)})

            else:
                self.apis_copy.pop("zrdw", "")
        return self


    # def before_finish(self):
    #     super(PT, self).before_finish()  # 处理qh的尾巴：当有IN-Cqh时，删除qh
    #
    #     # 1. 存在OR-xfxs时 删掉xfxs
    #     or_xfxs = self.apis_copy.get("OR-xfxs", "")
    #     if or_xfxs:
    #         self.apis_copy.pop("xfxs", "")
    #
    #     # 2. 存在IN-xfbm时 删掉xfbm
    #     or_xfbm = self.apis_copy.get("OR-xfbm", "")
    #     if or_xfxs:
    #         self.apis_copy.pop("xfxs", "")
