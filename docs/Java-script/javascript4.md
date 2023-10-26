---
title: 现代javascript-4
date: 2020-05-29
---
<Boxx/>

注:本笔记,读了现代javaScipt ---里面引用文档的东西(有重复)

原文章地址:[https://zh.javascript.info/object#shu-xing-cun-zai-xing-ce-shi-in-cao-zuo-fu?map][1]

# 错误处理

## 1-try....catch

- 使用 try...catch 处理捕获的错误 只有 try 里面的 错误 才会 被捕获 其他的地方 不会捕获 
- 好处 是 捕获了错误 可以 让他 不在运行时 出错误 给用户最好的处理

```javascript
console.log(a);
alert("哈哈")
//上面的代码 再 a报错后 就不在向下运行了 但是 下面的 try cathc 捕获后的 还可以正常运行 
//好处 就是 不会 因为运行时的错误 导致程序的崩溃
try {
 	console.log(a);
} catch (err) {
 	alert(err)
}
alert("哈哈")
```
![Snipaste_2022-09-14_15-32-06.png][1]

- 在  catch 中 打印 err  使用 console.dir(err)
- err 有 name  有 message两个信息  
- name在 原型上面
- 可以使用 try  catch  对错误 处理 其他的东西
- 最后 还有一个 finally 最后的  他是无论怎样最后 都会执行的 一个 方法  
- throw  错误  抛出  错误 错误 可以 去处理 也可以 抛出 
- 我们 可以 new err 错误 
- 错误 一般 都是运行错误  
  - 运行作物也包含 好几种 
  - 所以要分情况

```javascript
throw new Error("你好")

抛出 自定义 错误  让运行时的错误 更容器 清晰 接受 对 知道的东西进行抛出 
会 依次捕获


finally {
	无论最后怎样 还是会执行的代码
}
```

## 2-自定义错误 new Error()

- 不同的错误哦  不同的 处理 error

```javascript
自定义  err 内部 最需要注意的就是  name  message 两个参数
最主要的是 对象的 name   与  message 属性  还有 他的 stack 属性
name :与  message  属性 都是 在原型链上的
```

# new Promise 

- 我们 一般的  异步 处理 方式 有时候需要 等待完成后 才去 处理结果 因为是异步的 一般不会等待 我们完成如果我们必须要 等待异步的完成呢 ,可以使用 callback 函数 回调 来解决 异步 等待问题 
- 但是 回调可以解决 但是 容易 让函数产生 一直嵌套的问题 也就是  回调底蕴或者 回调地狱
- promise 一共 三种 状态
- 初始  成功  错误    

## 1-如何创建 Promise

- resolve  函数 调用状态为 成功
- reject 函数 调用后 状态为 失败

```javascript
let promise = new Promise(function(resolve,reject){
    需要干一些事情 一般 都是用函数
    需要执行的函数 列入 fun()
})
resolve,reject 这两个 函数 是js 内部 自动 携带的 参数
如果 有 结果 成功 (resolve  跟 reject 错误 )
```

## 2-Promise 的相关的属性

```javascript
state:状态 一共有三种 第一 是pending  最初的  还有有一个 resolve 成功函数时状态为 fulfilled 成功
reject 失败函数时候 为 rejected 状态

result :结果 最初结果时 undefined  当调用 resolve 的时候 值为 resolve(value) 里面的value
当 reject(error) 的时候  里面 为 error 错误
```

```javascript
let promise = new Promise(function (resolve, reject) {
    // resolve(222)// ====>"fulfilled"   
    // reject(error)// ===>"rejected" 

    setTimeout(function () {
        reject(new Error("你好"))  
    }, 1000)
})
console.log(promise);

在异步函数 中 settimeout 延迟函数中 异步 可以 使用 promise 的状态来提示用户 给的值
合理使用  resolve 与  reject
```

## 3-then 与 catch

```javascript
promise.then((data) => {
    console.log(data);
}, (error) => {
    console.log(error);
})
```

- then ()  方法  里面  有 两个 参数 两个 参数 都是  函数
- 第一个 函数时  result  成功的函数 
- 第二个 函数 error 时失败的函数
- 两个 函数 在调用 resolve 的时候 then 的成功的函数 可以触发 
- 当 调用 reject 的时候 then 的 失败函数 可以触发

```javascript
记住  then 里面 有两个 函数 参数  第一个是 成功 第二个是 失败

catch  是捕获 ,捕获的时候 也是 针对 错误来的  如果只需要 错误 可以使用 catch

then 的第一个 可以写为  null  如果我们只需要 后面的错误
```

## 4-finally 最后 

```javascript
promise 的 finally 跟我们的try  catch 一样的 也是最后 捕获 永远会执行 后面的语句 里面的参数 也是一个函数
finally 就是 一个 不管怎样 他都会 干的事情  跟then  catch  基本 没有关系
```

## 5-promise 链

- 这个 异步的 对象链 是 采用的 then()  来链接 方法的 使用 promise 的 then 来链接 程序
- then 里面的数据 可以使用  return  来返回出来  但是 then 不能再用  resolve 返回状态

## 6-使用promise 处理错误

- promise 里面 有一个隐式的 try  catch  这个隐式的  try catch  会自动捕获 错误 
- 如果 错误 可以捕获  使用  catch  如果 处理不了 错误可以 再次 向外 抛出错误

```javascript
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(2)
        reject(2)
    }, 1000)
})
promise.then((data) => {
    console.log(data, "1");
    // throw new Error(data)
}).then(null, (data) => {
    console.log(data, "2");
}).


.catch(()=>{
    // catch 是捕获 错误专门的
})
```

- 如果 上一个 接口  处理不了 的错误  我们可以 再次 抛出 错误 使用 throw 错误 向下一次 抛出在下一次的处理中 处理 这个错误
- catch 也可以 捕获 错误 信息  错误  我们 尽可能的都去 处理  否者 程序 就会 不行

```javascript
new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

错误 必须是 执行 promise 同步 发生的  不能是异步 出现的错误
```

# promise Api

### 1-promise.all

- 这个 方法  promise.all([])  里面 需要多个 promise 数组 
- 特点 是这个 promise 数组 里面的请求 只要 有一个 错误  这个 all  方法 都不会 生效 就是全部错误

## 2-promise.allSettled

- 这个 方法 里面  传递的参数 也是 数组  
- 特点 这个 方法 请求  的 所有请求 不管是 成功还是失败  都会做返回  

## 3-promise.race

- 这个 方法 跟 all 比较相似    需要的参数  也是 数组 但是数组 里面的每一一个 请求 都要看最后的 结果
- 他等待的 就是第一个 不管错误 还是正确  等待的就是第一个
- 那个结果请求块 返回的就是那个

## 4-promise.any

- 这个 方法 跟 all 比较相似    需要的参数  也是 数组 但是数组 里面的每一一个 请求 都要看最后的 结果
- 他等待的也是 第一个 返回的请求 
- 但是等待的请求 必须是成功的 要的是成功的 第一个 不等待 错误

## 5-promise 的封装

- 封装的 promise 的 函数 把 外面的函数 封装成  返回 promise 的函数

## 6-异步任务的 微队列

- 只要是 异步任务  就会 被特殊的管理  

## 7-async/await

- async 包装的函数  会自动形成  promise 包装的函数 返回值等其他信息 都会自动 包装成 promise 的方式
- await是等待其他的 延迟异步函数 执行完毕 比如请求 后台的ajax  或者 异步的 promise 状态
- 再 新的浏览器 中 modules 模块允许 再顶部使用await  
- 或者  我们旧版本 的  js 中想要 使用  await  需要 让 匿名函数 包裹 可以满足
- await  等待函数  等待异步的 promise  执行完毕 或者 ajax 执行完毕

# Generator，高级 iteration

```javascript
function* add() {
    yield alert("你好")
    yield 3
    return 4
}

let generator = add()
console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
```

- generator  函数  是一个 类似于 闭包函数的一个函数 
- generator 函数调用后 不会执行内部的 代码 
- generator 会返回 一个 对象  该对象 又 函数 next () 执行调用下一个 函数     依次调用 yield 后面的代码  还有一个 throw 函数 可以对外 暴漏 err的错误  还有一个 return 函数 可以直接结束 generator 函数的 所有执行代码 过程  直接结束 状态  返回true
- 可以利用 generator  封装 下一步 执行 的 函数操作 一个个的请求

# 模块 (Module) 

## 1- 什么是模块

- 一个 js (module)文件  一个脚本 就是一个模块
- 模块可以使用  export   与  import 关键字 导入导出  可以 两个模块的函数相互调用
- 但是 浏览器的特殊原因 我们需要告诉 script 的 type = "module"
- 注意 模块话的 js  只能 使用 服务启动 也就是说  export 与 import  只适合 服务 启动热启动 open width live server

```javascript
<script type="module">
    import { add } from './40-module2.js'
    add()
</script>

这样就可以 把 module 的模块 导入进来
```

- 注意 模块的 module   只要  script 的 type 值  为  module 后  这个 js 就会 一直再  "use strict" 一直再严格模式下 

```javascript
<script type="module">
   	import { add } from './40-module2.js'
    add()
    a = 2
</script>
a 会很智能的 报错 就是不对  a is  not a defined 
```

- 两个 普通的 js  再 引入 脚本 的时候两个 js 文件的先后引入 只要变量 重名字了 就可以 重复使用了

```javascript
<script type="module" src="./40-module1.js"></script>
<script type="module" src="./40-module2.js"></script>

只要不加  module  就可以 共同使用  加了 module 后 就变成了 独自的模块
```

- 对于 模块 我们模块 里面的 导出 只能事 导入 或者 导出
- 模块是可以相互 依赖的 一个对象变 了 另一个模块里的对象配置也会变  因为 模块是对外暴漏对象 使用的是一个对象 所有一个变 另一个 也会变 

## 2-export两种 方式

- 第一种  export  

```javascript
export let obj ={}
export let obj2 ={}   
上面 属于 分别暴漏对象 或者 方法
export function say(){ }

再 别的模块引入的时候需要 
import {obj,obj1,say} from "文件"   需要按照 分别暴漏的 名字一一 暴漏 出去 不可以更改名字
```

- 第二种  export default

```javascript
export default let obj ={
    
}
也可以这样 默认到处一个对象   这个默认导出 就可以 自己自定义名字了

import obj from "文件地址"
```

## 3-模块脚本是延迟的

模块脚本 **总是** 被延迟的，与 `defer` 特性（在 [脚本：async，defer](https://zh.javascript.info/script-async-defer) 一章中描述的）对外部脚本和内联脚本（inline script）的影响相同。

也就是说：

- 下载外部模块脚本 `<script type="module" src="...">` 不会阻塞 HTML 的处理，它们会与其他资源并行加载。
- 模块脚本会等到 HTML 文档完全准备就绪（即使它们很小并且比 HTML 加载速度更快），然后才会运行。
- 保持脚本的相对顺序：在文档中排在前面的脚本先执行。

它的一个副作用是，模块脚本总是会“看到”已完全加载的 HTML 页面，包括在它们下方的 HTML 元素。

例如：



## 4-Async 适用于内联脚本（inline script）

对于非模块脚本，`async` 特性（attribute）仅适用于外部脚本。异步脚本会在准备好后立即运行，独立于其他脚本或 HTML 文档。

对于模块脚本，它也适用于内联脚本。

例如，下面的内联脚本具有 `async` 特性，因此它不会等待任何东西。

它执行导入（fetch `./analytics.js`），并在导入完成时运行，即使 HTML 文档还未完成，或者其他脚本仍在等待处理中。

这对于不依赖任何其他东西的功能来说是非常棒的，例如计数器，广告，文档级事件监听器。

```javascript
<!-- 所有依赖都获取完成（analytics.js）然后脚本开始运行 -->
<!-- 不会等待 HTML 文档或者其他 <script> 标签 -->
<script async type="module">
import {counter} from './analytics.js';

counter.count();
</script>
```

- 同样的 模块 src 路径 只允许 加载相同的 js文件两次 不允许 多次
- 旧 浏览器的 nomodule   可以 处理  就浏览器的 不识别  模块的 bug

## 5-export as 与 import as

- exports  as 是 作为 向外暴漏  改变名字  

```javascript
exports obj as hi   把导出的 obj 修改名字 为  hi
let config = {
    user: "222"
}

function say() {
    alert(config.user)
}
export { config as hi, say as luasy }
```

- import  as  是导入  

```javascript
如果 导入的东西过多  可以使用 
import * as 名字 from ""   
这样就可以 统统 导入
import * as lu from "./40-module1.js"
console.log(lu);
```

## 6-动态导入 import  函数

- 动态 导入的 import  不需要 module 不需要 type = module 
- 动态导入的import是一个特殊的函数方法  他不可以使用 callback  与 apply 这两个 改变函数的 方法

```javascript
async function ha() {
    let { luasy, hi } = await import("./40-module1.js")
    console.log(luasy, hi);
}
ha()

// 这是 异步导入 function  import() 函数的动态导入 不需要 type = module  
 
使用 上面的 await  解构 方法 可以快速的解构 promise 对象  
```

- 或者我们可以 使用  promise 的 then 方法 或者  catch 方法 捕获 处理 出来 

# proxy 代理(包装对象)

- 一个 `Proxy` 对象包装另一个对象并拦截诸如读取/写入属性和其他操作，可以选择自行处理它们，或者透明地允许该对象处理它们。

```javascript
let proxy = new Proxy()  使用 new Proxy()  对 已有的对象 进行 重新的赋值 包装 
```

- 列入 let obj =[1,2,3]   是一个 对象 我们可以对这个对象 进行一个 高级功能的包装

```javascript
let arr =[1,2,3,4,5]

 arr  = new Proxy(arr,{
    get(target, p, receiver) {
        console.log("获取值",target, p, receiver)
        if(p in receiver){
            return target[p]
        }else {
            return "没有这个下标项"
        }

    }
})
console.log(arr[20])
```

- 类似与  对象的 代理 object.definedprototype 的get set  但是这个更好  vue 3 就是使用的这
- new proxy  () 可以包装对象  把包装好的我们可以在 返回 给 元 对象 这样 就给元对象 进行了重新的高级定义
- 有点 类似 于  object.definedprototype 对象 高级设置的 getter 与 setter Vue 3 原理就是使用的 proxy 包装器





  [1]: http://101.133.165.242/usr/uploads/2023/01/2599194051.png