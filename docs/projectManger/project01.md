---
title: 项目部署 Window安装jdk与tomcat
date: 2023-03-05
---
<Boxx/>

# Window安装jdk与tomcat

1. **jdk**  代码运行环境
2. tomcat   中间件
3. mysql  linux版本

## 1-windows安装jdk

**注意**

1. 他就是后台代码的运行环境 
2. java 代码的项目 ，如果没有安装jdk 环境 ，代码就无法运行

**下载网址**

1. https://www.oracle.com/cn/ **oralce 官网 下载jdk**  （速度慢）
2. 百度搜 jdk下载

**安装步骤**

**第一步** ：在D盘下创建两个 文件夹 一个叫 jdk   一个叫 jre

**第二步**  ：双击运行  jdk 的exe 软件  点击下一步 选择安装盘符

![1714959339024](/assets/1714959339024.png)

**第四部** ：点击下一步

![1714959405707](/assets/1714959405707.png)

**第五步** 点击确定jdk安装完成  继续安装jre  修改盘符 

![1714959494413](/assets/1714959494413.png)

**第六步** 等待进度条跑完安装成功  最后点击关闭安装成功  jdk  与 jre 

**第七步** 设置java 环境 在任何盘符下都可以使用 （只需要完成java jdk jre 的环境变量的配置就可以了）

鼠标 右击我的电脑 ----- 》 找到 属性选项 --------》找到高级系统设置  -----》 找到高级选项卡 ---》环境变量

在环境变量里面 找到 path：把path 设置为 jdk 的bin目录

**PATH** ： D:\huangjing\jdk\bin

**JAVA_HOME** ：D:\huangjing\jdk     java_home 是自己创建的变量名字

**CLASSPATH** ：.     CLASSPATH  是自己创建的变量名字

![1714959884653](/assets/1714959884653.png)

**最后** ：全部点击确定 完成环境的配置

**jdk作用** ：就是用来运行 java 代码的

## 2-tomcat中间件安装

**安装步骤**： window 版本解压及安装  apache-tomcat-8.5.51-windows-x64.zip  解压zip安装包

解压完毕之后 得到  **apache-tomcat-8.5.51** 在这个文件夹里找打 **bin**目录 然后 在**bin** 下找到 **startup.bat** 双击启动即可

**闪退** ：就是机器的环境或者 tomcat 版本不适用 ：解决方法 下载新的版本的tomcat 或者重装系统

下载新的tomcat 百度搜索就可以了 输入 tomcat 压缩包、下载

**文件扩展名字打开**

![1714960831564](/assets/1714960831564.png)

**tomcat或者其他中间价 它可以用来跑 后台代码也可以跑前端代码**

**在tomcta**里面有一个 webapps   然后打开 webapps 里面有一个 ROOT 只需要把 前端打包好的项目放到里面就可以了

## 3-windows运行项目 java与tomcat

**完整项目**

1. 一个完整的项目  后台 数据库 前端 这三个合并 成一个东西 （完整项目）
2. 项目真正运行起来 必须有这三个

```java
淘宝网站 登录淘宝网****》 输入账号密码 点击登录 然后你就登录成功了
1.用户能看到的一般都是   前端
2.用户输入账号密码后 使用前端技术获取到了 前端用户输入的账号密码值
3.前端拿到用户输入的数据之后 使用 ajax技术 把获取到的前端的用户名密码值 输送给给后台
4.后台拿到ajax技术传递的前端用户名账户之后 他使用后台技术连接数据库 把账号密码 输送给数据库
5.数据库拿到你的账号密码 跟 数据库里保存的账号密码做对比 若果有就能登录 没有就不可以
```

**第一步部署数据库**

1. 安装数据库
2. 配置数据库的账号密码   账户必须是 root  密码必须是 123456  数据库的名字 必须是 attendance_manager
3. 导入初始数据  就是导入 ceshi.sql 那个样子

**注意**

1. 这个项目的sql 没有直接帮你创建数据库 只有表数据 

![1714964545519](/assets/1714964545519.png)

**第二部部署后台**

1. 需要 jar 包一个 
2. 进入到 有jar 包的 目录下

![1714964715271](/assets/1714964715271.png)

3. 在 目录 进入 cmd 
4. 在 cmd 里面 输入 java -jar 项目包的全名字 包含扩展名字
5. 后台启动完毕

**第三步部署前端**

1. 准备 前端的打包文件 
2. 前端的打包文件 一般都有  index.html   php --->index.php
3. 需要有 tomcat 中间件
4. 只需要把 所有的前端打包文件 放入到  webapps 有一个 ROOT  里面就可以了
5. 点击 bin目录下 startup.bat 文件运行

**注意**

1. ROOT这个目录 就是 tomcat 的根目录  ROOT ** /  
2. tomcat 默认端口是 8080 
3. tomcat 会自动访问目录下的 index.????

**问题一**

1. 访问 项目的地址 出现如下情况

![1714976558380](/assets/1714976558380.png)

2. 可以 鼠标在网页上 右击 点击检查  或者 按 F12  或者 FN +F12
3. 把选项卡 点击到 console 如果下方出现 404 你可以点击刷新

![1714976665160](/assets/1714976665160.png)

**解决办法**

1. 让前端修改路径  
2. 我们自己调整 tomcat 的访问路径