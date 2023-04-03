import React, { useState } from "react";
import { View } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";

import './index.scss';
import { Header } from "./components/Header";
import { SwiperBar } from "./components/SwiperBar";
import { ContentList } from "./components/ContentList";
import MyContext from "../components/context";

const Index = () => {
  const [locationName, setLocationName] = useState('广州')

  return (
    <View className="wrapper">
      <MyContext.Provider value={{locationName, setLocationName}}>
      <Header />
      <SwiperBar />
      <ContentList />
      </MyContext.Provider>
    </View>
  );
};

export default Index;
