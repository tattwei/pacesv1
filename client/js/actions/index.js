// ACTION CREATORS

import fetch from 'isomorphic-fetch'

export function ADDTITLE(title){
    return{
        type: 'ADDTITLE',
        title: title
    }

}

export function SAVETOSTORE (records){
    return{
        type: 'SAVETOSTORE',
        records: records
    }
}

export function LOADFMSTORE(){
    return{
        type: 'LOADFMSTORE',
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




// Thunk action creator - returns functions rather than objects


export function LoadDB(subjectid){

    const uri = `https://182.54.217.24:8080/user/${subjectid}`
    console.log(uri)
    return function(dispatch){
        dispatch(LOADFMDB_REQ(subjectid))

        return fetch(`https://182.54.217.24:8080/user/${subjectid}`)
		.then(response=>response.json())
		.then((json)=>dispatch(LOADFMDB_SUCCESS(subjectid, json)) )
    }

}
