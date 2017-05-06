import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,  Route, Link} from 'react-router-dom'
import App from './components/App'
import ChatSubscriber from './components/Clientvid'
import ImagesList from './components/images/ImageList'

const appId = document.getElementById("app")

const BasicExample = ()=>(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/client">Client</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={App}/>
      <Route path="/client" component={App}/>
    </div>
  </Router>
)

ReactDOM.render(<BasicExample /> ,appId)
