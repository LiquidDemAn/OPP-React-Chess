import { useState, Fragment, useEffect } from 'react';
import { Board } from '../../modals/Board';
import { Cell } from '../../modals/Cell';
import { Player } from '../../modals/Player';
import { CellComponent } from '../cell';

interface Props {
	board: Board;
	setBoard: (board: Board) => void;
	currentPlayer: Player | null;
	swapPlayer: () => void;
}

export const BoardComponent = ({
	board,
	setBoard,
	currentPlayer,
	swapPlayer,
}: Props) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

	function onCellClick(cell: Cell) {
		if (
			selectedCell &&
			selectedCell !== cell &&
			selectedCell.figure?.canMove(cell)
		) {
			swapPlayer();
			selectedCell.moveFigure(cell);
			setSelectedCell(null);
			updateBoard();
		} else {
			if (cell.figure?.color === currentPlayer?.color) {
				setSelectedCell(cell);
			}
		}
	}

	function highlightCells() {
		board.highlightCells(selectedCell);
		updateBoard();
	}

	function updateBoard() {
		const newBoard = board.getCopyBoard();
		setBoard(newBoard);
	}

	useEffect(() => {
		highlightCells();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedCell]);

	return (
		<div>
			<h3>Current player {currentPlayer?.color}</h3>
			<div className='board'>
				{board.cells.map((row, index) => (
					<Fragment key={index}>
						{row.map((cell) => (
							<CellComponent
								click={onCellClick}
								key={cell.id}
								cell={cell}
								selected={
									cell.x === selectedCell?.x && cell.y === selectedCell?.y
								}
							/>
						))}
					</Fragment>
				))}
			</div>
		</div>
	);
};
