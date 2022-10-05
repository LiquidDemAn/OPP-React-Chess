import React, { useEffect, useState } from 'react';
import './App.css';
import { BoardComponent } from './components/board';
import { Board } from './modals/Board';

function App() {
	const [board, setBoard] = useState(new Board());

	function restart() {
		const newBoard = new Board();
		newBoard.initCells();
		newBoard.addFigures();
		setBoard(newBoard);
	}

	useEffect(() => {
		restart();
	}, []);

	return (
		<div className='app'>
			<BoardComponent board={board} setBoard={setBoard} />
		</div>
	);
}

export default App;
