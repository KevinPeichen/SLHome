import React, { Component } from 'react'
import { getCurrentInstance } from '@tarojs/taro'
import cardList from '../../assets/constant.jsx';
import { View, Text, Image, Button } from '@tarojs/components'
import './index.scss'

export default class Detail extends Component {
    constructor () {
        super();

    }
    componentWillMount() {
        this.imgList = [];

    }

    phone = () => {
        wx.makePhoneCall({

            phoneNumber: '18874731188',

        })
    }
    showdir = () => {

        // const location = JSON.stringify({
        //     latitude: 39.89631551,
        //     longitude: 116.323459711
        // });
        // const category = '生活服务,娱乐休闲';
        //
        // wx.navigateTo({
        //     url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category=' + category
        // });


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
            <View className='home'>
                <View className='list-item head'>
                    <View className='logo'>
                        <Image mode='widthFix' className='logo-img' src='//qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/cyb/logo.jpeg'/>
                    </View>
                    <View className='logo-detail'>
                        <View>
                            <Text>叁零装饰</Text>
                        </View>
                        <View>
                            <Text className='slogo-desc'>身为设计师，我们肩负两种责任：对客户，以及对社会的责任</Text>
                        </View>
                    </View>
                    <View className='logo-svg'>
                        <Text className='iconfont iconiconfontjiantou3'/>
                    </View>
                </View>
                <View className='list-item'>
                    <View className='icon'>
                        <Text className='iconfont icongongsi'/>
                    </View>
                    <View className='detail'>
                        <Text>公司简介</Text>
                    </View>
                    <View className='logo-svg'>
                        <Text className='iconfont iconiconfontjiantou3'/>
                    </View>
                </View>

                <View className='list-item'>
                    <View className='icon'>
                        <Text className='iconfont iconnongchanpin'/>
                    </View>
                    <View className='detail'>
                        <Text>助农产品</Text>
                    </View>
                    <View className='logo-svg'>
                        <Text className='iconfont iconiconfontjiantou3'/>
                    </View>
                </View>

                <View className='list-item'>
                    <View className='icon'>
                        <Text className='iconfont iconjingxuan'/>
                    </View>
                    <View className='detail'>
                        <Text>3 0 精选</Text>
                    </View>
                    <View className='logo-svg'>
                        <Text className='iconfont iconiconfontjiantou3'/>
                    </View>
                </View>

                <View className='list-item' onClick={this.showdir}>
                    <View className='icon'>
                        <Text className='iconfont icondizhi'/>
                    </View>
                    <View className='detail'>
                        <Text>地址导览</Text>
                    </View>
                    <View className='logo-svg'>
                        <Text className='iconfont iconiconfontjiantou3'/>
                    </View>
                </View>

                <View className='list-item'>
                    <View className='icon'>
                        <Text className='iconfont iconjiaofangyanshou'/>
                    </View>
                    <View className='detail'>
                        <Text>验房预约</Text>
                    </View>
                    <View className='logo-svg'>
                        <Text className='iconfont iconiconfontjiantou3'/>
                    </View>
                </View>
            </View>
        )
    }
}
