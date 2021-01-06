import re
import sys

from settings.settings import *


def get_tar_workflow_dirs():
    """
    根据 content_path 中记录的小目录和所有目录得到最终的所有小目录
    """
    workflow_dirs_all = [os.path.join(BASE_WORKFLOW_DIR, i) for i in os.listdir(BASE_WORKFLOW_DIR) if re.match(WORKFLOW_DIR_STRUCTURE, i)]  # 全部的小目录
    
    # 标注要计算的小目录
    if not os.path.isfile(EXE_DIR_PATH):
        workflow_dirs_target = []
    else:
        with open(EXE_DIR_PATH, encoding="utf8") as f:
            res = f.readlines()
        workflow_dirs_target = [os.path.join(BASE_WORKFLOW_DIR,i.strip()) for i in res if i and not i.startswith("#")]
    
    if not workflow_dirs_all:
        sys.exit("NoDirectoryError: There are no legal workflow directory")

    if not workflow_dirs_target:
        return workflow_dirs_all

    if len(set(workflow_dirs_target)) != len(workflow_dirs_target):
        sys.exit("DuplicatedDirectoryError: There are at least two directory are the same")
    
    if not (set(workflow_dirs_target) <= set(workflow_dirs_all)):
        sys.exit("WrongDirectoryError: There are some wrong directory in the file")
    return workflow_dirs_target


def get_tar_workflows(workflow_dir):
    """
    根据流程目录得到：1. 时间类型  2. 该目录下的所有执行流程
    """
    workflows = os.listdir(workflow_dir)
    workflows = filter(lambda x: all([i in x for i in WORKFLOW_CONDITION_LIST]), workflows)

    return (os.path.basename(workflow_dir)[WORKFLOW_DIR_TIMETYPE_POS], [os.path.join(workflow_dir, i) for i in workflows])


def get_cmd_list(workflows):
    """
    得到命令的集合，根据时间类型选择模板，根据执行流程的名字选择给模板填充的内容
    """
    cmd_list = []
    for workflow in workflows:
        cmd_base = CMDS.get(workflow[0], CMD_DEFAULT)
        workflow_exes = workflow[1]
        for workflow_exe in workflow_exes:
            if os.path.isfile(workflow_exe):
                cmd = cmd_base["file"] % workflow_exe
            else:
                cmd = cmd_base["dir"] % workflow_exe
            cmd_list.append(cmd)
    return cmd_list


def crontab():
    with open(CRONTAB_FILE_PATH, "w", encoding="utf8") as f:
        f.write(f"{CRONTAB_CONDITION} sh {RUN_PATH}\n")
    os.system("crontab -u dabot -r")
    os.system(f"crontab -u dabot {CRONTAB_FILE_PATH}")
    


def run():
    workflow_dirs_target = get_tar_workflow_dirs()                                                # 得到目标流程目录
    workflow_dirs_target = sorted(workflow_dirs_target,\ 
        key=lambda x: (x[WORKFLOW_DIR_ORDER_POS], -ord(x[WORKFLOW_DIR_TIMETYPE_POS])))  # 用指定位置排序，解决依赖问题
    workflows = [get_tar_workflows(i) for i in workflow_dirs_target]                              # [("Y", ["流程目录1", "流程目录2"]), ("D", ["流程目录3", "流程目录4"])]
    cmd_list = get_cmd_list(workflows)                                                            # 得到所有命令集合
    # [print(i) for i in cmd_list]
    [os.system(i) for i in cmd_list]


if __name__ == "__main__":
    if len(sys.argv)>=2 and sys.argv[1] == "--init":
        crontab()
    else:
        run()
