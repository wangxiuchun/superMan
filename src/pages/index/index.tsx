import React, { useCallback } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { AtIcon, AtSearchBar } from 'taro-ui';
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import userIcon from '../../resource/home_user.png'

import './index.scss';
import Taro from "@tarojs/taro";

const Index = () => {

  return (
    <View className="wrapper">
      <View className="home_header">
        <View>
          <Image className="userIcon" src={userIcon} />
        </View>
        <View className="location">
          广州
          <AtIcon value='chevron-down' size='16' color='#a6a6a6'></AtIcon>
        </View>
        <View style={{width: '60%'}}>
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
    </View>
  );
};

export default Index;
