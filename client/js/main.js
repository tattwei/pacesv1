import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,  Route, Link} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
//import App from './components/App'
//import ChatSubscriber from './components/Clientvid'
//import ImagesList from './components/images/ImageList'
import SecureContainer from './containers/SecureContainer'

import {dbReq} from './reducers/dbReq'
import {ADDTITLE, SAVETOSTORE} from './actions'

const appId = document.getElementById("app")

let store = createStore(dbReq)

// initialize some state to the store so we can readout from the Component

//const ReduxBasic=()=>(
//    <Provider store={store}>
//        <SecureContainer />
//    </Provider>
//)

let unsubscribe = store.subscribe(()=> console.log(store.getState()))
console.log(store.getState())
store.dispatch(ADDTITLE('Patient Record (Store Connected)'))
store.dispatch(SAVETOSTORE('Initial Store Record'))

const ReduxBasic=()=>(
    <Provider store={store}>
        <SecureContainer />
    </Provider>
)

ReactDOM.render(<ReduxBasic /> ,appId)

unsubscribe()
