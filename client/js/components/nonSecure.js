// client/js/components/nonSecure.js

import 'stylesheets/base.sass'
import React, {PropTypes, Component} from 'react'
import {Button, Jumbotron} from 'react-bootstrap'


function NonSecureComp() {
  return(
    <Jumbotron>
    <h1><center>PACES Portal </center></h1>
    <center>
    <p>This is the informational section (non-secure) for the Malaysia Telemedicine Projt</p>
    <p><Button bsStyle="primary">Learn more</Button></p>
    </center>
    </Jumbotron>
  );
}

class NonSecure extends Component{
  render(){     
    return(
      <div>
        <div className="nonsecure-body">
          <NonSecureComp />
        </div>
      </div>
    )
  }
}

export default NonSecure

