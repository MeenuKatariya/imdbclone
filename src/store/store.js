import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as movieDetailsReducer } from "./moviedetails/reducer";

const rootReducer=combineReducers({
    movieDetails:movieDetailsReducer
})

export const store=createStore(rootReducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))