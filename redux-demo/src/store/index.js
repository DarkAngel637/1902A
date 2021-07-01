import {createStore} from 'redux'

/**
 * 迭代函数，state是上一次的状态，action是修改它对行为
 * 在reducer里面禁止使用JSON.stringify和JSON.parse
 * 所有的深拷贝通过es6实现
 * action{ type: '', payload: '' }
 *  */ 
function reducer(state, action){
    console.log('old state...', state);
    switch(action.type){
        case 'ADD': 
            return {...state, num: state.num+1};
        case 'SUB':
            return {...state, num: state.num-1};
        default:
            return state;
    }
}

// newState = reducer(oldState, action);
const store = createStore(reducer, {num: 100});

export default store;