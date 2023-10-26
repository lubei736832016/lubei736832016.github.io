---
title: Vue动态路由权限处理分析
date: 2019-09-21
tags:
 - Vue
categories:
 - Vue
---
<Boxx/>

# 动态路由权限处理分析

## 1-简单分析版本

```js
let asyncRoutes = [
    {
        path: "/user",
        component: "user",
        meta: {},
        children: [
            {
                path: 'user',
                component: '@/views/user/user',
                name: 'user',
                meta: {
                    perms: ['GET /admin/user/list'],
                    title: '会员管理',
                    noCache: true
                }
            },
            {
                path: 'address',
                component: '@/views/user/address',
                name: 'address',
                meta: {
                    perms: ['GET /admin/address/list'],
                    title: '收货地址',
                    noCache: true
                }
            }
        ]
    },
    {
        path: "/index",
        component: "index",
        meta: {},
        children: [
            {
                path: 'index',
                component: '@/views/user/user',
                name: 'user',
                meta: {
                    perms: ['GET /admin/index/list'],
                    title: '首页管理',
                    noCache: true
                }
            },
            {
                path: 'ceshi',
                component: '@/views/user/address',
                name: 'address',
                meta: {
                    perms: ['GET /admin/index/list'],
                    title: '首页地址',
                    noCache: true
                }
            }
        ]
    }
]
```

```js
let perms = ['GET /admin/user/list', 'GET /admin/index/list']//用户登录提供的权限
/**
 *  @return filterRouters
 *  @return asyncRoutes 异步路由
 *  @return perms 权限
 * */
let res =[]
function filterRouters(asyncRoutes,perms) {//设置 过滤器 删选用户权限路由
    let res1=[]
    asyncRoutes.forEach((asyRoute,i)=>{// 对 路由进行循环遍历筛选
       if(asyRoute.meta&&asyRoute.meta.perms){//如果 有 meta 并且有 meta.perms 一定是有规则的路由 所以需要判断属于不属于当前用户
            perms.forEach((perm,p)=>{// 循环遍历每一个有 meta 的 规则
                if(asyRoute.meta.perms.includes(perm)){//如果有符合规则的  把符合规则的保留下来
                    res1.push(asyRoute)//保留到数组里面
                }
            })
       }else {//如果没有 meta 的一定是 没有规则限制 所以直接push 进去就可以了
           if (asyRoute.children&&asyRoute.children.length>0){// 但是在 push 之前 我需要 判定一下有没有孩子 有孩子的话  就需要对孩子进行检查
             asyRoute.children=filterRouters(asyRoute.children,perms)//检查完毕之后修改孩子的 具体的值
           }
           res.push(asyRoute)//最后push 进去
       }
    })
    return res1
}

filterRouters(asyncRoutes,perms)
console.log(res)
```

## 2- 代码提取方法控制

```js
let perms = ['GET /admin/user/list', 'GET /admin/index/list']
function isPerms(asyRoute, perms) {
    if (asyRoute.meta && asyRoute.meta.perms) {
        let flag = null
        perms.forEach((perm, p) => {
            if (asyRoute.meta.perms.includes(perm)) {
                flag = true
            }
        })
        return flag
    } else {
        return false
    }
}
function filterRouters(asyncRoutes, perms) {// 对路由进行过滤
    let res = []
    asyncRoutes.forEach((asyRoute, i) => {//循环遍历所有路由
        if (isPerms(asyRoute, perms)) {// 把上面的 是否有权限提成方法了 判断有没有 规则 有 规则 就检车一下
            res.push(asyRoute) // 符合规则的push
        } else {//没有规则的  一般都是常用路由 不是 异步路由了
            if (asyRoute.children && asyRoute.children.length > 0) {//看看有没有孩子
                asyRoute.children = filterRouters(asyRoute.children, perms)// 但是 在追加之前需要看看 孩子的检查一下规则 做好修改以后在push
                res.push(asyRoute) //像数组里面 push 追加
            }
        }
    })
    return res
}
console.log(filterRouters(asyncRoutes, perms))// 调用过滤路由
```

