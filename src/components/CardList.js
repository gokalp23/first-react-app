import React from 'react';
import Card from './Card';

const CardList = ({ players }) => {
	return (
		<div>
			{
				players.map((player, i) => {
		          return (
			         <Card 
			          key={i} 
		              id={players[i].id} 
					  name={players[i].name} 
					  email={players[i].email}/>
		             
		            );
	            })
			}
		</div>
		
	);
}

export default CardList;