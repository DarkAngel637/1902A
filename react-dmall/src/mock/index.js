import Mock from 'mockjs'
import goods from './goods.json'
import swiper from './swiper.json'

// MockJS 拦截请求
Mock.mock(/\/home\/swiper/, function(){
    return swiper
})
Mock.mock('/goods/list', (req, res)=>{
    return JSON.parse(goods)
})
Mock.mock('/goods/:id', 'GET', (req, res)=>{

})