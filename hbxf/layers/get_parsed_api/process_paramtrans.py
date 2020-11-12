def process_paramtrans(api_dict):
    param_trans = api_dict.get("param_trans", "")
    param_trans_list = param_trans.replace("@", "").split(",")

    from settings import PROJECT
    project_settings = __import__(f"settings.{PROJECT}.param_trans", globals(), locals(), ["ParamTrans"])
    PT = project_settings.ParamTrans
    pt = PT(api_dict)

    for param_trans_one in param_trans_list:
        if param_trans_one not in pt.methods:
            return
        pt = getattr(pt, param_trans_one)()
    return pt.apis_copy