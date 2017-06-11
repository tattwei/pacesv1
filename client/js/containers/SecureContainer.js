// client/js/containers/SecureContainer.js

// Container Component to fetch record

import {React, Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Authenticate, SaveDB, LoadDB, RESET} from  '../actions'   // import Action
import SecureView from '../components/SecureView' // Import Presentational Component
 
function mapStateToProps(state){
    
    console.log(state)
    if (!state.success){
        return({
            title: state.title,
            tokenized: state.tokenized,
            token : state.token,
            idFirstName: state.idFirstName,
            idLastName: state.idLastName,
            idNumber: state.idNumber,
            idDOB: state.idDOB,
            idSex: state.idSex,
            idParentsName: state.idParentsName,
            idParentsContact: state.idParentsContact,
            idParentsEmail: state.idParentsEmail,
            idAddress: state.idAddress,
            idLanguage: state.idLanguage,
            clinDiag1: state.clinDiag1,
            clinDiag2: state.clinDiag2,
            clinDiag3: state.clinDiag3,
            clinIsEpilepsy: state.clinIsEpilepsy
        });
    }else{
        let records = state.records[0]
        return({
            title: state.title,
            tokenized: state.tokenized,
            token: state.token,
            idFirstName: records.idFirstName,
            idLastName: records.idLastName,
            idNumber: records.idNumber,
            idDOB: records.idDOB,
            idSex: records.idSex,
            idParentsName: records.idParentsName,
            idParentsContact: records.idParentsContact,
            idParentsEmail: records.idParentsEmail,
            idAddress: records.idAddress,
            idLanguage: records.idLanguage,
            clinDiag1: records.clinDiag1,
            clinDiag2: records.clinDiag2,
            clinDiag3: records.clinDiag3,
            clinIsEpilepsy: records.clinIsEpilepsy

      
       });
    }
}

function mapDispatchToProps(dispatch){
    
    return({
        onLoadDB: (transaction, token)=>{
             dispatch(LoadDB(transaction,token))
        },

        onSaveDB: (transaction, token)=>{
             dispatch(SaveDB(transaction, token))
        },

        onAuthenticate: (username, password)=>{
	     dispatch(Authenticate(username, password))
        },
        onReset:()=>{
             dispatch(RESET())
        }
     
    })
}

const SecureContainer = connect(mapStateToProps, mapDispatchToProps)(SecureView)

SecureContainer.propTypes={
}


export default SecureContainer
