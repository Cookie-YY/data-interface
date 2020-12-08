from flask import g


class ParamTrans:
    def __init__(self, apis_copy):
        self.apis_copy = apis_copy

    def qh2sheshixj(self, *args, **kwargs):
        table = self.apis_copy.get("table", "")
        qh = self.apis_copy.get("Cqh", "")
        if qh:
            if "qh" in table:
                update_dict = {"sql_qh": f"qh = '{qh}'"}
            elif "shej" in table or "shij" in table or "xj" in table:
                from utils.qh_processor import get_qh_level
                qh_level = get_qh_level(qh)  # xj_02时 只有xj_02=xx县 没有shij_02
                update_dict = {qh_level: qh, "sql_qh": f"{qh_level} = '{qh}'"}
            else:
                return self
            self.apis_copy.update(update_dict)
        return self

    def qh_include_sub(self, *args, **kwargs):
        # full的问题
        qh = self.apis_copy.get("Cqh", "")
        table = self.apis_copy.get("table", "")
        if qh and "qh" in table:
            from utils.qh_processor import get_qh_include_sub
            from utils.get_unilist import get_unilist
            qh_include_sub = get_unilist(get_qh_include_sub(qh))
            update_dict = {"IN-Cqh": ",".join(qh_include_sub)}
            self.apis_copy.update(update_dict)
        return self

    def qh_godown(self, *args, **kwargs):
        # full的问题
        table = self.apis_copy.get("table", "")
        qh = self.apis_copy.get("Cqh", "")
        from utils.qh_processor import get_qh_sub
        from utils.get_unilist import get_unilist
        child_qh = get_qh_sub(qh, "next")
        child_qh = get_unilist(child_qh)
        if "shej" in table or "shij" in table or "xj" in table:
            qh = self.apis_copy.get("Cqh", "")
            from utils.qh_processor import get_qh_godown
            qh_child_level = get_qh_godown(qh)
            update_dict = {"name": qh_child_level}
            g.modified_initialization.update({qh_child_level: child_qh})
        elif "qh" in table:
            update_dict = {"name": "qh", "IN-Cqh": ",".join(child_qh)}
            g.modified_initialization.update({"qh": child_qh})
            # waittodo: full的事
        elif table == "":  #  没有写table，走transformer，按照qh in table处理
            qh = self.apis_copy.get("Cqh", "")
            from utils.qh_processor import get_qh_sub
            from utils.get_unilist import get_unilist
            child_qh = get_qh_sub(qh, "next")
            child_qh = get_unilist(child_qh)
            update_dict = {"name": "qh", "IN-Cqh": ",".join(child_qh)}
            g.modified_initialization.update({"qh": child_qh})
        else:
            return self
        self.apis_copy.update(update_dict)
        return self

    def year_range(self, *args, **kwargs):
        # param_trans在parse_now之后
        # param_trans在g.reqdicts_before_pt之前（g.reqdicts_before_pt有start和end）
        # self.apis_copy需要有[2018,2020]  // 搜索/排序补零
        year = self.apis_copy.get("year")
        if year.isdigit() and len(args) == 1:
            start = int(year) - int(args[0])
            condition = f"{start},{year}"
            self.apis_copy["year"] = condition
            g.reqdicts_before_pt.update({"start": str(start), "end": str(year)})
        return self

    def before_finish(self, *args, **kwargs):
        # 1. 存在qh 但 区划体系是  shej/shij/xj时，删除qh
        qh = self.apis_copy.get("Cqh", "")
        table = self.apis_copy.get("table", "")
        if qh and ("shej" in table or "shij" in table or "xj" in table):
            self.apis_copy.pop("Cqh", "")

        # 存在带有IN-条件或者OR-条件时，删除  剩下的内容  如  存在IN-Cqh时 删除Cqh
        wait_for_del = [i for i in self.apis_copy if i.startswith("IN-") or i.startswith("OR-")]
        wait_for_del = [i.split("-")[1] for i in wait_for_del]
        for i in wait_for_del:
            self.apis_copy.pop(i, "")


        # # 2. 存在qh_godown 并且 table中含有qh时，删除Cqh
        # param_trans = self.apis_copy.get("param_trans", "")
        # table = self.apis_copy.get("table", "")
        # if "qh_godown" in param_trans and "qh" in table:
        #     self.apis_copy.pop("Cqh", "")
        #
        # # 3. 存在qh_include_sub 并且 table中含有qh时，删除Cqh
        # param_trans = self.apis_copy.get("param_trans", "")
        # table = self.apis_copy.get("table", "")
        # if "qh_include_sub" in param_trans and "qh" in table:
        #     self.apis_copy.pop("Cqh", "")
        #
        # # waittodo: 存在IN-Cqh  时  删除Cqh

