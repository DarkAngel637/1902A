const initalState = {
    banner: 0,
    location: {}
};

export default function reducer(state=initalState, action){
    switch(action.type){
        case 'GET_BANNER': 
            return {...state, num: state.num+1};
        default:
            return state;
    }
}
