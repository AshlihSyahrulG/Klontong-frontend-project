import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { counterReducerItem } from './reducers/reducers'



let store = createStore(counterReducerItem,applyMiddleware(thunk))

export default store