const arr = require("./item.js");
const sidebar = require("./sidebar.js");
const plugins = require("./plugins.js");
const path = require('path')
module.exports = {
  // "title": "我的",
  // "description": "我的博肯,喜欢技术操作,分享起来了!!!",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    ['link', { rel: 'stylesheet', href: '/styles/style.css' }],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "jabinblog",// reco

  "themeConfig": {
    "mode": 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    "modePicker": false, // 默认 true，false 不显示模式调节按钮，true 则显示
    // 使用的 lecloud评论
    "valineConfig": {
      "appId": '3FF9Q5qERdqFuqkwRPIfS9Yt-gzGzoHsz',// your appId
      "appKey": 'sCtVGgoLCRzhArNfgXdwi5YN', // your appKey
    },
    // "subSidebar": 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    "nav": [
      {
        "text": "WLCR-博客主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间链-流转",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "WLCR-文档",
        "icon": "reco-message",
        "items": arr
      },
      {
        "text": "WLCR-外联",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": sidebar,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "WLCR-自然探索"
      },
      "tag": {
        "location": 3,
        "text": "WLCR-清风徜徉"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "lubei",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: plugins,
}