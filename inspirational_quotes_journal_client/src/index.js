import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
import { rootReducer } from './reducers/rootReducer'


//create store using createStore method, takes in two arguments 
const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
    )


//render my app to the DOM     
ReactDom.render(
    <Provider store={store}>
        <Router> 
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)



