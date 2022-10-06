import React from 'react';
import { Cell } from '../../modals/Cell';

interface Props {
	cell: Cell;
	selected: boolean;
	click: (cell: Cell) => void;
}

export const CellComponent = ({ cell, selected, click }: Props) => {
	return (
		<div
			onClick={() => click(cell)}
			className={`cell ${cell.color} ${selected ? 'selected' : ''} ${
				cell.available && cell.figure ? 'cell__attack' : ''
			}`}
		>
			{cell.available && !cell.figure && <div className='available' />}
			{cell.figure?.logo && <img src={cell.figure.logo} alt='' />}
		</div>
	);
};
