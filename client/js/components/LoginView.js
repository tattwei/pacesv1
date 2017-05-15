// client/js/components/Login.js

import 'stylesheets/base.sass'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {FormGroup, ControlLabel, Form, FormControl, Clearfix, Grid, Row, Col, Panel, Button } from 'react-bootstrap'

class LoginView extends Component{
  constructor(props){
     super(props);
     this.state = {username: '', password: ''}
     this.onTextChange = this.onTextChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
  }
  
  onTextChange(event){
    const target = event.target
    const name = target.name
    const value = target.type=='checkbox'? target.checked: target.value
    this.setState({[name]: value}) 
  }

  onSubmit(event){

    event.preventDefault();
    console.log(this.state.username, this.state.password)
    this.props.onAuthenticateClick(this.state.username, this.state.password);
  }

  //componentDidUpdate(prevProps, prevState){
  //    console.log("Component RENDERED")
  //}

  //shouldComponentUpdate(nextProps, nextState){
      //return nextState.dorender;
  //}

  render(){

    return ( 
      <Grid><Row className="show-grid"><Col xs={18} xsOffset={0}>
      <p></p>
      <Panel header="Login" bsStyle="primary"> 
	 <p></p>
	   <Form horizontal onSubmit={this.onSubmit}>
	      <FormGroup controlId="formLoginEmail">
		 <Col componentClass={ControlLabel} sm={2}> Email </Col>
		 <Col sm={10}><FormControl type="text" name="username" placeholder="Login Email" onChange={this.onTextChange}/></Col>
 	      </FormGroup>

	      <FormGroup controlId="formLoginPassword">
		 <Col componentClass={ControlLabel} sm={2}> Password </Col>
		 <Col sm={10}><FormControl type="password" name="password" placeholder="Enter Login Password" onChange={this.onTextChange}/></Col>
 	      </FormGroup>

              <FormGroup controlId="formLoginEmail">
		 <Col smOffset={2} sm={2}><Button bsStyle="primary" type="submit" > Sign In </Button></Col>
 	      </FormGroup>

           </Form>
      </Panel>
      </Col></Row></Grid>

  );
  }
};




LoginView.propTypes={
  onAuthenticateClick: PropTypes.func.isRequired
}

export default LoginView

