import React from 'react';
import { Cell } from '../../modals/Cell';

interface Props {
	cell: Cell;
}

export const CellComponent = ({ cell }: Props) => {
	return (
		<div className={`cell ${cell.color}`}>
			{cell.figure?.logo && <img src={cell.figure.logo} alt='' />}
		</div>
	);
};
