// client/js/components/SecureView.js

import 'stylesheets/base.sass'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {FormGroup, ControlLabel, FormControl, ListGroup, ListGroupItem, Clearfix, Grid, Row, Col, Panel, Button, ButtonToolbar } from 'react-bootstrap'
import LoginView from './LoginView'

//const title = (<h1> Patient Record </h1>);

class SecureView extends Component{      

  constructor(props){
     super(props);
     this.state= {records: '', 
                  subjectid: this.props.subjectid, 
                  dorender:false,
                  };  // records is a  dummy variable to clear the value so component is always displayed updated
     this.onTextChange = this.onTextChange.bind(this);
     this.getTitle = this.getTitle.bind(this);
     this.onLoadDBClick = this.onLoadDBClick.bind(this);
     this.onSaveDBClick = this.onSaveDBClick.bind(this);
     this.onSaveClick = this.onSaveClick.bind(this);
     this.onLoadClick= this.onLoadClick.bind(this);
     this.onLogoutClick = this.onLogoutClick.bind(this);
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
    this.props.onLoad(this.state.subjectid)
  }

  // Load from Server DB
  onLoadDBClick(event){
      this.props.onLoadDB(this.state.subjectid, this.props.token)
      this.setState({records: "", dorender:true})
  }

  onSaveDBClick(event){
      this.props.onSaveDB(this.state, this.props.token)
      this.setState({records:"", dorender:true})
  }

  onSaveClick(event){
      this.props.onSave(this.state)
      this.setState({records: "", dorender:true})
  }

  onLogoutClick(event){
       this.props.onAuthenticate("","")  // blank username and pasword
  }

  componentDidUpdate(prevProps, prevState){
      console.log("Component RENDERED")
  }

  //shouldComponentUpdate(nextProps, nextState){
      //return nextState.dorender;
  //}

  render(){

    const mytitle = this.getTitle()
    if (this.props.tokenized ){

    return ( 
    <Grid>
      <Row className="show-grid">
      <Col xs={18} xsOffset={0}>
      <p></p>
      <Panel header={mytitle} bsStyle="primary"> 
          <p></p>

          <FormGroup controlId="formControlsSubjectId">
            <ControlLabel> Subject ID </ControlLabel>
            <FormControl componentClass="textarea" value={this.state.subjectid} placeholder={this.props.subjectid} name="subjectid" onChange={this.onTextChange} />
          </FormGroup>

          <FormGroup controlId="formControlsRecords">
            <ControlLabel> Records </ControlLabel>
            <FormControl componentClass="textarea" value={this.state.records} placeholder={this.props.records} name = "records" onChange={this.onTextChange} />
          </FormGroup>
          
    </Panel>
    </Col>
    <p><ButtonToolbar>
       <Button bsStyle="primary" onClick={this.onLoadDBClick}>Load Fm</Button> 
       <Button bsStyle="success" onClick={this.onSaveDBClick} > Save Fm</Button>
       <Button bsStyle="danger" onClick = {this.onLogoutClick}>Logout </Button>
    </ButtonToolbar></p>

    </Row>
    </Grid>      
  );
  } else{
    return(<LoginView onAuthenticateClick = {this.props.onAuthenticate}/>);
  }}
};




SecureView.propTypes={
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

export default SecureView

