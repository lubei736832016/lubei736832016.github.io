---
title: Vuecli5解决跨域问题
date: 2019-09-21
tags:
 - Vue
categories:
 - Vue
---
<Boxx/>
# Vue解决跨域-代理跨域

比如我们的Vue应用在开发环境下运行在`http://localhost:8080`上，而后端API服务运行在`http://localhost:3000`上，我们想要在Vue应用中访问这些API接口。由于跨域限制，直接从Vue应用中访问API接口会失败，需要进行跨域配置。

首先，在根目录下创建一个`vue.config.js`文件，并添加以下代码：

```javascript
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
```

然后，在Vue应用中发送请求时，将API接口的URL设置为以`/api`开头的地址，例如：

```javascript
axios.get('/api/users')
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error)
  })
```

这样就可以将所有以`/api`开头的请求代理到`http://localhost:3000`上了。注意，在生产环境下需要在后端服务器中进行跨域配置。

# Vue解决跨域- vue-cli-plugin-proxy

如果你希望通过更简单的方式来配置跨域，可以使用 Vue CLI 官方提供的 `vue-cli-plugin-proxy` 插件。首先需要安装该插件：

```js
npm install -D vue-cli-plugin-proxy
```

安装完成后，在项目根目录下运行如下命令来配置代理：

```js
vue add proxy
```

