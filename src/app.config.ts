export default {
  pages: [
    "pages/index/index",
    "pages/neighbor/index",
    "pages/discovered/index",
    "pages/order/index",
    "pages/personal/index",
    "pages/index/location/index",
  ],
  tabBar: {
    list: [
      {
        iconPath: 'resource/image/icon/home.png',
        selectedIconPath: 'resource/image/icon/home_on.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: 'resource/image/icon/neighbor.png',
        selectedIconPath: 'resource/image/icon/neighbor_on.png',
        pagePath: 'pages/neighbor/index',
        text: '附近',
      },
      {
        iconPath: 'resource/image/icon/discovered.png',
        selectedIconPath: 'resource/image/icon/discovered_on.png',
        pagePath: 'pages/discovered/index',
        text: '发现',
      },
      {
        iconPath: 'resource/image/icon/order.png',
        selectedIconPath: 'resource/image/icon/order_on.png',
        pagePath: 'pages/order/index',
        text: '订单',
      },
      {
        iconPath: 'resource/image/icon/personal.png',
        selectedIconPath: 'resource/image/icon/personal_on.png',
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
