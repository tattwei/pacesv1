const REQUEST_GETTX = 'REQUEST_GETTX'
const RECEIVE_GETTX = 'RECEIVE_GETTX'

function gets(state={}, action){

	switch(action.type){
	
		case REQUEST_GETTX:
			return Object.assign({}, state,{
				isFetching: true,
				subjectid: action.subjectid
			})
		
		case RECEIVE_GETTX:
			return Object.assign({}, state, {
				isFetching: false, 
				subjectid: action.subjectid,
				records: action.gets, 
				lastUpdated: action.receivedAt
			})
		default: return state
	}
}


function getsApp(state={}, action) {
	switch(action.type){
		case REQUEST_GETTX:
		case RECEIVE_GETTX:
			return Object.assign({}, state,{
				transactions: gets(state.transaction, action )
			})
		default: return state
			
	}
}

export default getsApp

