import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

import App from '../src/main/app'
import reducers from './main/reducers'

//MIDDLEWARES
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers, devtools)

ReactDOM.render(
    <Provider store={store}>
        <App/> 
    </Provider>
, document.getElementById('app'))