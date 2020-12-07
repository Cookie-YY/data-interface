import os
import datetime

# /xinfang/dabot/calculate/run.py
# /xinfang/dabot/calculate/workflow/02_analystics_group
# /xinfang/dabot/calculate/calculate_content
# /xinfang/dabot/calculate/config/db_config.json
# /xinfang/dabot/envs/deps/knime/knime_4.0.1/knime

BASE_DIR = os.path.abspath(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
CALCULATE_DIR = os.path.join(BASE_DIR, "calculate")                                 # knime的工作空间，config目录需要在这个目录下


############################################### 定时配置 ###############################################
# 定时执行
CRONTAB_FILE_PATH = os.path.join(CALCULATE_DIR, "settings", "crontab_dabot")        # 生成的crontab文件路径
CRONTAB_CONDITION = "30 23 * * *"                                                   # 定时执行的语句（需要符合crontab语法，本程序不做校验）


############################################### 结构配置 ###############################################
# 目录配置
KNIME_PATH = os.path.join(BASE_DIR, "envs", "knime", "knime_4.1.2", "knime")
PYTHON_PATH = "/root/anaconda3/bin/python3"

RUN_PATH = os.path.join(CALCULATE_DIR, "start.sh")                                  # 执行的shell脚本目录
BASE_WORKFLOW_DIR = os.path.join(CALCULATE_DIR, "workflow", "02_analystics_group")  # 流程的大目录，里面有很多小目录
EXE_DIR_PATH = os.path.join(CALCULATE_DIR, "settings", "calculate_exe")             # 一个文件，每一行都是一个需要计算的目录

# 流程目录结构定义
WORKFLOW_DIR_STRUCTURE = r"^\d[DY0-9]\d{6}$"                                        # 存放等待被执行流程的目录结构，如 0D030200（根据是否匹配进行筛选）
WORKFLOW_DIR_ORDER_POS = 0                                                          # 根据目录的第几位进行排序（解决依赖关系） 不用必须是数字，如0D030200的第一位标记顺序
WORKFLOW_DIR_TIMETYPE_POS = 1                                                       # 根据目录的第几位确定时间类型，用于执行不同命令，如0D030200的第二位标记类型

# 执行流程判断条件
WORKFLOW_CONDITION_LIST = ["xf"]                                                    # 等待被执行的流程需要包含的内容（根据是否匹配进行筛选）



############################################### 执行配置 ###############################################
# 时间传参配置
DAY_FROM = str(datetime.datetime.now().year) + "-01-01"   # 当前年的一月一号
# DAY_PAST_FROM_NOW = 7                                     # 当前天往前数7天 
# DAY_FROM = (datetime.datetime.now()-datetime.timedelta(days=DAY_PAST_FROM_NOW)).strftime("%Y-%m-%d")
DAY_TO = str(datetime.datetime.now()).split()[0]
YEAR_NOW = str(datetime.datetime.now().year)

# 命令配置
CMD_YEAR_FILE = f'{KNIME_PATH} -application org.knime.product.KNIME_BATCH_APPLICATION -workflow.variable=year,"{YEAR_NOW}",String -reset -workflowFile="%s" -nosplash -data "{CALCULATE_DIR}"'
CMD_YEAR_DIR = f'{KNIME_PATH} -application org.knime.product.KNIME_BATCH_APPLICATION -workflow.variable=year,"{YEAR_NOW}",String -reset -workflowDir="%s" -nosplash -data "{CALCULATE_DIR}"'

CMD_DAY_FILE = f'{KNIME_PATH} -application org.knime.product.KNIME_BATCH_APPLICATION -workflow.variable=day_from,"{DAY_FROM}",String -workflow.variable=day_to,"{DAY_TO}",String -reset -workflowFile="%s" -nosplash -data "{CALCULATE_DIR}"'
CMD_DAY_DIR = f'{KNIME_PATH} -application org.knime.product.KNIME_BATCH_APPLICATION -workflow.variable=day_from,"{DAY_FROM}",String -workflow.variable=day_to,"{DAY_TO}",String -reset -workflowDir="%s" -nosplash -data "{CALCULATE_DIR}"'

CMD_NORMAL_FILE = f'{KNIME_PATH} -application org.knime.product.KNIME_BATCH_APPLICATION -reset -workflowFile="%s" -nosplash -data "{CALCULATE_DIR}"'
CMD_NORMAL_DIR = f'{KNIME_PATH} -application org.knime.product.KNIME_BATCH_APPLICATION -reset -workflowDir="%s" -nosplash -data "{CALCULATE_DIR}"'

CMD_DEFAULT = {"file": CMD_NORMAL_FILE, "dir": CMD_NORMAL_DIR}
CMDS = {
        "Y": {"file": CMD_YEAR_FILE, "dir": CMD_YEAR_DIR}, 
        "D": {"file": CMD_DAY_FILE, "dir": CMD_DAY_DIR},
    }

# -consoleLog -noexit -nosplash -application org.knime.product.KNIME_BATCH_APPLICATION -workflowDir="D:\workflows\0Y020400\xf_xfj_cm_shej_xfjc" -workflow.variable=year,"2020",String -reset -data D:\workflows\
# # cmd = '/opt/DaBOTDataShow/envs/deps/knime/knime_4.0.1/knime -consoleLog -application org.knime.product.KNIME_BATCH_APPLICATION -reset -workflowFile="{}" -nosplash -data "{}"'
# cmd_day = '/opt/DaBOTDataShow/envs/deps/knime/knime_4.0.1/knime -application org.knime.product.KNIME_BATCH_APPLICATION -reset -workflowFile="{}" -nosplash -data "{}"'
# cmd_year = '/opt/DaBOTDataShow/envs/deps/knime/knime_4.0.1/knime -application org.knime.product.KNIME_BATCH_APPLICATION -reset -workflowFile="{}" -nosplash -data "{}"'

