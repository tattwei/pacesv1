
function gets(state={}, action){

	switch(action.type){
	
		case LOADFMSTORE:
			return Object.assign({}, state,{
				records: "Loaded"  // later to find out how to do other stuff here
			})
		
		case SAVETOSTORE:
			return Object.assign({}, state, {
				records: action.records
			})
		default: return state
	}
}


function dbreq(state={}, action) {
	switch(action.type){
		case LOADFMSTORE:
		case SAVETOSTORE:
			return Object.assign({}, state,{
				transaction: dbreq(state.records, action )
			})
		default: return state
			
	}
}

export default gets

