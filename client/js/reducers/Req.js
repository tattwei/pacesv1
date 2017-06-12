
export function storeReq(state={}, action){

    switch(action.type){

	case 'AUTHENTICATE':
	    return Object.assign({}, state, {
		   tokenized: action.tokenized,
                   token: action.token
	    })
        case 'RESET':
            return Object.assign({}, state, {
                   numrecords: action.numrecords,
                   records: action.records,
                   success: action.success
            })

        case 'LOADFMDB_REQ':
            return Object.assign({}, state,{
                  
            })

        case 'LOADFMDB_SUCCESS':
            return Object.assign({}, state, {
                   success: action.success,
                   message: action.message,
                   numrecords: action.numrecords,
                   records: action.records
            })

        case 'LOADFMDB_FAILURE':
	    return Object.assign({}, state, {
                   success: action.success,
                   message: action.message,
                   numrecords: action.numrecords,
                   records: action.records
            })

        case 'SAVETODB_REQ':
            return Object.assign({}, state, {
            })

        case 'SAVETODB_SUCCESS':
             return Object.assign({}, state,{
                   success: action.success,
                   message: action.message,
                   numrecords: action.numrecords,
                   records: action.records
             })

        case 'SAVETODB_FAILURE':
             return Object.assign({}, state,{
                   success: action.success,
                   message: action.message,
                   numrecords: action.numrecords,
                   records: action.records
             })

        case 'ADDTITLE':
            return Object.assign({}, state, {
		title: action.title
            })

        case 'SAVETOSTORE':
            return Object.assign({}, state, {
                subjectid: action.subjectid,
                records: action.records
            })

        case 'LOADFMSTORE':
        default: return state
    }
}




