---
title: github-git强制更新giteepage
date: 2019-09-21
tags:
 - github git action
categories:
 - github-git
---
<Boxx/>

### 1-关联到gitee 仓库

> 创建 新的gitee 码云仓库 ,创建仓库的名字  要跟你的空间地址一样 (这样你就可以使用)`你的用户名.gitee.io`访问了  不知道你的空间地址的看下图 也可以看这个地址 的 https://help.gitee.com/services/gitee-pages/intro#article-header0

![1697779975487](https://lubeilubei.gitee.io/giteeupload/assets/1697779975487.png)

![1697780055044](https://lubeilubei.gitee.io/giteeupload/assets/1697780055044.png)

> 这样完事之后 你的 page服务访问地址就是 你的用户名.gitee.io 了 就没有后缀了

### 2-github action 强制更新到gitee实现关联部署

> 1.在你的 github 里面 创建你的 ssh 密钥  使用 `ssh-keygen -t rsa -C "youremail@example.com"` 这个指令创建 "这里面替换为自己的邮箱" 生成的 `id_rsa` 是私钥，`id_rsa.pub` 是公钥。主要 不要 在提示的时候设置密码 如果有密码可能会导致 github 与gitee 同步失败

![1697780578339](https://lubeilubei.gitee.io/giteeupload/assets/1697780578339.png)

> 2.创建新的 action 文件 继续在 上次action 的yml文件同目录下创建一个新的 asyn.yml 随便起名字 (当然也可以都放到 你的第一个 action 文件里面)这里我是新创建的一个新的在 新的asyn.yml 文件里面 设置配置下面的action 配置

```yml
name: Sync

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Sync to Gitee
        uses: wearerequired/git-mirror-action@master
        env:
          # 注意在 github里面的 Settings->Secrets 配置一个sshkey 名字是  GITEE_RSA_PRIVATE_KEY
          SSH_PRIVATE_KEY: ${{ secrets.GITEE_RSA_PRIVATE_KEY }}#这个位置不用动
        with:
          # 注意替换为你的 GitHub 源仓库地址
          source-repo: 你的github仓库地址 要ssh 的连接
          # 注意替换为你的 Gitee 目标仓库地址
          destination-repo: 你的gitee的仓库地址 要ssh连接

      - name: Build Gitee Pages
        uses: yanglbme/gitee-pages-action@main
        with:
          # 注意替换为你的 Gitee 用户名
          gitee-username: 你的gitee的用户名 #就在你gitee头像的个人资料点击后在你的头像下面@后面就是
          # 注意在 github 的  Settings->Secrets 配置 一个sshkey名字  GITEE_PASSWORD
          gitee-password: ${{ secrets.GITEE_PASSWORD }}
          # 注意替换为你的 Gitee 仓库，仓库名严格区分大小写，请准确填写，否则会出错
          gitee-repo: 你的仓库名字 #去你的仓库查找就可以
          # 要部署的分支，默认是 master，若是其他分支，则需要指定（指定的分支必须存在）
          branch: main
```

> 在 GitHub 项目的「Settings -> Secrets」路径下配置好命名为 `GITEE_RSA_PRIVATE_KEY` 和 `GITEE_PASSWORD` 的两个密钥。其中：`GITEE_RSA_PRIVATE_KEY` 存放 `id_rsa` 私钥；`GITEE_PASSWORD` 存放 Gitee 帐号的密码。

![1697781092409](https://lubeilubei.gitee.io/giteeupload/assets/1697781092409.png)

> 配置完了 温馨提示一下 这里放的是 私钥 是你的 id_rsa这个文件的内容,然后在 你的个人设置当中配置 你的公钥 这里的公钥的名字就可以随便起了

![1697781208895](https://lubeilubei.gitee.io/giteeupload/assets/1697781208895.png)

![1697781274999](https://lubeilubei.gitee.io/giteeupload/assets/1697781274999.png)

> 继续温馨提示这里是你的 配置的公钥 是 id_rsa.pub 这个文件的内容 不要弄错了!!毕竟我就眼睛瞎过!!!
>
> 最后 你只需要在 gitee 中找到你的仓库 在你的 gitee仓库的个人设置当中 也配置上 github的生成的 ssh那个公钥 记住是你刚才github生成的那个 公钥配置到gitee上去

![1697781545116](https://lubeilubei.gitee.io/giteeupload/assets/1697781545116.png)

> 到此你快成功了 ,这个时候你需要去 github 里面看看 action 同步的执行部署如何了 可以点击 

![1697781632611](https://lubeilubei.gitee.io/giteeupload/assets/1697781632611.png)

> 当你成功了之后 去你的gitee 里面 看一下 你会发现你的仓库多了几个分支 不错就是你github 的推送过来的
>
> 但是你还需要去第一次开启一下你的gitee 页面的部署服务 

![1697781865987](https://lubeilubei.gitee.io/giteeupload/assets/1697781865987.png)

> 部署成功了!!!!