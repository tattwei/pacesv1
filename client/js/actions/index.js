// ACTION CREATORS

import fetch from 'isomorphic-fetch'

export function AUTHENTICATE(json){
    console.log(json)    

    if(json.success){
        return{
	    type: 'AUTHENTICATE',
            tokenized: true,
            token: json.token,
            numrecords: 0
        };
    }else{
        return{
            type: 'AUTHENTICATE',
            tokenized : false,
            token: "",
            numrecords: 0
        };
    }
}

export function ADDTITLE(title){
    return{
        type: 'ADDTITLE',
        title: title
    }

}


export function RESET(json){
    return{
        type: 'RESET',
        success: true,
        numrecords :1,
        records:[{
          idFirstName: "Patient's First Name",
          idLastName: "Patient's Last Name",
          idNumber: "Patient's IC Number",
          idDOB: "Patient's Date of Birth (yyyy-mm-dd)",
          idSex: "Patient's Gender (Male or Female)",
          idParentsName: "Parents of Patient",
          idParentsContact: "Contact Phone Number",
          idParentsEmail: "Parents Email Address",
          idAddress: "Home Address",
          idLanguage: "Click to Select",
          clinDiag1: "Clinical Diagnosis",
          clinDiag2: "Clinical Diagnosis",
          clinDiag3: "Clinical Diagnosis",
          clinIsEpilepsy: false
        }]
    }
}

export function LOADFMDB_REQ(filter){
    return{
        type: 'LOADFMDB_REQ',
        filter : filter,
        numrecords: 0
    }
}

export function LOADFMDB_SUCCESS(filter, json){

    console.log(json.message, json.numrecords)
    return{
        type: 'LOADFMDB_SUCCESS',
        success: json.success,
        message: json.message,
        numrecords: json.numrecords,
        records: json.records,
        receivedAt: Date.now()
    }
}

export function LOADFMDB_FAILURE(filter,json){
    return{
        type: 'LOADFMDB_FAILURE',
        success: json.success,
        message: json.message,
        numrecords: json.numrecords,
        records: filter,
        receivedAt: Date.now()
    }
}

export function SAVETODB_REQ(filter){
    return{
        type: 'SAVETODB_REQ',
        filter: filter,
        numrecords: 0
    }
}

export function SAVETODB_SUCCESS(transaction, json){
   //console.log("SAVE RESP", json)
    return{
        type: 'SAVETODB_SUCCESS',
        success: json.success,
        message: json.message,
        numrecords: json.numrecords,
        records: [json.records],
        receivedAt: Date.now()
    }
}

export function SAVETODB_FAILURE(transaction, json){
    return{
        type: 'SAVETODB_SUCCESS',
        success: json.success,
        message: json.message,
        numrecords: json.numrecords,
        records: [transaction],
        receivedAt: Date.now()
    }
}


// Thunk action creator - returns functions rather than objects

function assembleHeader(token){

    return {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "x-access-token": token
           }
		//"x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiaXNBZG1pbiI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJuYW1lIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7ImlzQWRtaW4iOnRydWUsInBhc3N3b3JkIjp0cnVlLCJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiaXNBZG1pbiI6ZmFsc2UsInBhc3N3b3JkIjoicHciLCJuYW1lIjoiZXJpYyIsIl9pZCI6IjU5MTQyNDE0NTljNWRmOWQzNzI2Yzg5MSJ9LCJpYXQiOjE0OTQ0OTI0MzQsImV4cCI6MTQ5NDU3ODgzNH0.POGeAMTZMKiF2crzjn6PeXS6ZRk_r72lWBVL-QhyWsQ"
}




export function SaveDB(transaction, token){
   const uri = `https://182.54.217.24:8080/user/${transaction.idNumber}`
   //const postbody = `subjectid=${transaction.subjectid}&record1=${transaction.records}`
   
   const postbody = 
       `idFirstName=${transaction.idFirstName}&idLastName=${transaction.idLastName}&idNumber=${transaction.idNumber}&idDOB=${transaction.idDOB}&idSex=${transaction.idSex}&idParentsName=${transaction.idParentsName}&idParentsContact=${transaction.idParentsContact}&idParentsEmail=${transaction.idParentsEmail}&idAddress=${transaction.idAddress}&idLanguage=${transaction.idLanguage}&clinDiag1=${transaction.clinDiag1}&clinDiag2=${transaction.clinDiag2}&clinDiag3=${transaction.clinDiag3}&clinIsEpilepsy=${transaction.clinIsEpilepsy}`

   //const postbody = `record=${record}`
   console.log("POST BODY", postbody)

   let header = assembleHeader(token)
   return function (dispatch){
        dispatch(SAVETODB_REQ(postbody))

        return fetch(uri, {method:'post',
                           headers: header,
                           body:postbody})
               .then(response=>response.json())
               .then((json)=>{
                     console.log("SaveDB Req Successful?", json.success)
                     if(json.success){
                         dispatch(SAVETODB_SUCCESS(postbody, json))
                     }else{
                         dispatch(SAVETODB_FAILURE(postbody,json))
                     } 
               })
   }

}

export function LoadDB(transaction, token){

    const uri = `https://182.54.217.24:8080/user/${transaction.idNumber}`
    console.log(uri)
    let header = assembleHeader(token)

    let filter = {idNumber: transaction.idNumber}

    return function(dispatch){
        dispatch(LOADFMDB_REQ(filter))

        return fetch(uri, {method: "GET",
			   headers: header
			   })
		.then(response=>response.json())
		.then((json)=>{
                   console.log("LoadDB Req Successful? ",json.success)

                    if (json.success){
                        dispatch(LOADFMDB_SUCCESS(filter, json))
                    }else{
                        dispatch(LOADFMDB_FAILURE(filter, json))
                    } 
                })
    }

}

export function Authenticate(username, password){
    const uri = `https://182.54.217.24:8080/authenticate`
    console.log("Authenticating")
    let header = assembleHeader("")
    const postbody=`name=${username}&password=${password}`
    return  function (dispatch){

	  return fetch(uri, {method: "POST", 
                       headers: header,
	               body: postbody})
          .then(response=>response.json())
          .then((json)=>dispatch(AUTHENTICATE(json)) )
   }
}
