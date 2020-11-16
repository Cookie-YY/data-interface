from flask import g

class ParamTrans:
    def __init__(self, apis_copy):
        self.apis_copy = apis_copy
        self.methods = ["qh2sheshixj", "qh_godown", "strict_black_list", "qh_include_sub", "wx_map"]
        self.STOP = False
        self.after_begin()
        # if self.STOP:
        #     return # 只处理full问题的类             类A
        # return # 有处理full问题又处理apis_copy问题   类B集成自类A

    def after_begin(self):
        transformer = self.apis_copy.get("transformer", "")
        if transformer in ["@jssllv", "@aqdflv"]:
            self.STOP = True

    def qh2sheshixj(self, *args, **kwargs):
        table = self.apis_copy.get("table", "")
        if "shej" in table or "shij" in table or "xj" in table:
            qh = self.apis_copy.get("Cqh", "")
            if qh:
                from utils.qh_processor import get_qh_level
                qh_level = get_qh_level(qh)
                update_dict = {qh_level: qh}
                self.apis_copy.update(update_dict)
        return self

    def qh_include_sub(self, *args, **kwargs):
        # full的问题
        qh = self.apis_copy.get("Cqh", "")
        table = self.apis_copy.get("table", "")
        if qh and "qh" in table:
            from utils.qh_processor import get_qh_sub
            from utils.get_unilist import get_unilist
            qh_sub = get_unilist(get_qh_sub(qh))
            update_dict = {"IN-Cqh": ",".join([qh] + qh_sub)}
            self.apis_copy.update(update_dict)
        return self

    def qh_godown(self, *args, **kwargs):
        # full的问题
        table = self.apis_copy.get("table", "")
        if "shej" in table or "shij" in table or "xj" in table:
            qh = self.apis_copy.get("Cqh", "")
            from utils.qh_processor import get_qh_godown
            qh_child_level = get_qh_godown(qh)
            update_dict = {"name": qh_child_level}
        elif "qh" in table:
            qh = self.apis_copy.get("Cqh", "")
            from utils.qh_processor import get_qh_sub
            from utils.get_unilist import get_unilist
            child_qh = get_qh_sub(qh, "next")
            child_qh = get_unilist(child_qh)
            update_dict = {"name": "qh", "IN-Cqh": ",".join(child_qh)}
            # waittodo: full的事
        else:
            return self
        self.apis_copy.update(update_dict)
        return self

    def strict_black_list(self, *args, **kwargs):
        for i in args:
            self.apis_copy.pop(i, "")
        return self

    def wx_map(self, *args, **kwargs):
        xfxs = self.apis_copy.get("xfxs", "")
        if xfxs == "网信":
            update_dict = {"OR-xfxs": "!来信,!来访"}
            self.apis_copy.update(update_dict)
        return self

    def limit_full(self):
        pass

    def year_range(self):
        pass

    def before_finish(self):
        # 1. 存在qh 但 区划体系是  shej/shij/xj时，删除qh
        qh = self.apis_copy.get("Cqh", "")
        table = self.apis_copy.get("table", "")
        if qh and ("shej" in table or "shij" in table or "xj" in table):
            self.apis_copy.pop("Cqh", "")

        # 2. 存在qh_godown 并且 table中含有qh时，删除Cqh
        param_trans = self.apis_copy.get("param_trans", "")
        table = self.apis_copy.get("table", "")
        if "qh_godown" in param_trans and "qh" in table:
            self.apis_copy.pop("Cqh", "")

        # 3. 存在qh_include_sub 并且 table中含有qh时，删除Cqh
        param_trans = self.apis_copy.get("param_trans", "")
        table = self.apis_copy.get("table", "")
        if "qh_include_sub" in param_trans and "qh" in table:
            self.apis_copy.pop("Cqh", "")

        # waittodo: 存在IN-Cqh  时  删除Cqh

        # 4. 存在OR-xfxs时 删掉网信
        or_xfxs = self.apis_copy.get("OR-xfxs", "")
        if or_xfxs:
            self.apis_copy.pop("xfxs", "")
