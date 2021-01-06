1. 安装gcc
    cd gcc
    rpm -Uvh *.rpm --nodeps --force
2. 安装bunzip2
    tar xf bzip2-1.0.6.tar.gz
    cd bzip2-1.0.6
    make -f  Makefile-libbz2_so
    make && make install
3. 安装anacoda
    下载：https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/Anaconda3-5.3.1-Linux-x86_64.sh
    安装：bash Anaconda3-5.3.1-Linux-x86_64.sh
    说明：开始一直回车，然后一路yes，最后安装vs code时候选择no
4. 安装knime
    下载：https://www.knime.com/download-previous-versions（官网选择对应版本）
        4.1.2(Linux): https://download.knime.org/analytics-platform/linux/knime_4.1.2.linux.gtk.x86_64.tar.gz
    安装：解压即可
    说明：需要和开发版本一致