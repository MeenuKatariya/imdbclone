import { EDITWATCHLIST_SUCCESS, RECENTLY_VIEWED_DELETE,  RECENTLY_VIEWED_SUCCESS, WATCHLIST_ERROR, WATCHLIST_LOAD, WATCHLIST_SUCCESS } from "./actionTypes";

const intialState = {
    watchlist: [],
    recently_viewed: [],
    loading: false,
    error: false
}

export const reducer = (state = intialState, { type, payload }) => {

    switch (type) {
        case WATCHLIST_LOAD:
            return {
                ...state,
                loading: true
            }

        case WATCHLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                watchlist: payload
            }

        case WATCHLIST_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        
    
            case RECENTLY_VIEWED_SUCCESS:
                return {
                    ...state,
                    recently_viewed: payload
                }
    
             case RECENTLY_VIEWED_DELETE:
                    return {
                        ...state,
                    }

        case EDITWATCHLIST_SUCCESS:
            return {
                ...state,
                intialState
            }


        default:
           return {state}
    }

}