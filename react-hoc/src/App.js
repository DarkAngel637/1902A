import React, { Component } from 'react'
// 引入组件List
import List from './components/List'
import Swiper from './components/Swiper'

export default class App extends Component {
  render() {
    return (
      <div>
        <List />
        <Swiper />
      </div>
    )
  }
}
