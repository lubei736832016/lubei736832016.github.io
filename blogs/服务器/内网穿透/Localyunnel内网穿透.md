---
title: Localyunnel内网穿透
date: 2019-09-21
tags:
 - Natapp Internal network
categories:
 - server
---
<Boxx/>

## 1- 安装 Localyunnel

使用Localtunnel进行内网穿透，需要在本地计算机和互联网上运行两个程序。以下是使用Localtunnel进行内网穿透的基本步骤：

1. 在本地计算机上安装Node.js环境，可以从官网（https://nodejs.org/en/）下载安装包进行安装。
2. 在命令行界面（例如Windows下的cmd或PowerShell，或者Linux/Mac下的终端）中输入以下命令，安装Localtunnel：

```javascript
npm install -g localtunnel
```

3. 在命令行界面中输入以下命令，启动Localtunnel服务：

```javascript
lt --port <port>
```

其中，`<port>`整体是  !!!  你要穿透的内网服务的端口号。启动Localtunnel服务后，命令行界面会输出一个公网URL，这个URL可以用来访问你的内网服务。

4. 在互联网上的浏览器中输入上一步输出的公网URL，即可访问你的内网服务。
   需要注意的是，使用Localtunnel进行内网穿透时，公网URL是随机生成的，并且只有在你启动Localtunnel服务时才能使用。如果你需要长期使用一个固定的公网URL，可以使用Localtunnel的自定义子域名功能。具体使用方法可以参考Localtunnel的官方文档（https://github.com/localtunnel/localtunnel）中的说明。

## 2- 绑定自己的域名

要将自己的顶级域名绑定到localtunnel，您需要执行以下步骤：

1. 首先，您需要在DNS设置中为您的域名添加一个CNAME记录，[指向localtunnel.me](http://xn--localtunnel-0t3s396m.me/)。例如，[如果您的域名是example.com](http://xn--example-6x3l27zy9dfzzhfpqlep59d.com/)，则您需要添加一个CNAME记录：*.example.com CNAME [example.com.localtunnel.me](http://example.com.localtunnel.me/)。

2. 现在，您需要安装localtunnel客户端。您可以通过运行以下命令在Debian系统上安装localtunnel：

   ```javascript
   npm install -g localtunnel
   ```

3. 然后，您需要使用以下命令启动localtunnel客户端，并将其绑定到您的域名：

   ```javascript
   lt --port 3000 --subdomain example
   ```

   在这个例子中，我们将localtunnel绑定到example.com域名下的子域名example。您需要将--subdomain参数替换为您想要使用的子域名。

4. 最后，您需要将localtunnel客户端设置为在后台运行。您可以使用nohup命令将其作为后台进程运行，并将输出重定向到文件：

   ```javascript
   nohup lt --port 3000 --subdomain example > lt.log 2>&1 &
   ```

   这将将localtunnel客户端作为后台进程运行，并将输出记录到lt.log文件中。

现在，您应该可以通过example.com子域名访问您的本地应用程序。请注意，localtunnel是一个公共服务，因此请确保您的应用程序具有适当的安全措施来保护其免受未经授权的访问。

1. 如果要绑定自己的子域名，需要确保该子域名解析的IP地址的80端口可以访问。这是因为localtunnel会将您的本地服务暴露到公网上，让外部用户可以通过该子域名访问您的服务。如果该子域名解析的IP地址的80端口无法访问，外部用户就无法访问您的服务
2. localtunnel 生成的域名只有在重新运行时才会改变。如果你停止了 localtunnel 的运行，再次运行时会生成一个新的域名。

## 3- 绑定到指定端口

1. 要将 localtunnel 绑定到指定的端口和域名，需要使用以下命令：

   ```
   lt --port <指定端口> --subdomain <指定域名>
   ```

   例如，要将 localtunnel 绑定到本地的 8080 端口和 [mydomain.com](http://mydomain.com/) 域名，可以使用以下命令：

   ```
   lt --port 8080 --subdomain mydomain
   ```

   这将创建一个公共的 URL，例如 [https://mydomain.localtunnel.me](https://mydomain.localtunnel.me/)，该 URL 将被转发到本地的 8080 端口。请注意，指定的域名必须是唯一的并且未被使用。如果您尝试使用已经被使用的域名，您将收到一个错误消息。

## 4- 后台运行Localyunnel 服务

```javascript
nohup lt --port 3000 > lt.log &
```

这将将 localtunnel 运行在端口 3000 上，并将输出重定向到名为 lt.log 的文件中。& 符号使命令在后台运行。

## 5- 开机自启 内网穿透服务指定端口的解析

可以让 localtunnel 开机自启动。您可以使用 Systemd 服务来实现这一点。以下是实现的步骤：

1. 创建一个名为 localtunnel.service 的文件，该文件应该位于 /etc/systemd/system/ 目录下。
2. 在 localtunnel.service 文件中输入以下内容：

```javascript
[Unit]
Description=LocalTunnel Service
After=network.target

[Service]
User=YOUR_USERNAME
Type=simple
ExecStart=/usr/bin/lt --port 3000
Restart=always
RestartSec=10
[Install]
WantedBy=multi-user.target

```

注意：将 YOUR_USERNAME 替换为您的用户名，并将 --port 参数更改为您的 localtunnel 端口号。

1. 保存文件并关闭。
2. 运行以下命令加载新的 Systemd 服务：

sudo systemctl daemon-reload

1. 启动 localtunnel 服务：

sudo systemctl start localtunnel

1. 检查服务状态：

sudo systemctl status localtunnel

如果服务正在运行，您应该会看到 Active: active (running)。

1. 最后，将 localtunnel 服务添加到开机启动项中：

sudo systemctl enable localtunnel

现在，每次启动您的 Debian 系统时，localtunnel 应该会自动启动
