import React, { useRef, useState } from "react";
import { View } from "@tarojs/components";
import { AtIndexes, AtSearchBar } from "taro-ui";

const Location = () => {

  const [searchVal, setSearchVal] = useState('')
  const fnRef = useRef<Function>((key: any) => key);

  const list = [{
    title: 'A',
    key: 'A',
    items: [
      {
        'name': '阿坝'
        // 此处可加其他业务字段
      },
      {
        'name': '阿拉善'
      }]
  },
  {
    title: 'B',
    key: 'B',
    items: [
      {
        'name': '北京'
      },
      {
        'name': '保定'
      }]
  },
  {
    title: 'C',
    key: 'C',
    items: [
      {
        'name': 'C北京'
      },
      {
        'name': 'C保定'
      }]
  },
  {
    title: 'D',
    key: 'D',
    items: [
      {
        'name': 'D北京'
      },
      {
        'name': 'D保定'
      }]
  },
  {
    title: 'E',
    key: 'E',
    items: [
      {
        'name': 'E北京'
      },
      {
        'name': 'E保定'
      }]
  },
  {
    title: 'F',
    key: 'F',
    items: [
      {
        'name': 'F北京'
      },
      {
        'name': 'F保定'
      }]
  }
  ];

  const handleActionClick = () => {
    const refC = fnRef.current;
    refC(searchVal)
  }

  const fn = (fn1) => {
    fnRef.current = fn1
    return (searchVal: string) => {
      fn1(searchVal)
    }
  }

  return (
    <View style='height: 100vh'>
      <AtIndexes
        isShowToast={false}
        isVibrate={false}
        list={list}
        onScrollIntoView={fn}
      >
        <View className='custom-area'>
          <AtSearchBar
            value={searchVal}
            placeholder='跳转到指定Key'
            onActionClick={handleActionClick}
            onChange={(val: any) => { setSearchVal(val) }}
          />
        </View>
      </AtIndexes>
    </View >
  )
}
export default Location;