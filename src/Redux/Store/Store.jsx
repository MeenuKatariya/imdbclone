import { combineReducers, legacy_createStore as createStore } from 'redux';

import {loginReducer }from '../Auth/Reducer';

const rootReducer = combineReducers(
    {
        user: loginReducer,
    
    }
)

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())