# @anyfork/vuepress-plugin-loading-page

> vuepress plugin loading page for vuepress v1.x

## install

```
yarn add @anyfork/vuepress-plugin-loading-page
or
npm install @anyfork/vuepress-plugin-loading-page
```

## usage

1、Refer to vuepress 1 X Official Website configuration plug-in

```
plugins: [
    ['@anyfork/vuepress-plugin-loading-page']
]
```

3、options

```
export interface loadingOption {
  /*
   * 加载模式，内置组件(RotateLoading,BoxLoading,CircleLoading,DefaultLoading,LineLoading,PointLoading)
   */
  mode: string
  /*
   * 动画颜色
   */
  color: string

  /*
   * 是否随机,默认是
   */
  random: boolean
}

```
