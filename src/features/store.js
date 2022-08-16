import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { tableReducer } from './reducer/index'

const reducer = combineReducers({
   tableData: tableReducer,
})

const initialState = {}
const middleware = [thunk]

export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
