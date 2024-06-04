---
title: linux系统软件包
date: 2023-05-24
---
<Boxx/>

# Linux软件包

## 1-软件包概述

1. win  安装包  qq.exe 
2. 作用就是用来安装软件程序的
3. 程序我们可以用的软件 （qq  360 ）
4. linux 里面 也是有软件包的  firefox浏览器  也是可以安装的
5. tomcat  jdk  httpd   nginx  （中间件）

## 2-linux安装软件包方式

**安装方式win**

1. 双击 下一步 可视化的安装

**安装方式linux**

1. rpm 安装   （系统自带的光盘里就有）
2. yum 安装    （属于线上的软件管家）
3. 二进制包安装（源码安装）

## 3-查询已经安装的软件

**基本语法**

```sh
# 获取已经安装的软件 使用 rpm 
rpm -qa
 选项
  -q 查询
  -a 所有
  
搭配管道精确查询
rpm -qa |grep 软件名字
```

## 4-rpm安装卸载软件包

**rpm卸载软件**

```sh
rpm -e 软件名字
 选项
  -e 卸载
```

**rpm安装软件**

```sh
rpm -ivh 软件包（名字）
 选项
  -i 安装
  -v 显示安装进度
  -h 以# 的方式显示进度
```

## 5-rpm获取光盘

**基本语法**

1. 下面是获取光盘的方法截图

![1714117489289](/assets/1714117489289.png)

**安装步骤**

```sh
#1.上图的获取光盘
#2.找到光盘的rpm 安装程序包  
	终端输入 lsblk 命令 获取sr0管盘挂载位置下面信息就是	 或者使用 df -T 也可以
	NAME            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
	sda               8:0    0   20G  0 disk 
	├─sda1            8:1    0  1.9G  0 part /boot
	└─sda2            8:2    0 16.8G  0 part 
  	├─centos-root 253:0    0 14.9G  0 lvm  /
  	└─centos-swap 253:1    0  1.9G  0 lvm  [SWAP]
	==sr0 （光盘设备）         11:0    1  4.3G  0 rom  /run/media/root/CentOS 7 x86_64 ==
#3.进入 sr0 设备的挂在目录 /run/media/root/CentOS 7 x86_64 访问目录相当于访问 光盘
	cd /run/media/root/CentOS 7 x86_64 
#4.进入 /run/media/root/CentOS 7 x86_64  ls 命令可以看到 一个 Packages 文件夹这个文件夹里面就是存放 安装包的位置

```

![1714117856982](/assets/1714117856982.png)

```sh
#5.进入 packages  
#6.找到 关于 火狐浏览器的安装包
#7.rpm -ivh 包的名字   （执行这个命令的时候需要当前目录下有这个安装包）
```

**获取光盘信息指令**

```sh
lsblk 获取光盘信息
df —T 获取光盘信息
```

## 6-光盘(设备u盘)的挂载与卸载

**卸载光盘**

```sh
umount 光盘的挂载路径   #卸载光盘
```

**挂载光盘**

```sh
mount /dev/sr0（光盘） /opt/guangpan/（目录）
```

**设备卸载繁忙问题解决**

```sh
umount: /opt/guangpan：目标忙。
        (有些情况下通过 lsof(8) 或 fuser(1) 可以
         找到有关使用该设备的进程的有用信息)
解决办法： cd 
umount 光盘的挂载路径 #卸载光盘
```
