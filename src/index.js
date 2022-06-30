

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import manageTool from './reducers/manageTool.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';





const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  



const store = createStore(manageTool, composeEnhancers(applyMiddleware(thunk))) 


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// require('dotenv').config()

// module.exports = {
//   env: {
//     REACT_APP_WEATHER_API_KEY = env.REACT_APP_WEATHER_API_KEY,
//   }
// }
//dotenv commentedout due to an error

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

