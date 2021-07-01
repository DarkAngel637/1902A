import React, { Component } from 'react'
import axios from 'axios'

export default class All extends Component {
    async componentDidMount(){
        let id = this.props.match.params.id;
        let result = await axios.get(` http://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`);
        console.log(result)
    }

    render() {
        return (
            <div>
                全部
            </div>
        )
    }
}
