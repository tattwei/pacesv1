
export function dbReq(state={}, action){

    switch(action.type){
	
        case 'ADDTITLE':
            return Object.assign({}, state, {
		title: action.title
            })
        case 'SAVETOSTORE':
            return Object.assign({}, state, {
                records: action.records
            })
        case 'LOADFMSTORE':
        default: return state
    }
}




