---
title: 现代javascript-2
date: 2020-05-29
---
<Boxx/>

注:本笔记,读了现代javaScipt ---里面引用文档的东西(有重复)

原文章地址:[https://zh.javascript.info/object#shu-xing-cun-zai-xing-ce-shi-in-cao-zuo-fu?map][1]

# 函数进阶内容

## 1-递归与堆栈

- 递归 可以深度递归 1000左右 
- 优化 简单化 代码递归

## 2-Rest 参数与 Spread 语法

- ...rest  语法 可以 吧  函数剩余的 所有的参数 收集到一起 然后合并使用
- ...spread  语法 可以 ...数组 可以 吧 数组的东西 展开 使用
- 我们可以用 这个语法 进行 代码的 浅拷贝 赋值 
  - 浅拷贝 ("没有复制引用  只复制了之")
  - 深拷贝 ("引用 与 值都覆盖了")

当我们在代码中看到 `"..."` 时，它要么是 rest 参数，要么是 spread 语法。

有一个简单的方法可以区分它们：

- 若 `...` 出现在函数参数列表的最后，那么它就是 rest 参数，它会把参数列表中剩余的参数收集到一个数组中。
- 若 `...` 出现在函数调用或类似的表达式中，那它就是 spread 语法，它会把一个数组展开为列表。

使用场景：

- Rest 参数用于创建可接受任意数量参数的函数。
- Spread 语法用于将数组传递给通常需要含有许多参数的函数。

我们可以使用这两种语法轻松地互相转换列表与参数数组。

旧式的 `arguments`（类数组且可迭代的对象）也依然能够帮助我们获取函数调用中的所有参数。

```javascript
/**
 *  ...rest 语法 在函数里面 可以 接受任意的参数 用的时候 就用不用的时候不用 
 * */
function name(...arr) {
    console.log(arr);
 }
 name(1, 1, 2)
/**
 * spread 语法  可以使用  ...展开运算符 吧 数组的 展开 运算为 每个参数 转换为列表参数
*/
let arr = [1, 2, 3, 4]
function nn(arr, w) {
    console.log(arr, w);
}
nn(...arr)
let str = "hellow"
alert([...str])
/**
 * 总结:在 函数的体上 的 ...展开运算 是接受多余的参数
 *      在 调用者身上 是 把对象展开列表
*/
//    使用展开语法 进行 浅拷贝  展开之后 使用的就是 列表 复制值 不会把 地址复制过去
let a = [1, 2, 4]
let b = [...a]
console.log(b);
let c = { age: 2 }
let d = { ...c }
```

## 3-变量作用域 闭包

- 代码块中的  代码 只能 代码块 去访问  其他地方 都不可以 使用 

```javascript
{
 	let a = 33
 	alert(a)
}
	alert(a)
/**
*  代码块： 执行代码块 在 {中间的 代码 叫代码块 }  中间的代码只能 由 代码块中间的 方法访问到 其他的地方访问不到
*  let  const  var
*
*  let  与 const  都是 代码块的级别的声明  他们在 代码块里面 不会有变量提升 之说
*
*  var 会有 变量提升 之说
*/
if (true) {
 	let age = 88
 	var age = 88
}
	alert(age)
	alert(a)
	var a = 2
```

- var  存在 变量 提升的 效果  他是 老旧的 var  有 不好的地方 
- 变量 的 查找 顺序 会是  由内 而外的过程  
  - 内部 有用内部的  然后 一次 就近原则 
- 闭包  :实际每一个 函数 都是 闭包  因为 函数 内部的变量 已经被 外界 无法 访问了  就算 使用 var 也不行 
- 老旧的版本 的var 的bug  就是使用的函数闭包

```javascript
if (true) {
    // let age = 88
    var age = 88
}
alert(age)
// alert(a)
// var a = 2

function add() {
    var a = 2
}
alert(a)
// 正如 上面的演示  在 普通代码块中  alert(age)是可以访问的 但是在 函数代码块中 就不行了所以函数都有闭包行为 
```

```javascript
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
//上面的  sayhi 只存在 于 if的 代码块中 所以 sayhi()调用不起来
```

```javascript
let x = 1;

function func() {
    console.log(x); // ?

    let x = 2;
}

func();

//内部有 x吗?? 当然有 没问题 所以用内部的但是 你是在初始化之前 用的所以报错
```

```javascript
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // 创建一个 shooter 函数，
      alert( i ); // 应该显示其编号
    };
    shooters.push(shooter); // 将此 shooter 函数添加到数组中
    i++;
  }

  // ……返回 shooters 数组
  return shooters;
}

let army = makeArmy();

// ……所有的 shooter 显示的都是 10，而不是它们的编号 0, 1, 2, 3...
army[0](); // 编号为 0 的 shooter 显示的是 10
army[1](); // 编号为 1 的 shooter 显示的是 10
army[2](); // 10，其他的也是这样。

//这里面的 i 都没有局部的 ,所以 一直用的是 外部 外部的变量一直在修改
```

## 4-老旧的var

- var  没有块级作用域 
- var 声明的变量 只有 函数作用域 或者 全局作用域 只有这两种
- var 关键字 会 忽略 块作用域 自动的把 var 变量名 初始化
- var 的声明 会被提前 但是复制不会 
- 或者利用 函数立即表达式 来执行也可以

## 5-全局对象

- globalThis.alert(你好)
- window.alert("你好")
- 上面 这两个 一个意思 只不过 在浏览器 环境里面 用的是 window  在其他的环境 使用的就是 globalThis 统一 
- 如果 一个数据 相当 重要 对你来说 你可以 使用 window.属性={  把值以对象放进去 } 作为全局可以使用的东西

## 6-函数对象

- 函数 通常都有自己的名字  如果没有 函数 也会 自己给自己  加上名字 所以name  是js的关键字 
- 我们把 函数 当作 对象使用 可以给 对象 添加属性 

```javascript
//模仿 闭包  生成 函数对象的 内部 属性

function fa() {
   //创建了 函数 对象 返回函数对象的操作
   function son() {

       return son.count++
   }
   // 给 这个函数对象 设置属性.conut =0 初始值 
   son.count = 0
   return son //把 son 函数对象 返回
}

let son = fa()
console.log(son());
console.log(son());
console.log(son().count = 5);

函数对象的好处  可以 字 外部的引用变量 上 访问 内部的变量 
```

- name` —— 函数的名字。通常取自函数定义，但如果函数定义时没设定函数名，JavaScript 会尝试通过函数的上下文猜一个函数名（例如把赋值的变量名取为函数名）。
- `length` —— 函数定义时的入参的个数。Rest 参数不参与计数。

```javascript
//模仿 闭包  生成 函数对象的 内部 属性

function fa() {
    // let conut = 0
    //创建了 函数 对象 返回函数对象的操作
    function son() {

        return son.count++
    }
    son.count = 0
    // 给 这个函数对象 设置属性.conut =0 初始值 

    son.set = value => son.count = value;
    son.de = () => { return --son.count }
    return son //把 son 函数对象 返回
}

let son = fa()
son.set(100)
console.log(son.de());

son 函数对象的 属性 count 属性 他的属性可以操作他自己  使用 父函数 创建构造函数 最后 生成 内部的对象 
生成的对象 再进行 内部函数的属性操作 


// 使用 返回的是 构造器 的方法 导致 这个 函数对象 可以 无效的调用 
function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15
```

## 7-new Function语法

- new function  创建的 函数 不存在 函数 作用域 他访问的 指向的是 全局 对象 不是 内部的

```javascript
function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}

getFunc()(); // error: value is not defined

///常规的创建 指向的 就是 局部的 作用域 

function getFunc() {
  let value = "test";

  let func = function() { alert(value); };

  return func;
}

getFunc()(); // "test"，从 getFunc 的词法环境中获取的
```

## 8-setTimeout 和 setInterval

- setTimeout` 允许我们将函数推迟到一段时间间隔之后再执行。
- `setInterval` 允许我们重复运行一个函数，从一段时间间隔之后开始运行，之后以该时间间隔连续重复运行该函数。

## 9-装饰器模式和转发，call/apply

- 构造器.call(对象,参数,参数)
- 构造器.apply(对象,...argument)  
- 方法的借用 可以改变this 的指向

```javascript
function hash() {
  alert( arguments.join() ); // Error: arguments.join is not a function
}

hash(1, 2);


function hash() {
  alert( [].join.call(arguments) ); // 1,2
}

hash(1, 2);

//上面的数组 是为数组 他不能 使用数组的一些方法 我们可以 使用call 方法 指定 改变this指向 借用 方法
```

## 10-函数 绑定

```javascript
let user = {
    age: "join",
    sayhei() {
        console.log(this);
        console.log(this.age);
    }
}
// setTimeout(user.sayhei, 1000)
let sqyhei = user.sayhei.bind(user)//提前 绑定 调用的对象  不能 延时绑定 否则还是 一个样子
// setTimeout(function () {
//     let sayhei = user.sayhei.bind(user)

//     sayhei()
// }, 1000)
setTimeout(sqyhei, 1000)
/**
 * 提前 把 this的 user  指定了 然后 绑定 留下来
 * 
 * 1. apply 与 call   是 实现的 立即调用 方法 
 * 2. bind  是 绑定 这个 方法 到底 与 谁绑定  
*/
user = {
    sayhei() {
        console.log(this);
        console.log(this.age);
    }
}
```

- bind  绑定的方法  
  - bind(对象,参数,参数)--
  - 当不需要 传递的时候   需要传递一个 null 过去 
- 用户 对 方法的 使用   二次 对方法 重复 利用 
- 包装器的使用 

```javascript
function partial(func, ...argsBound) {// 方法   参数
  return function(...args) { // (*)  返回 一个 方法 这个 返回的才是 二次 封装的 最后形成的方法 
      // 可以 采用 方法的call 调用 让方法call 一下 
    return func.call(this, ...argsBound, ...args);
  }
}

// 用法：
let user = {
  firstName: "John",
  say(time, phrase) {
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

// 添加一个带有绑定时间的 partial 方法
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

user.sayNow("Hello");
// 类似于这样的一些内容：
// [10:00] John: Hello!

自定义 方法 的 传递 (方法,参数)
```

## 11-包装器的使用 节流包装器 封装

```javascript
function fangdou(func, ms) {
    console.log(22222);
    let timeout;
    return function () {
        console.log(222);
        console.log(timeout);
        if (timeout) clearTimeout(timeout);
        console.log(timeout);
        // timeout = null
        timeout = setTimeout(() => func.apply(this, arguments), ms);
    };
}

let fd = fangdou(chang, 1000)

//包装器的 函数 只有给了 变量 之后 才会 把内部的 值 留下 
//因为 如果 不给引用 变量的话 每次 都会 创建 一个 新的 对象 
//闭包 一定要用引用变量 否则 没法把数据存储下来
```

## 12-箭头函数

- 没有 this
- 没有 自带的数组 arguments
- 如果 需要 可以 使用 外部的 封装 function(){}  内部有返回值 的做法 只要 最后保持是需要的就可以

# 对象属性配置

## 1-性标志和属性描述符号

- 对象属性  不仅有 value  
- 还有 三个标志 
  - writable     是否可以被修改 
  - enumerable    是否可以 循环 (枚举)
  - configurable   是否可以被删除 
- 可以 获取 一个对象 含有的 标志属性 
  - object.getOwnpropertyDescriptor(obj,protoname)
- 设置 是 Object.definePrototype

```javascript
object.definedPrototype(obj,prototname,value)
```

- 属性 :对象配置的 默认都是 false
- 多个属性一起设置

```javascript
Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2
  // ...
});


Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});

列入 :案例 
```

## 2-属性的getter 与 setter

- 原来的 函数 :的属性 都是 数值 属性 
- 除了这种 属性 我们还以 使用 访问器 属性 ()
- 访问器  getter  与 setter 访问器 属性 
- getter  与 setter 的 属性 访问器  依赖 return  返回值 
- 当 获取的时候 会主动触发  getter  当 修改的时候 就会 触发 setter了 

## 3-使用 getter  来 包装属性

```javascript
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // 年龄是根据当前日期和生日计算得出的
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

alert( john.birthday ); // birthday 是可访问的
alert( john.age );      // ……age 也是可访问的
```


  [1]: https://zh.javascript.info/object#shu-xing-cun-zai-xing-ce-shi-in-cao-zuo-fu?map