// client/js/components/ClinEpilepView.js

import 'stylesheets/base.sass'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Checkbox, Radio,Form, FormGroup, ControlLabel, FormControl, ListGroup, ListGroupItem, Clearfix, Grid, Row, Col, Panel, Button, ButtonToolbar } from 'react-bootstrap'
import ClinEpilepView from './ClinEpilepView'
import ClinBasicView from './ClinBasicView'
  

class ClinicalView extends Component{      

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
      
     if(this.props.showEpilepsy){
         return(
            <div>
            <ClinBasicView onTextChange={this.onInputChange}/>
            <ClinEpilepView onTextChange={this.onInputChange}/>
            </div>
         );
     } else{
         return(
            <div>
               <ClinBasicView onTextChange={this.onInputChange}/>
            </div>
        );
     }
   }
};


ClinicalView.propTypes={
    onTextChange: PropTypes.func.isRequired,
    showEpilepsy : PropTypes.bool.isRequired
}

export default ClinicalView

