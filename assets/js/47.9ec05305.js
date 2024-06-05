(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{468:function(s,e,n){"use strict";n.r(e);var a=n(0),l=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("Boxx"),s._v(" "),e("h1",{attrs:{id:"linux中安装mysql数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux中安装mysql数据库"}},[s._v("#")]),s._v(" linux中安装mysql数据库")]),s._v(" "),e("h2",{attrs:{id:"_1-安装mysql数据库注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装mysql数据库注意"}},[s._v("#")]),s._v(" 1-安装mysql数据库注意")]),s._v(" "),e("p",[e("strong",[s._v("安装步骤")])]),s._v(" "),e("p",[s._v("网址：https://www.runoob.com/linux/mysql-install-setup.html")]),s._v(" "),e("p",[e("strong",[s._v("注意")])]),s._v(" "),e("p",[e("strong",[s._v("如果报这个错 Starting MySQL....... ERROR! The server quit without updating PID file (/usr/local/webserver/mysql/mysql.pid).")])]),s._v(" "),e("p",[e("strong",[s._v("解决办法")]),s._v(" 就是 给  mysql.pid 的父亲文件夹 添加 开放权限   然后在 mysql 里面创建一个 mysql.pid 文件")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" mysql:mysql /usr/local/webserver/mysql\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /usr/local/webserver/mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("注意")])]),s._v(" "),e("ol",[e("li",[s._v("初始化数据库之前")]),s._v(" "),e("li",[s._v("cd /usr/local/webserver/mysql")])]),s._v(" "),e("p",[e("strong",[s._v("/usr/local/webserver/mysql/scripts/mysql_install_db --defaults-file=/etc/my.cnf  --user=mysql")])]),s._v(" "),e("p",[e("strong",[s._v("注意")])]),s._v(" "),e("p",[e("strong",[s._v("/usr/local/webserver/mysql/bin/mysql -u root -p")]),s._v(" 登录mysql 的时候 密码是没有的按 回车就可以")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("/usr/local/webserver/mysql/bin/mysql "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" \n输出 输入密码的时候按 enter 回车就可以了\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("注意")])]),s._v(" "),e("p",[e("strong",[s._v("mysql")]),s._v("修改密码  在原本 没有启动mysql 的控制台输入")]),s._v(" "),e("p",[s._v("exit  或者 ctrl +c 退出也可以")]),s._v(" "),e("p",[s._v("因为默认root 是没有密码的")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("/usr/local/webserver/mysql/bin/mysqladmin "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" password "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n一直按 enter\n\n后面再改需要 \n/usr/local/webserver/mysql/bin/mysqladmin -u用户名字 -p旧密码 password 新密码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"_2-mysqllinux-版本安装-整合菜鸟教程完整步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-mysqllinux-版本安装-整合菜鸟教程完整步骤"}},[s._v("#")]),s._v(" 2-mysqllinux 版本安装 整合菜鸟教程完整步骤")]),s._v(" "),e("p",[e("strong",[s._v("一、安装编译工具及库文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("yum -y install gcc gcc-c++ make autoconf libtool-ltdl-devel gd-devel freetype-devel libxml2-devel libjpeg-devel libpng-devel openssl-devel curl-devel bison patch unzip libmcrypt-devel libmhash-devel ncurses-devel sudo bzip2 flex libaio-devel\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("二、 安装cmake 编译器")])]),s._v(" "),e("p",[s._v("1、下载地址")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("wget http://www.cmake.org/files/v3.1/cmake-3.1.1.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2、解压安装包")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("tar zxvf cmake-3.1.1.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("3、进入安装包目录")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd cmake-3.1.1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("4、编译安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./bootstrap\nmake && make install\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("三、安装 MySQL")])]),s._v(" "),e("p",[s._v("1、下载地址")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("wget http://dev.mysql.com/get/Downloads/MySQL-5.6/mysql-5.6.15.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2015/01/mysql2.png",alt:"mysql2"}})]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("tar zxvf mysql-5.6.15.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("3、进入安装包目录")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd mysql-5.6.15\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("4、编译安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cmake -DCMAKE_INSTALL_PREFIX=/usr/local/webserver/mysql/ -DMYSQL_UNIX_ADDR=/tmp/mysql.sock -DDEFAULT_CHARSET=utf8 -DDEFAULT_COLLATION=utf8_general_ci -DWITH_EXTRA_CHARSETS=all -DWITH_MYISAM_STORAGE_ENGINE=1 -DWITH_INNOBASE_STORAGE_ENGINE=1 -DWITH_MEMORY_STORAGE_ENGINE=1 -DWITH_READLINE=1 -DWITH_INNODB_MEMCACHED=1 -DWITH_DEBUG=OFF -DWITH_ZLIB=bundled -DENABLED_LOCAL_INFILE=1 -DENABLED_PROFILING=ON -DMYSQL_MAINTAINER_MODE=OFF -DMYSQL_DATADIR=/usr/local/webserver/mysql/data -DMYSQL_TCP_PORT=3306\n\nmake && make install\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("5、查看mysql版本:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/usr/local/webserver/mysql/bin/mysql --version\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("到此，mysql安装完成")]),s._v(" "),e("p",[e("strong",[s._v("MySQL 配置")])]),s._v(" "),e("p",[s._v("1、创建mysql运行使用的用户mysql：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/usr/sbin/groupadd mysql\n\n/usr/sbin/useradd -g mysql mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("2、创建binlog和库的存储路径并赋予mysql用户权限")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mkdir -p /usr/local/webserver/mysql/binlog /www/data_mysql\n\nchown mysql.mysql /usr/local/webserver/mysql/binlog/ /www/data_mysql/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("3、将/etc/my.cnf替换为下面内容")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[client]\nport = 3306\nsocket = /tmp/mysql.sock\n[mysqld]\nreplicate-ignore-db = mysql\nreplicate-ignore-db = test\nreplicate-ignore-db = information_schema\nuser = mysql\nport = 3306\nsocket = /tmp/mysql.sock\nbasedir = /usr/local/webserver/mysql\ndatadir = /www/data_mysql\nlog-error = /usr/local/webserver/mysql/mysql_error.log\npid-file = /usr/local/webserver/mysql/mysql.pid\nopen_files_limit = 65535\nback_log = 600\nmax_connections = 5000\nmax_connect_errors = 1000\ntable_open_cache = 1024\nexternal-locking = FALSE\nmax_allowed_packet = 32M\nsort_buffer_size = 1M\njoin_buffer_size = 1M\nthread_cache_size = 600\n#thread_concurrency = 8\nquery_cache_size = 128M\nquery_cache_limit = 2M\nquery_cache_min_res_unit = 2k\ndefault-storage-engine = MyISAM\ndefault-tmp-storage-engine=MYISAM\nthread_stack = 192K\ntransaction_isolation = READ-COMMITTED\ntmp_table_size = 128M\nmax_heap_table_size = 128M\nlog-slave-updates\nlog-bin = /usr/local/webserver/mysql/binlog/binlog\nbinlog-do-db=oa_fb\nbinlog-ignore-db=mysql\nbinlog_cache_size = 4M\nbinlog_format = MIXED\nmax_binlog_cache_size = 8M\nmax_binlog_size = 1G\nrelay-log-index = /usr/local/webserver/mysql/relaylog/relaylog\nrelay-log-info-file = /usr/local/webserver/mysql/relaylog/relaylog\nrelay-log = /usr/local/webserver/mysql/relaylog/relaylog\nexpire_logs_days = 10\nkey_buffer_size = 256M\nread_buffer_size = 1M\nread_rnd_buffer_size = 16M\nbulk_insert_buffer_size = 64M\nmyisam_sort_buffer_size = 128M\nmyisam_max_sort_file_size = 10G\nmyisam_repair_threads = 1\nmyisam_recover\ninteractive_timeout = 120\nwait_timeout = 120\nskip-name-resolve\n#master-connect-retry = 10\nslave-skip-errors = 1032,1062,126,1114,1146,1048,1396\n#master-host = 192.168.1.2\n#master-user = username\n#master-password = password\n#master-port = 3306\nserver-id = 1\nloose-innodb-trx=0 \nloose-innodb-locks=0 \nloose-innodb-lock-waits=0 \nloose-innodb-cmp=0 \nloose-innodb-cmp-per-index=0\nloose-innodb-cmp-per-index-reset=0\nloose-innodb-cmp-reset=0 \nloose-innodb-cmpmem=0 \nloose-innodb-cmpmem-reset=0 \nloose-innodb-buffer-page=0 \nloose-innodb-buffer-page-lru=0 \nloose-innodb-buffer-pool-stats=0 \nloose-innodb-metrics=0 \nloose-innodb-ft-default-stopword=0 \nloose-innodb-ft-inserted=0 \nloose-innodb-ft-deleted=0 \nloose-innodb-ft-being-deleted=0 \nloose-innodb-ft-config=0 \nloose-innodb-ft-index-cache=0 \nloose-innodb-ft-index-table=0 \nloose-innodb-sys-tables=0 \nloose-innodb-sys-tablestats=0 \nloose-innodb-sys-indexes=0 \nloose-innodb-sys-columns=0 \nloose-innodb-sys-fields=0 \nloose-innodb-sys-foreign=0 \nloose-innodb-sys-foreign-cols=0\n\nslow_query_log_file=/usr/local/webserver/mysql/mysql_slow.log\nlong_query_time = 1\n[mysqldump]\nquick\nmax_allowed_packet = 32M\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br"),e("span",{staticClass:"line-number"},[s._v("87")]),e("br"),e("span",{staticClass:"line-number"},[s._v("88")]),e("br"),e("span",{staticClass:"line-number"},[s._v("89")]),e("br"),e("span",{staticClass:"line-number"},[s._v("90")]),e("br"),e("span",{staticClass:"line-number"},[s._v("91")]),e("br"),e("span",{staticClass:"line-number"},[s._v("92")]),e("br"),e("span",{staticClass:"line-number"},[s._v("93")]),e("br"),e("span",{staticClass:"line-number"},[s._v("94")]),e("br"),e("span",{staticClass:"line-number"},[s._v("95")]),e("br"),e("span",{staticClass:"line-number"},[s._v("96")]),e("br"),e("span",{staticClass:"line-number"},[s._v("97")]),e("br")])]),e("p",[s._v("使用  cat /etc/my.cnf 查看一下看看修改成功了吗")]),s._v(" "),e("p",[s._v("4、初始化数据库")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd /usr/local/webserver/mysql\n\n/usr/local/webserver/mysql/scripts/mysql_install_db --defaults-file=/etc/my.cnf  --user=mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("显示如下信息：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Installing MySQL system tables...2015-01-26 20:18:51 0 [Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).\nOK\n\nFilling help tables...2015-01-26 20:18:57 0 [Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).\nOK\n...\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("5、创建开机启动脚本")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd /usr/local/webserver/mysql/\n\ncp support-files/mysql.server /etc/rc.d/init.d/mysqld \n\nchkconfig --add mysqld \n\nchkconfig --level 35 mysqld on\n\ntouch mysql.pid\n\nchown -R mysql:mysql /usr/local/webserver/mysql\n\nchmod -R 755 /usr/local/webserver/mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("6、启动mysql服务器")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("service mysqld start\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2015/01/mysql4.png",alt:"mysql4"}})]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/usr/local/webserver/mysql/bin/mysql -u root -p\n\n按enter 就可以默认没有密码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:"/assets/1715050643250.png",alt:"1715050643250"}})])],1)}),[],!1,null,null,null);e.default=l.exports}}]);