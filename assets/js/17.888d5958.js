(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{438:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("Boxx"),t._v(" "),s("h3",{attrs:{id:"_1-关联到gitee-仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-关联到gitee-仓库"}},[t._v("#")]),t._v(" 1-关联到gitee 仓库")]),t._v(" "),s("blockquote",[s("p",[t._v("创建 新的gitee 码云仓库 ,创建仓库的名字  要跟你的空间地址一样 (这样你就可以使用)"),s("code",[t._v("你的用户名.gitee.io")]),t._v("访问了  不知道你的空间地址的看下图 也可以看这个地址 的 https://help.gitee.com/services/gitee-pages/intro#article-header0")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lubeilubei.gitee.io/giteeupload/assets/1697779975487.png",alt:"1697779975487"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lubeilubei.gitee.io/giteeupload/assets/1697780055044.png",alt:"1697780055044"}})]),t._v(" "),s("blockquote",[s("p",[t._v("这样完事之后 你的 page服务访问地址就是 你的用户名.gitee.io 了 就没有后缀了")])]),t._v(" "),s("h3",{attrs:{id:"_2-github-action-强制更新到gitee实现关联部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-github-action-强制更新到gitee实现关联部署"}},[t._v("#")]),t._v(" 2-github action 强制更新到gitee实现关联部署")]),t._v(" "),s("blockquote",[s("p",[t._v("1.在你的 github 里面 创建你的 ssh 密钥  使用 "),s("code",[t._v('ssh-keygen -t rsa -C "youremail@example.com"')]),t._v(' 这个指令创建 "这里面替换为自己的邮箱" 生成的 '),s("code",[t._v("id_rsa")]),t._v(" 是私钥，"),s("code",[t._v("id_rsa.pub")]),t._v(" 是公钥。主要 不要 在提示的时候设置密码 如果有密码可能会导致 github 与gitee 同步失败")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lubeilubei.gitee.io/giteeupload/assets/1697780578339.png",alt:"1697780578339"}})]),t._v(" "),s("blockquote",[s("p",[t._v("2.创建新的 action 文件 继续在 上次action 的yml文件同目录下创建一个新的 asyn.yml 随便起名字 (当然也可以都放到 你的第一个 action 文件里面)这里我是新创建的一个新的在 新的asyn.yml 文件里面 设置配置下面的action 配置")])]),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Sync\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workflow_dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Sync to Gitee\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wearerequired/git"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("mirror"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@master\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意在 github里面的 Settings->Secrets 配置一个sshkey 名字是  GITEE_RSA_PRIVATE_KEY")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SSH_PRIVATE_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITEE_RSA_PRIVATE_KEY "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这个位置不用动")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意替换为你的 GitHub 源仓库地址")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("source-repo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 你的github仓库地址 要ssh 的连接\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意替换为你的 Gitee 目标仓库地址")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("destination-repo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 你的gitee的仓库地址 要ssh连接\n\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build Gitee Pages\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yanglbme/gitee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@main\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意替换为你的 Gitee 用户名")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gitee-username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 你的gitee的用户名 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#就在你gitee头像的个人资料点击后在你的头像下面@后面就是")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意在 github 的  Settings->Secrets 配置 一个sshkey名字  GITEE_PASSWORD")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gitee-password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITEE_PASSWORD "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意替换为你的 Gitee 仓库，仓库名严格区分大小写，请准确填写，否则会出错")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gitee-repo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 你的仓库名字 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#去你的仓库查找就可以")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 要部署的分支，默认是 master，若是其他分支，则需要指定（指定的分支必须存在）")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" main\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br")])]),s("blockquote",[s("p",[t._v("在 GitHub 项目的「Settings -> Secrets」路径下配置好命名为 "),s("code",[t._v("GITEE_RSA_PRIVATE_KEY")]),t._v(" 和 "),s("code",[t._v("GITEE_PASSWORD")]),t._v(" 的两个密钥。其中："),s("code",[t._v("GITEE_RSA_PRIVATE_KEY")]),t._v(" 存放 "),s("code",[t._v("id_rsa")]),t._v(" 私钥；"),s("code",[t._v("GITEE_PASSWORD")]),t._v(" 存放 Gitee 帐号的密码。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lubeilubei.gitee.io/giteeupload/assets/1697781092409.png",alt:"1697781092409"}})]),t._v(" "),s("blockquote",[s("p",[t._v("配置完了 温馨提示一下 这里放的是 私钥 是你的 id_rsa这个文件的内容,然后在 你的个人设置当中配置 你的公钥 这里的公钥的名字就可以随便起了")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lubeilubei.gitee.io/giteeupload/assets/1697781208895.png",alt:"1697781208895"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lubeilubei.gitee.io/giteeupload/assets/1697781274999.png",alt:"1697781274999"}})]),t._v(" "),s("blockquote",[s("p",[t._v("继续温馨提示这里是你的 配置的公钥 是 id_rsa.pub 这个文件的内容 不要弄错了!!毕竟我就眼睛瞎过!!!")]),t._v(" "),s("p",[t._v("最后 你只需要在 gitee 中找到你的仓库 在你的 gitee仓库的个人设置当中 也配置上 github的生成的 ssh那个公钥 记住是你刚才github生成的那个 公钥配置到gitee上去")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lubeilubei.gitee.io/giteeupload/assets/1697781545116.png",alt:"1697781545116"}})]),t._v(" "),s("blockquote",[s("p",[t._v("到此你快成功了 ,这个时候你需要去 github 里面看看 action 同步的执行部署如何了 可以点击")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lubeilubei.gitee.io/giteeupload/assets/1697781632611.png",alt:"1697781632611"}})]),t._v(" "),s("blockquote",[s("p",[t._v("当你成功了之后 去你的gitee 里面 看一下 你会发现你的仓库多了几个分支 不错就是你github 的推送过来的")]),t._v(" "),s("p",[t._v("但是你还需要去第一次开启一下你的gitee 页面的部署服务")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lubeilubei.gitee.io/giteeupload/assets/1697781865987.png",alt:"1697781865987"}})]),t._v(" "),s("blockquote",[s("p",[t._v("部署成功了!!!!")])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);