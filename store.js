//import { createStore, compose, applyMiddleware } from 'redux'
//import thunk from 'redux-thunk'

import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(
  reducers//, {}, compose(applyMiddleware(thunk))
)

export default store
