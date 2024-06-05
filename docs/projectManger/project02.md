---
title: 项目部署 linux安装jdk 与tomcat
date: 2023-03-09
---
<Boxx/>

# linux安装jdk 与tomcat

## 1-linux安装jdk

**注意**

1. /opt  --- 存放安装包
2. /usr/local -----把软件 安装 到这个目录下
3. 注意上面的安装目录不是固定的 你可以随意发挥 

**步骤**

**第一步** 上传 linux 的 jdk 安装包 到 /opt 目录下

**第二部** 在usr/local/  目录下创建 javajdk文件见（备注：可以不按着我的来随意发挥你想安装的地方）

**第三步**   进入到有 jdk 的tar.gz安装包的目录下

**第四步**  在有jdk.targz 的安装包目录下 输入解压安装指令 tar -zxvf  安装包名字   -C  指定的安装目录  

我的是：（tar  -zxvf  jdk-8u341-linux-x64.tar.gz  -C   /usr/local/javajdk）

**第五步** 最小安装版本的linux 是没有 vim 的 需要yum install  -y  vim 可以下载 使用 vim  /etc/profile 文件添加jdk 的全局环境变量

```js
配置全局的 jdk
export JAVA_HOME=/usr/local/javajdk/jdk1.8.0_341/
export PATH=$JAVA_HOME/bin:$PATH
```

**第六步** 配置完毕后  需要重新加载 etc/profile 文件   使用 source /etc/profile   刷新加载配置文件

## 2-linux安装tomcat

**注意**

1. /opt  --- 存放安装包
2. /usr/local -----把软件 安装 到这个目录下
3. 注意上面的安装目录不是固定的 你可以随意发挥 

**步骤**

**第一步** 在 usr/local  目录下 创建 mytomcat文件夹

**第二步** 在有tomcat.tar.gz 安装包的目录下 输入解压指令   tar -zxvf  安装包名字   -C  指定的安装目录  

我的是：（tar  -zxvf  apache-tomcat-9.0.65.tar.gz  -C   /usr/local/mytomcat）

**第三步**  这个不需要配置环境变量  需要 cd /usr/local/mytomcat/apache-tomcat-9.0.65/bin

ls 显示如下  找到  startup.sh  执行这个启动文件 启动tomcat

![1714982239262](/assets/1714982239262.png)

**第四步** 启动 sh文件   sh 文件.sh  我的是 sh  startup.sh  看到下图 tomcat 启动成功

![1714982362178](/assets/1714982362178.png)

**第五步**  在浏览器 输入 地址：8080 访问 tomcat  

**问题一**   如果访问不了 咋办？

1. 检查 防火墙 是否开启 

```sh
 systemctl status firewalld  ---检查防火墙是否开启
 firewall-cmd --zone=public --add-port=8080/tcp --  给8080 端口放行服务 才可以访问 tomcat首页
```
