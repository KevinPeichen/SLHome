export default {
  pages: [
      'pages/index/index',
      'pages/home/index',
      'pages/detail/index',
      'pages/homeVerify/index',
      'pages/homeComDesc/index'

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
    "plugins": {
        "routePlan": {
            "version": "1.0.6",
            "provider": "wx50b5593e81dd937a"
        }
    },
    "permission": {
        "scope.userLocation": {
            "desc": "你的位置信息将用于小程序定位"
        }
    },
  "tabBar": {
    // "custom": true,
    "color": "#ADADAD",
    "selectedColor": "#333",
    "backgroundColor": "#ffffff",
    // "borderStyle": 'white',
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "assets/imgs/menuicon/home_uncheck.png",
        "selectedIconPath": "assets/imgs/menuicon/home_check.png",
      },
        {
            "pagePath": "pages/home/index",
            "text": "我的",
            "iconPath": "assets/imgs/menuicon/my_uncheck.png",
            "selectedIconPath": "assets/imgs/menuicon/my_check.png",
      },
    ],
  },
}
