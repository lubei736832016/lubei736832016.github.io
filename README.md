---
home: true
heroText: WLCR - BLOG
tagline: 感谢你来到我的博客，我希望你在这里找到有价值的内容
heroImageStyle: {
  maxWidth: '600px',
  width: '100%',
  display: block,
  margin: '9rem auto 2rem',
  # background: '#fff',
  borderRadius: '1rem',
}

bgImage: /mofang.jpg
bgImageStyle: {
  height: '1000px',
  width: '100%',
}

isShowTitleInHome: false
actionText: Guide
actionLink: /views/other/guide
features:
- title: Yesterday
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题
- title: Today
  details: 希望帮助更多的人花更多的时间在内容创作上，而不是博客搭建上
- title: Tomorrow
  details: 希望更多的爱好者能够参与进来，帮助这个主题更好的成长
---
<!-- 样式 style -->
<style>
  /* css 实现 点击向下 效果 */
/* .anchor-down {
  display: block;
  margin: 12rem auto 0;
  bottom: 45px;
  width: 20px;
  height: 20px;
  font-size: 34px;
  text-align: center;
  animation: bounce-in 5s 3s infinite;
  position: absolute;
  left: 50%;
  bottom: 30%;
  margin-left: -10px;
  cursor: pointer;
}
@-webkit-keyframes bounce-in{
  0%{transform:translateY(0)}
  20%{transform:translateY(0)}
  50%{transform:translateY(-20px)}
  80%{transform:translateY(0)}
  to{transform:translateY(0)}
}
.anchor-down::before {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
  position: absolute;
  bottom: 10px;
}
.anchor-down::after {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
} */
/* css 实现 点击向下 效果 */


/* css 边框渐变 效果 */

/* .abstract-item {
  background: none;
  border: 0;
  box-sizing: border-box;
  margin: 1em;
  padding: 1em 1em;
  box-shadow: inset 0 0 0 2px #f45e61;
  color: #f45e61;
  font-size: 15px;
  font-weight: 700;
  position: relative;
  vertical-align: middle;
  text-align: center;
  line-height: 20px;
}
.abstract-item::before, .abstract-item::after {
  box-sizing: inherit;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
}

.abstract-item {
  transition: color 0.25s;
}
.abstract-item::before, .abstract-item::after {
  border: 2px solid transparent;
  width: 0;
  height: 0;
} */
/* 基础的配置 */

/*渐变 */

/* .draw::before {
  top: 0;
  left: 0;
}

.draw::after {
  bottom: 0;
  right: 0;
}

.draw:hover {
  color: #60daaa;
}

.draw:hover::before,
.draw:hover::after {
  width: 100%;
  height: 100%;
}

.draw:hover::before {
  border-top-color: #60daaa;
  border-right-color: #60daaa;
  transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
}

.draw:hover::after {
  border-bottom-color: #60daaa;
  border-left-color: #60daaa;
  transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
} */

/* 双向渐变 */
/* .meet:hover {
  color: #fbca67;
}
.meet::after {
  top: 0;
  left: 0;
}
.meet:hover::before {
  border-top-color: #fbca67;
  border-right-color: #fbca67;
}
.meet:hover::after {
  border-bottom-color: #fbca67;
  border-left-color: #fbca67;
  transition: height 0.25s ease-out, width 0.25s ease-out 0.25s;
} */
/* 中心渐变 */

/* .center:hover {
  color: #6477b9;
}
.center::before, .center::after {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  -webkit-transform-origin: center;
          transform-origin: center;
}
.center::before {
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-image: linear-gradient(to, #45FFCA, #FEFFAC,#FFB6D9,#D67BFF);
  -webkit-transform: scale3d(0, 1, 1);
          transform: scale3d(0, 1, 1);
}
.center::after {
  border-left: 2px solid;
  border-right: 2px solid;
  border-image: linear-gradient(to, #45FFCA, #FEFFAC,#FFB6D9,#D67BFF);
  -webkit-transform: scale3d(1, 0, 1);
          transform: scale3d(1, 0, 1);
}
.center:hover::before, .center:hover::after {
  -webkit-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
  transition: transform 0.5s, -webkit-transform 0.5s;
} */
</style>

<script>
export default {
  mounted () {
    // document.getElementsByClassName("hero")[0].style.backgroundImage=`url(/hero.png)`
    // // 首页的点击滚动到博客的部分
    // const ifJanchor = document.getElementById("JanchorDown"); 
    // ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
    // let a = document.createElement('a');
    // a.id = 'JanchorDown';
    // a.className = 'anchor-down';
    // document.getElementsByClassName('hero')[0].append(a);
    // let targetA = document.getElementById("JanchorDown");
    // targetA.addEventListener('click', e => { // 添加点击事件
    //   this.scrollFn();
    // })

    // // 实现完成 css 动态渐变效果
    // // 获取类名为 .abstract-item 的所有元素
    // var abstractItems = document.querySelectorAll('.abstract-item');
    // // 随机的颜色渐变
    // var classlist = ['draw','draw','center']
    // // 遍历每个元素并添加 .mett 类名
    // abstractItems.forEach(function(item) {
    //   // 0-2的随机数
    //   let randomNumber = Math.floor(Math.random() * 3);
    //   if(randomNumber==1){
    //     item.classList.add(classlist[randomNumber]);
    //     item.classList.add('meet');
    //   }else{
    //     item.classList.add(classlist[randomNumber]);
    //   }
    // })
  },

  methods: {
    // 首页的点击滚动到博客的部分
    // scrollFn() {
    //   const windowH = document.getElementsByClassName('hero')[0].clientHeight; // 获取窗口高度
    //   document.documentElement.scrollTop = windowH; // 滚动条滚动到指定位置
    // }
  }
}
</script>