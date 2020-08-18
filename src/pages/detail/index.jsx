import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { getCurrentInstance } from '@tarojs/taro'
import cardList from '../../assets/constant.jsx';
import { View, Text, Image, Button } from '@tarojs/components'
import './index.scss'

export default class Detail extends Component {
    constructor () {
        super();
        this.imgList = [];
        this.state = {
            current: 0,
            json:{}
        }
    }
    componentWillMount() {
        Taro.showShareMenu({
            withShareTicket: true
        });
        this.imgList = [];
        let p = getCurrentInstance().router.params;
        this.setState({
            json:{...cardList[p.x][p.y][p.z]}
        })
    }
    previewImage = (src)=>{
        console.log(src);
        wx.previewImage({
            current: src, // 当前显示图片的http链接
            urls: this.imgList // 需要预览的图片http链接列表
        })
    };
    phone = () => {
        wx.makePhoneCall({

            phoneNumber: '18874731188',

        })
    }


    render () {
        const {json} = this.state;
        let mPicUrl = json.pic.dir+json.index+'/1'+json.pic.type;
        this.imgList.push('https://'+mPicUrl);
        let jsxs=[];
        for(let i=2; i<=json.pic.total; i++){
            let picUrl = json.pic.dir+json.index+'/'+i+json.pic.type;
            this.imgList.push('https://'+picUrl);
            jsxs.push((<Image lazyLoad={true} mode='widthFix' onClick={this.previewImage.bind(this,'https://'+picUrl)} src={picUrl} />));
        }
        let j = json.content.map((c,i)=>{
            let jsx = (<Text>{c}</Text>);
            return (
                <>
                    {jsx}
                    {jsxs[i]}
                </>
            )
        });
        if(j.length < jsxs.length){
            for(let i = j.length; jsxs.length > j.length; i++){
                j.push(jsxs[i]);
            }
        }

        return (
            <View className='detail'>
                <View className='detail-content'>
                    <Text className='title'>
                        {json.title}
                    </Text>
                    <View className='tabC'>
                        <Text className='tab'>{json.tab}</Text>
                    </View>
                    <Image mode='widthFix' onClick={this.previewImage.bind(this,'https://'+mPicUrl)} src={mPicUrl}/>
                    {
                        j.map(c=>{
                            return c;
                        })
                    }
                </View>

                <View className='footer-fixed-area'>
                    <Button className='footer-button' onClick={this.phone}>联系咨询</Button>
                </View>

            </View>
        )
    }
}
