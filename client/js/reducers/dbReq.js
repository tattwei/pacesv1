
export function dbReq(state={}, action){

    switch(action.type){
	
        case 'ADDTITLE':
            return Object.assign({}, state, {
		title: action.title
            })
	case 'LOADFMSTORE':
	    return Object.assign({}, state,{
		records: "Loaded"  // later to find out how to do other stuff here
	    })
		
	case 'SAVETOSTORE':
	    return Object.assign({}, state, {
		records: action.records
	    })
        default: return state
    }
}




