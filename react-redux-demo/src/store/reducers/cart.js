const initalState = {
    totalNum: 0,
    totalPrice: 0,
    selected: []
};

export default function reducer(state=initalState, action){
    switch(action.type){
        case 'ADD_CART': 
            return {...state, num: state.num+1};
        case 'SUB_CART':
            return {...state, num: state.num-1};
        default:
            return state;
    }
}
