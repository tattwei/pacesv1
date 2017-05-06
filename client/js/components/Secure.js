// client/js/components/Secure.js

import 'stylesheets/base.sass'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SecureView from './SecureView'

class Secure extends Component{
  constructor(props){
    super(props);

    this.state = {subjectid:this.props.subjectid, records: this.props.records};
    this.updateRecords = this.updateRecords.bind(this);
  }

  updateRecords(event){
      const target = event.target;
      const name = target.name;
      const value = target.type=='checkbox'? target.checked:target.value;

      this.setState({
        [name]:value
      });
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }
  
  render(){
    return (
      <div>
        <div className="secure-body">
          <SecureView onRecordChange = {this.updateRecords}/>
        </div>
      </div>
    )
  }
};

Secure.defaultProps={
    subjectid: "1500",
    records: "empty"
};

Secure.propTypes ={
    subjectid: PropTypes.string,
    records: PropTypes.string
};

export default Secure

