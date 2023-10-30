const { path } = require("@vuepress/shared-utils");

module.exports = (options, context) => ({
  name: "@anyfork/vuepress-plugin-loading-page",
  enhanceAppFiles: [path.resolve(__dirname, "./bin/enhanceAppFile.js")],
  define() {
    return {
      //加载模式，内置组件(RotateLoading,BoxLoading,CircleLoading,DefaultLoading,LineLoading,PointLoading)
      MODE: options.mode || "RotateLoading",
      COLOR: options.color || "#3eaf7c",
      RANDOM: options.random == undefined ? true : options.random,
    };
  },
});
