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
    this.selectCity = this.selectCity.bind(this);
    this.saveProvince = this.saveProvince.bind(this);
  }

  state = {
    provinces: [],
    curProvinceId: ''
  }

  async componentDidMount(){
    let result = await axios('http://baojia.chelun.com/v1-city-alllist.html');
    if (result.data.code === 1){
      let provinces = result.data.data.map(item=>{
        return {...item, selectedCity: []}
      })
      let preProvince = window.localStorage.getItem('provinces')
      if (preProvince){
        preProvince = JSON.parse(preProvince);
        provinces = preProvince;
      }
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

  // 选中城市
  selectCity(cityName, provinceId){
    let provinces = [...this.state.provinces];
    // 查找省份
    let index = provinces.findIndex(item=>item.CityID === provinceId);
    // 查找是否已经在选中列表中
    let cityIndex = provinces[index].selectedCity.findIndex(item=>item === cityName);
    if (cityIndex === -1){
      provinces[index].selectedCity.push(cityName);
    }else{
      provinces[index].selectedCity.splice(cityIndex, 1);
    }
    this.setState({
      provinces
    })
  }

  // 组件销毁的时候
  saveProvince(){
    window.localStorage.setItem('provinces', JSON.stringify(this.state.provinces));
  }

  render() {
    const {provinces, curProvinceId} = this.state
    if (!provinces.length){
      return null;
    }
    let index = provinces.findIndex(item=>item.CityID === curProvinceId);
    return (
      <div className="wrap">
        <Province 
          provinces={provinces}
          curProvinceId={curProvinceId}
          selectProvince={this.selectProvince}
        ></Province>
        <City
          selectedCity={provinces[index].selectedCity}
          curProvinceId={curProvinceId}
          selectCity={this.selectCity}
        ></City>
        <button onClick={this.saveProvince}>保存</button>
      </div>
    )
  }
}
