import React, { Component } from 'react'
import axios from 'axios'

export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.scrollContainer = React.createRef();
    }

    state = {
        detail: {},
        reply: ''
    }

    async componentDidMount(){
        let id = this.props.match.params.id;
        let result = await axios.get(`/message/${id}`);
        console.log(result)
        this.setState({
            detail: result.data
        })
    }

    reply(e){
        console.log('e...', e);
        if (e.keyCode === 13 && this.state.reply){
            let detail = {...this.state.detail};
            detail.messgaes.push({ 
                role: 'send',
                conetent: e.target.value
            })
            this.setState({
                detail,
                reply: ''
            }, ()=>{
                this.scrollContainer.current.scrollTop = this.scrollContainer.current.scrollHeight
            })
        }
    }

    render() {
        let {detail, reply} = this.state;
        return (
            <div className="detail">
                <header>{detail.name}</header>
                <section ref={this.scrollContainer}>
                    <ul>{
                    detail.messgaes && detail.messgaes.map((item, index)=>{
                        return <li key={index} className={item.role}>
                            <span>{item.role[0]}</span>
                            <p>{item.conetent}</p>
                        </li>
                    })
                }</ul></section>
                <input 
                    value={reply} 
                    placeholder={"请输入..."}
                    onChange={e=>this.setState({reply: e.target.value})}
                    onKeyDown={e=>this.reply(e)}    
                />
            </div>
        )
    }
}
