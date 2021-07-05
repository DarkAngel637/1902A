import React, { Component } from 'react'
import WithScroll from './hoc/withScroll'

class App extends Component {
  render() {
    return <div>{
      this.props.list.map(item => {
        return <li key={item}>{item}</li>
      })
    }</div>
  }
}

function mockGetData(pageCount){
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(item=>{
        return (pageCount-1)*20+item
      })
      resolve(list);
    }, 100);
  })
}

// pageCount当前分页页码数
async function pullEvent(pageCount) {
  let result = await mockGetData(pageCount);
  return result;
}

export default WithScroll(pullEvent)(App);