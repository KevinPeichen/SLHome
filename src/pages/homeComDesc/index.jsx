import React, { Component } from 'react'
import { getCurrentInstance } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class Detail extends Component {
    constructor () {
        super();

    }
    componentWillMount() {

    }
    showdir = () => {

        // let plugin = requirePlugin('routePlan');
        const key = 'ZVDBZ-IBFR5-YPBI2-QX2S7-5I6MJ-VPBP5'; //使用在腾讯位置服务申请的key
        const referer = '小程序-叁零装修设计'; //调用插件的app的名称
        let endPoint = JSON.stringify({  //终点
            'name': '长沙市叁零设计工程有限公司',
            'latitude': 28.134062,
            'longitude': 113.034322
        });
        wx.navigateTo({
            url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
        });
    }


    render () {

        return (
            <View className='home-com-desc'>
                <View className='desc'>
                    <View className='item'>
                        <Text>叁零设计工程有限公司成立于2008年，专注于为中国精英阶层提供“有机整体住宅装饰”解决方案，形成独特的涵盖住宅装饰设计、半包施工、主材代理方案。</Text>
                    </View>
                    <View className='item'>
                        <Text>30装饰使命：</Text>
                        <Text className='item-h'>装饰空间  筑就温度</Text>
                    </View>
                    <View className='item'>
                        <Text>核心价值观：</Text>
                        <Text className='item-h'>不诚不行  不信不立</Text>
                    </View>
                    <View className='item'>
                        <Text>30装饰愿景：</Text>
                        <Text className='item-h'>培养具有创造专业品质家装和敢说实话的匠人</Text>
                    </View>

                </View>
                <View className='desc'>
                    <View className='item' onClick={this.showdir}>
                        <Text>公司地址：</Text>
                        <Text className='item-h'>银河系太阳系地球村中华人民共和国湖南省长沙市雨花区喜盈门范城C座8楼（地下停车场9号电梯上8楼）</Text>
                    </View>
                </View>
            </View>
        )
    }
}
