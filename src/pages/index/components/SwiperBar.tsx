// 引入 Swiper, SwiperItem 组件
import { Swiper, SwiperItem, View, Image } from '@tarojs/components'
import p1 from '../../../resource/image/swiper/p1.jpg'
import p2 from '../../../resource/image/swiper/p2.jpg'
import p3 from '../../../resource/image/swiper/p3.png'
import p4 from '../../../resource/image/swiper/p4.png'
import p5 from '../../../resource/image/swiper/p5.jpg'
import p6 from '../../../resource/image/swiper/p6.png'

export const SwiperBar = () => {
  const picList = [p1, p2, p3, p4, p5, p6];
  return (
    <View className="swiperBar">
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#ff8d1a'
        vertical={false}
        circular
        indicatorDots
        autoplay
      >
        {
          picList.map((item: any, index: number) => {
            return (
              <SwiperItem key={index}>
                <View>
                  <Image className="swiperItem" src={item} />
                </View>
              </SwiperItem>
            )
          })
        }
      </Swiper>
    </View>
  )
}