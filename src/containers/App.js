import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import './App.css';


class App extends Component {
	constructor(){
		super()
		this.state = {
			players: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ players: users }));
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value })
		
		
	}
	render() {
		const { players, searchfield } = this.state;
		const filteredPlayers = players.filter(player => {
			return player.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		if (!players.length){
			return <h1 className='tc'> Loading... </h1>
		}else {
			return (
			 <div className='tc'>
				<h1 className='f1'>HoopFriends</h1>
				<SearchBox searchChange = { this.onSearchChange }/>
				<CardList players = { filteredPlayers }/>
			 </div>
			
		    );
		}
		
	}
		
	
	
}

export default App;