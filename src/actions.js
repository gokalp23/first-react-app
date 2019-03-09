import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_PLAYERS_PENDING,
	REQUEST_PLAYERS_SUCCESS,
	REQUEST_PLAYERS_FAILED 
} from './constants.js';


export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestPlayers = () => (dispatch) => {
	dispatch({ type: REQUEST_PLAYERS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => dispatch({ type: REQUEST_PLAYERS_SUCCESS, payload: data}))
		.catch(err => dispatch({ type: REQUEST_PLAYERS_FAILED, payload: err}))
}