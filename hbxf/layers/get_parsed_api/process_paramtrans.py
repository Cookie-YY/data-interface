import re


def process_paramtrans(api_dict):
    from settings import PROJECT
    project_settings = __import__(f"settings.{PROJECT}.param_trans", globals(), locals(), ["PT"])
    PT = project_settings.PT
    pt = PT(api_dict)

    # pt.after_begin()
    param_trans = api_dict.get("param_trans", "")  # black_list(a;b;b),qh_godown,black_list(a;b;b),qh2sheshixj(a;b;c)
    param_trans = param_trans.replace(")", "")
    for param_trans_one in param_trans.split(","):
        param_trans_one = param_trans_one + "(" if "(" not in param_trans_one else param_trans_one
        func, args = param_trans_one.split("(")
        args = args.split(";")

        from app import app
        if func not in app.config["PARAM_TRANS"]:
            return
        pt = getattr(pt, func)(*args)
    pt.before_finish()
    return pt.apis_copy