import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
import PropTypes from 'prop-types';

const data = {
  "banner": [
      {
          "src": "http://dummyimage.com/375x300/d4f279"
      },
      {
          "src": "http://dummyimage.com/375x300/ec79f2"
      },
      {
          "src": "http://dummyimage.com/375x300/79f2c8"
      },
      {
          "src": "http://dummyimage.com/375x300/f2a579"
      },
      {
          "src": "http://dummyimage.com/375x300/8279f2"
      },
      {
          "src": "http://dummyimage.com/375x300/93f279"
      }
  ]
}

export default class App extends Component {
  constructor(props){
    super(props);
    // 1. 创建一个ref
    this.wrap = React.createRef();
    this.button = React.createRef();
  }

  componentDidMount(){
    // 3. 通过ref.current访问到真实dom
    this.swiper = new Swiper(this.wrap.current, {
      loop: true,
      autoplay: true
    });

    // 当ref绑定到组件时，通过findDONNode拿到内部的真实dom
    const btn = findDOMNode(this.button.current)
    btn.addEventListener('click', ()=>{
      console.log('autoplay...', this.swiper);
      this.swiper.slideNext();
    })
  }

  goBaidu(e){
    console.log('e...', e);
    // 阻止事件默认行为
    e.preventDefault();
    // 阻止事件冒泡
    e.stopPropagation();
  }

  clickWrap(){
    console.log('click wrap...');
  }

  render() {
    return (
      <div onClick={this.clickWrap}>
        {/* 2. 通过ref属性跟dom绑定 */}
        <div ref={this.wrap} className="swiper-container">
          <div className="swiper-wrapper">{
            data.banner.map(item=>{
              return <div className="swiper-slide" key={item.src}>
                <img src={item.src}  alt=""/>
              </div>
            })  
          }</div>
        </div>
        <a href="http://www.baidu.com" onClick={this.goBaidu}>跳转百度</a>
        <Switch ref={this.button} child={<span>孩子</span>}>
          <span>孩子</span>
        </Switch>
      </div> 
    )
  }
}

class Switch extends React.Component {
  // props的默认值
  static defaultProps = {
    title: '默认title'  
  }
  // props的类型校验
  static propTypes = {
    title: PropTypes.oneOf(['News', 'Photos']).isRequired,
    child: PropTypes.element.isRequired
  }

  render(){
    return <button>{this.props.title}</button>
  }
}
