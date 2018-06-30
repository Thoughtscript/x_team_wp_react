'use strict'

/**
 *  Entry.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

/** Polyfills  */
//import 'core-js/es6/map';
//import 'core-js/es6/set';

/** Core React */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
/** Custom  */
import App from './Components/App'
import { createStore } from 'redux'
import { SafeStorage } from './Redux/SafeStorage'

ReactDOM.render(
  (<Provider store={createStore(SafeStorage)}>
    <App/>
  </Provider>),
  document.getElementById('react_app_root')
)