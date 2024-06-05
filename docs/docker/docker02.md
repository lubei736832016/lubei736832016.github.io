---
title: 容器化小鲸鱼 Docker容器相关命令
date: 2023-04-05
---
<Boxx/>

# Docker容器相关命令

## 1-docker 的启动指令

```sh
systemctl  start  docker
```

## 2-docker 的停止指令

```sh
systemctl  stop  docker
```

## 3-docker 的重启指令

```sh
systemctl  restart  docker
```

## 4-查看docker 的启动状态

```sh
systemctl status docker
```

## 5-设置docker开机启动

```sh
systemctl enable docker
```

## 6-设置docker开机不启动

```sh
systemctl disable docker
```

## 7-查看帮助文档

```sh
docker --help
docker 命令 --help
或者使用帮助文档 在官网直接 搜索 https://docs.docker.com/reference/cli
```

## 8-docker下拉镜像指令

```sh
docker pull 镜像名字:tag   --tag 的意思是版本号

案例：centos镜像
docker pull centos:7.6
```

**注意**

1. tag 的值 具体是具体的版本
2. 如果是latest 表示最新版本
3. 如果下拉镜像的时候没有加版本号 默认最新版本

## 9-docker 的镜像搜索指令

```sh
docker search  镜像名字:tag   --tag 的意思是版本号
```

**推荐使用官网的hub 搜索**  网址：https://hub.docker.com/

![1715650422182](/assets/1715650422182.png)

**案例 搜索centos**

![1715650578654](/assets/1715650578654.png)

根据 newest  这个位置排序 找到自己想要的具体镜像 

```sh
docker pull centos:7.6.1810
```

## 10-docker 查看本地镜像

```sh
docker images 
```

## 11-docker 删除本地镜像

```sh
docker rmi 镜像的id
```

## 12-docker 使用镜像跑容器指令

```js
# 基本指令 
docker  run  镜像:版本号 #使用xx镜像 运行一个xx容器  
#选项
 -it #给我一个交互终端tty
 -d  #使容器在后台主动运行
 -p  #端口映射  注释： -p 宿主机端口:docker端口
 --name #指定容器的 名字
 
#注意
 一般有 -it 这个选项 在最后面 都会添加一个 /bin/bash
一般情况夏 -it  和  -d 不会同时使用
端口映射：在外部如果有人想访问我的docker 容器 不能直接访问 需要先访问宿主机 宿主机在访问docker
宿主机的：8080 映射到 docker 的8080端口

#ctrl + c 退出占用终端
```

```sh
#案例
1.docker run tomcat:lastes #启动默认占用终端 不是所有镜像都会占用终端

2.docker run -d  tomcat:latest #启动的容器在后台主动运行 可以使用docker ps 查看

3.docker run -name mytom  -d  tomcat:latest#启动容器在后台运行并给容器起名字叫mytom

4.docker run -it  tomcat:latest /bin/bash #启动容器给我一个交互终端以/bin/bash 格式

5.docker run -it -p 8080:8080 tomcat:latest /bin/bash
```

**场景**

```sh
docker run -it -p 8080:8080 tomcat:latest /bin/bash  #启动了容器但是访问不了 （但是tomcat没有主动启动）
docker run -d -p 8080:8080 tomcat:latest #-d在后台主动运行
docker ps # 获取容器的id
docker exec -it 容器id /bin/bash
```

## 13-docker 查看正在运行容器

```sh
docker ps 
  #选项 
   -a   表示查看所有运行过的容器（正在运行的容器，和已经运行过退出的容器）（历史记录）
```

## 14-docker exec再次开启终端

**注意**

1. 在你的docker容器实例后台运行的时候 会用  这个指令
2. 有些时候需要进入 容器实例 也需要退出容器实例  

**小指令**

1. 这两个小指令都是在 docker 容器中使用的

```sh
1.输入 exit 按enter（回车） //退出容器
2.ctrl + p +q  //退出容器 (仅仅是退出后台)
```

```js
docker exec -it 容器的id  /bin/bash
```

## 15-docker 删除容器

```sh
docker rm 容器的id  # 删除已经停止的容器
docker rm -f 容器id # 什么的都可以删除
	#选项 -f  用于强制删除
```

## 16-docker查看docker的磁盘

```sh
 docker system df
```

## 17-docker容器启动

```sh
docker start 容器id  #容器id 可以使用docker ps -a 查看
```

## 18-docker容器停止

```sh
docker stop 容器id  #容器id 可以使用docker ps -a 查看
```

## 19-docker容器杀死强制

```sh
docker kill 容器id  #容器id 可以使用docker ps -a 查看
```

## 20-docker容器查看日志

```sh
docker logs 容器id #容器id 可以使用docker ps -a 查看
```

## 21-docker容器负载情况

```sh
docker top 容器id #容器id 可以使用docker ps -a 查看
```

## 22-docker容器网络信息

```sh
docker inspect 容器id #容器id 可以使用docker ps -a 查看
```

**注意**

1. network 网络里面有一个 ipaddress 里面是ip地址 ，但是这个ip地址是docker虚拟出来的
2. 这个ip地址仅用于 docker容器直接的通信使用不能外部直接使用

## 23-docker容器备份复制

```sh
docker cp 要备份的容器id:容器要备份的文件路径  宿主机的存放路径
```

## 24-docker容器备份tar

```sh
docker export -o  自定义文件名字.tar  要导出容器的id 
```

## 25-docker容器tar导入生成镜像

```sh
docker import 生成新镜像的.tar  新的镜像名字:新的镜像版本
```

## 26-yum 下载

1. 因为 docker 容器它运行的时候 是使用的最小 linux环境
2. 一般准备的指令 操作 都不全
3. 我们可以用yum 下载
4. 如果你的镜像 用的centos:latest 版本不行  我们使用 7版本

```sh
yum install 具体的需要
```

## 27-docker容器生成自己本地镜像

```sh
docker commit -m '提交的信息' -a '作者' 容器的id   新镜像名字:新镜像的版本
```

## 28-docker容器的单项通讯

**解释**

1. 运行的tomcat 容器  （小型的linux+tomcat）服务端 是不是要链接  db数据库
2. 再运行一个容器mysql容器 （小型的linux+mysql）
3. 两个端的链接需要啥？ ip地址
4. docker inspect dockerID  获得虚拟的docker容器服务器ip地址 172.xxxxxx（这个虚拟的地址只有容器之间可以相互通讯）

**案例容器通讯**

```sh
#1.创建 jar后台 容器
docker run --name jar -it centos:7.6.1810 /bin/bash
#2.创建一个db 数据库容器
 docker run --name db -it centos:7.6.1810 /bin/bash 
#3.有了两个服务之后 使用 docker inspect 容器id 指令获取其中一个 ip地址 172.17.0.1
docker inspect 容器id  ===》 172.xxxxx
#4.进入其中的一个容器 使用docker exec 进入 之后使用 ping +容器ip地址测试
ping -c 2 ip地址   # -c 2 表示ping 2次结束
```

**注意**

1. 我们在使用容器的时候 因为创建容器太方便 有一个问题 
2. 就是容器的ip地址是随机分配的 后期创建的容器越多随机分配地址越容器更换
3. 解决办法 就是使用docker 的单项通讯 
   1. 单项通讯 可以让容器的名字跟 ip地址自动绑定
   2. 域名 绑定 ip 

**语法**

1. 在启动容器的时候 再去添加一个 选项 --link  链接的容器名字
2. jar ====》  db
3. 注意 你要清楚是谁链接谁

```sh
# 在启动的时候 添加一个 --link 选项即可 ：
docker run --name jar --link db -it centos:7.6.1810 /bin/bash
```

## 29-查看所有的网桥

```js
docker network ls
```

![1715737374461](/assets/1715737374461.png)

## 30-创建属于自己的网桥

```sj
 docker network create -d bridge 自定义网桥名字
```

## 31-网桥双向通讯

**语法**

1. 设置  我们的 jar 容器 db 容器 都链接 我们的自定义网桥
2. 设置好 jar服务器 与db 服务 都链接 共同的网桥即可

```js
 docker network connect my01bridge jar 
 docker network connect my01bridge db
```

## 32-容器卷 挂载

**解释**

1. 存放信息  我们有 u盘 软盘等 
2. c盘  d盘
3. docker容器实例 里面是有文件夹的 web   webapp文件夹 里面有 index.html 等文件
4. 如果容器一单被删除 文件也将消失
5. 创建了一个容器后 ，想把linux服务器上 有的index.html 上传到 docker容器实例里面去 ？？？
6. 跑项目  需要 centos 容器 里面有  jar包  (jar)
7. web容器里面需要有 index.html  (index.html)

**解决办法**

1. 上传文件的问题 可以使用 docker 的卷挂载解决
2. 原理： 就是把docker容器某个目录 挂载到 宿主机的某个指定目录
3. 使用 -v 选项 挂载宿主机目录 与 docker 容器目录胡同 
4. 挂载之后 宿主机上目录有的内容 docker 里面也会有 
5. 如果docker容器被删除，宿主机的挂载卷内容可以保留，实现数据的持久化
6. 上边的 如何上传到docker容器 web文件就解决了 可以上传到 宿主机的-v 挂载目录即可

```sh
 docker run -it -v /宿主机目录:/docker目录 镜像:版本 /bin/bash
```

## 33-Dockerfile文件自定义镜像

**解释**

1. 相当于 我们自己可以 根据自己的需求 自定义一个镜像

**案例应用 创建一个自己的web页面镜像**

1. 就是我们创建出的这个镜像 只要一运行 就可以访问  web页面

```
1.#在宿主机 上一个目录创建一个Dockerfile 文件
FROM 镜像:版本
MAINTAINER  谁来维护的
WORKDIR 设置自定义镜像启动容器后根目录的位置  
ADD 那个文件 ./     #./表示根目录
CMD 设置运行镜像的命令 java -jar ....jar
EXPOSE 设置端口9931
ENV 设置环境变量JAVA_HOME /usr/..../bin/

FROM tomcat:latest
MAINTAINER  lubei.com
WORKDIR /usr/local/tomcat/webapps/
ADD html ./html   
```

**练习**

跑起 mysql 容器 并且在 远程工具中链接上 docker容器运行的mysql 服务 

## 34-docker运行mysql：5.7

**步骤**

1. 基本上 用docker 跑服务 就是 跑容器 
2. 下载docker上的镜像 跑docker容器

```sh
# 一般下载镜像都会在 dockerhub 上去搜索一下看看有没有
在 https://hub.docker.com/  地址搜索 mysql
```

![1715909323048](/assets/1715909323048.png)

**注意** 一般使用的镜像是带绿标的这个 这种的是 官网提供

![1715909359258](/assets/1715909359258.png)

点击进入之后 一般看到 overview    和 tags 选项  

**overview** 这个选型是 镜像的说明使用书

**tags** 里面一般是各个版本

![1715909440626](/assets/1715909440626.png)

可以选择 newest  排序查找 

```sh
#寻找到 5.7 版本的mysql 镜像  
docker pull mysql:5.7

#下载完毕之后 需要运行 mysql 镜像
docker run --name mymysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
docker run --name 指定容器的名字 -e MYSQL_ROOT_PASSWORD=root密码  -d 镜像名字:版本

docker run --name mymysql -e MYSQL_ROOT_PASSWORD=123456 -d -p 3306:3306 mysql:5.7
```

![1715910634506](/assets/1715910634506.png)

**问题**

1. 现在的mysql 容器，如果一旦删除数据还在吗 ?
   1. 答案：数据肯定是不在的 一个mysql是一个容器容器销毁了 里面的数据就也就销毁了
2. 如果不在如何可以让容器删除后 在重新跑新容器但是 数据还在？
   1. 答案：可以使用 -v选项 容器卷的挂载 
   2. 就是-v 容器卷 挂载 可以 让宿主机 与 docker 信息同步 
   3. docker容器销毁 宿主机同步的数据是不会消失
3. 在运行mysql 容器的时候 可以 使用-v 选项 把 docker 容器mysql 实例的 log 与 lib 文件夹 备份

**解决数据丢失问题**

在运行mysql 容器的时候 可以 使用-v 选项 把 docker 容器mysql 实例的 log 与 lib 文件夹 备份

```sh
docker run --name mymysql -v /linux/lib/mysql:/var/lib/mysql -v /linux/log/mysql:/var/log/mysql -e MYSQL_ROOT_PASSWORD=123456 -d -p 3306:3306 mysql:5.7 
```

## 35-自己用docker跑考试应用

![1715928764794](/assets/1715928764794.png)

1. war 包跟 jar包不一样  jar包 运行的  java -jar xxxxx.jar

2. war 包不需要 

   1. 这个war包 前后端一体的    java后台  html 前端
   2. 只需要 把 war 包 放进 tomcat 的 webapps 文件夹下就可以自动解析 需要startup.bat  运行完毕之后会生成一个文件 在当前目录 webapps 下面 会生成 examxx-0.0.1-SNAPSHOT 文件夹
   3. 你只需要 把 tomcat 跑起来  数据库跑起来 就可以直接访问了
   4. 进入  examxx-0.0.1-SNAPSHOT  然后 进入 WEB-INF 有一个 spring 文件夹 root-context.xml
   5. 用**记事本**打开这个文件 root-context.xml  文件
   6. 修改 下图的信息 

   ![1715930207887](/assets/1715930207887.png)

修改完毕之后 重新启动  tomcat 的 startup.bat  或者 startup.sh(llinux)

然后 在你的数据 创建 一个新的数据库 名字叫 examxx 然后把 带的 sql文件导入到这个数据库

![1715930761324](/assets/1715930761324.png)

启动完毕之后项目就可以访问了 ip地址:tomcat端口号/examxx-0.0.1-SNAPSHOT

就可以进入 考试系统  账户 admin   密码  123456

一般报500 错误 这个就是数据库 没有或者 xml 文件你没有配置对

注意：mysql 8.0 的数据库 不行 数据库必须是 5.7版本的才可以 如果你的window上面装的8.0 的你可以直接在docker上跑数据库5.7版本就行