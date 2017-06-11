// client/js/components/ClinEpilepView.js

import 'stylesheets/base.sass'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Checkbox, Radio,Form, FormGroup, ControlLabel, FormControl, ListGroup, ListGroupItem, Clearfix, Grid, Row, Col, Panel, Button, ButtonToolbar } from 'react-bootstrap'


  

class ClinEpilepView extends Component{      

  constructor(props){
     super(props);
     this.onInputChange = this.onInputChange.bind(this); // store state in parent Component
  }
  

  onInputChange(event){
     this.props.onTextChange(event)
  }

  
  //componentDidUpdate(prevProps, prevState){
  //}

  //shouldComponentUpdate(nextProps, nextState){
      //return nextState.dorender;
  //}

  render(){

  return ( 
      <Form horizontal>
         <FormGroup controlId="formEpilepsyType">
            <Col componentClass={ControlLabel} sm={2}> Epilepsy Subtype </Col>
            <Col sm={10}>
            <Radio name="clinEpiIsFocal" value = "Focal" inline onChange={this.onInputChange}> Focal </Radio> {"      "}
            <Radio name="clinEpiIsFocal" value = "Generalized" inline onChange={this.onInputChange}> Generalized </Radio> 
            </Col>
          </FormGroup>

        <FormGroup controlId="formFirstSeizureVisit">
            <Col componentClass={ControlLabel} sm={2}>Fist Seizure Visit </Col>
            <Col sm={10}><FormControl type="text" name = "clinEpiFirstSeizure" placeholder="Is this the first visit to doctor for Seizure?" onChange={this.onInputChange}/> </Col>
        </FormGroup>
        
       <FormGroup controlId="formEpilepsyDrugs">
            <Col componentClass={ControlLabel} sm={2}>Epilepsy Drugs</Col>
            <Col sm={10}><FormControl componentClass="textarea" name = "clinEpiDrugs" placeholder="Drugs used in epilepsy" onChange={this.onInputChange}/> </Col>
        </FormGroup>


        <FormGroup controlId="formTreatmentProgress">
            <Col componentClass={ControlLabel} sm={2}>Treatment Progress</Col>
            <Col sm={10}><FormControl componentClass="textarea" name="clinEpiTreatmentProgress" placeholder="Progress of Treatment" onChange={this.onInputChange}/> </Col>
        </FormGroup>
     </Form>
     
  )}
};


ClinEpilepView.propTypes={
    onTextChange: PropTypes.func.isRequired
}

export default ClinEpilepView

