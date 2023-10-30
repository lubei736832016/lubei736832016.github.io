---
title: 现代javascript-3
date: 2020-05-29
---
<Boxx/>

注:本笔记,读了现代javaScipt ---里面引用文档的东西(有重复)

原文章地址:[https://zh.javascript.info/object#shu-xing-cun-zai-xing-ce-shi-in-cao-zuo-fu?map][1]

# 原型-继承

## 1-原型继承

- 在 对象object 中 有一个 隐藏的属性 prototype 他的值要不是 null  要不是一个对象的引用  该对象(prototype) 被称为原型
- 在对象中 在读取 缺失的 属性的时候 javascript 会自动 从 原型中获取 属性 直到找到 null 为止
- 属性 prototype 是隐藏属性 
  - 可以通过 object.__proto__ 设置 值 

```javascript
let myanimal = {
  myeats: true
};
let myrabbit = {
  myjumps: true
};

myrabbit.__proto__ = myanimal; // (*)

// 现在这两个属性我们都能在 rabbit 中找到：
alert( myrabbit.myeats ); // true (**)
alert( myrabbit.myjumps ); // true
```

- 在这儿我们可以说 "`myanimal` 是 `myrabbit` 的原型"，或者说 "`myrabbit` 的原型是从 `myanimal` 继承而来的"。
- 这里只有两个限制：
  1. 引用不能形成闭环。如果我们试图在一个闭环中分配 `__proto__`，JavaScript 会抛出错误。(就是不能又回去了)
  2. `__proto__` 的值可以是对象，也可以是 `null`。而其他的类型都会被忽略。

- for in 属性 也可以 循环 继承的属性
- 可以使用  obj.hasOwnProperty(key)   这个方法 可以检查  当前的这个 属性 是不是 当前的 对象的
- 通过prototype 引用的对象 我们称作为 原型
- 写到原型链中的 属性 等 是等价的 javascript  引擎 会缓存 他是安全的 可以快速精确的找到
- 默认的 属性 都是 统一的 可以通过继承 去继承 属性(有时候可能 所有 的 会共同使用 同一个属性)
- prototype 只能 是 构造函数 的 构造名 去.设置
  - F.prototype 去设置 
  - prototype.只有一个 属性 `constructor`   构造器 这个构造器 会再次 指向 函数 自身

## 2-原生的原型

- object.__proto__===object.prototype
- 内建对象  的 prototype 原型属性
- 只有 null  跟 undefined 没有包装类型 (包装器)

## 3-没有 `__proto__`的对象

- [Object.getPrototypeOf(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) —— 返回对象 `obj` 的 `[[Prototype]]`。
- [Object.setPrototypeOf(obj, proto)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) —— 将对象 `obj` 的 `[[Prototype]]` 设置为 `proto`。

`__proto__` 不被反对的唯一的用法是在创建新对象时，将其用作属性：`{ __proto__: ... }`。

虽然，也有一种特殊的方法：

- [Object.create(proto, [descriptors\])](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/create) —— 利用给定的 `proto` 作为 `[[Prototype]]` 和可选的属性描述来创建一个空对象。
- object.create 方法可以让对象 没有原型

# 类

## 1-class 类基本语法

```javascript
class User {
        constructor(name, age) {
            console.log(222);
            this.name = name
            this.age = age
        }
        ask() {
            return this.name
        }
        fight() {
        }
    }

let xiaoming = new User("你好", "小明")
console.log(xiaoming);
```

- 只要使用 new 调用User()  constructor 构造函数 会默认调用
- 构造函数里面的 this.参数 是该类的实例的 参数
- 构造函数 的参数 跟 new User() 括号里面的参数 一一对应的
- this 指的是当前的 实例对象
- 类里面的 方法 都统一 放在了 原型对象上面
- 因为 类里面的 方法  都是放在  实例对象的原型上的 所以 不可以 枚举 默认 对象的 enumerable 值为false

## 2-按需创建类

```javascript
function Class(ph) {
  // 声明一个类并返回它
  return class {
    sayHi() {
      alert(ph);
    }
  };
}

// 创建一个新的类
let User = Class("你好啊js");

new User().sayHi(); // 你好啊js
```

- 声明一个函数 把类作为 函数的返回值 
- 把函数 调用后 把引用赋值 给变量 保留当前的地址
- 通过引用地址.调用返回 需要的类

## 3-类里面的 get 与 set

```javascript
class User {
    constructor(uname) {
        this.name = name
    }
    get name() {
        console.log(this);
        return this._name
    }
    set name(value) {
        console.log(this);
        if (value.length <= 3) {
            alert("太短了")
            return;
        }
        this._name = value

        return
    }
}
//函数 明 与  属性 名一直了 所以 递归 失败了 注意 set 的函数名与 属性名 不能一样
let xiao = new User("你好啊哈哈")
// xiao.name = "你好"
```

- 函数 明 与  属性 名一直了 所以 递归 失败了 注意 set 的函数名与 属性名 不能一样
- get 与 set  这种的属性 访问 里面 可以对属性 进行判断 或者 处理  类似与 java中的 get 与 set
- 每一个 属性 都有对应的 get 与set   get 与 set  里面的  设置相同的名字 使用 this._name这个样的方式
- 类 对象 还可以初始化 赋值属性 是没有问题的

## 4-类继承

```javascript
class Animals {
    constructor(name) {
        this.age = 0
        this.name = name
    }
    eat() {
        alert("吃")
        return;
    }
}
class Dog extends Animals {

}
let xiaohei = new Dog("小黑")
xiaohei.eat()

1.Vscode 代码开发工具
2.postMan 接口测试工具
3.git 代码管理工具
4.node.js 环境集成
5.Hbuilder开发工具
6.snipaste 屏幕截图吸色
7.WebStorm 开发工具
```

- 狗 可以 继承  动物 类的 特点 属性 动物有的 任何公共的 点 我们都可以 继承
- 子类  找不到的 会 顺着原型链  找 找到 父亲类 然后一直 按照原型链找  到  object 的 null 为止
- 类的 extends  关键字 可以 继承 任何的 构造函数 可以 继承类  亦可以 继承 构造函数 
- 类继承中 有时候 会重写  方法 ,但是 直接重写 所有的方法 不好 我们喜欢利用 父亲的方法 加改造 可以使用super关键字来 调用 父亲的 方法super.methods()
- 当 继承的 对象 里面 重写 构造函数了 继承的 对象里的 this 不能直接调用了  需要 我们 再 继承类里面 this 使用之前 调用 一下 super()  方法
- 完毕 之后 回过头来  看 类的 内部 原理 super() 继承的原理

## 5-静态属性和静态方法

- 静态修饰符  static
- 静态 修饰 的  方法 跟 属性  是不允许 再  实例对象 上 使用的 但是 会继承 给 自己的儿子  
- 静态的 方法 与 属性 只可以 使用  构造函数 使用 
- 例如  User.name 才可以

## 6-私有 和受保护的方法

- 私有属性  一般 都是 _私有属性 
- 外界 无法 访问 私有属性 受保护的  不允许 外界 修改 
- 或者 可以 设置 只读属性  只可以 对属性 获取 不能 修改 
- "#"是 私有保护属性的 特有的
- _带 _ 的 可以使用 原型的类  访问 但是 "#的就不可以了"
- 当你的 属性 再 类里面 没有定义的时候  默认 就是 私有属性

```javascript
class User {
   #per = 0
   constructor(per) {
       this.#per = per
   }
   get per() {
       return this.#per
   }
   set per(value) {
       this.#per = value
   }
}

let per = new User("2")
console.log(per.per);
```

- 当 '#' 号出来的时候 我们 无法 通过实例对象  直接 访问 "#per"  我们只能 通过 per 的getter 与  setter来访问

## 7-内建的类

- 内建有的类是 默认给的是 构造函数的 继承的构造器 函数我们可以自定义 

```javascript
class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }

    // 内建方法将使用这个作为 constructor
    static get [Symbol.species]() {
        console.log(222);
        return Array;
    }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false
```

- 比如上述 的 PowerArray 调用 new 后 会自动的 使用 内部类 get [Symbol.species]{} 返回一个数组
- isEmpty() 是检查 数组长度是否为空

## 8-instanceof 操作符号

- 这个符号用来检测 是否继承自 某个类
- 如果继承 就 返回 true  否则 就是 false
- 这个 输入 类的多态形式
- 普通的 对象 object 他有 自己的 toString 方法 一般的对象 toString 方法 都会 转换为[obect object]
- 我们的 继承 可以 利用 call this的指向问题 让他返回 相对的类型[Object :类型]

```javascript
let objectToString = Object.prototype.toString;
let arr = [{}]
console.log(toString.call(arr));
使用 toString 方法 ()  去 转换 掉用方法的 对象
```

- instanceof的 关注点不是关注 对象 而是关注  对象的 prototype 原型是否一样

## 9-Mixin 

- 有点混合的意思 ,就是 多态的继承 
- 有点像继承  但也不是继承
- 可以使用的  对象的 原型继承的  

[](https://zh.javascript.info/mixins)  推荐看这里的
