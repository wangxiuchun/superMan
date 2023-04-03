// 引入 Swiper, SwiperItem 组件
import { View, Image } from '@tarojs/components'
import { useState } from 'react'
import { AtSegmentedControl, AtTabs, AtTabsPane } from 'taro-ui'

export const SegmentedControl = () => {
  const [current, setCurrent] = useState(0);
  const handleClick = (value: number) => {
    setCurrent(value)
  }
  const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]

  return (
    // <View className='segmentedControl'>
    //   <AtSegmentedControl
    //     // selectedColor='#ff8d1a'
    //     values={['标签页1', '标签页2', '标签页3']}
    //     onClick={(cur: number) => { handleClick(cur) }}
    //     current={0}
    //   />
    //   {
    //     current === 0
    //       ? <View className='tab-content'>标签1的内容</View>
    //       : null
    //   }
    //   {
    //     current === 1
    //       ? <View className='tab-content'>标签2的内容</View>
    //       : null
    //   }
    //   {
    //     current === 2
    //       ? <View className='tab-content'>标签3的内容</View>
    //       : null
    //   }
    // </View>
    <View>
      <AtTabs current={current} tabList={tabList} onClick={handleClick}>
        <AtTabsPane current={current} index={0} >
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
        </AtTabsPane>
      </AtTabs>
    </View>
  )
}