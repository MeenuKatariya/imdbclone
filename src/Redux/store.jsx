
import { applyMiddleware, combineReducers, compose, createStore} from "redux";
import {reducer as watchlistReducer} from "./Watchlist/reducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    watchlist: watchlistReducer
})

export const store = createStore(rootReducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))