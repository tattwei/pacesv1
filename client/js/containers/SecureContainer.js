// client/js/containers/SecureContainer.js

// Container Component to fetch record

import {React, Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {LoadFmStore, SaveToStore} from  '../actions'   // import Action
import SecureView from '../components/SecureView' // Import Presentational Component
 
function mapStateToProps(state){
    
    console.log(state)

    return(
        // call a reducer here to fetch state
	{title: state.title}
    );
}

//class SecureContainer extends Component(){
//  constructor(props){
//    super(props);
//  }

//  render(){
//    return(
//      <div>
//        <SecureView title=(this.props.title} />
//      </div>
//    )
//  }
//} 


const SecureContainer = connect(mapStateToProps)(SecureView)

SecureContainer.propTypes={
    title: PropTypes.string
}


export default SecureContainer
