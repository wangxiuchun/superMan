export default {
  pages: [
    "pages/index/index",
    "pages/neighbor/index",
    "pages/discovered/index",
    "pages/order/index",
    "pages/personal/index"
  ],
  tabBar: {
    list: [
      {
        iconPath: 'resource/home.png',
        selectedIconPath: 'resource/home_on.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: 'resource/neighbor.png',
        selectedIconPath: 'resource/neighbor_on.png',
        pagePath: 'pages/neighbor/index',
        text: '附近',
      },
      {
        iconPath: 'resource/discovered.png',
        selectedIconPath: 'resource/discovered_on.png',
        pagePath: 'pages/discovered/index',
        text: '发现',
      },
      {
        iconPath: 'resource/order.png',
        selectedIconPath: 'resource/order_on.png',
        pagePath: 'pages/order/index',
        text: '订单',
      },
      {
        iconPath: 'resource/personal.png',
        selectedIconPath: 'resource/personal_on.png',
        pagePath: 'pages/personal/index',
        text: '我的',
      },
    ],
    color: '#000',
    selectedColor: '#ff8d1a',
    backgroundColor: '#fff',
    borderStyle: 'white',
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
};
