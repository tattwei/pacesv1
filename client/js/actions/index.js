// ACTION CREATORS

import fetch from 'isomorphic-fetch'

export function ADDTITLE(title){
    return{
        type: 'ADDTITLE',
        title: title
    }

}

export function SAVETOSTORE (transaction){
    return{
        type: 'SAVETOSTORE',
        records: transaction.records,
        subjectid: transaction.subjectid
    }
}

export function LOADFMSTORE(subjectid){
    return{
        type: 'LOADFMSTORE',
        subjectid: subjectid
    }
}

export function LOADFMDB_REQ(subjectid){
    return{
        type: 'LOADFMDB_REQ',
        subjectid : subjectid
    }
}

export function LOADFMDB_SUCCESS(subjectid, json){

    console.log(subjectid, json[0])
    return{
        type: 'LOADFMDB_SUCCESS',
        subjectid: subjectid,
        records: json[0].record1,
        receivedAt: Date.now()
    }
}

export function LOADFMDB_FAILURE(){
    return{
        type: 'LOADFMDB_FAILURE'
    }
}

export function SAVETODB_REQ(transaction){
    return{
        type: 'SAVETODB_REQ',
        records: transaction.records,
        subjectid: transaction.subjectid
    }
}

export function SAVETODB_SUCCESS(subjectid, json){
   console.log("SAVE RESP", json)
    return{
        type: 'SAVETODB_SUCCESS',
        subjectid: subjectid,
        receivedAt: Date.now()
    }
}

export function SAVETODB_FAILURE(){
}


// Thunk action creator - returns functions rather than objects

export function SaveDB(transaction){
   const uri = `https://182.54.217.24:8080/user/${transaction.subjectid}`
   console.log("SAVE ",uri)
   const postbody = `subjectid=${transaction.subjectid}&record1=${transaction.records}`
   console.log("POST BODY", postbody)
   return function (dispatch){
        dispatch(SAVETODB_REQ(transaction))

        return fetch(uri, {method:'post',
                           headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"}, 
                            body:postbody})
               .then(response=>response.json())
               .then((json)=>dispatch(SAVETODB_SUCCESS(transaction.subjectid, json))) 
   }

}


export function LoadDB(subjectid){

    const uri = `https://182.54.217.24:8080/user/${subjectid}`
    console.log(uri)
    return function(dispatch){
        dispatch(LOADFMDB_REQ(subjectid))

        return fetch(uri, {method: "GET"})
		.then(response=>response.json())
		.then((json)=>dispatch(LOADFMDB_SUCCESS(subjectid, json)) )
    }

}
