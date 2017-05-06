// client/js/containers/GetRecord.js

// Container Component to fetch record

import {connect} from 'react-redux'
import {requestGetTx} from  '../actions'   // import Action
import {Secure} from '../components/Secure' // Import Presentational Component
 
const mapStateToProps = (state)=>{
    return{
        records: "hello done"
}}

const mapDispatchToProps = (dispatch)=>{
    return {
      onGetClick: (subjectid) =>{
          //dispatch(requestGetTx(subjectid))
      }
}}

const GetRecord = connect(
    mapStateToProps,
    mapDispatchToProps
)(Secure)

export default GetRecord
