from .params_check_real_table import get_real_table


def params_check(**kwargs):
    """
    检测所有的参数的合法性，kwargs就是所有参数的字典
    规则：
        1. 能够找到table
        2. transformer
            zb:
                1. @zb:ejnr/yjnr
                2. @zb:yjnr/yjnr   # 相当于分子是 xfjc  分母是所有的 xfjc 求和
                # 3. @zb:yjnr        # 相当于 yjnr/yjnr   这里必须保证是 name
                4. @zb             # 相当于 $name / $name
    """
    parsed_content = {}
    code, msg, real_table = get_real_table(kwargs.get("table"),
                                           kwargs.get("realm"),
                                           kwargs.get("busin"),
                                           kwargs.get("timetype"),
                                           kwargs.get("qh"),
                                           kwargs.get("lx"),
                                           kwargs.get("index"))
    if code != 200:
        return code, msg, {}
    parsed_content["real_table"] = real_table

    return 200, "success", parsed_content
