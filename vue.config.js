const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "당신의 Mentors !!"; // 원하는 제목으로 수정
      return args;
    });
  },
});
