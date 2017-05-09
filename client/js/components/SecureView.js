// client/js/components/SecureView.js

import 'stylesheets/base.sass'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {FormGroup, ControlLabel, FormControl, ListGroup, ListGroupItem, Clearfix, Grid, Row, Col, Panel, Button } from 'react-bootstrap'

//const title = (<h1> Patient Record </h1>);

class SecureView extends Component{      

  constructor(props){
     super(props);
     this.state= {records : "Random GUI state", dorender:false};
     this.onTextChange = this.onTextChange.bind(this);
     this.getTitle = this.getTitle.bind(this);
     this.onLoadClick = this.onLoadClick.bind(this);
     this.onSaveClick = this.onSaveClick.bind(this);
  }
  
  getTitle(){
    return(
      <h1>{this.props.records}</h1>
    );
  }

  // Always keep local state in synch with the store
  onTextChange(event){
    const target = event.target
    const name = target.name
    const value = target.type=='checkbox'? target.checked: target.value 

    this.setState((previousState, props)=>({[name]:value}))
  }

  onSaveClick(event){
    this.props.onSave(this.state)
  }

  onLoadClick(event){
      this.props.onLoad(this.state)
      this.setState({ records: this.props.records, dorender:true})
  }
  shouldComponentUpdate(nextProps, nextState){
      //console.log('SecureView: ',this.state, this.props)
      //console.log('Secureview next: ', nextState, nextProps)
      
      this.props.onSave(nextState);  // perfectly sync this.state with store state
      return nextState.dorender;
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
      
    <p><Button bsStyle="primary" onClick={this.onSaveClick}>Save To</Button></p>
    <p><Button bsStyle="primary" onClick={this.onLoadClick}>Load Fm</Button></p>
    </Row>
    </Grid>      
  );
  }
};

SecureView.propTypes={
    title: PropTypes.string.isRequired,
    records: PropTypes.string,
    onLoad: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
}

export default SecureView

