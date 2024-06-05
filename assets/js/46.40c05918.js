(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{467:function(t,a,s){"use strict";s.r(a);var r=s(0),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("Boxx"),t._v(" "),a("h1",{attrs:{id:"linux安装jdk-与tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux安装jdk-与tomcat"}},[t._v("#")]),t._v(" linux安装jdk 与tomcat")]),t._v(" "),a("h2",{attrs:{id:"_1-linux安装jdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-linux安装jdk"}},[t._v("#")]),t._v(" 1-linux安装jdk")]),t._v(" "),a("p",[a("strong",[t._v("注意")])]),t._v(" "),a("ol",[a("li",[t._v("/opt  --- 存放安装包")]),t._v(" "),a("li",[t._v("/usr/local -----把软件 安装 到这个目录下")]),t._v(" "),a("li",[t._v("注意上面的安装目录不是固定的 你可以随意发挥")])]),t._v(" "),a("p",[a("strong",[t._v("步骤")])]),t._v(" "),a("p",[t._v("==第一步== 上传 linux 的 jdk 安装包 到 /opt 目录下")]),t._v(" "),a("p",[t._v("==第二部== 在usr/local/  目录下创建 javajdk文件见（备注：可以不按着我的来随意发挥你想安装的地方）")]),t._v(" "),a("p",[t._v("==第三步==   进入到有 jdk 的tar.gz安装包的目录下")]),t._v(" "),a("p",[t._v("==第四步==  在有jdk.targz 的安装包目录下 输入解压安装指令 tar -zxvf  安装包名字   -C  指定的安装目录")]),t._v(" "),a("p",[t._v("我的是：（tar  -zxvf  jdk-8u341-linux-x64.tar.gz  -C   /usr/local/javajdk）")]),t._v(" "),a("p",[t._v("==第五步== 最小安装版本的linux 是没有 vim 的 需要yum install  -y  vim 可以下载 使用 vim  /etc/profile 文件添加jdk 的全局环境变量")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("配置全局的 jdk\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JAVA_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("javajdk"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("jdk1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.0_341")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JAVA_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("==第六步== 配置完毕后  需要重新加载 etc/profile 文件   使用 source /etc/profile   刷新加载配置文件")]),t._v(" "),a("h2",{attrs:{id:"_2-linux安装tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-linux安装tomcat"}},[t._v("#")]),t._v(" 2-linux安装tomcat")]),t._v(" "),a("p",[a("strong",[t._v("注意")])]),t._v(" "),a("ol",[a("li",[t._v("/opt  --- 存放安装包")]),t._v(" "),a("li",[t._v("/usr/local -----把软件 安装 到这个目录下")]),t._v(" "),a("li",[t._v("注意上面的安装目录不是固定的 你可以随意发挥")])]),t._v(" "),a("p",[a("strong",[t._v("步骤")])]),t._v(" "),a("p",[t._v("==第一步== 在 usr/local  目录下 创建 mytomcat文件夹")]),t._v(" "),a("p",[t._v("==第二步== 在有tomcat.tar.gz 安装包的目录下 输入解压指令   tar -zxvf  安装包名字   -C  指定的安装目录")]),t._v(" "),a("p",[t._v("我的是：（tar  -zxvf  jdk-8u341-linux-x64.tar.gz  -C   /usr/local/mytomcat）")]),t._v(" "),a("p",[t._v("==第三步==  这个不需要配置环境变量  需要 cd /usr/local/mytomcat/apache-tomcat-9.0.65/bin")]),t._v(" "),a("p",[t._v("ls 显示如下  找到  startup.sh  执行这个启动文件 启动tomcat")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/1714982239262.png",alt:"1714982239262"}})]),t._v(" "),a("p",[t._v("==第四步== 启动 sh文件   sh 文件.sh  我的是 sh  startup.sh  看到下图 tomcat 启动成功")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/1714982362178.png",alt:"1714982362178"}})]),t._v(" "),a("p",[t._v("==第五步==  在浏览器 输入 地址：8080 访问 tomcat")]),t._v(" "),a("p",[t._v("==问题一==   如果访问不了 咋办？")]),t._v(" "),a("ol",[a("li",[t._v("检查 防火墙 是否开启")])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v(" systemctl status firewalld  ---检查防火墙是否开启\n firewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--zone")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("/tcp --  给8080 端口放行服务 才可以访问 tomcat首页\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);