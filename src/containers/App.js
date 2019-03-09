import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

import { setSearchField, requestPlayers } from '../actions'

const mapStateToProps = (state) => {
	return {
		searchField: state.searchPlayers.searchField,
		players: state.requestPlayers.players,
		isPending: state.requestPlayers.isPending,
		error: state.requestPlayers.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestPlayers: () => dispatch(requestPlayers())
	}
}

class App extends Component {

	componentDidMount(){
		this.props.onRequestPlayers();
	}

	
	render() {
		const { searchField, onSearchChange, players, isPending } = this.props;
		const filteredPlayers = players.filter(player => {
			return player.name.toLowerCase().includes(searchField.toLowerCase())
		})
		if (isPending){
			return <h1 className='tc'> Loading... </h1>
		}else {
			return (
			 <div className='tc'>
				<h1 className='f1'>HoopFriends</h1>
				<SearchBox searchChange = { onSearchChange }/>
				<CardList players = { filteredPlayers }/>
			 </div>
			
		    );
		}
		
	}
		
	
	
}

export default connect(mapStateToProps, mapDispatchToProps)(App);