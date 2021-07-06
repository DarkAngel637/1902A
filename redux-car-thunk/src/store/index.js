import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import ThunkMiddleware from 'redux-thunk'

const initialState = {
    letterList: [], // 品牌首字母列表
    brandList: [],  // 品牌列表
    curLetter: '',  // 当前选中品牌首字母
    curBrandId: '', // 当前选中品牌
    showDialog: false   // 是否展示弹框
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case 'GET_BRAND_LIST': {
            let {letterList, brandList, curLetter} = action.payload;
            return {...state, letterList, brandList, curLetter}
        }
        case 'CHANGE_DIALOG': {
            return {...state, showDialog: action.payload}
        }
        case 'CHANGE_BRAND_ID': {
            return {...state, curBrandId: action.payload}
        }
        case 'CHANGE_LETTER': {
            return {...state, curLetter: action.payload}
        }
        default:
            return state;
    }
}

export default createStore(reducer, applyMiddleware(ThunkMiddleware, createLogger()))