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



// Thunk action creator - returns functions rather than objects
// store.dispatch(fecthPosts('reactjs'))


//export function fetchGet(subjectid){

//	return function(dispatch){
//		dispatch(requestGetTx(subjectid))

//		return fetch('https:///182.54.217.24:8080/user/${subjectid}'))
//			.then(response=>response.json())
//			.then(json=>dispatch(receiveGetTx(subjectid, json)))
		
//	}

//}
