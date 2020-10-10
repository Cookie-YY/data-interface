from .params_parse_tb_or_hb import params_parse_tb_or_hb
from .. import get_conditions


def parse_transformer_conditions(transformer, real_table, apis):
    # transformer 提供  @groupby  @zb  @tb  @hb  @divide 五种算子
    # 第一类：@groupby  &  @zb               不改变查询的表 + 不改变查询的字段  + 不改变查询的条件  直接给到包装层
    # 第二类：@tb       &  @hb               不改变查询的表 + 不改变查询的字段  + 改变查询的条件
    # 第三类：@divide   &  @table            增加查询的表   + 改变查询的字段   + 改变查询的条件
    # transformer=@groupby:shij_02,xfxs + @zb:xfxs/xfxs      transformer=@groupby:shij_02,xfxs + @zb:xfxs/all
    # transformer=@groupby:shij_02,xfxs + @tb:day            transformer=@groupby:shij_02,xfxs + @hb:day
    # transformer=@divide:{@groupby:$name,$stack}{@table:xf_xx_xx_xfj;year=$$timetype}

    condition1_2 = {}
    # 处理同比环比的另一组条件问题
    if "@tb" in transformer or "@hb" in transformer:
        day_condition = apis.get("day")
        if day_condition is None:
            return 400, "if use ':day' in groupby transformer, there must be the conditions about day"
        if "@tb" in transformer:
            condition1_2 = params_parse_tb_or_hb("tb", apis)  # 得到 {列: 字符串} 形式的条件  {"day": "2020-01-01,2020-01-02"}
        else:
            condition1_2 = params_parse_tb_or_hb("hb", apis)  # 得到 {列: 字符串} 形式的条件  {"day": "2020-01-01,2020-01-02"}
        code, msg, condition1_2 = get_conditions(real_table.get("ex_table"), condition1_2)
        if code != 200:
            return code, msg, {}

    return 200, "success", condition1_2

