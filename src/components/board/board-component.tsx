import React from 'react';
import { Board } from '../../modals/Board';
import { CellComponent } from '../cell';

interface Props {
	board: Board;
	setBoard: (board: Board) => void;
}

export const BoardComponent = ({ board, setBoard }: Props) => {
	console.log(board.cells);

	return (
		<div className='board'>
			{board.cells.map((row, index) => (
				<React.Fragment key={index}>
					{row.map((cell) => (
						<CellComponent key={cell.id} cell={cell} />
					))}
				</React.Fragment>
			))}
		</div>
	);
};
