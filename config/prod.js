const path = require('path');
module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  },
    alias: {
        // 'tradePublic': path.resolve(__dirname,'../..','src_mobile/public/tradePublic'),
        // 'tradePolyfills': path.resolve(__dirname,'../..','src_mobile/public/tradePolyfills'),
        // 'mapp_common': path.resolve(__dirname,'../..','src_mobile/public/mapp_common'),
        // 'components': path.resolve(__dirname,'../..','src_mobile/components'),
        'pages': path.resolve(__dirname,'../..','pages'),
        'assets': path.resolve(__dirname,'../..','assets'),
        // '@/constants': path.resolve(__dirname,'../..','src_mobile/constants'),
    },
}
