import React, { Component } from 'react'
import { getCurrentInstance } from '@tarojs/taro'
import { View, Text, Button,Image } from '@tarojs/components'
import { AtDivider } from 'taro-ui'
import './index.scss'

export default class Detail extends Component {
    constructor () {
        super();
        this.imgList=[
            'https:////qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/0.jpeg',
            'https:////qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/2.jpeg',
            'https:////qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/3.jpeg',
            'https:////qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/4.jpeg',
        ]

    }
    componentWillMount() {

    }
    previewImage = (src)=>{
        wx.previewImage({
            current: this.imgList[src], // 当前显示图片的http链接
            urls: this.imgList // 需要预览的图片http链接列表
        })
    };
    phone = () => {
        wx.makePhoneCall({

            phoneNumber: '18874731188',

        })
    }


    render () {

        return (
            <View className='home-com-desc'>
                <View className='desc'>
                    <View className='item'>
                        <Text>收费标准：</Text>
                        <Text className='item-h'>{`（ < 120㎡  ），150￥/户 `}</Text>
                        <Text className='item-h'>{`（ < 200㎡  ），200￥/户 `}</Text>
                        <Text className='item-h'>{`（ > 200㎡  ），300￥/户 `}</Text>
                    </View>
                </View>

                <View className='desc ps'>
                    <View className='item'>
                        <Text>Ps：需了解装修设计服务的业主，本公司提供免费验房服务并出具专业验房报告~</Text>

                    </View>
                </View>

                <View className='footer-fixed-area'>
                    <Button className='footer-button' onClick={this.phone}>立即预约</Button>
                </View>
                <AtDivider content='验房项目详情表' fontColor='#ed3f14' lineColor='#ed3f14' />
                <View className='desc-img'>
                    <Image mode='widthFix' src='//qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/0.jpeg' onClick={this.previewImage.bind(this,0)} ></Image>
                    <Image mode='widthFix' src='//qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/2.jpeg' onClick={this.previewImage.bind(this,1)} ></Image>
                    <Image mode='widthFix' src='//qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/3.jpeg' onClick={this.previewImage.bind(this,2)} ></Image>
                    <Image mode='widthFix' src='//qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/4.jpeg' onClick={this.previewImage.bind(this,3)} ></Image>
                </View>
            </View>


        )
    }
}
