// client/js/components/App.js

import 'stylesheets/base.sass'
import React, {PropTypes, Component} from 'react'
import {FormGroup, ControlLabel, FormControl, Clearfix, Grid, Row, Col, Panel, Button, Jumbotron} from 'react-bootstrap'
import Header from './layout/Header'
import NonSecure from './nonSecure'
import Secure from './Secure'

class App extends Component{
  render(){     
    return(
      <div>
        <Header />
        <div><h1> Something </h1></div>
        //<div className="top">
        //  <NonSecure />
        //</div>
        //<div className="mid">
        //  <Secure />
        //</div>
      </div>
    )
  }
}

export default App

