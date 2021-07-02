const initalState = {
    num: 100
};

export default function reducer(state=initalState, action){
    switch(action.type){
        case 'ADD_NUM': 
            return {...state, num: state.num+1};
        case 'SUB_NUM': 
            return {...state, num: state.num+1};
        default:
            return state;
    }
}
