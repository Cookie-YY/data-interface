## 数博流程执行脚本

### envs目录为依赖目录：推荐安装在envs中redme.txt详细说明

- knime（需要和开发流程使用的knime版本一致）
- python3（3.6及以上）
- 

### calculate文件夹的目录说明

流程计算涉及的全部目录都在：dabot/calculate/下

- **config目录：**流程执行时需要的数据库连接相关配置

- **workflow目录：**流程执行的相关目录，计算流程在`workflow/02_analystics_group`下
  1. workflowset.meta之类的无关文件无需删除，程序会按照`settings/settings.py`文件中WORKFLOW_CONDITION_LIST进行筛选

- **settings目录：**

  1. calculate_exe文件

     1. 每一行为需要执行的目录名称

     2. 如果该文件内容为空，或该文件不存在会走全部的流程

     3. 文件内容无须严格按照流程执行顺序写，程序会自动处理执行的先后顺序

     4. 内容如果有重复或者和实际流程对不上，程序会进行检查并提示，不会执行

  2. crontab_dabot文件

     1. 此文件保存了crontab定时任务的信息，程序自动生成，用户无需编辑此文件

     2. 在settings.py文件中修改CRONTAB_CONDITION的值之后，调用`sh init.sh` 自动生成此文件

  3. settings.py文件：流程执行的所有配置信息

- **run.py文件：**核心执行脚本文件

- **start.sh文件：**执行流程的shell脚本：**如果目录有变化，注意修改这里的路径**

- **init.sh文件：**初始化流程的shell脚本，目前只有注册crontab的服务：**如果目录有变化，注意修改这里的路径**

### 操作说明

注意：sh脚本执行时可能有权限问题：`chmod 755 start.sh`   `chmod 755 init.sh`

1. 新流程执行方法：

   1. 将所有流程放到workflow/02_analystics_group/下

      目录结构示例：

      ​	workflow/02_analystics_group/0D030200/xf_xfj_cd_ejnr_xfjc

      ​	workflow/02_analystics_group/0Y020400/xf_xfj_cm_shej_xfjc

   2. 编辑calculate目录下的calculate_exe文件，设置需要执行的目录，不写为全部执行

      文件内容示例：

      ​	0D030200
      ​	0Y020400

   3. `sh ./start.sh` 执行所有流程

2. 设置定时任务方法

   1. 编辑settings.py文件的CRONTAB_CONDITION的值

   2. `sh ./init.sh` 生成crontab文件，并提交crontab

      注意

            	1. 此时计算流程并未执行，需要通过`sh ./start.sh` 执行
            	2. 可能存在dabot用户不存在的情况，`adduser dabot -G root`  即可
            	3. 添加完用户，将目录的权限赋予该用户 `chown -R dabot:dabot dabot`



