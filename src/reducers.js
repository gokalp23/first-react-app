import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_PLAYERS_PENDING,
	REQUEST_PLAYERS_SUCCESS,
	REQUEST_PLAYERS_FAILED 
} from './constants.js';


const initialStateSearch = {
	searchField: ''
}

export const searchPlayers = (state=initialStateSearch, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField: action.payload});
		default:
			return state;
	}
}

const initialStatePlayers = {
	isPending: false,
	players: [],
	error: ''
}

export const requestPlayers = (state = initialStatePlayers, action={}) => {
	switch(action.type) {
		case REQUEST_PLAYERS_PENDING:
			return Object.assign({}, state, { isPending: true})
		case REQUEST_PLAYERS_SUCCESS:
			return Object.assign({}, state, { players: action.payload, isPending: false})
		case REQUEST_PLAYERS_FAILED:
			return Object.assign({}, state, { error: action.payload, isPending: false})
		default:
			return state;			
	
	}

}