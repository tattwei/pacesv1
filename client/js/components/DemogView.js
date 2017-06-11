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

  if(this.props.isView){

    return(
        <Form horizontal>
            <FormGroup controlId="formPatientFirstName">
                <Col sm={2} componentClass={ControlLabel}> First Name</Col>
                <Col sm={10}><FormControl.Static>{this.props.Records.idFirstName}</FormControl.Static></Col>
            </FormGroup>
           <FormGroup controlId="formPatientLastName">
            <Col sm={2} componentClass={ControlLabel}> Last Name </Col>
            <Col sm={10}><FormControl.Static>{this.props.Records.idLastName}</FormControl.Static></Col>
          </FormGroup>
         
          <FormGroup controlId="formPatientID">
            <Col componentClass={ControlLabel} sm={2}> I.C. number  </Col>
            <Col sm={10}><FormControl.Static>{this.props.Records.idNumber}</FormControl.Static></Col>
          </FormGroup>

          <FormGroup controlId="formPatientDOB">
            <Col componentClass={ControlLabel} sm={2}> D.O.B </Col>
            <Col sm={10}><FormControl.Static>{this.props.Records.idDOB}</FormControl.Static></Col>
          </FormGroup>

         <FormGroup controlId="formPatientSex">
            <Col componentClass={ControlLabel} sm={2}> Sex </Col>
            <Col sm={10}><FormControl.Static>{this.props.Records.idSex}</FormControl.Static>
            </Col>
          </FormGroup>

        <FormGroup controlId="formParentsName">
            <Col componentClass={ControlLabel} sm={2}>Parents Name</Col>
            <Col sm={10}><FormControl.Static>{this.props.Records.idParentsName}</FormControl.Static> </Col>
        </FormGroup>
        
       <FormGroup controlId="formParentsContact">
            <Col componentClass={ControlLabel} sm={2}>Parents Contact</Col>
            <Col sm={10}><FormControl.Static>{this.props.Records.idParentsContact}</FormControl.Static> </Col>
        </FormGroup>

        <FormGroup controlId="formParentsEmail">
            <Col componentClass={ControlLabel} sm={2}>Parents Email</Col>
            <Col sm={10}><FormControl.Static>{this.props.Records.idParentsEmail}</FormControl.Static> </Col>
        </FormGroup>

        <FormGroup controlId="formParentsAddress">
            <Col componentClass={ControlLabel} sm={2}>Parents Address</Col>
            <Col sm={10}><FormControl.Static>{this.props.Records.idAddress}</FormControl.Static> </Col>
        </FormGroup>
       
      <FormGroup controlId="formParentsLanguage">
            <Col componentClass={ControlLabel} sm={2}>Language</Col>
            <Col sm={10}><FormControl.Static>{this.props.Records.idLanguage}
           </FormControl.Static> </Col>
        </FormGroup>
        </Form>
     )
  }else{

  return ( 
      <Form horizontal>
         
          <FormGroup controlId="formPatientFirstName">
             <Col sm={2} componentClass={ControlLabel}>First Name</Col> 
             <Col sm={10}><FormControl type="text" name="idFirstName" placeholder={this.props.Records.idFirstName} onChange={this.onInputChange}/> </Col>
          </FormGroup>

          <FormGroup controlId="formPatientLastName">
            <Col sm={2} componentClass={ControlLabel}> Last Name </Col>
            <Col sm={10}><FormControl type="text" name = "idLastName" placeholder={this.props.Records.idLastName} onChange={this.onInputChange}/></Col>
          </FormGroup>
         
          <FormGroup controlId="formPatientID">
            <Col componentClass={ControlLabel} sm={2}> I.C. number  </Col>
            <Col sm={10}><FormControl type="text" name = "idNumber" placeholder={this.props.Records.idNumber} onChange={this.onInputChange}/></Col>
          </FormGroup>

          <FormGroup controlId="formPatientDOB">
            <Col componentClass={ControlLabel} sm={2}> D.O.B </Col>
            <Col sm={10}><FormControl type="text" name = "idDOB" placeholder={this.props.Records.idDOB} onChange={this.onInputChange}/></Col>
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
            <Col sm={10}><FormControl type="text" name = "idParentsName" placeholder={this.props.Records.idParentsName} onChange={this.onInputChange}/> </Col>
        </FormGroup>
        
       <FormGroup controlId="formParentsContact">
            <Col componentClass={ControlLabel} sm={2}>Parents Contact</Col>
            <Col sm={10}><FormControl type="text" name = "idParentsContact" placeholder={this.props.Records.idParentsContact} onChange={this.onInputChange}/> </Col>
        </FormGroup>

        <FormGroup controlId="formParentsEmail">
            <Col componentClass={ControlLabel} sm={2}>Parents Email</Col>
            <Col sm={10}><FormControl type="email" name="idParentsEmail" placeholder={this.props.Records.idParentsEmail} onChange={this.onInputChange}/> </Col>
        </FormGroup>

        <FormGroup controlId="formParentsAddress">
            <Col componentClass={ControlLabel} sm={2}>Parents Address</Col>
            <Col sm={10}><FormControl componentClass="textarea" name="idAddress" placeholder={this.props.Records.idAddress} onChange={this.onInputChange}/> </Col>
        </FormGroup>
       
      <FormGroup controlId="formParentsLanguage">
            <Col componentClass={ControlLabel} sm={2}>Language</Col>
            <Col sm={10}><FormControl componentClass="select" name="idLanguage" placeholder={this.props.Records.idLanguage} onChange={this.onInputChange}>
              <option value="English">English</option>
              <option value="Malay">Malay</option>
              <option value="Chinese">Chinese</option> 
           
           </FormControl> </Col>
        </FormGroup>
    </Form>
     
  )}
  } 
};


DemogView.propTypes={
    onTextChange: PropTypes.func.isRequired,
    isView: PropTypes.bool.isRequired
}

export default DemogView

