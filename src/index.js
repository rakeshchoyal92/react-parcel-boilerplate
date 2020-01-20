import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
// import configureStore from '@src/store'
import configureStore from '@store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import AppLayout from '@src/layout'
const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppLayout />
      </Router>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('react-root'))
