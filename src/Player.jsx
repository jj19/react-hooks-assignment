// import React from "react";
import { useState } from 'react';
function Player(prop) {
	const [score, setPoints,] = useState(0);


	function addPoints() {
		setPoints(score + 1);
	}

	function takePoints() {
    if(score > 0){
		setPoints(score - 1);
    }}

	return (
		<div className='container-fluid border border-dark p-3 m-3'>
			<div className='row justify-content-center'>
				{/* Render Name here */}
				<h2 key={prop.id} className='text-center'>
					{prop.name}
				</h2>
			</div>
			<div className='row justify-content-center'>
				<p className='text-center fs-3'>{score}</p>
			</div>
			<div className='row justify-content-center'>
				<div className='col-md-6'>
					{/* Add increment event handler */}
					<button onClick={addPoints} className='btn btn-outline-primary w-100'>
						Add Point +
					</button>
				</div>
				<div className='col-md-6'>
					{/* Add decrement event handler */}
					<button onClick={takePoints} className='btn btn-outline-danger w-100'>
						Remove Point -
					</button>
				</div>
        <button onClick={prop.removePlayer} className='mt-4 btn btn-warning w-100'>Remove Player</button>
			</div>
		</div>
	);
}
export default Player;
