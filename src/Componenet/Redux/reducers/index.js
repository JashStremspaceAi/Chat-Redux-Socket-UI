import { combineReducers } from 'redux';
// import { setState, SET_STATE } from '../actions/index'
let initialState={
    messages: [],
    users: [],
}
const messages = (state = initialState, action) => {
    switch (action.type) {
        // case SET_STATE:
        //     return [...state, action.payload];
        case 'ADD_MESSAGE':
            console.log("state",state,"action",action.payload);
            return {...state,messages: action.payload};
        case 'ADD_USER':
            console.log("state",state,"action",action.payload);
            return {...state, users:action.payload};
        case 'USER_CHAT':
            return [...state, action.payload];
        default:
            return state;
    }
};

export default combineReducers({
    messages,
    initialState
});
