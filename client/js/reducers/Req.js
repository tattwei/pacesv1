
export function storeReq(state={}, action){

    switch(action.type){

        case 'LOADFMDB_REQ':
            return Object.assign({}, state,{
                  subjectid: action.subjectid
            })

        case 'LOADFMDB_SUCCESS':
            return Object.assign({}, state, {
                   records: action.records
            })

        case 'LOADFMDB_FAILURE':
	    return state

        case 'SAVETODB_REQ':
            return Object.assign({}, state, {
                subjectid: action.subjectid,
                records: action.records
            })

        case 'SAVETODB_SUCCESS':
             return Object.assign({}, state,{
                 subjectid: action.subjectid
             })

        case 'SAVETODB_FAILURE':


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




