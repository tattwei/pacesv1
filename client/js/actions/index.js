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

const header = {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
		"x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiaXNBZG1pbiI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJuYW1lIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7ImlzQWRtaW4iOnRydWUsInBhc3N3b3JkIjp0cnVlLCJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiaXNBZG1pbiI6ZmFsc2UsInBhc3N3b3JkIjoicHciLCJuYW1lIjoiZXJpYyIsIl9pZCI6IjU5MTQyNDE0NTljNWRmOWQzNzI2Yzg5MSJ9LCJpYXQiOjE0OTQ0OTI0MzQsImV4cCI6MTQ5NDU3ODgzNH0.POGeAMTZMKiF2crzjn6PeXS6ZRk_r72lWBVL-QhyWsQ"
		}

export function SaveDB(transaction){
   const uri = `https://182.54.217.24:8080/user/${transaction.subjectid}`
   console.log("SAVE ",uri)
   const postbody = `subjectid=${transaction.subjectid}&record1=${transaction.records}`
   console.log("POST BODY", postbody)
   return function (dispatch){
        dispatch(SAVETODB_REQ(transaction))

        return fetch(uri, {method:'post',
                           headers: header,
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

        return fetch(uri, {method: "GET",
			   headers: header
			   })
		.then(response=>response.json())
		.then((json)=>dispatch(LOADFMDB_SUCCESS(subjectid, json)) )
    }

}
