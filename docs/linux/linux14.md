---
title: linux进程的检测与管理命令
date: 2023-06-07
---
<Boxx/>

# 进程的检测与管理

## 1-进程概念

1. 进程 就是一个正在进行的程序
2. 每个进程 程序 的运行都会占用 我们的cpu  或者内存的资源
3. 进程 可以查看 当前某个程序 占用资源的大小
4. 也可以看到整个系统的 运行情况

**windows 任务管理器**

![1714289565517](/assets/1714289565517.png)

**负载**：  背负了多少东西

# 进程相关的命令

## 1-top动态查看系统进程指令

**基本语法**

1. top进入 动态后 按 **q** 退出

```sh
top  会动态显示下面的数据 相当于windows 的任务管理器
```

![1714289726968](/assets/1714289726968.png)

**top显示结果解释**

**第一行top显示结果解释**

**问题**

1. 如何看当前负载 超负荷  只要看  load average 这三个值 只要大于了你的系统的总核数 就超负荷了  2

```sh
top - 15：35：12 表示当前的系统时间
up 5：22 表示运行的时间
users 3  当前正在登录的用户
load average  表示系统的当前负载情况  第一个值表示1分钟的负载情况，第二个表示5分钟的负载情况，15分钟的
```

**第二行top显示解释**

```sh
tasks 232 total  -- 任务 总数是 232
1running         --  运行的 数目
sleeping         --睡眠的任务
stoped           --停止的任务几个
zombie           --僵尸进程（关闭了程序了 但是进程还有 活死程序）
```

**第三行top解释 都是跟cpu有关系的**

```sh
us  表示用户使用的cpu的占比
sy  表示系统占用的cpu 的占比
ni  表示进程调整过优先级的占比（优先级 优先处理的任务在最上面）了解
id  表示系统的空闲的cpu
wa  表示等待处理的cpu任务占比
hi  表示系统硬件处理的cpu占比
si  表示系统软件的处理cpu占比
st  表示虚拟内存占用的cpu 的占比
```

**第四行top解释 kibMem 针对内存的显示**

```sh
total 总的内存
free  空闲的内存
used  使用的内存
buff/cache  缓冲区
```

**第五行top解释针对 swap 交换区**

```sh
total 总的内存
free  空闲的内存
used  使用的内存
avail Mem  交换区的虚拟内存
```

## 2-进程内容的解释

![1714293696666](/assets/1714293696666.png)

 **内容解释**

```sh
pid  进程id
user 这个进程的用户
pr   优先级数值越小优先级越高
ni   优先级数值越小优先级越高
virt 虚拟用量
res  表示占用的内存
shr  表示真正使用内存
s    睡眠的
%cpu cpu的占用率
%Mem 内存占用率
time 时间
command 进程的名字
```

## 3-free查看内存命令

**基本语法**

**选项**

1. -m 以mb 的大小显示内存信息

```sh
free  显示内存信息
free -m 以mb 的大小显示内存信息
```

## 4-df查看磁盘命令

**基本语法**

**选项**

1. -h 以 可以看懂的gb mb 方式显示

```sh
df  查看磁盘的用量
df -h 查看磁盘以可读的方式

文件系统                 容量  已用  可用 已用% 挂载点
/dev/mapper/centos-root   15G  5.5G  8.4G   40% /
devtmpfs                 974M     0  974M    0% /dev
tmpfs                    991M     0  991M    0% /dev/shm
tmpfs                    991M   11M  980M    2% /run
tmpfs                    991M     0  991M    0% /sys/fs/cgroup
/dev/sda1                1.9G  139M  1.6G    8% /boot
tmpfs                    199M  4.0K  199M    1% /run/user/42
tmpfs                    199M   28K  199M    1% /run/user/0
/dev/sr0                 4.3G  4.3G     0  100% /run/media/root/CentOS 7 x86_64

```

## 5-ps查看系统进程命令

**基本语法**

**选项**

1. -ef  列出所有的  进程信息

```sh
ps -ef 查看进程信息
```

![1714294383786](/assets/1714294383786.png)

```sh
uid   用户id 名字
pid   进程id
ppid  子级进程 
c     cpu 
stime 时间
tty   设备终端 （显示有那个终端发起的）
time  时间
cmd   路径名字
```

## 6-netstat查看进程端口命令

**基本语法**

1. 主要用途查看 进程 或者服务端口号 是否被占用
2. -ntlp  获取进程信息的详细信息

```sh
netstat -ntlp

实际操作： netstat -ntlp|grep 80  筛选正在使用的 端口服务信息
```

## 7-kill命令结束任务

**基本语法**

1. -9 表示强制杀死进程 
2. -15 表示正常杀死  默认就是 -15
3. 这个不是意思的杀死结束进程 原理是 传递信号 -15  -9

```sh
kill pid      表示正常的结束任务
kill -9 pid   表示强制杀死
```