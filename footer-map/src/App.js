import React, { Component } from 'react'
import Province from './components/Province'
import City from './components/City'
import axios from 'axios'
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props);
    // 绑定this
    this.selectProvince = this.selectProvince.bind(this);
  }

  state = {
    provinces: [],
    curProvinceId: ''
  }

  async componentDidMount(){
    let result = await axios('http://baojia.chelun.com/v1-city-alllist.html');
    console.log('result...', result);
    if (result.data.code === 1){
      let provinces = result.data.data.map(item=>{
        return {...item, selectedCity: []}
      })
      this.setState({
        provinces,
        curProvinceId: provinces[0].CityID
      })
    }
  }

  // 选中省份
  selectProvince(curProvinceId){
    this.setState({
      curProvinceId
    })
  }

  render() {
    const {provinces, curProvinceId} = this.state
    return (
      <div>
        <Province 
          provinces={provinces}
          curProvinceId={curProvinceId}
          selectProvince={this.selectProvince}
        ></Province>
        <City
          curProvinceId={curProvinceId}
        ></City>
      </div>
    )
  }
}
