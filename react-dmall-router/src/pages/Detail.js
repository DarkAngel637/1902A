import React, { Component } from 'react'
import axios from 'axios'

export default class Detail extends Component {
    state = {
        info: {}
    }

    async componentDidMount(){
        let {id} = this.props.match.params;
        let result = await axios.get(`/goods/detail?id=${id}`)
        this.setState({info: result.data})
    }

    render() {
        let {info} = this.state;
        return (
            <div>
                <img src={info.image}/>
                <p>
                    <span>{info.name}</span>
                    <span>¥{info.price}</span>
                </p>
                <p>{info.tag}</p>
                <button>加入购物车</button>
            </div>
        )
    }
}
