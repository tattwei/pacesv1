// client/js/components/nonSecure.js

import 'stylesheets/base.sass'
import React, {PropTypes, Component} from 'react'
import {Button, Jumbotron} from 'react-bootstrap'


function NonSecureComp() {
  return(
    <Jumbotron>
    <h1><center>PACES Portal </center></h1>
    <p><center>This is the informational section (non-secure) for the Malaysia Telemedicine Project</center></p>
    <p><center><Button bsStyle="primary">Learn more</Button></center></p>
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

