import React from "react";


//it's even better within the parameters
const Card = ({name, email, id}) => {
	//destructuring
	//const {name, email, id} = props
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt='robots' src={`https://robohash.org/${id}?set=set4;size=200x200;bgset=bg1`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;