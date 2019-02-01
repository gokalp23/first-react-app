import React from 'react';

const Card = ({ name, email }) => {
	return (
		<div className='bg-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
			<img alt='playerphoto' src={`https://ui-avatars.com/api/?name=${name}&size=200`} />
			<div>
				<h3>{name}</h3>
				<p>{email}</p>
			</div>
		</div>
    );
}

export default Card;