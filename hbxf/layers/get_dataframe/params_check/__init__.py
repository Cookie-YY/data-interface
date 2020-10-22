from .params_check_each import params_check_each
from .params_check_real_table import get_real_table


def params_check(apis):
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
    # 1. 参数逐一校验
    code, msg, apis_and_apis_copy_after_check = params_check_each(apis)
    if code != 200:
        return code, msg, {}
    apis_copy_after_check, apis = apis_and_apis_copy_after_check["apis_copy"], apis_and_apis_copy_after_check["apis"]
    # 2. 表是否存在
    code, msg, real_table = get_real_table(apis_copy_after_check)
    if code != 200:
        return code, msg, {}

    apis_copy_after_check.update(real_table)  # {"table": "", "ex_table": }

    return 200, "success", apis_and_apis_copy_after_check
