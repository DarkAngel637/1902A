import React, { Component } from 'react'
import axios from 'axios'
import { Carousel } from 'antd-mobile';
// 引入侵入式高阶组件
import withLoading from '../hoc/withLoading';

class Swiper extends Component {
    state = {
        imgs: [],
        isLoading: false
    }

    componentDidMount() {
        this.getBanner();
    }

    async getBanner(){
        if (this.state.isLoading){
            return false;
        }
        this.setState({isLoading:true})
        let result = await axios.get('http://157.122.54.189:9060/home/swiper');
        this.setState({isLoading:false})
        if (result.data.status === 200) {
            this.setState({
                imgs: result.data.body
            })
        }
    }

    render() {
        return (
            <div>
                <Carousel className="my-carousel"
                    autoplay
                    infinite
                    speed={5000}
                    autoplayInterval={3000}
                >
                    {this.state.imgs.map(item=>{
                        return <img key={item.id} src={`http://157.122.54.189:9060${item.imgSrc}`} alt=""/>
                    })}
                </Carousel>
            </div>
        )
    }
}


export default withLoading(Swiper)