import {START_LOADING, UPDATE_USER_DATA, UPDATE_ERROR} from './userConstants';

const initialState = {
    data: null,
    loading: false,
    error: null
}

export function userReducer(state=initialState, action){
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                loading: true
            }
        case UPDATE_USER_DATA:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case UPDATE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}