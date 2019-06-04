import 'bootstrap/dist/css/bootstrap.css'
import './css/index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'

import configureStore from './store/configureStore'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker'

import App from './App'

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')
const history = createBrowserHistory({ basename: baseUrl })

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState
const store = configureStore(history, initialState)

const rootElement = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    rootElement
)

registerServiceWorker();
