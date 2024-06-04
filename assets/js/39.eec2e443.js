(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{460:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("Boxx"),s._v(" "),t("h1",{attrs:{id:"linux系统服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux系统服务"}},[s._v("#")]),s._v(" Linux系统服务")]),s._v(" "),t("h2",{attrs:{id:"_1-system服务管理命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-system服务管理命令"}},[s._v("#")]),s._v(" 1-system服务管理命令")]),s._v(" "),t("p",[t("strong",[s._v("解释")])]),s._v(" "),t("ol",[t("li",[s._v("一般所有的系统 都会带有 自启服务 或者系统服务")]),s._v(" "),t("li",[s._v("这些所有的自带服务 都受 system 的管理")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("systemctl stop 服务名称\nsystemctl status 服务名称\nsystemctl start 服务名称\nsystemctl restart 服务名称\n\nsystemctl reload  服务名称  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个 是 服务的热重再")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("strong",[s._v("热重载")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("案例：我们在写某个网站 你修改的网站的内容后 不需要重启 直接保存网站就立即生效 这就是热重载\n注意：不是所有服务都可以热重载\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_2-显示系统服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-显示系统服务"}},[s._v("#")]),s._v(" 2-显示系统服务")]),s._v(" "),t("p",[t("strong",[s._v("基本语法")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("命令")]),s._v(" "),t("th",[s._v("意思")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("systemctl list-units --type service")]),s._v(" "),t("td",[s._v("查看正在运行的服务")])]),s._v(" "),t("tr",[t("td",[s._v("systemctl list-units --type service --all")]),s._v(" "),t("td",[s._v("查看所有的服务")])])])]),s._v(" "),t("p",[t("strong",[s._v("临时补充")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". 命令补全：tab  帮你自动补全\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("man")]),s._v(" 命令  命令帮助\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_3-服务持久化-开机自启"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-服务持久化-开机自启"}},[s._v("#")]),s._v(" 3-服务持久化（开机自启）")]),s._v(" "),t("p",[t("strong",[s._v("基本语法")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("命令")]),s._v(" "),t("th",[s._v("意思")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("systemctl enable  服务")]),s._v(" "),t("td",[s._v("设置这个服务是开启自启")])]),s._v(" "),t("tr",[t("td",[s._v("systemctl disable  服务")]),s._v(" "),t("td",[s._v("设置这个服务不是开机自启")])])])]),s._v(" "),t("h2",{attrs:{id:"_4-linux常用运行级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-linux常用运行级别"}},[s._v("#")]),s._v(" 4-Linux常用运行级别")]),s._v(" "),t("p",[t("strong",[s._v("linux常见的三种运行级别")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":停止状态（关机了）   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":表示多用户模式（linux黑窗口）  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(":桌面化运行级别（目前用的）\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("切换级别")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("init 进别数字  就可以进行切换\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_5-ntp时间同步服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-ntp时间同步服务"}},[s._v("#")]),s._v(" 5-ntp时间同步服务")]),s._v(" "),t("p",[t("strong",[s._v("基本语法")])]),s._v(" "),t("ol",[t("li",[s._v("默认linux 系统自带 时间服务")]),s._v(" "),t("li",[s._v("windows 也有时间服务  他是通过远程的时间服务器 自动的同步的")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/1714113184188.png",alt:"1714113184188"}})]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("linux 也可以同步时间 也是可以使用  时间服务器同步")])]),s._v(" "),t("p",[t("strong",[s._v("语法")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("命令")]),s._v(" "),t("th",[s._v("意思")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("date")]),s._v(" "),t("td",[s._v("获取当前linux系统的时间")])]),s._v(" "),t("tr",[t("td",[s._v("ntpdate   cn.ntp.org.cn 、ip地址")]),s._v(" "),t("td",[s._v("同步时间服务器的时间 可以在 www.ntp.org.cn")])])])]),s._v(" "),t("p",[t("strong",[s._v("注意")])]),s._v(" "),t("ol",[t("li",[s._v("在同步时间的时候 可以使用 域名 也可以使用 ip")]),s._v(" "),t("li",[s._v("但是推荐使用域名")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);