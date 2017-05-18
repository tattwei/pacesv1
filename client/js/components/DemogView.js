// client/js/components/DemogView.js

import 'stylesheets/base.sass'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Radio,Form, FormGroup, ControlLabel, FormControl, ListGroup, ListGroupItem, Clearfix, Grid, Row, Col, Panel, Button, ButtonToolbar } from 'react-bootstrap'


class DemogView extends Component{      

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
         
          <FormGroup controlId="formPatientFirstName">
             <Col sm={2} componentClass={ControlLabel}>First Name</Col> 
             <Col sm={10}><FormControl type="text" name="idFirstname" placeholder="Patient First Name" onChange={this.onInputChange}/> </Col>
          </FormGroup>

          <FormGroup controlId="formPatientLastName">
            <Col sm={2} componentClass={ControlLabel}> Last Name </Col>
            <Col sm={10}><FormControl type="text" name = "idLastname" placeholder="Patient Last Name" onChange={this.onInputChange}/></Col>
          </FormGroup>
         
          <FormGroup controlId="formPatientDOB">
            <Col componentClass={ControlLabel} sm={2}> D.O.B </Col>
            <Col sm={10}><FormControl type="text" name = "idDOB" placeholder="Patient Date of Birth (yyyy-mm-dd)" onChange={this.onInputChange}/></Col>
          </FormGroup>

         <FormGroup controlId="formPatientSex">
            <Col componentClass={ControlLabel} sm={2}> Sex </Col>
            <Col sm={10}>
            <Radio name="idSex" value = "Male" inline onChange={this.onInputChange}> M </Radio> {"      "}
            <Radio name="idSex" value = "Female" inline onChange={this.onInputChange}> F </Radio> 
            </Col>
          </FormGroup>

        <FormGroup controlId="formParentsName">
            <Col componentClass={ControlLabel} sm={2}>Parents Name</Col>
            <Col sm={10}><FormControl type="text" name = "idParentsname" placeholder="Parents' Name" onChange={this.onInputChange}/> </Col>
        </FormGroup>
        
       <FormGroup controlId="formParentsContact">
            <Col componentClass={ControlLabel} sm={2}>Parents Contact</Col>
            <Col sm={10}><FormControl type="text" name = "idParentsContact" placeholder="Parents' Contact" onChange={this.onInputChange}/> </Col>
        </FormGroup>

        <FormGroup controlId="formParentsEmail">
            <Col componentClass={ControlLabel} sm={2}>Parents Email</Col>
            <Col sm={10}><FormControl type="email" name="idParentsEmail" placeholder="Parents' Email" onChange={this.onInputChange}/> </Col>
        </FormGroup>

        <FormGroup controlId="formParentsAddress">
            <Col componentClass={ControlLabel} sm={2}>Parents Address</Col>
            <Col sm={10}><FormControl componentClass="textarea" name="idAddress" placeholder="Parents' Address" onChange={this.onInputChange}/> </Col>
        </FormGroup>
       
      <FormGroup controlId="formParentsLanguage">
            <Col componentClass={ControlLabel} sm={2}>Language</Col>
            <Col sm={10}><FormControl componentClass="select" name="idLanguage" placeholder="Click to Select" onChange={this.onInputChange}>
              <option value="English">English</option>
              <option value="Malay">Malay</option>
              <option value="Chinese">Chinese</option> 
           
           </FormControl> </Col>
        </FormGroup>
    </Form>
     
  )}
};


DemogView.propTypes={
    onTextChange: PropTypes.func.isRequired
}

export default DemogView

