let plugins = [
    // 这个是 博客的覆盖面 插件
    [
        '@noxone/vuepress-plugin-cover', {
			main: [
				{
					content: ['我想，', '在这个世界上,', '虽然没有最美好的相遇，', '但却应该有为了相遇或重逢，', '所做的最美好的努力。'],
				},
				{
					content: ['一定要爱着点什么，', '恰似草木对光阴的钟情。'],
				},
				{
					content: ['人生如梦，', '我投入了的却是真情，', '世界先爱了我，', '我不能不爱它。'],
				},
				{
					content: ['爱自己，', '是终身浪漫的开始。'],
				},
				{
					content: ['我不想谋生，', '我想生活。'],
				},
				{
					content: ['要么重构，', '要么享受！'],
				},
			],
		},
    ],
    // url转换英文
    // ['vuepress-plugin-clean-urls', {
    //     normalSuffix: '/',
    //     indexSuffix: '/',
    //     notFoundPath: '/404.html',
    //     cleanURLs: {
    //         normalSuffix: '/',
    //         indexSuffix: '/'
    //     }
    // }],
    // // url转换英文
    // ['permalink-pinyin', {
    //     lowercase: true, // Converted into lowercase, default: true
    //     separator: '-' // Separator of the slug, default: '-'
    // }],
    //打赏 信息
    // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    //     title: '公告',
    //     body: [
    //         {
    //             type: 'title',
    //             content: '欢迎加我的VX 🎉🎉🎉',
    //             style: 'text-aligin: center;',
    //         },
    //         {
    //             type: 'text',
    //             content: 'VX:15662777207',
    //             style: 'text-align: center;'
    //         },
    //         {
    //             type: 'text',
    //             content: '喜欢的主题特效可以去个人信息',
    //             style: 'text-align: center;'
    //         },
    //         {
    //             type: 'text',
    //             content: '友链或疑问均可在留言板给我留言',
    //             style: 'text-align: center;'
    //         }
    //     ],
    //     // footer: [
    //     //   {
    //     //     type: 'button',
    //     //     text: '打赏',
    //     //     link: '/blog/donate'
    //     //   },
    //     // ]
    // }],
    // 看板娘
    ['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
        theme: ['koharu', 'whiteCat', 'haru1', 'haru2', 'haruto', 'blackCat', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: false,
        info: 'https://github.com/mengqiuleo',
        messages: {
            welcome: '欢迎来到我的家',
            home: '心里的花，我想要带你回家',
        },
        modelStyle: { left: '70px', bottom: '20px', opacity: '0.9' }
    }],
    // 樱花
    ["sakura", {
        num: 30,  // 默认数量
        show: true, //  是否显示
        zIndex: -1,   // 层级
        img: {
            replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
            httpUrl: '...'     // 绝对路径
        }
    }],
    //鼠标点击
    [
        'cursor-effects',
        {
            size: 2, // size of the particle, default: 2
            shape: 'star', // shape of the particle, default: 'star'
            zIndex: 999999999, // z-index property of the canvas, default: 999999999
        },
    ],
    //动态标题
    ['dynamic-title', {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
    }],
    //音乐插件
    [
        "@vuepress-reco/vuepress-plugin-bgm-player",
        {
            audios: [
                // 本地歌曲
                {
                    //名字
                    name: "其实都没有",
                    //作者
                    artist: "于冬然",
                    //地址
                    url: "https://blog.wcrlayue.top/onlinedata/song/qsbjr.mp3",
                    //封面图片
                    cover: "https://blog.wcrlayue.top/onlinedata/img/mofang.jpg",
                    loop: true
                },
                //网络歌曲
                // {
                //     //名字
                //     name: "LOSER",
                //     //作者
                //     artist: "米津玄師",
                //     //地址
                //     url: "http://music.163.com/song/media/outer/url?id=447925558.mp3",
                //     //封面图片
                //     cover:
                //         "https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200",
                // },
            ],
            // 是否默认缩小
            autoShrink: true,
            // 缩小时缩为哪种模式
            shrinkMode: "float",
            // 悬浮窗样式
            floatStyle: { bottom: "30px", "z-index": "999999" },
            autoplay: true
        },
    ],
    //悬挂猫
    ['go-top'],
    //丝带背景
    ["ribbon-animation", {
        size: 90,   // 默认数据
        opacity: 0.3,  //  透明度
        zIndex: -1,   //  层级
        opt: {
            // 色带HSL饱和度
            colorSaturation: "80%",
            // 色带HSL亮度量
            colorBrightness: "60%",
            // 带状颜色不透明度
            colorAlpha: 0.65,
            // 在HSL颜色空间中循环显示颜色的速度有多快
            colorCycleSpeed: 6,
            // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
            verticalPosition: "center",
            // 到达屏幕另一侧的速度有多快
            horizontalSpeed: 200,
            // 在任何给定时间，屏幕上会保留多少条带
            ribbonCount: 2,
            // 添加笔划以及色带填充颜色
            strokeSize: 0,
            // 通过页面滚动上的因子垂直移动色带
            parallaxAmount: -0.5,
            // 随着时间的推移，为每个功能区添加动画效果
            animateSections: true
        },
        ribbonShow: false, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true  // 滑动彩带
    }],
    //随机的名人民谚
    ["vuepress-plugin-boxx"],
    //加载动画
    ["@nines/vuepress-plugin-loading-page"],
    ['@vuepress-reco/loading-page'],
    //文章的目录
    ["vuepress-plugin-auto-sidebar"]
]

module.exports = plugins