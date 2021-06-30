import React, { Component } from 'react'
import axios from 'axios'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Home extends Component {
    state = {
        carousel: []
    }

    async componentDidMount(){
        let result = await axios('/home/swiper');
        this.setState({ 
            carousel: result.data
        })
    }

    render() {
        return (
            <div>
                 <Carousel autoPlay={true} infiniteLoop={true} interval={1000} autoFocus={true}>{
                     this.state.carousel.map(item=>{
                         return <img src={item.src} key={item.src} alt=""/>
                     })
                     }</Carousel>
            </div>
        )
    }
}
