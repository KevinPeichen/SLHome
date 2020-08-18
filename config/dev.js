const path = require('path');
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {},
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
