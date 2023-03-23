### 原型地址
  - https://www.xiaopiu.com/square?page=2&libPop=project&libId=5c36f3d418269b0f6c3b8c7d 
  - 更多移动端原型：https://www.xiaopiu.com

### 技术栈
  - taro + taro-ui 3 + taro-hooks + ts

### 项目启动
  - yarn install or npm install
  - npm run dev:weapp


### 踩过的坑
1. 首页左上角的头像不能显示
 - 原因：可能是图片太大了
 - 解决：需要通过ES6 的 import 语法来引用此类文件，拿到文件引用后直接在 JSX 中进行使用
    ```jsx
      import userIcon from '../../resource/home_user.png';  //引入
      <Image className="userIcon" src={userIcon} />  // 使用
    ```
 - 相关知识点：
  - Taro 默认会对 1kb 大小以下的资源进行转换（base64），如果需要修改配置，可以在 config/index.js 中进行修改，配置位于 weapp.module.postcss。 
  - 在小程序中<image></image>是可以使用本地图片的，但是在taro中确不可以直接使用
  - 在小程序css中是不能直接使用本地图片的，只能使用网络图片或在base64的反正进行资源引用