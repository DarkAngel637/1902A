import React, { Component } from 'react'
import './Brand.css'
import LazyLoad from './LazyLoad';

export default class Brand extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.curLetter && Object.keys(nextProps.brandList).length){
            let dom = document.querySelector(`#${nextProps.curLetter}`);
            dom && dom.scrollIntoView();
        }
    }

    render() {
        return (
            <LazyLoad>
                 <div className="brand">{
                    Object.keys(this.props.brandList).map(item=>{
                        return <section key={item}>
                            <p id={item}>{item}</p>
                            <ul>{
                                this.props.brandList[item].map(value=>{
                                    return <li key={value.Spelling} onClick={()=>this.props.changeCurBrand(value.MasterID)}>
                                        <img data-src={value.CoverPhoto} alt=""/>
                                        <span>{value.Name}</span>
                                    </li>
                                })    
                            }</ul>
                        </section>
                    })
                }</div>
            </LazyLoad>
        )
    }
}
