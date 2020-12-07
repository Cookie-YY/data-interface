from app import app
qh_info = app.config["QH_INFO"]


def get_qh_sub(target, sub="all"):
    if sub == "all":  # 含所有小弟【信访绩效考核】
        if target in qh_info["shej_02"].tolist():
            shij = qh_info["shij_02"].tolist()
            xj = qh_info["xj_02"].tolist()
            return shij + xj
        if target in qh_info["shij_02"].tolist():
            xj = qh_info["xj_02"][qh_info["shij_02"]==target].tolist()
            return xj
        if target in qh_info["xj_02"].tolist():
            return []
    else:  # 只走下面一层是 go_down
        if target in qh_info["shej_02"].tolist():
            shij = qh_info["shij_02"].tolist()
            return shij
        if target in qh_info["shij_02"].tolist():
            xj = qh_info["xj_02"][qh_info["shij_02"]==target].tolist()
            return xj
        if target in qh_info["xj_02"].tolist():
            return []


def get_qh_level(target):
    if target in qh_info["shej_02"].tolist():
        return "shej_02"
    if target in qh_info["shij_02"].tolist():
        return "shij_02"
    if target in qh_info["xj_02"].tolist():
        return "xj_02"


def get_qh_godown(qh):
    if qh in qh_info["shej_02"].tolist():
        return "shij_02"
    if qh in qh_info["shij_02"].tolist():
        return "xj_02"
