---
title: linux网络配置
date: 2023-05-20
---
<Boxx/>

# Linux网络配置

## 1-查看网络信息

**基本语法**

```sh
windows查看网络信息：ipconfig
linux查询网络信息：ifconfig（桌面画）   或者  ip addr（最小服务器端）
使用上面的指令获取网络相关的信息
```

**网络相关信息有哪些**

```sh
本地链接 IPv6 地址. . . . . . . . : fe80::36c6:5447:664b:60e6%9  (地址) 万达金街
IPv4 地址 . . . . . . . . . . . . : 192.168.175.1  （地址）万达金街
子网掩码  . . . . . . . . . . . . : 255.255.255.0  对他的规范
默认网关. . . . . . . . . . . . . :  保安
```

1. 一般使用的 就是 ipv4h这个地址 （我们的理解就是 服务器的连接地址）

**注意**

1. 如果想连接服务器首先确保有网络

![1714029791988](/assets/1714029791988.png)

![1714029849880](/assets/1714029849880.png)

## 2-网卡相关的配置文件

**网卡配置文件位置**

1. linux一切皆是文件

```sh
vim  /etc/sysconfig/network-scripts/ifcfg-ens33"   #这里是 网卡的配置文件位置
```

**相关配置重要的**

```sh
TYPE="Ethernet"   网络类型
BOOTPROTO="dhcp"  连接方式 dhcp 自动连接 static/none 手动设置连接
NAME="ens33"      网卡的名字
UUID="3cb2fdd6-48ea-4652-807b-3e2371edc6de"  网卡的id
DEVICE="ens33"    网卡设备的名称
ONBOOT="yes"      设置网卡是否开机启动 yes 就是开机启动 no 就是不启动
```

**服务器地址**

1. 服务器的地址一般都是公网  基本上是固定不变的  47.110.46.34
2. 或者后期我们会使用 域名连接 www.xxx.com ===> 服务器的地址

## 3-network网络基本操作

**基本语法**

| 操作                                                     | 意思             |
| -------------------------------------------------------- | ---------------- |
| systemctl stop network  （ctl ==》control 控制器的意思） | 停止网络服务     |
| systemctl start network                                  | 启动网络服务     |
| systemctl restart network                                | 重启网络服务     |
| systemctl status network                                 | 查看网络服务状态 |

**开启的样子**

● network.service - LSB: Bring up/down networking
   Loaded: loaded (/etc/rc.d/init.d/network; bad; vendor preset: disabled)
   Active: **active (exited)** since 三 2024-04-24 09:15:50 CST; 1 day 6h ago
     Docs: man:systemd-sysv-generator(8)
  Process: 6837 ExecStart=/etc/rc.d/init.d/network start (code=exited, status=0/SUCCESS)
    Tasks: 0

4月 24 09:15:48 localhost.localdomain systemd[1]: Starting LSB: Bring up/down networking...
4月 24 09:15:49 localhost.localdomain network[6837]: 正在打开环回接口： [  确定  ]
4月 24 09:15:49 localhost.localdomain network[6837]: 正在打开接口 ens33： [  确定  ]
4月 24 09:15:50 localhost.localdomain systemd[1]: Started LSB: Bring up/down networking.

**关闭的样子**

● network.service - LSB: Bring up/down networking
   Loaded: loaded (/etc/rc.d/init.d/network; bad; vendor preset: disabled)
   Active: **inactive (dead)** since 四 2024-04-25 15:39:09 CST; 45s ago
     Docs: man:systemd-sysv-generator(8)
  Process: 71876 ExecStop=/etc/rc.d/init.d/network stop (code=exited, status=0/SUCCESS)
  Process: 6837 ExecStart=/etc/rc.d/init.d/network start (code=exited, status=0/SUCCESS)

4月 24 09:15:48 localhost.localdomain systemd[1]: Starting LSB: Bring up/down netw....
4月 24 09:15:49 localhost.localdomain network[6837]: 正在打开环回接口： [  确定  ]
4月 24 09:15:49 localhost.localdomain network[6837]: 正在打开接口 ens33： [  确定  ]
4月 24 09:15:50 localhost.localdomain systemd[1]: Started LSB: Bring up/down netwo....
4月 25 15:39:08 localhost.localdomain systemd[1]: Stopping LSB: Bring up/down netw....
4月 25 15:39:08 localhost.localdomain network[71876]: 正在关闭接口 ens33： 成功断开…。
4月 25 15:39:08 localhost.localdomain network[71876]: [  确定  ]
4月 25 15:39:09 localhost.localdomain network[71876]: 正在关闭环回接口： [  确定  ]

## 4-ssh 协议 sshd服务

**ssh协议**

1. 这个协议 就是允许 远程连接服务器  final shell    Xshell   MobaXterm_CHS

**sshd服务**

1. 如果没有 sshd 服务 你是无法连接 服务器的  

```sh
ps -ef | grep sshd // 使用管道精确查找 服务是否存在
```
