import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './store/configureStore'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker'

import App from './App'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')
const history = createBrowserHistory({ basename: baseUrl })

const initialState = window.initialReduxState
const persistedStore = configureStore(history, initialState)

const rootElement = document.getElementById('root')

ReactDOM.render(
    <Provider store={persistedStore.store}>
        <PersistGate loading={null} persistor={persistedStore.persistor}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    rootElement
)

registerServiceWorker()
