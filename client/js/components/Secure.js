// client/js/components/Secure.js

import 'stylesheets/base.sass'
import React, {Component} from 'react'
import {FormGroup, ControlLabel, FormControl, ListGroup, ListGroupItem, Clearfix, Grid, Row, Col, Panel, Button } from 'react-bootstrap'

const title = (<h1> Patient Record </h1>);

function alertClicked(){
  alert("Clicked!")
}

function SecureComp() {      
  return ( 
    <Grid>
      <Row className="show-grid">
      <Col xs={18} xsOffset={0}>
      <p></p>
      <Panel header={title} bsStyle="primary"> 
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
          
          <ListGroup fill>
          <ListGroupItem onClick={alertClicked}><h5>Record A</h5> Record A value a reaaaaaalllllllllly long list of words</ListGroupItem>
          <ListGroupItem>&hellip;</ListGroupItem>
          </ListGroup>
    </Panel>
    </Col>
      
    <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>  
    <p><Button bsStyle="primary">Submit</Button></p>
    </Row>
    </Grid>      
  );
}


class Secure extends Component{
  render(){
    return (
      <div>
        <div className="secure-body">
          <SecureComp />
        </div>
      </div>
    )
  }
}

export default Secure

