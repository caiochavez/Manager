import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index'
import ReduxThunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'
import Router from './Router'

class App extends Component {
  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, ReduxPromise))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App