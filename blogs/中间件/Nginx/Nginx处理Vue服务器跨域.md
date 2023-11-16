---
title: Nginx处理Vue服务器跨域
date: 2019-09-21
tags:
 - Nginx
categories:
 - Nginx
---
<Boxx/>

# Nginx 处理跨域

```js
// 配置 nginx 跨域 
location /api {
    rewrite ^/api/(.*)$ /$1 break;//所有对后端的请求加一个api前缀方便区分真正访问的时候移除这个前缀
    add_header 'Access-Control-Allow-Origin' '*';// 设置请求头
    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';// 设置请求跨域的方法
    proxy_pass 'http://47.110.91.18:8090';//设置代理的服务器地址
}
```

## 先介绍几个nginx命令

1. 打开nginx.conf文件

   `/usr/local/etc/nginx/nginx.conf`

2. 重新加载配置|重启|停止|退出 nginx

   `nginx -s reload|reopen|stop|quit`

3. 打开nginx服务

   `nginx`

## 上code：配置nginx.conf的文件

> 以下是nginx.conf文件里的serve部分

```
server {    
    # 配置服务地址    
    listen       9000;    
    server_name  localhost;    
    # 访问根路径，返回前端静态资源页面    
    location / {        # 前端代码服务地址        proxy_pass http://localhost:8000/;  
    #前端项目开发模式下，node开启的服务器，根路径下可打开index.html    }    
    # 最简单的API代理配置    # 约定：所有不是根路径下的资源，都是api接口地址。则可代理如下    
    location /* {        
    # API 服务地址        
    proxy_pass http://www.serverA.com;
    #将真正的请求代理到API 服务地址,即真实的服务器地址，ajax的url为/user/1将会访问						http://www.serverA.com/user/1    
    }    
    # 需要更改rewrite 请求路径的配置    
    location /api/ {        
    rewrite ^/api/(.*)$ /$1 break;#所有对后端的请求加一个api前缀方便区分，真正访问的时候移除这个前缀 
    # API Server       
    proxy_pass http://www.serverA.com; #将真正的请求代理到serverA,即真实的服务器地址，ajax的url为/api/user/1的请求将会访问					
    http://www.serverA.com/user/1  
    
    }    
    error_page   500 502 503 504  /50x.html;    
    location = /50x.html {        root   html;    
}}
```

- 配置好nginx.config后，做以下操作。

1. 启动nginx服务。终端执行：`nginx`
2. 前端项目，index.html同级目录起服务，监听8000端口。自然你可以通过http://localhost:8000访问到页面。但是同时，由于访问nginx服务http://localhost:9000的地址，被代理到了http://localhost:8000地址。所以访问http://localhost:9000，也可以访问到此index.html页面。
3. 项目中，所有接口地址为/*或者为http:localhost:9000/*的都会被代理到http://www.serverA.com/*去访问。从而实现本地开发环境下跨域请求线上http://www.serverA.com的接口。例如ajax的url是/api/user/1，经过代理后发起的请求url是http://www.serverA.com/api/user/1，达到目的，且没有跨域



## 所有请求 nginx 请求跨域

```js
location / {
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, DELETE, PUT';
    add_header 'Access-Control-Allow-Headers' 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token';
    if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, DELETE, PUT';
        add_header 'Access-Control-Allow-Headers' 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token';
        return 200;
    }
}
```

