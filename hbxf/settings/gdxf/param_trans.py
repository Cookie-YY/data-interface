from flask import g


class ParamTrans:
    def __init__(self, apis_copy):
        self.apis_copy = apis_copy
        self.methods = ["qh2sheshixj", "qh_include_sub"]

    def qh2sheshixj(self):
        table = self.apis_copy.get("table", "")
        qh = self.apis_copy.pop("Cqh", "")
        if qh:
            if "shej" in table or "shij" in table or "xj" in table:
                from utils.qh_processor import get_qh_level
                qh_level = get_qh_level(qh)
                update_dict = {qh_level: qh}
                self.apis_copy.update(update_dict)
        return self

    def qh_include_sub(self):
        qh = self.apis_copy.pop("Cqh", "")
        if qh:
            from utils.qh_processor import get_qh_include_sub
            from utils.get_unilist import get_unilist
            qh_sub = get_unilist(get_qh_include_sub(qh))
            update_dict = {"IN-Cqh": [qh]+qh_sub}
            self.apis_copy.update(update_dict)
        return self

    def qh_godown_and_limitfull(self):
        qh = self.apis_copy.pop("Cqh", "")


    def qh_limit_full(self):
        pass

    def year_range(self):
        pass


    # def sheshixj_include_sub(self):
    #     shej_02 = self.apis_copy.pop("shej_02", "")
    #     shij_02 = self.apis_copy.pop("shij_02", "")
    #     xj_02 = self.apis_copy.pop("xj_02", "")
    #     if xj_02 or shij_02 or shej_02:
    #         if xj_02:
    #             update_dict = {"xj_02": xj_02}
    #         elif shij_02:
    #             update_dict = {"shij_02": []}
    #         else:
    #             update_dict = {}
    #         self.apis_copy.update(update_dict)
    #     return self
