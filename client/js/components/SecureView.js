// client/js/components/SecureView.js

import 'stylesheets/base.sass'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {FormGroup, ControlLabel, FormControl, ListGroup, ListGroupItem, Clearfix, Grid, Row, Col, Panel, Button } from 'react-bootstrap'

//const title = (<h1> Patient Record </h1>);

class SecureView extends Component{      

  constructor(props){
     super(props);
     this.state= {records : "Beginning", title: "FAILED"};
     this.onTextChange = this.onTextChange.bind(this);
     this.getTitle = this.getTitle.bind(this);
  }
  
  getTitle(){
    return(
      <h1>{this.props.title}</h1>
    );
  }
  onTextChange(event){
    const target = event.target
    const name = target.name
    const value = target.type=='checkbox'? target.checked: target.value 

    this.setState({[name]:value})
  }

  render(){

    const mytitle = this.getTitle()
    return ( 
    <Grid>
      <Row className="show-grid">
      <Col xs={18} xsOffset={0}>
      <p></p>
      <Panel header={mytitle} bsStyle="primary"> 
          <p></p>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Records</ControlLabel>
            <FormControl componentClass="textarea" placeholder={this.state.records} name = "records" onChange={this.onTextChange} />
          </FormGroup>
          
    </Panel>
    </Col>
      
    <p><Button bsStyle="primary">Save To</Button></p>
    <p><Button bsStyle="primary" >Load Fm</Button></p>
    </Row>
    </Grid>      
  );
  }
};

SecureView.propTypes={
    title: PropTypes.string
}

export default SecureView

