
import { applyMiddleware, combineReducers, compose, createStore} from "redux";
import {reducer as watchlistReducer} from "./Watchlist/reducer";
import {LoginReducer as authReducer} from "./Auth/Reducer";
import {reducer as movieDetailsReducer} from "./MovieDetails/reducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    watchlist: watchlistReducer,
    auth: authReducer,
    movieDetails: movieDetailsReducer
})

export const store = createStore(rootReducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))