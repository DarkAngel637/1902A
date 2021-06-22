import React, { Component } from 'react'
import List from './components/List'
import GoodsContext from './context/goodsContext'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.deleteGoods = this.deleteGoods.bind(this);
  }

  state = {
    goods: [{
      id: 1,
      name: '车厘子'
    }, {
      id: 2,
      name: '榴莲'
    }, {
      id: 3,
      name: '菠萝蜜'
    }, {
      id: 4,
      name: '山竹'
    }]
  }

  deleteGoods(id){
    let index = this.state.goods.findIndex(item=>item.id === id);
    let goods = [...this.state.goods];
    goods.splice(index, 1);
    this.setState({
      goods
    })
  }

  render() {
    return (
      <GoodsContext.Provider value={{
        goods: this.state.goods,
        deleteGoods: this.deleteGoods
      }}>
        <div>
        <List />
      </div>
      </GoodsContext.Provider>
    )
  }
}
