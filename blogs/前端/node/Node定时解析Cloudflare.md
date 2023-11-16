---
title: Node定时解析Cloudflare
date: 2019-09-21
tags:
 - Node 
categories:
 - Node
---
<Boxx/>

## 1- node 代码

```javascript
const express = require('express');
const request = require('request');
const cron = require('node-cron');
const Cloudflare = require('cloudflare');
const app = express();

// Cloudflare API credentials
const cf = new Cloudflare({
    email: '你的cloudflare邮箱',
    key: '你的api 的请求key'
});

let currentIP = '';

// Check IP every 10 minutes  10分钟检测一次
cron.schedule('*/10 * * * *', () => {
    request('https://api.ipify.org', (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const newIP = body;
            if (newIP !== currentIP) {
                currentIP = newIP;
                updateDNSRecord();
            } else {
                console.log("记录值相同", currentIP, newIP);
            }
        }
    });
});

// Update Cloudflare DNS record
function updateDNSRecord() {
    cf.dnsRecords.browse('你的区域id标识', { name: '你的二级域名' })
        .then(records => {
            const record = records.result[0];
            record.content = currentIP;
            cf.dnsRecords.edit('你的区域id标识', record.id, record)
                .then(() => console.log('DNS 记录不同 已经修改'))
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
}

app.listen(3000, () => console.log('服务启动在3000端口'));
```

## 2- 下载需要的依赖

```javascript
npm i express

npm i request

npm i node-cron

npm i cloudflare
```


  [1]: https://www.luaiwcr.top/usr/uploads/2023/04/79762139.png