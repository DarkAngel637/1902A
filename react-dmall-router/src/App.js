import React, { Component } from 'react'
// 引入context
import axios from 'axios'
import CartContext from './context/cartContext'
// 引入配置路由和路由组件
import RouterView from './router/RouterView'
import routeConfig from './router/router.config'

export default class App extends Component {
  constructor(props){
    super(props)
    this.changeNum = this.changeNum.bind(this);
  }

  // 把list提升app组件里
  state = {
    list: []
  }

  async componentDidMount() {
    let result = await axios('/goods/list');
    console.log('result...', result);
    this.setState({
      list: result.data
    })
  }

  changeNum(id, type){
    let index = this.state.list.findIndex(item=>item.id === id);
    let list = [...this.state.list];
    if (type === '+'){
      list[index].num++;
    }else{
      list[index].num && list[index].num--;
    }
    this.setState({
      list
    })
  }


  render() {
    return (
      // 通过context的provider注入list属性
      <CartContext.Provider value={{ 
        list: this.state.list,
        changeNum: this.changeNum 
      }}>
        <RouterView routes={routeConfig.routes}></RouterView>
      </CartContext.Provider>
    )
  }
}
