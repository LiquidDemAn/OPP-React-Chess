import React from 'react';
import { Figure } from '../../modals/figures/Figure';

interface Props {
	title: string;
	figures: Figure[];
}

export const LostFigures = ({ title, figures }: Props) => {
	return (
		<div className='lost'>
			<h3>{title}</h3>
			<div className='lost-figures__icons'>
				{figures.map((figure) => (
					<div key={figure.id}>
						{figure.logo && (
							<img width={20} height={20} src={figure.logo} alt={figure.name} />
						)}
					</div>
				))}
			</div>
		</div>
	);
};
