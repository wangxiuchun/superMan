// 首页头部
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { AtIcon, AtSearchBar } from 'taro-ui';
import '../index.scss';
import userIcon from '../../../resource/image/icon/home_user.png'
import { useContext } from "react";
import MyContext from "src/pages/components/context";
export const Header = () => {
  console.log('22222', MyContext);
  
  const state = useContext(MyContext)
  console.log("useContext=====", state)
  return (
    <View className="home_header">
      <View>
        <Image className="userIcon" src={userIcon} />
      </View>
      <View className="location" onClick={()=>{
        Taro.navigateTo({
          url: '/pages/index/location/index',
        })
      }}>
        广州
          <AtIcon value='chevron-down' size='16' color='#a6a6a6'></AtIcon>
      </View>
      <View className="search">
        <AtSearchBar
          actionName='搜索'
          value={''}
          onChange={() => { }}
          onActionClick={() => { }}
        />
      </View>
      <View className="more">
        <AtIcon value='chevron-down' size='16' color='#a6a6a6'></AtIcon>
      </View>
    </View>
  )
}