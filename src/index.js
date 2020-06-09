import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App';
import {Provider} from 'react-redux';
import{createStore} from 'redux';
import reduce from './reducers/reduce'
import index from './index.css'

const store = createStore(reduce);

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>, 
    document.getElementById('root')
)