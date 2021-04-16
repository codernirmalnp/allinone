import {createStore,applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise'
import Reducer from './_reducer'
import thunk from 'redux-thunk'
const createStoreWithMiddleware=applyMiddleware(promiseMiddleware,thunk)(createStore)
const store=createStoreWithMiddleware(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())

 export default store;