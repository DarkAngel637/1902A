import React, { Component } from 'react'
import axios from 'axios'

export default class City extends Component {
    state = {
        citys: []
    }

    async componentWillReceiveProps(props){
        let result = await axios(`http://baojia.chelun.com/v1-city-alllist.html?provinceid=${props.curProvinceId}`);
        console.log('city props...', arguments, result);
        this.setState({
            citys: result.data.data
        })
    }

    render() {
        const {citys} = this.state;
        return (
            <div>{
                citys.map(item=>{
                    return <span key={item.CityID}>{item.CityName}</span>
                })
            }</div>
        )
    }
}
