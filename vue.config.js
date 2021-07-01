const merge = require('webpack-merge')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
  lintOnSave: true,
  publicPath: './',
  // outputDir: '',
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: false, // 生产环境的 source map
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, { limit: 5000 }))
  }
}
