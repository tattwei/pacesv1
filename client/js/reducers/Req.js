
export function storeReq(state={}, action){

    switch(action.type){

       case 'LOADFMDB_REQ':
          return state

       case 'LOADFMDB_SUCCESS':
          return Object.assign({}, state, {
                 records: action.records
          })

       case 'LOADFMDB_FAILURE':
	  return state

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




