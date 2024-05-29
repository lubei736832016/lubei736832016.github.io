---
title: github-action部署到linux
date: 2019-09-21
tags:
 - github git action
categories:
 - github-git
---
<Boxx/>

### 1-准备工作

> 1.需要你有一个 服务器 linux  
>
> 2.需要 你注册有github 的账户
>
> 3.下载rsync在服务器上
>
> ​			 yum install rsync
> ​			*#or*
> ​			npm install reync
>
> ​			#or
>
> ​			apt install rsync
>
> 4.下载git在服务器上
>
> ​			apt install git
>
> ​			#or
>
> ​			npm install git
>
> 5.在 /root/.ssh/生成 密钥和公钥 命令是: ssh-keygen -t rsa -C "your_email@youremail.com"  完事后一路enter(按回车键盘)

![1700211043320](/assets/1700211043320.png)

> 6.把你的私钥 复制添加到github 里面去添加到 下面的图示   secrets.MY_SERVER_PRIVATE_KEY 名字是这个

![](/assets/1697781092409.png)

### 2-设置允许的私钥访问

> 把生成的 公钥 复制到 同目录的 authorized_keys 里面去 
>
> 把私钥设置为 项目的 secrets 里面的action 的变量 让 github 通过 私钥访问 linux 

### 3-创建yml文件

> .github/workflows/deploy.yml 比如 

```yml
name: Deploy My Server

on:
  push:
    branches:
      - main # 只在master上push触发部署
      
jobs:
  deploy:
    runs-on: ubuntu-latest # 使用ubuntu系统镜像运行自动化脚本

    steps: # 自动化步骤
    
      #下载代码仓库
      - uses: actions/checkout@v1 
      
      # 使用action库，安装node
      - name: use Node.js  # 使用action库  actions/setup-node安装node
        uses: actions/setup-node@v1
        with:
          node-version: '16'
            #添加权限
      - name: Restore permissions of node_modules
        run: chmod -R +x node_modules
      #依赖下载  注意我这里 我做博客的时候 因为我改动了nodemoudels 的源码所以我上传了依赖不需要重新下载注释了 你可以根据你的来变化
      #- name: Install
      	# run: npm install
      
      #打包项目
      - name: Build
        run: npm run build 

      #部署到服务器
      - name: Deploy to Staging My server
        uses: easingthemes/ssh-deploy@v2.1.6
        env:
          #私钥
          SSH_PRIVATE_KEY: ${{ secrets.MY_SERVER_PRIVATE_KEY }} #后面指定为该仓库配置的私钥
          ARGS: "-rltgoDzvO"
          # 源目录，编译后生成的文件目录
          SOURCE: '/public/'
          #服务器公网地址
          REMOTE_HOST: '你服务器的公网地址'
          #服务器用户名-一般默认root
          REMOTE_USER: 'root'
          #服务器中，代码部署的位置
          TARGET: '/www/wwwroot/myVuepressblog/'#你服务器要部署的服务器路径位置
          #去除的文件
          EXCLUDE: "/dist/, /node_modules/" 
```

