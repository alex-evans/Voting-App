'use strict'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from './reducers/index'

// create an object for the default data
const defaultState = {
  auth: false,
  polls: []
}

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunk)
)

export const history = syncHistoryWithStore(browserHistory, store)

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
