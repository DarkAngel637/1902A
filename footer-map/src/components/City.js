import React, { Component } from 'react'
import axios from 'axios'

export default class City extends Component {
    state = {
        citys: []
    }

    // 当props改变当时候
    async componentWillReceiveProps(props){
        if (this.props.curProvinceId === props.curProvinceId){
            return;
        }
        let result = await axios(`http://baojia.chelun.com/v1-city-alllist.html?provinceid=${props.curProvinceId}`);
        this.setState({
            citys: result.data.data
        })
    }

    async componentDidMount(){
        let result = await axios(`http://baojia.chelun.com/v1-city-alllist.html?provinceid=${this.props.curProvinceId}`);
        this.setState({
            citys: result.data.data
        })
    }

    // 判断组件是否需要更新
    shouldComponentUpdate(nextProps, nextState){
        // if (!this.state.citys.length || !nextState.citys.length){
        //     return true;
        // }
        // if (nextState.citys[0].ParentID === this.state.citys[0].ParentID){
        //     return false;
        // }
        return true;
    }

    render() {
        const {citys} = this.state;
        console.log('render...', this.props, this.props.selectedCity);
        return (
            <div className="city">{
                citys.map(item=>{
                    return <span 
                                className={this.props.selectedCity.indexOf(item.CityName)===-1?'':'active'}
                                onClick={()=>this.props.selectCity(item.CityName, item.ParentID)} 
                                key={item.CityID}
                            >{item.CityName}</span>
                })
            }</div>
        )
    }
}
