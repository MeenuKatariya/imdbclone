import { EDITWATCHLIST_SUCCESS, RECENTLY_VIEWED_DELETE, RECENTLY_VIEWED_SUCCESS, SORT_YEAR_ASC, SORT_YEAR_DESC, WATCHLIST_ERROR, WATCHLIST_LOAD, WATCHLIST_SUCCESS, SORT_IMDBRATING_ASC, SORT_IMDBRATING_DESC, SORT_RUNTIME_DESC, SORT_RUNTIME_ASC, SORT_DEFAULT } from "./actionTypes";

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
                recently_viewed: []
            }

        case EDITWATCHLIST_SUCCESS:
            return {
                ...state,
                intialState
            }

        case SORT_YEAR_ASC:
            let data1 = state.watchlist.sort((a, b) => b.year - a.year)
            //  state.state.watchlist = data
            console.log(state.state)
            return {
                ...state,
                // ...state,
                watchlist: data1

            }
        case SORT_YEAR_DESC:
            let data2 = state.watchlist.sort((a, b) => a.year - b.year)
            //  state.state.watchlist = data
            console.log(state.state)
            return {
                ...state,
                // ...state,
                watchlist: data2

            }
        case SORT_IMDBRATING_ASC:
            let data3 = state.watchlist.sort((a, b) => a.imDbRating - b.imDbRating)
            //  state.state.watchlist = data
            console.log(state.state)
            return {
                ...state,
                // ...state,
                watchlist: data3

            }
        case SORT_IMDBRATING_DESC:
            let data4 = state.watchlist.sort((a, b) => b.imDbRating - a.imDbRating)
            //  state.state.watchlist = data
            console.log(state.state)
            return {
                ...state,
                // ...state,
                watchlist: data4

            }
            case SORT_RUNTIME_ASC:
                let data5 = state.watchlist.sort((a, b) => a.runtimeMins - b.runtimeMins)
                //  state.state.watchlist = data
                console.log(state.state)
                return {
                    ...state,
                    // ...state,
                    watchlist: data5
    
                }
            case SORT_RUNTIME_DESC:
                let data6 = state.watchlist.sort((a, b) => b.runtimeMins - a.runtimeMins)
                //  state.state.watchlist = data
                console.log(state.state)
                return {
                    ...state,
                    // ...state,
                    watchlist: data6
    
                }
                case SORT_DEFAULT:
                console.log(state.state)
                return {
                    ...state,
                    watchlist: state.watchlist
    
                }
            
        default:
            return { state }
    }

}