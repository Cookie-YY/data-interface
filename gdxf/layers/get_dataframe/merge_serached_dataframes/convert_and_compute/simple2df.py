import pandas as pd
import decimal
from utils.df_value_mapped import df_value_mapped

# def process_one_df(data_list, name, stack):
#     df = pd.DataFrame(data_list)
#     df.rename(columns={name: 'name', stack: "stack"}, inplace=True)
#     return df


def simple2df(results, apis_copy):
    """
     输入：results:
         [
             [   一个大表
                 [{'yjnr': '教育文体', 'xfjc': 1}, {'yjnr': '农村农业', 'xfjc': 4}],   构成一个df
                 [{'yjnr': '教育文体', 'xfjc': 1}, {'yjnr': '农村农业', 'xfjc': 1}]    构成一个df
             ],
             [[]]  一个大表，可能存在的另一个大表
         ]
    """
    # name = apis_copy.get("name")
    # stack = apis_copy.get("stack")
    df_list = []
    for table in results:
        one = []
        for res in table:
            # res = pd.DataFrame(data_list)

            # 转换decimal类型
            for col in res:
                if isinstance(res[col][0], decimal.Decimal):
                    res[col] = res[col].astype(float)
            # 字段映射（网上投诉-->来信，网上信访-->来信）
            res = df_value_mapped(res, apis_copy=apis_copy)

            # 时间处理
            if "day" in res.columns:
                res["day"] = res["day"].apply(lambda x: str(x).split()[0])
            one.append(res)
        df_list.append(one)
    return df_list


if __name__ == '__main__':
    results = [
             [
                 [{'yjnr': '教育文体', 'xfjc': 1}, {'yjnr': '农村农业', 'xfjc': 4}],
                 [{'yjnr': '教育文体', 'xfjc': 1}, {'yjnr': '农村农业', 'xfjc': 1}]
             ],
             [[]]
         ]
    apis_copy = {"name": "yjnr"}
    df_list = simple2df(results)
    print(df_list[0][0])
    print(df_list[0][1])
    print(df_list[1][0])