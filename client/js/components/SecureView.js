// client/js/components/SecureView.js

import 'stylesheets/base.sass'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {FormGroup, ControlLabel, FormControl, ListGroup, ListGroupItem, Clearfix, Grid, Row, Col, Panel, Button } from 'react-bootstrap'

//const title = (<h1> Patient Record </h1>);

class SecureView extends Component{      

  constructor(props){
     super(props);
     this.state= {records: '', dorender:false};  // records is a  dummy variable to clear the value so component is always displayed updated
     this.onTextChange = this.onTextChange.bind(this);
     this.getTitle = this.getTitle.bind(this);
     this.onLoadDBClick = this.onLoadDBClick.bind(this);
     this.onSaveClick = this.onSaveClick.bind(this);
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

  // Load from Store
  onLoadClick(event){
    this.props.onLoad()
  }

  // Load from Server DB
  onLoadDBClick(event){
      this.props.onLoadDB()
      this.setState({records: "", dorender:true})
  }

  onSaveClick(event){
      this.props.onSave(this.state)
      this.setState({records:"", dorender:true})
  }

  componentDidUpdate(prevProps, prevState){
      console.log("Component RENDERED")
  }

  //shouldComponentUpdate(nextProps, nextState){
      //return nextState.dorender;
  //}

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
            <ControlLabel> Records </ControlLabel>
            <FormControl componentClass="textarea" value={this.state.records} placeholder={this.props.records} name = "records" onChange={this.onTextChange} />
          </FormGroup>
          
    </Panel>
    </Col>
    <p><Button bsStyle="primary" onClick={this.onLoadDBClick}>Load Fm</Button>
       <Button bsStyle="primary" onClick={this.onSaveClick} > Save Fm</Button>
    </p>

    </Row>
    </Grid>      
  );
  }
};




SecureView.propTypes={
    title: PropTypes.string.isRequired,
    records: PropTypes.string,
    onLoad: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onLoadDB: PropTypes.func.isRequired
}

export default SecureView

