// client/js/containers/SecureContainer.js

// Container Component to fetch record

import {React, Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {LOADFMSTORE, SAVETOSTORE} from  '../actions'   // import Action
import SecureView from '../components/SecureView' // Import Presentational Component
 
function mapStateToProps(state){
    
    console.log(state)

    return({
        title: state.title,
        records: state.records
    });
}

function mapDispatchToProps(dispatch){
    
    return({
        onLoad: (state)=>{ 
             dispatch(LOADFMSTORE())
        },
        onSave: (state)=>{
             dispatch(SAVETOSTORE(state.records))
        }
     
    })
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


const SecureContainer = connect(mapStateToProps, mapDispatchToProps)(SecureView)

SecureContainer.propTypes={
}


export default SecureContainer
