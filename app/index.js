import React from 'react'
// import ReactDOM from 'react-dom'
import { render } from 'react-dom'
// import css from '/public/css/'

// Import Components
import HomeContainer from './components/HomeContainer'

// Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={HomeContainer}>
        <IndexRoute component={HomeContainer}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'))
