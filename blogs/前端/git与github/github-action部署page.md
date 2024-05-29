---
title: github-action部署page
date: 2019-09-21
tags:
 - github git action
categories:
 - github-git
---
<Boxx/>

### 1-创建仓库

> 登录 github 首页, 点击新建仓库  ,创建的仓库的名字 就输入  `你的GitHub用户名.github.io`  选择 开源也就是 public , 选择Add a README.md ,点击确定创建

![1697773385409](/assets/1697773385409.png)

![1697773630948](/assets/1697773630948.png)

### 2-博客与github绑定

> 你可以选择很多方式! ,我使用的是 首先下拉线上的项目,也就是 git clone '你的github仓库地址'(具体选择ssh,还是https 随你,这里我选择的是 https),下拉下来后 ,把本地创建好的项目 跟目录内容 拖拽进去 使用 git 上传 
>
> 具体指令 不说了,上传完毕后 你的博客应该就跟 仓库绑定了,这个是 action 自动部署方式,这里你仓库里上传的东西,文件应该是没有打包的那种 也是就没有执行 npm run build 那种文件 ,我下面的是随便截图不要被误导!!!

![1697774036586](/assets/1697774036586.png)

### 3-配置添加action 文件

> 点击 Addfile ,然后添加 `.github/workflows/deploy-github-pages.yml`这个路径的文件 ,然后在 路径文件里面 添加下面的内容 

![1697774310813](/assets/1697774310813.png)

![1697774379934](/assets/1697774379934.png)

```yml
# 具体的配置 如下 (请不要复制我-----)
# Action 的名称
name: Deploy GitHub Pages
# 触发条件：在 push 到 main 分支后
on:
  push:
    branches:
      - main
# 任务
jobs:
  build-and-deploy:
    # 服务器环境：最新版 Ubuntu
    runs-on: ubuntu-latest
    steps:
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16.13.0' # 注意指定所需的 Node.js 版本这里你的本地项目版本是多少你的就是多少
      # 拉取代码
      - name: Checkout
        uses: actions/checkout@v3
        with:
          persist-credentials: false
      # 生成静态文件
      - name: Build
        run: npm install && npm run build #注意你的项目的pakges.json 设置的是什么指令你的就是啥
      # 部署到 GitHub Pages
      - name: Deploy
        # 使用别人写好的一个 action
        uses: JamesIves/github-pages-deploy-action@releases/v4
        with:
          # 打包后的文件部署到哪个分支上
          BRANCH: gh-pages  #这个是分支 可以用我这个默认的
          # 打包后的文件在哪里 看看你的打包是 dist 还是public(你本地是啥样的你的就是啥)
          FOLDER: public
```

