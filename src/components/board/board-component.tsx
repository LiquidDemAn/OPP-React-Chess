import { useState, Fragment, useEffect } from 'react';
import { Board } from '../../modals/Board';
import { Cell } from '../../modals/Cell';
import { CellComponent } from '../cell';

interface Props {
	board: Board;
	setBoard: (board: Board) => void;
}

export const BoardComponent = ({ board, setBoard }: Props) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

	function onCellClick(cell: Cell) {
		if (
			selectedCell &&
			selectedCell !== cell &&
			selectedCell.figure?.canMove(cell)
		) {
			selectedCell.moveFigure(cell);
			setSelectedCell(null);
			updateBoard();
		} else {
			setSelectedCell(cell);
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
	);
};
