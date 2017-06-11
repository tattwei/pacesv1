// client/js/components/SecureView.js

import 'stylesheets/base.sass'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {FormGroup, ControlLabel, FormControl, ListGroup, ListGroupItem, Clearfix, Grid, Row, Col, Panel, Button, ButtonToolbar } from 'react-bootstrap'
import LoginView from './LoginView'
import DemogView from './DemogView'
import ClinicalView from './ClinicalView'


class SecureView extends Component{      

  constructor(props){
     super(props);
     this.state= {
                  idNumber: '',
                  clinIsEpilepsy: false, 
                  dorender:false,
                  isView: false
                  };  // records is a  dummy variable to clear the value so component is always displayed updated
     this.onTextChange = this.onTextChange.bind(this);
     this.getTitle = this.getTitle.bind(this);
     this.onLoadDBClick = this.onLoadDBClick.bind(this);
     this.onSaveDBClick = this.onSaveDBClick.bind(this);
     this.onLogoutClick = this.onLogoutClick.bind(this);
     this.onResetClick = this.onResetClick.bind(this);
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

  // Load from Server DB
  onLoadDBClick(event){
      if (this.state.isView){
        this.setState({isView:false})
      }else{
      this.props.onLoadDB(this.state, this.props.token)
      this.setState({dorender:true, isView:true})
      }
  }

  onSaveDBClick(event){

      if (this.state.isView){
          this.setState({isView: false})
      }else{
      this.props.onSaveDB(this.state, this.props.token)
      this.setState({ dorender:true})
      }
  }

  onResetClick(event){
    this.props.onReset()
    this.setState({dorender: true, idNumber: ""})
  }

  onLogoutClick(event){
       this.props.onReset()
       this.props.onAuthenticate("","")  // blank username and pasword
       this.setState(idNumber:"")
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
         <p> </p>
          <DemogView onTextChange={this.onTextChange} isView={this.state.isView} Records = {this.props}/>
          <ClinicalView onTextChange={this.onTextChange} showEpilepsy={this.state.clinIsEpilepsy}/>
          <p></p>
      </Panel>
      </Col>

    <p></p>
     <ButtonToolbar>
       <Button bsStyle="primary" onClick={this.onLoadDBClick}>Load Fm</Button> 
        <Button bsStyle="primary" onClick={this.onResetClick}>Reset Fm</Button> 
       <Button bsStyle="success" onClick={this.onSaveDBClick} > Save Fm</Button>
       <Button bsStyle="danger" onClick = {this.onLogoutClick}>Logout </Button>
    </ButtonToolbar>

    </Row>
    </Grid>      
  );
  } else{
    return(<LoginView onAuthenticateClick = {this.props.onAuthenticate}/>);
  }}
};




SecureView.propTypes={
    title: PropTypes.string.isRequired,
    tokenized: PropTypes.bool,
    token : PropTypes.string,
    idFirstName: PropTypes.string,
    idLastName: PropTypes.string,
    idSex: PropTypes.string,
    idParentsName: PropTypes.string,
    clinDiag1: PropTypes.string,
    clinIsEpilepsy: PropTypes.bool,
    onLoadDB: PropTypes.func.isRequired,
    onSaveDB: PropTypes.func.isRequired,
    onAuthenticate: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired
}

export default SecureView

