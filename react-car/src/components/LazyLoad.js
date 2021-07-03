import React, { Component } from 'react'
import {debounce, throttle} from '../utils/index'

export default class LazyLoad extends Component {
    constructor(props) {
        super(props);
        this.wrap = React.createRef();
        this.lazyLoad = debounce(this.lazyLoad.bind(this));
    }

    componentDidMount(){
        this.wrap.current.addEventListener('scroll', e=>{
           this.lazyLoad();
        })
        // 检讨后代dom的变化
        const ob = new MutationObserver(()=>{
            this.lazyLoad();
        })
        ob.observe(this.wrap.current, {
            subtree: true,
            childList: true
        })
    }

    lazyLoad(){
        let imgs = this.getImgsElement();
        imgs.forEach(item=>{
            if (!this.isLoad(item) && this.isIntoView(item)){
                item.src = item.dataset.src;
            }
        })
    }

    getImgsElement(){
        return [...this.wrap.current.querySelectorAll('img[data-src]')];
    }

    isLoad(el){
        return el.src === el.dataset.src;
    }

    isIntoView(el){
        let clients = el.getBoundingClientRect();
        return !((clients.top > window.innerHeight) || (clients.bottom < 0) || 
        (clients.right > window.innerWidth) || (clients.left > window.innerWidth));
    }

    render() {
        return (
            <div ref={this.wrap} style={{height: '100%', overflowY: 'scroll'}}>{
                this.props.children    
            }</div>
        )
    }
}
