---
title: linux管道过滤  | 
date: 2023-05-18
---
<Boxx/>

# 管道过滤  | 

**解释**

1. | 就是那个管道 
2. 管道的主要作用 就是 把 某东西 输送 到某个地方  一个口进去 一个口出 
3. 在 linux 系统中 管道 用处 ，是把一个命令的结果 交给 其他命令的 作为
4. A命令 （会执行处一个结果 ） | （管道） 交给B命令 

## 1-管道过滤查找

**1.ls案例解释**

```powershell
在 终端 输入 ls 
[root@localhost /]# ls
bin  boot  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
得到上述的 东西  可以把这些结果 通过 管道 |  交给 grep 过滤命令 帮助快速查找

ls | grep opt 文件内容（这个时候不需要写文件内容 | 管道帮你直接生成了）
```

**基本语法**

```sh
命令 | 命令 

例子  ls | grep '关键字'
```

**2.统计有多少用户  案例**

```sh
cat /etc/passwd | wc -l
```

**3.把文件交给 less  more  案例**

```sh
cat /etc/passwd | less
```

**4.有些命令不支持管道  案例**

**注意**

ls 命令 就不支持管道

**操作**：把 /etc 这个目录下 找出所有的 以 .conf 结尾文件    然后以列表的形式展示出来

```sh
 find /etc/ -name '*.conf' | ls -lh
```

**解决办法**

1. 在 管道的后面 添加一个修饰符号  xargs 可以解决

```sh
find /etc/ -name '*.conf' | xargs ls -lh
```
