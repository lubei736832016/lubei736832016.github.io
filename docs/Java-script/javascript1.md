---
title: 现代javascript-1
date: 2020-05-29
---
<Boxx/>

注:本笔记,读了现代javaScipt ---里面引用文档的东西(有重复)

原文章地址:[https://zh.javascript.info/object#shu-xing-cun-zai-xing-ce-shi-in-cao-zuo-fu?map][1]

# 代码质量

## 1-代码调试 

- 在代码中书写 debugger 就是断点

## 2-语法风格忍者

- 多使用 下划线 
- 变量 重复使用 
- 短 能多短就多短
- 封装代码 提纯

## 3-转译器

- ？？ 转译器 
- `height ?? 100` 重写为 `(height !== undefined && height !== null) ? height : 100`。
- ？？!== undefined && height !== null

# Object基础

## 1-对象

- 字面量 与 构造器创建法 

- key名  可以是 “key” 加双引号的

- 读取的时候 需要 obj["key"] 去读取

- 对象中的计算属性

  ```javascript
  let foo = promt()  // 中括号 弄的可以是变量的属性
  var obj ={
      [foo]:5
  }
  ```

- 当 我们需要的属性名 比较复杂时 可以用 属性的 计算属性写法

- 对象属性名的 简写   key value 一样

- 属性 可以  命名关键字 

- obj 对象 属性 即使没有也不会报错 

  - 如果没有属性 就是 undefined  
  - 检查 方式   “key”  in   obj    有返回 true  没有 返回 false

- 一般场景  undefined 就够用了  但是要是 属性存在 值 为undefined 那就 呵呵 了

- 对象 里面 有默认的升序操作 

  ```javascript
  let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for(let code in codes) {
    alert(code); // 1, 41, 44, 49
  }
  ```

- 整数属性  

  - 就是 可以 字符串  简单转换 即可 转换 为 相同值的   属性  
  - “49”《====》49
  - “+49”======》49  但是不能回去
  - 上面 是 电话号码 问题  如果 想 让 该程序 里面的东西 保持 key 的顺序不变 
  - 可以 “+49”   每一个 加一个 +号  让他变成 非整数属性 

## 2-对象引用和复制

- 普通的 基本类型 是 赋值  
- 对象  是 采用的引用  方式 
- 对象 的 引用 方式 赋值  赋值的是  引用  地址值   
- 两个 对象 在比较 相等时  也是比较的 地址值  

```javascript
var obj ={}
var obj1={}   //false

var obj1={}
var obj2=obj1   // true
```

## 3-深拷贝

- 比如我们想  克隆一个属性 可以 利用 for（ key in obj）{     }
- 把 对象 1 的 key 循环 遍历 到  对象 2 中去 
- 拷贝 对象 我们还可以 用 assign（）方法 拷贝 
- assign（目标对象，源对象 。。。。源n）
  - 会把 源对象  都 拷贝 到 目标对象来 
  - 如果  目标对象 跟 源对象 都有相同的 属性  目标对象 属性值 将会被源对象覆盖
  - 可以利用这个 来完成空对象的 合并 
- 对象 深拷贝  问题 多个嵌套  采用 递归解决   自己封装的 递归 深拷贝

```javascript
function luassign(objs) {
    let a = Object.assign({}, objs)
    // debugger
    function check(objs) {
        for (const key in objs) {
            console.log(key);
            if (objs[key] instanceof Object) {
                console.log(111, objs[key]);
                objs[key]=Object.assign({},objs[key])
                check(objs[key])
            }else{
                continue
            }
        }
    }
    
    check(a)

    return a
}
```

- 当 深拷贝 的是 对象 套对象的时候  多层 嵌套  可以用以上 解决
- https://lodash.com/docs/4.17.15#cloneDeep  也可以使用 该网址封装的

## 4-垃圾回收器

- 垃圾回收是自动完成的，我们不能强制执行或是阻止执行。
- 当对象是可达状态时，它一定是存在于内存中的。
- 被引用与可访问（从一个根）不同：一组相互连接的对象可能整体都不可达，正如我们在上面的例子中看到的那样。
- 只要 引用的值 没有 了  那 这个对象 就会被删除 掉 

## 5-对象 方法 this

- 对象中  this 指向 的是  该对象 

```javascript
function  anem(){
    
}
这里面亦可以 有 this
那个对象 调用它 this就是 指的那个  对象 
```

- 在 对象 中 

```javascript
let user ={
    fun:function(){
        
    },
    fun(){
        
    }
    上面的两种方式 一个意思
}
```

## 6-构造函数

- 构造函数 是用于 批量 构建 类似的对象的 
- 用new 调用的构造函数 我们约定 函数名首字母大写 

```javascript
function User(name){
    this.name=name
    this.admin=false
}

let user = new User()// 这样去调用一个函数 他是 有返回值的 
```

- new  创建一个 空间对象  
- this 指向 该对象 
- 隐式的在开始 创建  this
- 最后 隐式  的  在 接收 return  this  因为 this就是指的当前的实例 对象 
- 用 this 来修改 内部的属性 


## 7-构造器模式 测试  new.target

- 在函数内部  我们 可以 利用  new.target  来判断 这个 函数 是不是 通过 new 来 调用的
  - 如果 是 new 调用的 new.target 是 该函数 
  - 如果 不是 new.target 返回的 是 undefined  空值
- 如果  在 用 new 调用的 构造函数  中 有 return  并且返回值 是一个 对象 将会覆盖 this
- 如果 return 的是一个 其他的数据 则不会 覆盖 还是 隐式的返回 this 

## 8-可选链

- obj?.prop` —— 如果 `obj` 存在则返回 `obj.prop`，否则返回 `undefined`。
- `obj?.[prop]` —— 如果 `obj` 存在则返回 `obj[prop]`，否则返回 `undefined`。
- `obj.method?.()` —— 如果 `obj.method` 存在则调用 `obj.method()`，否则返回 `undefined`
- 他是 新 加的语法   
  - 其他解决 办法  三元  ？？？ 嵌套  
  - 或者  && 短路运算符    ||  短路  运算符号

```javascript
let user ={}
// console.log(user.name);
alert(user.age1?.age)
//就是 在 当 对象里面 读取属性 读取不到的时候  再次读取  属性 内部的属性  就会 报错 
//可以使用  ?. 可选链  来限定  问好前面 如果没有  后面 则会 终止也有 短路效果
```

## 9-symbol类型

- 一般 只有两种类型 会作为  对象属性的 属性键
- String   与  symbol

## 10-对象的原始转换

- 一般 js 默认转换为  

- 先 查找  symbol 转换 继续  toString()   然后 valueOf()

- 对象到原始值的转换，是由许多期望以原始值作为值的内建函数和运算符自动调用的。

  这里有三种类型（hint）：

  - `"string"`（对于 `alert` 和其他需要字符串的操作）
  - `"number"`（对于数学运算）
  - `"default"`（少数运算符，通常对象以和 `"number"` 相同的方式实现 `"default"` 转换）

  规范明确描述了哪个运算符使用哪个 hint。

- 转换算法是：

  1. 调用 `obj[Symbol.toPrimitive](hint)` 如果这个方法存在，

  2. 否则，如果 hint 是

     ```
     "string"
     ```

     - 尝试调用 `obj.toString()` 或 `obj.valueOf()`，无论哪个存在。

  3. 否则，如果 hint 是

     ```
     "number"
     ```

     或者

     ```
     "default"
     ```

     - 尝试调用 `obj.valueOf()` 或 `obj.toString()`，无论哪个存在。

# 数据类型

## 1-原始数据类型

- string   number   boolean  null   undefined   symbol   bigint
- js  为他们提供了  对应的包装器    String   Number  Boolean   Symbol   Bigint  
- null  跟  undefined  是最原始的 数据



## 2-数字类型

- javascript 中常规数字存储 格式 为 IEEE-754存储  也被称 双精度存浮点数
- 再  js 运算中   会又  0.1+0.2!=0.3 的问题   这是精度问题 基本没办法避免
- 但是 我们 可以尽力减少精度的损失 
- 可以使用  toFixed()  转换 精度 默认 保留 小数点后面 两位

```javascript
console.log((0.1 + 0.2).toFixed(2) == 0.3);

toFixed(number)   number精确到的小数点的位数

().toFixed(2)   // 精确到 小数点 后两位
```

## 3-字符串

- 常用的 方法
- includes ("字符")    是否包含 字符
- satartWidth()  从哪里开始
- end width()  是不是以这个结束
- 调用 [str.localeCompare(str2)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) 会根据语言规则返回一个整数，这个整数能指示字符串 `str` 在排序顺序中排在字符串 `str2` 前面、后面、还是相同：
  - 如果 `str` 排在 `str2` 前面，则返回负数。
  - 如果 `str` 排在 `str2` 后面，则返回正数。
  - 如果它们在相同位置，则返回 `0`。

## 4-数组

- 读取  创建
- 使用 at 方法 获取 数组的组后一个值 

```javascript
arr.at(-1)
```

- 数组  javascript  允许你 两边 都 进来 出去  叫 **双端 队列**
- 数组的性能  
  - 数组 在末端 添加 删除 比 在前端 删除添加 性能 要好  因为每次删除第一个 后面的所有 都要重新换位置
- 遍历数组  
  - for()  普通的
  - for key of  数组    只能获取元素值  没有下标 
  - for  key  in 数组   / 对象   都可以 因为 数组也是 对象 
- 数组的length
  - 数组的 长度 是可变的  
  - 数组 长度  可以用来 截取 数组 需要的数组 
  - 妙用 : 清空数组  最快的方式 就是  数组.length=0 
- 数组的比较 
  - 不要使用 === 比较数组
  - 严格 比较 数组的引用地址
- 数组的 方法 
  - find  查找数组的 对象符合要求的方式
  - find index   查找下标
  - findlastindex  查找 最后的下标
  - filter  方法  返回 所有 符合标准的 条件数组
    - filter 是 返回符合条件的 原数组返回 
  - map  
    - map 是 不需要过滤 需要用原数组 的数据生成新的数组
  - sort  排序 
    - 比较 数组  需要参数 (a,b)  
    - 比较 字符串字母 使用 localeCompare
  - reduce  (sum,item,index,arr)   这个可以帮你返回上一次的综合 
    - 可以使用它快速计算累加求和

## 5-Map集合  映射跟集合

- map  集合  跟 object 一样 最大的区别 就是 map 可以存储任何类型的键
- 设置 set(key,value)
- 获取get(key,value)
- has(key)  有没有
- delete(key)  删除
- clear() 清空 
- size()  长度
- map  的 比较 key  
- 普通的对象 转换 为 map 对象 
  - object.entries(obj)
- map 对象转换为 普通的object 对象
  - Object.fromEntries(map对象)

## 6-set集合  映射跟集合

- set 集合 跟 map 差不多 但是 set 是无法存放 重复的元素
- 重复的key
- set 集合 与map集合  都是 size  存储的长度 
- clear()  清空 
- size()  长度

## 7-WeakMap and WeakSet（弱映射和弱集合）

- 这些映射集合  只注重了  对象 在存储 后的 可达性是不是可变的
- 普通的 map  里面的key 是对象后  当对象 赋值为 null 的时候   会被垃圾对象回收 ,但是 map里面的数据不会
- 而weakmap 与 weakset  会 当对象 作为 null 是 集合里的key 也会对应的被清楚
- 他们只有 add()
- set()
- get()
- has()
- delete() 方法 没有 keys() 遍历等

## 8-对象的其他方法

- Object.keys(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) —— 返回一个包含该对象所有的键的数组。
- [Object.values(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/values) —— 返回一个包含该对象所有的值的数组。
- [Object.entries(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) —— 返回一个包含该对象所有 [key, value] 键值对的数组。

| Map      | Object       |                                         |
| -------- | ------------ | --------------------------------------- |
| 调用语法 | `map.keys()` | `Object.keys(obj)`，而不是 `obj.keys()` |
| 返回值   | 可迭代对象   | “真正的”数组                            |

## 9-解构赋值

- 数组解构
- 解构赋值    是吧 对象内部的 东西解构出来  而不是简化 
- 解构赋值    是吧解构的东西 一一赋值  

```javascript
// 不需要第二个元素
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul

中间的 逗号 是 代替 多余的  跳过  第二个元素的赋值
```

- 解构 赋值 可以 迭代 任何 对象 不仅仅是 解构 对象 
- 也可以解构    "字符串"
- map 的key :value  的方式 更方便解构    for  of 解构 
- 交换变量值

```javascript
let guest = "Jane";
let admin = "Pete";

// 让我们来交换变量的值：使得 guest = Pete，admin = Jane
[guest, admin] = [admin, guest];
```

- 其余的 ... 展开运算符号

- 通常，如果数组比左边的列表长，那么“其余”的数组项会被省略。

  例如，这里只取了两项，其余的就被忽略了：

```javascript
let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar
// 其余数组项未被分配到任何地方
```

- 如果我们还想收集其余的数组项 —— 我们可以使用三个点 `"..."` 来再加一个参数以获取其余数组项：

```javascript
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest 是包含从第三项开始的其余数组项的数组
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2
```

- ... 表示 其余的 合兵一处  成为一个数组

## 10-对象解构

- 对象的 解构赋值

```javascript
let {var1, var2} = {var1:…, var2:…}

对象解构的时候 {需要属性一一对应 如果想把属性赋值给其他的属性 }
{属性:新的属性}

在属性的右边 写上新的属性 
```

- 我们还可以将冒号和等号结合起来：

```javascript
let options = {
  title: "Menu"
};

let {width: w = 100, height: h = 200, title} = options;

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200

可以是 解构的时候 如果没有 给他一个默认的值  
```

- 对象 的解构赋值 也有 ...合并剩余 模式 
  - 会把 剩余的对象 组合起来 完成新的对象的合并 
  - 其他的剩余 属性 全部归结为 剩下的数组

## 11-嵌套解构

- 解构的时候 因为 可能 会需要解构深层次 的 属性 
- 可以 {解构:{解构}}   一直向下 

## 12-智能函数

- 解构赋值  应用道 赋值函数 智能的 
- function({解构}={})    可以是默认空对象 

```javascript
let user = {
    name: "John",
    years: 30,
    isAdmin: true
};


let { name, years: age, isAdmin = false } = user
console.log(name, age, isAdmin);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


console.log(Object.entries(salaries));

for (const [name, salariy] of Object.entries(salaries)) {
    console.log(name, salariy);
}
```

## 13-日期和时间

- 日期 对象 Date()   
- new  Date()  
- new Date(0)   传递一个 0  表示 是 1970年的那一天 
- 从 1970 年的 1月 1 0000  的毫秒数 到现在的毫秒数  称为  时间戳 
- Date.now()  方法 获取 当前的时间
- 可以通过 时间戳  来创建一个时间对象
- 创建 new Date(年,月,日,时,分,秒,毫秒) 对象 是 
- 倒计时

```javascript
function daojishi(s = 3600) {
    let sss = 24 * s
    let ss = new Date().getHours() * 60 * 60 + new Date().getMinutes() * 60 + new Date().getSeconds()
    console.log(parseInt((sss - ss) / 3600) + "小时");
    console.log(parseInt((sss - ss) / 60 % 60) + "分钟");
    console.log(parseInt((sss - ss) % 60) + "秒");
}
daojishi()
```

## 14-Json 序列化 转换

- Stringify()   转换为 json字符
- parse()  转换为 json 对象 

```javascript
let data ={name:"你好"}

JSON.Stringify(data)======>{"name":"你好"}

JSON.parse({"name":"你好"})=====>{name:"你好"}
```


  [1]: https://www.luaiwcr.top/usr/uploads/2023/04/2101154839.jpg