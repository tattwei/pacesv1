import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,  Route, Link} from 'react-router-dom'
import {Provider} from 'react-redux'
//import ChatSubscriber from './components/Clientvid'
//import ImagesList from './components/images/ImageList'
import SecureContainer from './containers/SecureContainer'
import NonSecure from './components/nonSecure'

//import {configureStore} from './configureStore'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {storeReq} from './reducers/Req'
import {Authenticate, ADDTITLE, SAVETOSTORE, LoadDB} from './actions'

const appId = document.getElementById("app")

//let store = configureStore()
const loggerMiddleware = createLogger()
const preloadedState = {title:"Patient Record (Store Connected)", records: "Initial Store Record", token:"", tokenized: false}
let store = createStore(storeReq, preloadedState, applyMiddleware(thunkMiddleware, loggerMiddleware))

let unsubscribe = store.subscribe(()=> console.log(store.getState()))
console.log(store.getState())
// store.dispatch()

const ReduxBasic=()=>(
    <Provider dispatch={store.dispatch} store={store}>
        <div>
        <div className="nonsecure">
        <NonSecure />
        </div>
        <div className="secure">
	<SecureContainer />
        </div>
        </div>
    </Provider>
)

ReactDOM.render(<ReduxBasic /> ,appId)

unsubscribe()
