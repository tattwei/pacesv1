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
//import {Authenticate, ADDTITLE, LoadDB} from './actions'

const appId = document.getElementById("app")

//let store = configureStore()
const loggerMiddleware = createLogger()
const preloadedState = {
    title:"Patient Record (Store Connected)", 
    token:"", 
    tokenized: false,
    idFirstName: "Patient's First Name",
    idLastName: "Patient's Last Name",
    idNumber: "Patient's IC Number",
    idDOB: "Patient's Date of Birth (yyyy-mm-dd)",
    idSex: "Patient's Gender",
    idParentsName: "Patient's Parents Name",
    idParentsContact: "Parents Contact Phone Number",
    idParentsEmail: "Parent's Email Address",
    idAddress: "Home Address",
    idLanguage: "Click to Select",
    clinDiag1: "Clinical Diagnosis1",
    clinDiag2: "Clinical Diagnosis2",
    clinDiag3: "Clinical Diagnosis3",
    clinIsEpilepsy: false
}
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
