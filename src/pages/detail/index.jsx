import React, { Component } from 'react'
import { View, Text, ScrollView, Swiper, SwiperItem,Image } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './index.scss'

export default class Index extends Component {
    constructor () {
        super();
        this.state = {
            current: 0,
        }
    }
    handleClick (value) {
        this.setState({
            current: value
        })
    }

    render () {
        const tabList = [{ title: '小户型' }, { title: '大户型' }, { title: '豪华' }]
        return (
            <View className='index'>
                <View className='head'>
                    <Swiper
                        className='test-h'
                        indicatorColor='#999'
                        indicatorActiveColor='#333'
                        vertical={false}
                        circular
                        indicatorDots
                        autoplay>
                        <SwiperItem>
                            <View className='demo-text d-1'>
                                <Image className='demo-img' style='height:100%' src='//qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/cyb/b2.png'/>
                            </View>
                        </SwiperItem>
                        <SwiperItem>
                            <View className='demo-text d-2'>
                                <Image className='demo-img' style='height:100%' src='//qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/cyb/b4.png'/>
                            </View>
                        </SwiperItem>
                        <SwiperItem>
                            <View className='demo-text d-3'>
                                <Image className='demo-img' style='height:100%' src='//qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/cyb/b3.png'/>
                            </View>
                        </SwiperItem>
                    </Swiper>
                </View>
                <View className="content">
                    <AtTabs className='at-tabs' current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                        <AtTabsPane current={this.state.current} index={0} >
                            <ScrollView
                                className='srollview'
                                style={{height: "650rpx"}}
                                scrollY={true}
                                scrollTop={0}
                            >
                                <View className='card'>
                                    <View className='card-item'>
                                        <View className='card-order'>
                                            <Image
                                                className='order-img'
                                                style='width: 300rpx;height: 100px;'
                                                src='//qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/cyb/f1.png'
                                            />
                                            <View className='card-order-text'>
                                                <Text>小户型日式风格</Text>
                                            </View>
                                        </View>
                                        <View className='card-order'>
                                            <Image
                                                className='order-img'
                                                style='width: 300rpx;height: 100px;'
                                                src='//qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/cyb/f1.png'
                                            />
                                            <View className='card-order-text'>
                                                <Text>小户型日式风格</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View className='card-item'>
                                        <View className='card-order'>
                                            <Image
                                                className='order-img'
                                                style='width: 300rpx;height: 100px;'
                                                src='//qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/cyb/f1.png'
                                            />
                                            <View className='card-order-text'>
                                                <Text>小户型日式风格</Text>
                                            </View>
                                        </View>
                                        <View className='card-order'>
                                            <Image
                                                className='order-img'
                                                style='width: 300rpx;height: 100px;'
                                                src='//qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/cyb/f1.png'
                                            />
                                            <View className='card-order-text'>
                                                <Text>小户型日式风格</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View className='card-item'>
                                        <View className='card-order'>
                                            <Image
                                                className='order-img'
                                                style='width: 300rpx;height: 100px;'
                                                src='//qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/cyb/f1.png'
                                            />
                                            <View className='card-order-text'>
                                                <Text>小户型日式风格</Text>
                                            </View>
                                        </View>
                                        <View className='card-order'>
                                            <Image
                                                className='order-img'
                                                style='width: 300rpx;height: 100px;'
                                                src='//qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/cyb/f1.png'
                                            />
                                            <View className='card-order-text'>
                                                <Text>小户型日式风格</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </AtTabsPane>
                        <AtTabsPane current={this.state.current} index={1}>
                            <ScrollView style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</ScrollView>
                        </AtTabsPane>
                        <AtTabsPane current={this.state.current} index={2}>
                            <ScrollView style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</ScrollView>
                        </AtTabsPane>
                    </AtTabs>
                </View>
            </View>
        )
    }
}
