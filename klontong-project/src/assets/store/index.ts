import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { counterReducerProduct } from './reducers/reducers'



let store = createStore(counterReducerProduct,applyMiddleware(thunk))

export default store