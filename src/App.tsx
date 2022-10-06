import React, { useEffect, useState } from 'react';
import './App.css';
import { BoardComponent } from './components/board';
import { LostFigures } from './components/lost-figures';
import { Board } from './modals/Board';
import { Colors } from './modals/Colors';
import { Player } from './modals/Player';

function App() {
	const [board, setBoard] = useState(new Board());

	const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
	const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
	const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

	function restart() {
		const newBoard = new Board();
		newBoard.initCells();
		newBoard.addFigures();
		setBoard(newBoard);
		setCurrentPlayer(whitePlayer);
	}

	function swapPlayer() {
		setCurrentPlayer(
			currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
		);
	}

	useEffect(() => {
		restart();
	}, []);

	return (
		<div className='app'>
			<BoardComponent
				board={board}
				setBoard={setBoard}
				currentPlayer={currentPlayer}
				swapPlayer={swapPlayer}
			/>
			<div>
				<LostFigures
					title='Lost Black Figures:'
					figures={board.lostBlackFigures}
				/>
				<LostFigures
					title='Lost White Figures:'
					figures={board.lostWhiteFigures}
				/>
			</div>
		</div>
	);
}

export default App;
