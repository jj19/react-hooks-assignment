import { useRef, useState } from 'react';
//Bootstrap has already been downloaded for you
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './Player';
function ScoreBoard() {
	const [players, setPlayer] = useState([]);
	const playerNameRef = useRef();
	function addPlayer() {
		let currentPlayerText = playerNameRef.current.value || undefined;

		setPlayer([
			...players,
			{
				name: currentPlayerText,
				id: Date.now(),
			},
		]);
		playerNameRef.current.value = '';
	}
	return (
		<div className='container'>
			<div className='row  text-center'>
				<h1>ScoreBoard</h1>
			</div>
			<div className='row'>
				<div className='col-md-4 m-auto'>
					<div className='input-group mb-3'>
						{/* Modify input so that it is either connected to a ref or some kind of input state */}

						<input
							ref={playerNameRef}
							type='text'
							className='form-control'
							placeholder='New Player Name'
							aria-label='New Player Name'
							aria-describedby='addPlayer'
							required
						/>
						{/* add Add Player event handling to this button */}
						<button
							className='btn btn-outline-primary'
							type='button'
							id='addPlayer'
							onClick={addPlayer}>
							Add Player
						</button>
					</div>
				</div>
			</div>
			<div className='row m-auto'>
				{players.map((players) => {
					return (
						<div key={players.id} className='col-md-4'>
							{/* Make sure to pass the unique id as a key */}
							<Player
								key={players.id}
								name={players.name}
								// Anonymous arrow function that we can hold off activating
								// until the user clicks a button inside of the Player component
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ScoreBoard;
