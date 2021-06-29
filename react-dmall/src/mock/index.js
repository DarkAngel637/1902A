import Mock from 'mockjs'
import goods from './goods.json'
import swiper from './swiper.json'
import md5 from 'md5';

// MockJS 拦截请求
Mock.mock(/\/home\/swiper/, function(){
    return swiper
})
Mock.mock('/goods/list', (req, res)=>{
    return goods
})
Mock.mock(/\/goods\/detail/, (req, res)=>{
    let queryObj = {};
    // /goods/detail?id=420000202104122242&name=1908
    req.url.split('?')[1].split('&').forEach(item=>{
        let arr = item.split('=');
        queryObj[arr[0]] = arr[1];
    })
    let item = goods.filter(item=>item.id === queryObj.id);
    return item[0];
})  

Mock.mock(/\/user\/login/, (req, res)=>{
    console.log('req...', req, JSON.parse(req.body));
    try{
        let body = JSON.parse(req.body);
        if (body.username === '1902A' && body.password === '1902A'){
            return {msg: '登陆成功', token: md5(body.username+body.password)};
        }else{
            return {msg: '您的用户名或密码错误'}
        }
    }catch(e){
        return {msg: '您的用户名或密码错误'}
    }
})