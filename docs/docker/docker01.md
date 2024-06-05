---
title: 容器化小鲸鱼 Docker容器
date: 2023-04-05
---
<Boxx/>

# Docker容器

![1715586561732](/assets/1715586561732.png)

## 1-准备工作

1. 配置vpn   梯子  https://ikuuu.pw/  免费
2. 登录之后 选择 左边的下载和教程  点击windows
3. 点击下载 猫的客户端

![1715581404916](/assets/1715581404916.png)

4. 按着 ikuu 提示的步骤 安装即可 
5. 安装完毕之后 搜索  youtube 如果可以看就可以了

## 2-docker官网 

1. https://www.docker.com/
2. 看官网的时候 翻译 中文 

## 3-docker介绍

**介绍**

1. Docker 构建：现在快如闪电  （快）
2. Docker 可帮助开发人员随时随地构建、共享、运行和验证应用程序，**而无需繁琐的环境配置或管理**
3. 开源的 （免费）
4. Docker 是一个开源的应用**容器**（新名字）引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的**镜像**（新名词iso）中，**然后发布到任何流行的 Linux或[Windows]操作系统的机器上**（兼容性很高），也可以实现虚拟化（虚拟机）。**容器**是完全使用**沙箱机制**（隔离 隔离舱），相互之间不会有任何接口

## 4-docker和linux 不同有点

**虚拟机** ： centos7.6 镜像安装 linux系统 ，安装jdk，配置jdk环境变量，准备tomcat ，nginx，

**docker**：centos7.6 镜像安装 linux系统 ，安装jdk，配置jdk环境变量，准备tomcat ，nginx，

**安装项目**

1. java   前端  ui设计   运维测试   实施
2. java 前端 开发程序的时候 他是 需要 环境的 java 开发 需要 jdk redis mysql 前端 html  nodejs npm 技术开发完毕后 是完美运行的（发布项目 上线项目 ）（jar包 html 包   mysql ）
3. 测试 把后台 前端的东西 测试一下 （专门测试的服务器）需要自己 配置环境
4. 实施部署（现场 有的是上客户那边去 环境 ）
5. 在上面的过程  难免出错 （99%）
6. java（9.9）  测试（3工具测试）  实施  （干架 6）（docker 解决这个问题）

**docker解决生活例子**

**搬家**： 小王搬家 高新万达1001 ----》 唐冶去1002  （叫个货拉拉 狐朋狗友 一起帮 （床..鞋子 牙膏....等物品））

到了新家了 ，完蛋忘了一个东西 （正常的linux部署）

**docker搬家**： 小王搬家 ： 修仙：把高新万达搬过去 搬东西 是整个 连根拔起  （镜像）

**dcoker 优点**

1. 占用比较小 （轻量级别）
   1. ceotos 4G 
   2. docker 75mb（只安装项目需要的东西  只有基本运行linux内核系统的依赖）
2. 启动秒级别 ceo 1小  docker centos  秒级别

## 5-容器 镜像的意思

```js
类 实例 = new 类（）// java
类 实例(容器) = docker run 类（镜像）（）
一个镜像 可以 创建很多个不同的容器 
```

**现实例子**

```sh
#  克隆
机器人（创造好了一个 机器人）

机器人 机器人new1（容器）= 需要使用机器人模板（镜像） 咔嚓一下
机器人 机器人new2（容器）= 需要使用机器人模板（镜像） 咔嚓一下

new1 new2 机器人是一个吗？？？ 他是相对独立的
```

1. 容器 就是 参考镜像创造出来的一个实际的产物 （实例）
2. 创建出容器之后 ？？ 干活的是谁 （运行服务）真正干活的是容器（容器）

## 6-docker 案例快速跑一个linux容器

1. 下载镜像 
2. 跑镜像
3. linux 系统运行起来了

**注意**

1. 比如我要跑一个  linux 系统  ，他是先在本地找有没有 跑linux 的镜像
2. 如果有直接使用本地镜像 如果没有 他会自动找网上的镜像库下载然后运行 容器

![1715586479196](/assets/1715586479196.png)

## 7-下载安装运行测试docker

1. 找到 开发 develpers  找到 doc 点击进入  找到 Docker Engine 点击 install 安装  选择 centos安装步骤

![1715588515726](/assets/1715588515726.png)

![1715588564103](/assets/1715588564103.png)

![1715588628883](/assets/1715588628883.png)

**步骤一**  卸载旧的环境  在安装，我们是 干净的系统不需要执行这一步

```sh
 yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

**步骤二**

```sh
yum install -y yum-utils  //安装docker的 utils

yum-config-manager \
    --add-repo \
  http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo //更该docker 、的下载源
  
  
yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin  // 下载安装docker 的依赖

systemctl start docker  //启动docker

docker run hello-world  // 验证你的docker是否安装成功

出来下图 表示安装成功了！！！！！
```

![1715590992085](/assets/1715590992085.png)

## 8-配置docker阿里云镜像加速器

**步骤**

1. 登录阿里云 
2. 找到菜单  在菜单里 搜索   镜像 这俩字  

![1715591442863](/assets/1715591442863.png)

![1715591530567](/assets/1715591530567.png)

## 9-docker实例测试centos系统

1. windows （宿主机）-------------------------------上 跑 虚拟机 （centos系统）（linux）
2. 虚拟机（宿主机） ------------------docker（虚拟机---centos系统）

```sh
1.docker pull centos //下载镜像
2.docker run centos // 这句话输入 就相当于启动了一个 docker的 linux 系统容器 但是看不见反馈
3.docker run -it centos /bin/bash    // 启动一个dockerlinux容器并且可以交互
```
