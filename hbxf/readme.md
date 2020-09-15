## 接口程序代码
### 代码说明：
#### 状态码
- 200 正常数据
- 201 空数据
- 202 自定义查询过程，需要走插件流程
- 400 报错
### 环境准备：
1. 需要离线安装的包
- pymysql: mysql的驱动**使用mysql必须装**
- uwsgi：生产环境，可以先用开发环境代替**使用生产环境必须装**
- pypinyin: 弹窗索引中存在字母拼音，需要安装

2. 如果是生产模式启动需要以下准备
- 安装uwsgi
- 修改uwsgi.ini中的项目目录，如`chdir = /opt/hbxf`

### 配置说明
#### settings文件夹
1. settings文件夹中`__init__.py`文件中修改项目名称，即项目文件夹目录
2. settings文件夹中，项目文件夹中用于存放这个项目的配置文件
3. 各个项目的配置文件如下
    - `init_files 文件夹`  用于存放需要联动的字段取值
    - `refresh 文件夹`     用于存放需要定时执行的脚本
    - `__init__.py`       用于存放项目的基础配置，可以通过settings/init.template拷贝得到
    - `apis_dispatch.py`  用于存放指标分发的配置
    - `apis_plugins.py`   用于存放指定sql的查询结果
    - `init_dicts.py`     用于存放字段的可能取值

#### 大屏前端文件夹
1. 将大屏代码放到client目录下，如 .client/hbxfdp/
    - hbxfdp/static/url.js修改部署地址，接口地址如下
    ~~~
   // 线上环境URL，可根据实际情况自行修改
    const $URL = {
        BASE_API: '/hbxfdp', //部署地址：这里直接从/开始
        // BASE_API: './', //部署地址
        DATA_API: '/api/xf',   //接口地址：这里直接从/开始
        JSON: false //true:本地json数据、false:接口数据
    }
    ~~~
2. 在`settings/项目名/__init__.py`中修改大屏的访问路径和地址
    - DP_URL中需要和 前端的url.js文件中的BASE_API保持一致

### 启动步骤（CentOS）
1. 检查数据库连接，执行
`/root/anaconda3/bin/python3 env_test.py`
- 若成功，返回数据库的URL，检查是否正确
- 若失败，报错退出

2. 启动代码程序后台运行
- 开发模式`/root/anaconda3/bin/python3 app.py`
- 生产模式
    - 启动：`uwsgi --ini uwsgi.ini`(需要安装uwsgi)
    - 重启：`uwsgi --reload uwsgi.pid`
    - 停止：`uwsgi --stop uwsgi.pid`

### 注意事项
1. windows下检查数据库连接需要在`env_test.py`中注释掉以下内容掉
- `@timeout(TIMEOUT, error_message="ConnectionError")`
2. windows下生产环境启动
- 安装tornado
- `/root/anaconda3/bin/python3 win-server.py`