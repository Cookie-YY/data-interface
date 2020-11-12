def qh2sheshixj(api_copy):
    table = api_copy.get("table", "")
    qh = api_copy.get("Cqh", "")
    if qh:
        if "shej" in table or "shij" in table or "xj" in table:
            api_copy.pop("qh")

            qh = api_copy.get("Cqh", "")
            if "省" in qh:
                update_dict = {"shej_02": "广东省"}
            elif "市" in qh:
                update_dict = {"shej_02": "广东省", "shij_02": qh}
            else:
                update_dict = {"shej_02": "广东省", "xj_02": qh}
            api_copy.update(update_dict)
    return api_copy