const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/index.scss')
      ]
    })
}
const WebpackAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/gzh/' : '/',
  // assetsDir: 'static',
  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  lintOnSave: process.env.NODE_ENV === 'development',
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // devServer: {

  //   host: '0.0.0.0',
  //   port: 80,
  //   proxy: {
  //     // detail: https://cli.vuejs.org/config/#devserver-proxy
  //     '/api/v1': {
  //     //  target: `http://localhost:8080`,
  //       target: `http://39.99.152.221`,
  //       changeOrigin: true
  //     },
  //     '/saddms': {
  //       //  target: `http://localhost:8080`,
  //       target: `http://101.201.211.8:8080`,
  //       changeOrigin: true
  //     },
  //     '/system': {
  //       //  target: `http://localhost:8080`,
  //       target: `http://101.201.211.8:8080`,
  //       changeOrigin: true
  //     },
  //     '/': {
  //       //  target: `http://localhost:8080`,
  //       target: `http://101.201.211.8:8080`,
  //       changeOrigin: true
  //     }
  //   },
  //   disableHostCheck: true
  // },
  // configureWebpack: {
  //   entry: {

  //   }
  // },
  chainWebpack: config => {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    config.entry = {
      'common-vendor': ['echarts']
    }
    config.output.filename('[name].[hash].js').chunkFilename('[name].js')

    config.optimization.splitChunks({
      name: 'common-chunk',
      minChunks: 2
    })
    config.when(process.env.NODE_ENV !== 'development',
      config => {
        config
          .plugin('ScriptExtHtmlWebpackPlugin')
          .after('html')
          .use('script-ext-html-webpack-plugin', [{
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
          }])
          .end()
      }
    )
    // config.plugin('report').use(WebpackAnalyzer)
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 192, // 换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            // propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: [], //黑名单
            exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // selectorBlackList: [], //要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
            minPixelValue: 3 // 设置要替换的最小像素值(3px会被转rem)。 默认 0
          })
        ]
      }
    }
  }

  // css: {
  //   // css预设器配置项
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require('postcss-px2rem')({
  //           remUnit: 100
  //         })
  //       ]
  //     }
  //   }
  // }
}
