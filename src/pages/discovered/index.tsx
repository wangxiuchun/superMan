import React, { useCallback } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import logo from "./hook.png";

import './index.scss';

const Discovered = () => {

  return (
    <View className="wrapper">
      <View>Discovered!!!!</View>
    </View>
  );
};

export default Discovered;
