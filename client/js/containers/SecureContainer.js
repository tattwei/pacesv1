// client/js/containers/SecureContainer.js

// Container Component to fetch record

import {React, Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {SaveDB, LoadDB, LOADFMSTORE, SAVETOSTORE} from  '../actions'   // import Action
import SecureView from '../components/SecureView' // Import Presentational Component
 
function mapStateToProps(state){
    
    console.log(state)

    return({
        title: state.title,
        records: state.records,
        subjectid: state.subjectid
    });
}

function mapDispatchToProps(dispatch){
    
    return({
        onLoad: (subjectid)=>{ 
             dispatch(LOADFMSTORE(subjectid))
        },
        onSave: (state)=>{
             console.log(state)
             dispatch(SAVETOSTORE(state))
        },

        onLoadDB: (subjectid)=>{
             dispatch(LoadDB(subjectid))
        },

        onSaveDB: (transaction)=>{
             dispatch(SaveDB(transaction))
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
    dispatch: PropTypes.func.isRequired
}


export default SecureContainer
