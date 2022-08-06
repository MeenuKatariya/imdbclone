
import {Auth_DATA,Auth_ERROR,Auth_LOADING, SIGN_OUT } from "./ActionType"

const initState = {
    user: [],
    isLoading: false,
    isError: false
}

   export const LoginReducer = (state = initState, { type, payload }) => {
    switch (type) {
       case Auth_LOADING:
            return {
                ...state,
                user: [],
                isLoading: true,
                isError: false
            }
        case Auth_ERROR:
            return {
                ...state,
                user: [],
                isLoading: false,
                isError: true
            }
        case Auth_DATA:
            return {
                ...state,
                user: payload,
                isLoading: false,
                isError: true
            }

            case SIGN_OUT:
                return {
                    user:[]
    
                }
        default:
            return state;
        }
    }