## 接口程序代码
### 代码说明：
#### 状态码
- 200 正常数据
- 201 空数据
- 202 自定义查询过程，需要走插件流程
### 环境准备：
1. 需要离线安装的包
- pymysql: mysql的驱动
- uwsgi：生产环境，可以先用开发环境代替
- flask-CORS：用于解决跨域问题，如果前后端不分离，在app.py中注释掉以下两行：
    - `from flask_cors import CORS`
    - `CORS(app, supports_credentials=True)` 

### 开发步骤（settings文件夹）
1. settings文件夹中`__init__.py`文件中修改项目名称，即项目文件夹目录
2. settings文件夹中，项目文件夹中用于存放这个项目的配置文件
2. 各个项目的配置文件如下
    - init_files 文件夹  用于存放需要联动的字段取值
    - apis_dispatch.py  用于存放指标分发的配置
    - apis_plugins.py   用于存放指定sql的查询结果
    - init_dicts.py     用于存放字段的可能取值

### 启动步骤（CentOS）
1. 将大屏代码放到根目录下，如 ./hbxfdp/
    - hbxfdp/static/url.js修改部署地址，接口地址如下
    ~~~
   // 线上环境URL，可根据实际情况自行修改
    const $URL = {
        BASE_API: '/hbxfdp', //部署地址
        // BASE_API: './', //部署地址
        DATA_API: '/api/xf',   //接口地址
        JSON: false //true:本地json数据、false:接口数据
    }
    ~~~

2. 启动代码程序后台运行
- 开发模式`/root/anaconda3/bin/python3 app.py`
- 生产模式`uwsgi --ini ../uwsgi.ini`(需要安装uwsgi)
