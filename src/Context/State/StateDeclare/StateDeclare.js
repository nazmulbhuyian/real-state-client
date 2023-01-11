import { Fetching_Error, Fetching_Start, Fetching_Success } from "../ActionType/ActionType"

export const initialState = {
    loading: false,
    products: [],
    error: false
}

export const productReducer = (state, action) => {
    switch (action.type){
        case Fetching_Start:
            return {
                ...state,
                loading: true
            };
        case Fetching_Success:
            return {
                ...state,
                loading: false,
                products: action.payLoad
            };
        case Fetching_Error:
            return {
                ...state,
                loading: false,
                error: true
            };
            default:
            return state
    }
}