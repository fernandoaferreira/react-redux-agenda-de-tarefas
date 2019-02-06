import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

//integração react redux
import { Provider } from 'react-redux'

import App from './main/app'
import reducers from './main/reducers'

//O ESTADO DOS DADOS CONTROLADO PELO REDUX

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

//Promisse - faz o codigo aguardar as requests nas actions assincrono
//multi - executa diversas ações na action

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'))
