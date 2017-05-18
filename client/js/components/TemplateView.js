// client/js/components/DemogView.js

import 'stylesheets/base.sass'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {FormGroup, ControlLabel, FormControl, ListGroup, ListGroupItem, Clearfix, Grid, Row, Col, Panel, Button, ButtonToolbar } from 'react-bootstrap'


class DemogView extends Component{      

  constructor(props){
     super(props);
     this.state= {records: '',                   };  // records is a  dummy variable to clear the value so component is always displayed updated
     this.onTextChange = this.onTextChange.bind(this);
  }
  

  onTextChange(event){
    const target = event.target
    const name = target.name
    const value = target.type=='checkbox'? target.checked: target.value 
  }

  //componentDidUpdate(prevProps, prevState){
  //}

  //shouldComponentUpdate(nextProps, nextState){
      //return nextState.dorender;
  //}

  render(){

  return ( 

          <FormGroup controlId="formControlsSubjectId">
            <ControlLabel> Subject ID </ControlLabel>
            <FormControl componentClass="textarea" value={this.state.subjectid} placeholder={this.props.subjectid} name="subjectid" onChange={this.onTextChange} />
          </FormGroup>

          <FormGroup controlId="formControlsRecords">
            <ControlLabel> Records </ControlLabel>
            <FormControl componentClass="textarea" value={this.state.records} placeholder={this.props.records} name = "records" onChange={this.onTextChange} />
          </FormGroup>
          
  );
};




DemogView.propTypes={
    title: PropTypes.string.isRequired,
    records: PropTypes.string,
    subjectid: PropTypes.string,
    tokenized: PropTypes.bool,
    token : PropTypes.string,
    onLoad: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onLoadDB: PropTypes.func.isRequired,
    onSaveDB: PropTypes.func.isRequired,
    onAuthenticate: PropTypes.func.isRequired
}

export default DemogView

