import { applyMiddleware, combineReducers, createStore } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import thunk from 'redux-thunk'

import * as Studies from './Studies'
import * as Users from './Users'
import * as Searches from './Searches'
import * as SubTabs from './SubTabs'
import * as IO from './IO'

export default function configureStore(history, initialState) {
    const reducers = {
        studies: Studies.reducer,
        users: Users.reducer,
        searches: Searches.reducer,
        subTabs: SubTabs.reducer,
        io: IO.reducer
    }

    const middleware = [
        thunk,
        routerMiddleware(history)
    ]

    const enhancers = []

    const rootReducer = combineReducers({
        ...reducers,
        routing: routerReducer
    })

    const persistConfig = { key: 'root', storage }
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middleware), ...enhancers));
    const persistor = persistStore(store);

    return { store, persistor }
}
