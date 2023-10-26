---
title: 修改npm镜像源
date: 2018-12-15
tags:
 - npm
categories:
 -  npm
---
<Boxx/>

# Npm

## 1-切换 镜像 npm  (国内)

```js
npm config set registry http://registry.npmmirror.com
```

## 2-需要解除镜像并恢复到官方源

```js
npm config set registry https://registry.npmjs.org
```

## 3-查看npm源地址有没有换成功

```js
npm config get registry
```

## 4-通过配置淘宝镜像并安装使用cnpm

```js
npm install -g cnpm --registry=https://registry.npmmirror.com
```

## 5-使用npm 安装 什么

```js
npm i XXX
```

## 6-镜像切换淘宝

```js
npm config set registry http://registry.npm.taobao.org
```

## 7-永久修改为 淘宝

```js
npm config set registry https://registry.npm.taobao.org
```

## 8-查看 npm 安装依赖下载的位置

```js
npm config ls
```

## 9-设置npm 和npm cache 位置

```js
npm config set cache "D:\Program Files\npm-cache"

npm config set prefix "D:\Program Files\npm_global"
```

