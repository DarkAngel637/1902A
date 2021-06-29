import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Detail from './pages/Detail'
import Main from './pages/Main'
import Login from './pages/Login'
// 引入context
import axios from 'axios'
import CartContext from './context/cartContext'


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
        <Switch>
          <Route path="/detail/:id?" component={Detail} />
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
          <Redirect to="/main" />
        </Switch>
      </CartContext.Provider>
    )
  }
}
