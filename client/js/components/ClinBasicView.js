// client/js/components/ClinEpilepView.js

import 'stylesheets/base.sass'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Checkbox, Radio,Form, FormGroup, ControlLabel, FormControl, ListGroup, ListGroupItem, Clearfix, Grid, Row, Col, Panel, Button, ButtonToolbar } from 'react-bootstrap'
import ClinEpilepView from './ClinEpilepView'

  

class ClinBasicView extends Component{      

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
          <FormGroup controlId="formDiagnosisPrimary">
              <Col sm={2} componentClass={ControlLabel}>Primary Diagnosis</Col> 
              <Col sm={10}><FormControl componentClass="textarea" name="clinDiag1" placeholder="Primary Diagnosis" onChange={this.onInputChange}/> </Col>
          </FormGroup>
          
          <FormGroup controlId="formDiagnosis2">
            <Col sm={2} componentClass={ControlLabel}> Diagnosis 2 </Col>
            <Col sm={10}><FormControl componentClass="textarea" name = "clinDiag2" placeholder="Secondary Diagnosis (if any)" onChange={this.onInputChange}/></Col>
          </FormGroup>
         
          <FormGroup controlId="formDiagnosis3">
            <Col componentClass={ControlLabel} sm={2}> Diagnosis 3 </Col>
            <Col sm={10}><FormControl componentClass="textarea" name = "clinDiag3" placeholder="Tertiary Diagnosis (if any)" onChange={this.onInputChange}/></Col>
          </FormGroup>

         <FormGroup controlId="formIsEpilepsy">
            <Col componentClass={ControlLabel} sm={2}>Patient with Epilepsy</Col>
            <Col sm={10}><Checkbox name="clinIsEpilepsy" onChange={this.onInputChange}>Yes </Checkbox> </Col>
         </FormGroup>

    </Form>

  )}
};


ClinBasicView.propTypes={
    onTextChange: PropTypes.func.isRequired
}

export default ClinBasicView

