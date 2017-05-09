// client/js/containers/SecureContainer.js

// Container Component to fetch record

import {React, Component} from 'react'
import {connect} from 'react-redux'
import {LoadFmStore, SaveToStore} from  '../actions'   // import Action
import SecureView from '../components/SecureView' // Import Presentational Component
 
function mapStateToProps(state){
    
    return{
        // call a reducer here to fetch state
        title: state.title
    }
}


class SecureContainer extends Component(){
  constructor(props){
    super(props);
  }

  render(){
    const {title} = this.props;
    return(
      <div>
        <SecureView title={title} />
      </div>
    )
  }
} 

SecureContainer.propTypes={
    title: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(SecureView)
