// 引入 Swiper, SwiperItem 组件
import { View, Text, Image } from '@tarojs/components'
import { usePageScroll } from '@tarojs/taro'
import { useState } from 'react'
import { AtButton, AtDivider } from 'taro-ui'
import p1 from '../../../resource/image/swiper/p1.jpg'
export const ContentList = () => {
  const [position, setPosition] = useState(0)
  usePageScroll((res) => {
    console.log(1111111111, res.scrollTop)
    setPosition(res.scrollTop)
  })
  return (
    <View className="contentList">
      {/* 列表上方按钮 */}
      <View className={position > 200 ? 'top-btn fixed_top-btn' : 'top-btn'}>
        <View>
          <AtButton type='primary' size='small'>面包甜点</AtButton>
        </View>
        <View>
          <AtButton type='primary' size='small'>智能排序</AtButton>
        </View>
        <View>
          <AtButton type='primary' size='small'>&ensp;筛&emsp;选&ensp;</AtButton>
        </View>
      </View>
      {/* <AtDivider height={20} lineColor="#f8f7f5" /> */}
      {/* 列表 */}
      <View className={position > 200 ? 'fixed_list_wrapper list_wrapper' : 'list_wrapper'}>
        <View className="list">
          <View className="list-left">
            <View>
              <Image className="img" src={p1} />
            </View>
          </View>
          <View className="list-right">
            <View className="list-right-top">
              <Text>甜甜圈（高新文体店）甜甜圈（高新文体店））甜甜圈（高新文体店）</Text>
            </View>
            <View className="list-right-bottom">
              <View className="location">
                <View>白云区 | 甜点</View>
                <View>2.9KM</View>
              </View>
              <View className="description">
                周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点
                周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点
            </View>
            </View>
          </View>
        </View>

        <View className="list">
          <View className="list-left">
            <View>
              <Image className="img" src={p1} />
            </View>
          </View>
          <View className="list-right">
            <View className="list-right-top">
              <Text>甜甜圈（高新文体店）甜甜圈（高新文体店））甜甜圈（高新文体店）</Text>
            </View>
            <View className="list-right-bottom">
              <View className="location">
                <View>白云区 | 甜点</View>
                <View>2.9KM</View>
              </View>
              <View className="description">
                周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点
                周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点
            </View>
            </View>
          </View>
        </View>

        <View className="list">
          <View className="list-left">
            <View>
              <Image className="img" src={p1} />
            </View>
          </View>
          <View className="list-right">
            <View className="list-right-top">
              <Text>甜甜圈（高新文体店）甜甜圈（高新文体店））甜甜圈（高新文体店）</Text>
            </View>
            <View className="list-right-bottom">
              <View className="location">
                <View>白云区 | 甜点</View>
                <View>2.9KM</View>
              </View>
              <View className="description">
                周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点
                周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点
            </View>
            </View>
          </View>
        </View>

        <View className="list">
          <View className="list-left">
            <View>
              <Image className="img" src={p1} />
            </View>
          </View>
          <View className="list-right">
            <View className="list-right-top">
              <Text>甜甜圈（高新文体店）甜甜圈（高新文体店））甜甜圈（高新文体店）</Text>
            </View>
            <View className="list-right-bottom">
              <View className="location">
                <View>白云区 | 甜点</View>
                <View>2.9KM</View>
              </View>
              <View className="description">
                周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点
                周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点
            </View>
            </View>
          </View>
        </View>

        <View className="list">
          <View className="list-left">
            <View>
              <Image className="img" src={p1} />
            </View>
          </View>
          <View className="list-right">
            <View className="list-right-top">
              <Text>甜甜圈（高新文体店）甜甜圈（高新文体店））甜甜圈（高新文体店）</Text>
            </View>
            <View className="list-right-bottom">
              <View className="location">
                <View>白云区 | 甜点</View>
                <View>2.9KM</View>
              </View>
              <View className="description">
                周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点
                周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点
            </View>
            </View>
          </View>
        </View>

        <View className="list">
          <View className="list-left">
            <View>
              <Image className="img" src={p1} />
            </View>
          </View>
          <View className="list-right">
            <View className="list-right-top">
              <Text>甜甜圈（高新文体店）甜甜圈（高新文体店））甜甜圈（高新文体店）</Text>
            </View>
            <View className="list-right-bottom">
              <View className="location">
                <View>白云区 | 甜点</View>
                <View>2.9KM</View>
              </View>
              <View className="description">
                周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点
                周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点
            </View>
            </View>
          </View>
        </View>

        <View className="list">
          <View className="list-left">
            <View>
              <Image className="img" src={p1} />
            </View>
          </View>
          <View className="list-right">
            <View className="list-right-top">
              <Text>甜甜圈（高新文体店）甜甜圈（高新文体店））甜甜圈（高新文体店）</Text>
            </View>
            <View className="list-right-bottom">
              <View className="location">
                <View>白云区 | 甜点</View>
                <View>2.9KM</View>
              </View>
              <View className="description">
                周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点
                周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点
            </View>
            </View>
          </View>
        </View>

        <View className="list">
          <View className="list-left">
            <View>
              <Image className="img" src={p1} />
            </View>
          </View>
          <View className="list-right">
            <View className="list-right-top">
              <Text>甜甜圈（高新文体店）甜甜圈（高新文体店））甜甜圈（高新文体店）</Text>
            </View>
            <View className="list-right-bottom">
              <View className="location">
                <View>白云区 | 甜点</View>
                <View>2.9KM</View>
              </View>
              <View className="description">
                周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点
                周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点，周末超值甜点
            </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}