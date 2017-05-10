import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {storeReq} from './reducers/Req'

const loggerMiddleware = createLogger()

export default function configureStore(preLoadedState){
  return createStore(
      storeReq,
      preLoadedState,
      applyMiddleware(thunkMiddleware, loggerMiddleware)
  )

}
