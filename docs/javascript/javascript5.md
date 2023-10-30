---
title: 现代javascript-5
date: 2020-05-29
---
<Boxx/>

注:本笔记,读了现代javaScipt ---里面引用文档的东西(有重复)

原文章地址:[https://zh.javascript.info/object#shu-xing-cun-zai-xing-ce-shi-in-cao-zuo-fu?map][1]

# Document 文档对象(Dom部分,window,Bom)

- 整个 浏览器 就提供 一个 最大 根  就是 windows  浏览器 对象
  - 一种身份 是 他是 javascript 的全局代码 对象
  - 二 代表他是 浏览器 窗口 整个 对象 还提供了  控制浏览器的 对象 方法
- 只要 在 整个 浏览器 的 script 里面 写的代码 都是全局 代码 

```javascript
function  nihao(){
    
}

那么 上面这个 方法 nihao  就是 windows 对象的 方法
可以 直接 windows.nihao()

或者  

var a = 100
亦可以  windows.a 也是可以输出的 var 的是 全局 变量  
但是注意 : let  const  这个 含有 模块话的 声明 就不再是全局变量了
```

- windows.innerHeight   或者宽度

## 1- Dom 文档对象

- dom 是  文档对象模型    用于 修稿 所有的文档属性 

## 2-Bom 浏览器对象

- bom 是 浏览器的 导航栏部分 location 部分 允许我们修改 导航栏的地址

## 3-Document

- 一般 document  事 文档的主干 标签  根据 文档 对象 模型  每个 标签 都是一个对象 嵌套 标签 是闭合标签的子标签  标签 也标识一个对象 
- 所有 这些 对象 都是 由java script  对象来 控制的
- 整个  dom树  的 相关 内容 都可以 称为 节点  
- document  下面 由 body   html   等  还有一些 内容文字标签  一般 标签 称为  元素节点  内容称为 文本节点 
- 基本 所有的内容 都会 放在  body 里面  如果 一些 标签 放到 body 的 外边 都会 被 body 最后接受 放在 最下面 如果 有空格  就会 把空格 当作 文本节点 
- 一般 浏览器  都会 自动修正   html部分  比如  如果 不加 body  不加 html  都会 被 html自动修正 补全  html  只要 有标签 错误  都会基本自动修正 
- 一般 我们 用到的 一共 四个节点 (入口节点 ,  标签节点 , 文本节点,注释节点)
- **在 控制台上  我们可以 快速 使用  $0 来获取 元素 对象  (但是 需要点击 选中之后 才可以 )**

## 4-子节点

```javascript
childnodes(子节点)  ,firstchild(第一个子节点) ,  lastchild(最后一个)
```

## 5-检查 是否有子节点

```javascript
console.log(document.hasChildNodes())
有 返回 true  没有 返回 false
```

## 6- Dom集合

- Dom集合  是 可以迭代的 但是不能 使用  数组的方法 因为 dom 集合 不是 一个数组  是一个伪类数组
- 如果 想要使用 数组的方法 我们可以 使用 Array.from 创造 一个真的数组集合

```javascript
Array.from(伪类数组).数组方法 可以
```

- 一般 我们的dom 集合 都是只读的  不能 通过 数组 [] 来修改 集合  
- dom 集合 元素 也是 实时的 几乎所有的dom 都是实时的 实时 更新 dom节点

## 7- 兄弟节点

- next sibling    与  previousSibling  上一个 与 下一个节点 
- 记住 :  文本 也算 节点  (换行是有节点的)

## 8-父亲节点

```javascript
parentnode是 节点的所有 父亲 节点  也可以说是祖宗节点
```

## 9-关系的标签节点

这些链接和我们在上面提到过的类似，只是在词中间加了 `Element`：

- `children` —— 仅那些作为元素节点的子代的节点。
- `firstElementChild`，`lastElementChild` —— 第一个和最后一个子元素。
- `previousElementSibling`，`nextElementSibling` —— 兄弟元素。
- `parentElement` —— 父元素。

## 10-获取元素的方法

- document.getelement ....  方式 跟 queryselecter  方式
- id 可以 直接 使用  比如 id.style 但是不推荐 
- 所有 的 queryselecter 方式 都支持 css 的所有选择器  包括伪类 
- 区别是  query---All 方法是 所有匹配的元素 
- query--- 是只要 第一个 有点像  数组[0] 的意思
- 通过 方法 找的 元素 是 集合 实时的  但注意 不是 数组  不能 使用 数组的方法
- elem.matches(css)` 用于检查 `elem` 与给定的 CSS 选择器是否匹配。(返回 true 或者 false)
- `elem.closest(css)` 用于查找与给定 CSS 选择器相匹配的最近的祖先。`elem` 本身也会被检查。(找到祖先元素 并返回元素)

## 11-nodetype 属性

- 元素提供了 一个 nodetype 作为检查 元素的 类型
- 1 是 元素节点   3  是 文本节点   9 是 对象节点

# Dom 文档内容属性

## 1-修改元素的内部值

- innerhtml  
  - 删除原来的 内容
  - 重新赋值为 新的内容
- outerHtml
  - 是 包含 elem 本身 替换
- innnerText
  - 只设置文本

## 2-读取 文本节点

- 文本节点  读取 ,因为我们可以 获取  文本节点  所以 我们 可以 
- 文本 节点 读取 data 数据   节点.data 就可以了
- 我们 可以 使用 text Content 方法 获取 所有的 节点内部 除去标签的所有文本
- hidden 属性 我们可以 试用版dom 对象的 hidden=true 属性 快速的实现 现实隐藏

## 3-特性和属性

- `element.hasAttribute(name)` —— 检查特性是否存在。
- `element.getAttribute(name)` —— 获取这个特性值。
- `element.setAttribute(name, value)` —— 设置这个特性值。
- `element.removeAttribute(name)` —— 移除这个特性。

- Dom 是 多类型的 比如  style  读取类型是  string  但是 style 是一个 对象 
- 有些时候我们需要用到 自定义的属性 然后 js 给我们 保留了 data - 什么 的 属性  供我们使用我们可以在dataset 中找到对应的

```javascript
console.log(document.querySelector('div').dataset)
DOMStringMap {lu: '222', ha: '333'}
ha: "333"
lu: "222"
[[Prototype]]: DOMStringMap// 控制台打印
```

## 4- 修改创建的文档方法

```javascript
let div = document.createElement('div')// 创建一个 div 对象

elem.apped(elem) //这个 插入 是像后面 追加 元素 向元素中插入元素

node.append(...nodes or strings)//在 `node` **末尾** 插入节点或字符串

node.prepend(...nodes or strings)//在 `node` **开头** 插入节点或字符串

node.before(...nodes or strings)//在 `node` **前面** 插入节点或字符串

node.after(...nodes or strings)//在 `node` **后面** 插入节点或字符串

node.replaceWith(...nodes or strings)// 将 `node` 替换为给定的节点或字符串
```

- document.body.insertAdjacentHTML()
  - "beforebegin"` —— 将 `html` 插入到 `elem` 之前，
  - `"afterbegin"` —— 将 `html` 插入到 `elem` 开头，
  - `"beforeend"` —— 将 `html` 插入到 `elem` 末尾，
  - `"afterend"` —— 将 `html` 插入到 `elem` 之后。
- remove 删除节点删除的是 自身 不是其他人 
- after 是交换位置

```javascript
<body>
    <div id="first">11111</div>
    <div id="two">2222</div>
</body>
<script>
    two.after(first)
//  让 div 1 与 div 2 交换位置 
```

- cloneNode()  克隆

```javascript
elem.cloneNode()   // 里面是 true 跟 false  true是深克隆 false 是浅克隆 
```

- DocumentFragment  节点的包装器

```javascript
<ul id="ul"></ul>

<script>
function getListContent() {
  let fragment = new DocumentFragment();// 创建 包装对象

  for(let i=1; i<=3; i++) {// 循环生成 添加的标签
    let li = document.createElement('li');//创建 li
    li.append(i);//给li 标签 添加内容
    fragment.append(li);// 追加到 包装对象中
  }

  return fragment;
}

ul.append(getListContent()); // (*)//  把 标签 包装对象直接 追加进去
</script>
```

就的node 插入 方法

- `parent.appendChild(node)`
- `parent.insertBefore(node, nextSibling)`
- `parent.removeChild(node)`
- `parent.replaceChild(newElem, node)`

这些方法都返回 `node`。

## 5-样式跟 类

- 一般  元素的样式类  都是 style  跟  css  类名样式 
- 一般 样式  有 类名  跟 style 内嵌 样式
- 一般 样式 是 className = "赋值"    再就是 我们 还可以 使用 classList

```javascript
- 有 add()  追加 样式
- remove()  删除样式
- toggle()  交换 样式
- contains()  检查 是否包含 样式
// classList 的 方法
```

- **重置样式 为空**
- 如果 一个 属性 要重置 为 空 我们不能直接 点属性 
- 需要 属性 = ""  空 来重置 默认值
- 还可以 特殊方法  style.removePropytype属性
- 再次 注意  style  不能 分号 重写 好多样式  但是 我们可以 把 css  文本重写   

```javascript
style.cssText=`多个样式 重置`
```

- 样式 注意 要有单位  单位 是 px 的记住 要不不生效

- getcomputedStyle(elem,[pseudo])  方法 

```javascript
www.classList.add("wwwww")
www.classList.remove("wwwww")
www.style.cssText=`color:red;font-size:19px`// css样式 文本
console.log(getComputedStyle(www).color);//  获取 css样式
```

## 6-元素的大小跟滚动

- offsetParent  offsetleft  offsetTop
  - offsetleft
  - offsetTop
  - 意思   相当于  父亲盒子的 左边 与 顶部 距离 
- 元素的宽度  跟 元素的 高度 
  - offset width
  - offset height 
  - 意思 是  元素的 宽度 跟 高度 但是 这个宽度 跟高度是 包括 内外边距等 相关的 和模型 属性 
- clientTop / Left
  - 在元素 内部 我们 一般 会有边框 border
  - 这个 边框 是 内部 跟 外部的边框  也就是  和模型的 最外边 到 接触 内容的 最外面 
- client width / height
  - 元素的内容 可视化 的 宽度 跟 高度 是内容的(前提 没有padding 情况下  )
  - 在 有padding 的时候 需要 把 padding 算上
- scrollwidth  /height
  - 元素的滚动区域 大小 滚动是 包含滚动的
  - 就是可以滚动的区域 高度 宽度 算上  滚动的位置的宽度  或者 高度的
- scroll Top  与 scollLeft
  - 元素 顶部 滚动了 多少 距离  
  - 元素的 左边 滚动了 多少距离 

## 7-windows 的大小跟滚动

- scrollBy   scrollTo  
  - scrollby 是 通过 每次滚动 多多少 
  - scrollTo
- scrollintoView()
  - 这个 intoview ()    里面 有 false  或者 true
  - 当 里面是 false  就会 这个现在在 底部 
  - true 是这个显示在 顶部

```javascript
document.querySelector("#btn").onclick=function () {
    console.log(2222)
    this.scrollIntoView(false)
}
```

## 8-坐标

- 后续坐标 后面更新

# 浏览器事件

## 1- 事件类型

- 鼠标事件

  - `click` —— 当鼠标点击一个元素时（触摸屏设备会在点击时生成）。
  - `contextmenu` —— 当鼠标右键点击一个元素时。
  - `mouseover` / `mouseout` —— 当鼠标指针移入/离开一个元素时。
  - `mousedown` / `mouseup` —— 当在元素上按下/释放鼠标按钮时。
  - `mousemove` —— 当鼠标移动时。

- 键盘事件

  - `keydown` 和 `keyup`还有 `keypress`敲击 —— 当按下和松开一个按键时。

- 表单（form）元素事件

  - `submit` —— 当访问者提交了一个 `<form>` 时。
  - `focus` —— 当访问者聚焦于一个元素时，例如聚焦于一个 `<input>`。

- Document 事件

  - `DOMContentLoaded` —— 当 HTML 的加载和处理均完成，DOM 被完全构建完成时。

  ```javascript
  document.addEventListener('DOMContentLoaded',function(){
      console.log('3 seconds passed');
  });
  //一般的事件 都可以 通过 原生的 add事件 方法 事件名字  回调函数触发
  ```

## 2- 事件添加方式

- 我们还可以使用 dom 的属性添加 dom 事件
- 获取 页面的dom 属性 然后 .他的事件属性
- 对于 一般的 html 标签 我们可以 使用 on(事件)  来给 标签 添加 事件

## 3-访问 元素的 this

- this 指的就是 事件的当前 对象  (限于function 内部)
- 箭头函数 没有this 指向

## 4-事件的多个绑定addEventListener

```javascript
<input id="elem" type="button" value="点击"/>

<script>
function fun1() {
	alert('哈哈哈哈!');
};

function fun2() {
	alert('哈哈哈哈 哈哈哈!');
}

elem.onclick = () => alert("Hello");
elem.addEventListener("click", fun1); 
elem.addEventListener("click", fun2); 
```

## 5- 事件对象 event

- 在 几乎所有的 事件中 都有一个 事件对象 event 
- 当事件发生时，浏览器会创建一个 **event 对象**，将详细信息放入其中，并将其作为参数传递给处理程序。

```javascript
<button id=btn>
btn.on事件=function(event){
    event....就是事件对象 浏览器默认传递的
}
```

- 相对的事件的类型 
- 事件的相关属性

## 6-事件处理程序 handel

```javascript
<button id="elem">点击</button>

<script>
  let obj = {
    handleEvent(event) {//handleEvent 默认的回调函数
      alert(event.type + " at " + event.currentTarget);
    }
  };// 这个是 配置对象的固定写法

  elem.addEventListener('click', obj);
</script>
```

- addEventListener  第二个参数可以是 一个对象  对象里面 默认有 回调 处理函数
- 可以 传 函数 也可以 传配置对象 

## 7-冒泡 与事件捕获

- 再事件 中  你给 外盒子 添加 了 事件 跟 内盒子也添加 了 事件
- 当点击的视  子盒子的 事件 但是 父盒子 上面的事件  也会触发
- 当一个 事件 被触发 一个 元素上  他会 再 当前的元素 上运行处理程序然后 再 父亲元素上的程序 一直 传递 一次 向祖先元素 传递数据  这个 过程 效果 叫 (冒泡事件)
- 几乎 所有的事件 都会冒泡 (列入 **focus** 不会 冒泡)

- this  与  event target
  - this 是说当前 元素 其中有一个正在运行的处理函数
  - event.target  是 目标元素 引发 目的的元素 
- 停止冒泡
  - event.stopPropagation()
  - event.defalutPrevent()
- 捕获阶段
  - 怎末说呢,我得理解就是 捕获阶段一般我们看不到 实际 一个事件流 是 先捕获 后冒泡 这两个缺一不可才能组成事件流 捕获 是 寻找触发事件的源  而冒泡是 实际会越来越大传播出去

## 8- 事件委托

- js 的事件委托 一般选择 使用 addeventListener 方式

- 可以 使用父亲的 点击事件 管理 自己的孩子的所有的事件 
  - 实际就是 孩子事件 触发事件源 
  - 由父亲去完成事件的效果

