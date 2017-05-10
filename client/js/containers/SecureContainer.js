// client/js/containers/SecureContainer.js

// Container Component to fetch record

import {React, Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {LoadDB, LOADFMSTORE, SAVETOSTORE} from  '../actions'   // import Action
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
        onLoad: ()=>{ 
             dispatch(LOADFMSTORE())
        },
        onSave: (state)=>{
             console.log(state)
             dispatch(SAVETOSTORE(state.records))
        },

        onLoadDB: ()=>{
             dispatch(LoadDB('1150'))
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
