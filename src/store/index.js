import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import reducers from './reducers'

const logger = createLogger({
  collapsed: true
})

export default function configureStore() {
  const middlewares = applyMiddleware(thunk, logger)
  return createStore(reducers, composeWithDevTools(middlewares))
}
