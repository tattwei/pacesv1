// client/js/components/App.js

import 'stylesheets/base.sass'
import React, {PropTypes, Component} from 'react'
import {FormGroup, ControlLabel, FormControl, Clearfix, Grid, Row, Col, Panel, Button, Jumbotron} from 'react-bootstrap'
import Header from './layout/Header'
import ChatPublisher from './Doctorvid'

const title = (<h3>Patient record</h3>);

function MyInstance() {
 
 return(
  <Grid>
    <Jumbotron>
    <h1><center>PACES Portal </center></h1>
    <p><center>This is the data entry page for the Malaysia Telemedicine Project</center></p>
    <p><center><Button bsStyle="primary">Learn more</Button></center></p>
  </Jumbotron>
      <Row className="show-grid">
      <Col xs={18} xsOffset={0}>
        <p></p>
        <p></p>
        <Panel header={title} bsStyle="primary">
          Introductory text here
          <p></p>
          <p></p>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Record 1</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" />
          </FormGroup>
          
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Record 2</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" />
          </FormGroup>
          
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Record 3</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" />
          </FormGroup>
          
          Some more panel content here.
         </Panel>
      </Col>
      <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>  
      <p><Button bsStyle="primary">Submit</Button></p>
    </Row>      
  </Grid>
 );	
}

class App extends Component{
  render(){     
    return(
      <div>
        <Header />
        <div className="body">
          <MyInstance />
        </div>
        <ChatPublisher />
      </div>
    )
  }
}

export default App

