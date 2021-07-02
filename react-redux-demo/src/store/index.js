import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'

/**
 * 迭代函数，state是上一次的状态，action是修改它对行为
 * 在reducer里面禁止使用JSON.stringify和JSON.parse
 * 所有的深拷贝通过es6实现
 * action{ type: '', payload: '' }
 *  */ 
// function reducer(state, action){
//     console.log('old state...', state);
//     switch(action.type){
//         case 'ADD': 
//             return {...state, num: state.num+1};
//         case 'SUB':
//             return {...state, num: state.num-1};
//         default:
//             return state;
//     }
// }
// 引入子reducer
import cart from './reducers/cart'
import home from './reducers/home'
import num from './reducers/num'

// 合并子reducer开启命名空间，防止属性之间相互影响
let reducer = combineReducers({
    cart,
    home,
    num
})


// newState = reducer(oldState, action);
// redux-logger中间件记录redux的数据改变，方便调试
const store = createStore(reducer, applyMiddleware(createLogger()));

export default store;