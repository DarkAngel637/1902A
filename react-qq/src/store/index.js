import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'

const initialState = {
    friendList: []
}

function reducer(state = initialState, action){
    switch(action.type){
        case "GET_FRIEND_LIST":
            return {...state, friendList: action.payload};
        case "CHANGE_READ": {
            let friendList = [...state.friendList];
            let index = state.friendList.findIndex(item=>item.id === action.payload)
            friendList[index].isRead = !friendList[index].isRead;
            return {...state, friendList};
        }
        case "CHANGE_TOP": {
            let friendList = [...state.friendList];
            let index = state.friendList.findIndex(item=>item.id === action.payload)
            friendList[index].isTop = !friendList[index].isTop;
            return {...state, friendList};
        }
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(createLogger()))

export default store;