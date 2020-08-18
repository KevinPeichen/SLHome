import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { AtDrawer } from 'taro-ui'
import { View, Text, ScrollView, Swiper, SwiperItem,Image } from '@tarojs/components'
import cardList from '../../assets/constant.jsx';
import './index.scss';
const myType = ['全部','小户型（ < 70  ㎡）','中户型（ < 120㎡）','大户型（ > 120㎡）','别墅型（ > 200㎡）'];//,'商业空间',
const myTypeM = ['全部','小户型','中户型','大户型','别墅型'];
const myStyle = ['全部','北欧','简约','中式','日式','欧式','美式','地中海'];

function getList(arr,i,j){
    let list = [];
    let t = [];
    let num =0;
    arr.forEach((c,x)=>{
        if(i > -1 && x !== i) return;
        c.forEach((b,y)=>{
            if(j > -1 && j !== y) return;
            b.forEach((i,z)=>{
                num++;
                if(num > 2){
                    list.push(t);
                    t = [];
                    num=1;
                }
                i.x = x;
                i.y = y;
                i.z = z;
                t.push(i);
            });
        })
    });
    if(t.length>0){
        if(t.length == 1) t.push({title:''});
        list.push(t);
    }
    return list;
}

export default class Index extends Component {
    constructor () {
        super();
        this.isShowBanner = true;
        this.state = {
            show:'',
            current: 0,
            windowHeight:650,
            isShow:false,
            showRight:false,
            myTypeIndex:0,
            myStyleIndex:0,
            isShowBanner:true,
        }
    }
    componentWillMount() {
        Taro.showShareMenu({
            withShareTicket: true
        });
        let that = this;
        wx.getSystemInfo({
            success:function(res) {

                setTimeout(()=> {
                    let q = wx.createSelectorQuery();
                    q.select('#at-tabs').boundingClientRect();
                    q.select('#swiper').boundingClientRect().exec((rect) => {
                        let is_1_height = Number(rect[0].height) + Number(rect[1].height);// 节点的宽度
                        that.setState({
                            windowHeight: res.windowHeight - is_1_height,
                        });
                    })
                },200);
            },
        })

    }

    handleClick (value) {
        this.setState({
            current: value
        })
    }
    showDetail = (t)=>{
        Taro.navigateTo({
            url: `/pages/detail/index?x=${t.x}&y=${t.y}&z=${t.z}`
        })
    }
    onClose = ()=>{
        this.setState({
            isShow:false
        })
    }
    onShow = (type)=>{
        let showRight = true;
        if(type === 'type') showRight = false;
        this.setState({
            showRight:showRight,
            show:type,
            isShow:true
        })
    }
    getChoseList = (myTypeIndex, myStyleIndex)=>{
        if(myTypeIndex === 0 && myStyleIndex ===0){
            return cardList;
        }
        if(myTypeIndex === 0 && myStyleIndex >0){
            return cardList.map(c=>c[myStyleIndex]);
        }
        if(myTypeIndex >0 && myStyleIndex === 0){
            return cardList[myTypeIndex];
        }
        return cardList[myTypeIndex][myStyleIndex];
    }
    onItemClick = (rsp)=>{
        const {show} = this.state;
        if(show === 'type'){
            this.setState({
                myTypeIndex:rsp,
                isShow:false,
            });
                return;
        }
        this.setState({
            myStyleIndex:rsp,
            isShow:false,
        });

    }
    renderDrawer = () =>{
        const { isShow,showRight,show,myStyleIndex,myTypeIndex } = this.state;
        let items = myStyle;
        let key = myStyleIndex;
        if(show === 'type'){
            items = myType;
            key = myTypeIndex;
        }

        return (
            <AtDrawer
                show={isShow}
                mask
                right={showRight}
                onClose={this.onClose}
                // onItemClick={this.onItemClick}
            >
                {
                    items.map((c,i)=>{
                        let active = '';
                        if(i === key) active = 'drawer-active';
                        return (<View key={i} onClick={this.onItemClick.bind(this,i)} className={`at-list__item drawer-item ${active}`}>{c}</View>)
                    })
                }

            </AtDrawer>
        )
    };
    renderList = ()=>{
        const {myStyleIndex, myTypeIndex} = this.state;
        let list = getList(cardList, myTypeIndex-1,myStyleIndex-1);
        return (
            <View className='card'>
                {
                    list.length === 0 && (
                        <View className='card-item-empty'><Text className='empty-text'>当前还没有后您想要查看的内容~</Text></View>
                    )
                }
                {
                    list.map((c,i)=>{
                        return (
                            <View className='card-item' key={i}>
                                {
                                    c.map((t,j)=>{
                                        if(t.title === '') return( <View className='card-order-empty'></View> );

                                        let picUrl = t.pic.dir+t.index+'/2'+t.pic.type;
                                        return (
                                            <View key={i+''+j} className='card-order' onClick={this.showDetail.bind(this,t)}>
                                                <Image
                                                    className='order-img'
                                                    src={picUrl}
                                                    lazyLoad={true}
                                                />
                                                <View className='card-order-text'>
                                                    <Text>{t.title}</Text>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        )
                    })
                }
            </View>
        )
    }
    onScrollToUpper = (e,v)=>{
        if(this.isShowBanne) return;
        this.isShowBanner = true;
        this.setState({
            isShowBanner:true
        })
    }
    onScroll = (e,v) => {
        if(e.detail.scrollTop > 50 && this.isShowBanner){
            this.isShowBanner = false;
            let that = this;
            wx.getSystemInfo({
                success: function (res){
                    let q = wx.createSelectorQuery();
                    // q.select('#at-tabs').boundingClientRect();
                    q.select('#at-tabs').boundingClientRect((rect) => {
                        let is_1_height = Number(rect.height) ;// 节点的宽度
                        that.setState({
                            windowHeight: res.windowHeight - is_1_height,
                            isShowBanner:that.isShowBanner
                        })
                    }).exec()

                }
            });
        }
        if(this.isShowBanne) return;
    }
    onScrollToLower = (e,v)=>{
        console.log(e);
    }
    render () {
        const { windowHeight, myTypeIndex, myStyleIndex, isShowBanner } = this.state;
        return (
            <View className='index'>
                {this.renderDrawer()}
                <View className={isShowBanner ? 'head' : 'head head-no'}>
                    <Swiper
                        id='swiper'
                        className='test-h'
                        indicatorColor='#999'
                        indicatorActiveColor='#333'
                        vertical={false}
                        circular
                        indicatorDots
                        autoplay>
                        {/*<SwiperItem>*/}
                            {/*<View className='demo-text d-1'>*/}
                                {/*<Image mode='widthFix' className='demo-img' style='width:100%' src='//qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/cyb/b2.png'/>*/}
                            {/*</View>*/}
                        {/*</SwiperItem>*/}
                        <SwiperItem>
                            <View className='demo-text d-3'>
                                <Image mode='widthFix' className='demo-img' style='width:100%' src='//qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/cyb/f4.jpeg'/>
                            </View>
                        </SwiperItem>
                        <SwiperItem>
                            <View className='demo-text d-2'>
                                <Image mode='widthFix' className='demo-img' style='width:100%' src='//qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/a1.jpeg'/>
                            </View>
                        </SwiperItem>
                        <SwiperItem>
                            <View className='demo-text d-2'>
                                <Image mode='widthFix' className='demo-img' style='width:100%' src='//qniyong.oss-cn-hangzhou.aliyuncs.com/1688/web/img/a2.jpeg'/>
                            </View>
                        </SwiperItem>
                    </Swiper>
                </View>
                <View className="content">
                    <View id='at-tabs' className='at-tabs'>
                        <View className='at-tabs-item' onClick={this.onShow.bind(this,'type')}>
                            <Text className='at-tas-text'>{myTypeM[myTypeIndex] === '全部' ? '户型' : myTypeM[myTypeIndex]} <Text className='iconfont iconicon-GIS_xiala-'/></Text>
                        </View>
                        <View className='at-tabs-item' onClick={this.onShow.bind(this,'style')}>
                            <Text className='at-tas-text'>{myStyle[myStyleIndex] === '全部' ? '风格' : myStyle[myStyleIndex]} <Text className='iconfont iconicon-GIS_xiala-'/></Text>
                        </View>
                    </View>

                    <ScrollView
                        className='srollview'
                        style={`height: ${windowHeight}px`}
                        scrollY
                        // scrollWithAnimation
                        // enableBackToTop={true}
                        upperThreshold={100}
                        scrollTop={0}
                        onScrollToUpper={this.onScrollToUpper} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
                        onScroll={this.onScroll}
                    >
                        {
                            this.renderList()
                        }

                    </ScrollView>
                </View>
            </View>
        )
    }
}
