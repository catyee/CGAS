const path = require('path')
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/common.scss')
      ]
    })
}
const WebpackAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
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
    // config.plugin('report').use(WebpackAnalyzer)
  }
}
