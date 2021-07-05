import React from 'react';
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'
import Pullup from '@better-scroll/pull-up'

BScroll.use(PullDown)
BScroll.use(Pullup)

export default function withScroll(pullEvent){
    return function(WrapComponent){
        return class extends React.Component{
            state = {
                pageCount: 1,
                list: []
            }

            async componentDidMount(){
                // 实例化betterScroll
                this.bs = new BScroll('.bs-wrapper', {
                    pullUpLoad: true,
                    pullDownRefresh: true
                })
                // 初始化加载
                let list = await pullEvent(this.state.pageCount);
                this.setState({
                    list
                })

                // 监听上拉加载
                this.bs.on('pullingUp', this.pullingUpHandler.bind(this))
                // 监听下拉刷新
                this.bs.on('pullingDown', this.pullingDownHandler.bind(this))
            }

            // 上拉处理函数
            async pullingUpHandler(){
                let pageCount = this.state.pageCount+1;
                let list = await pullEvent(pageCount);
                this.setState({
                    pageCount,
                    list: [...this.state.list, ...list]
                })
                this.bs.refresh();
                this.bs.finishPullUp(); 
            }

            // 下拉处理函数
            async pullingDownHandler(){
                let pageCount = 1;
                let list = await pullEvent(pageCount);
                this.setState({
                    pageCount,
                    list
                })
                this.bs.refresh();
                this.bs.finishPullDown(); 
            }

            render(){
                let {list} = this.state;

                return <div className="bs-wrapper">
                    <WrapComponent list={list}></WrapComponent>
                </div>
            }
        }
    }
}