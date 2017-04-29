// client/js/components/App.js

import 'stylesheets/base.sass'
import React, {Component} from 'react'
import {FormGroup, ControlLabel, FormControl, ListGroup, ListGroupItem, Clearfix, Grid, Row, Col, Panel, Jumbotron, Button } from 'react-bootstrap'

const title = (<h3>Patient record</h3>);

function alertClicked() {
  alert('You clicked the third ListGroupItem');
}

const jumboInstance =(      
  
  <Jumbotron>
  <h1><center>PACES Portal</center></h1>
  <Grid>
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
          
          <ListGroup fill>
          <ListGroupItem onClick={alertClicked}><h5>Record A</h5> Record A value a reaaaaaalllllllllly long list of words</ListGroupItem>
          <ListGroupItem onClick={alertClicked}><h5>Record B</h5> Record B value</ListGroupItem>
          <ListGroupItem>&hellip;</ListGroupItem>
          </ListGroup>
          Some more panel content here.
         </Panel>
      </Col>
      <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>  
      <p><Button bsStyle="primary">Submit</Button></p>
    </Row>      
  </Grid>
  </Jumbotron>
);


class App extends Component{
  static propTypes = {
    place: React.PropTypes.string
  }

  render(){
    return (jumboInstance);
  }
}

export default App

