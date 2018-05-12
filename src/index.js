import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { Provider, applyMiddleware, compose } from 'react-redux';
import { createStore } from 'redux';
import reduxThunk from 'redux-think';
import reduxLogger from 'redux-logger'


const store = createStore(
    (state = {}) => state,
    compose(
        applyMiddleware(reduxThunk,reduxLogger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById('root'));

registerServiceWorker();
