import React, { Component } from 'react'
import './Brand.css'

export default class Brand extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.curLetter && Object.keys(nextProps.brandList).length){
            let dom = document.querySelector(`#${nextProps.curLetter}`);
            dom && dom.scrollIntoView();
        }
    }

    render() {
        return (
            <div className="brand">{
                Object.keys(this.props.brandList).map(item=>{
                    return <section key={item}>
                        <p id={item}>{item}</p>
                        <ul>{
                            this.props.brandList[item].map(value=>{
                                return <li key={value.Spelling}>
                                    <img src={value.CoverPhoto} alt=""/>
                                    <span>{value.Name}</span>
                                </li>
                            })    
                        }</ul>
                    </section>
                })
            }</div>
        )
    }
}
