// ACTION CREATORS

import fetch from 'isomorphic-fetch'

export const REQUEST_GETTX = 'REQUEST_GETTX'
export const RECEIVE_GETTX = 'RECEIVE_GETTX'

function requestGetTx (subjectid){
	return{
		type: REQUEST_GETTX,
		subjectid: subjectid
	}
}

function receiveGetTx(subjectid, json){
	return{
		type: RECEIVE_GETTX,
		subjectid: subjectid,
		posts: json.data.children.map(child=>child.data),
		receivedAt: Date.now()
	}
}

// Thunk action creator - returns functions rather than objects
// store.dispatch(fecthPosts('reactjs'))

export function fetchGet(subjectid){

	return function(dispatch){
		dispatch(requestGetTx(subjectid))

		return fetch('https:///182.54.217.24:8080/user/${subjectid}'))
			.then(response=>response.json())
			.then(json=>dispatch(receiveGetTx(subjectid, json)))
		
	}

}
