import logo from '../../assets/black-king.png';
import { Cell } from './../Cell';
import { Colors } from '../Colors';

export enum FigureName {
	FIGURE = 'figure',
	KING = 'king',
	KNIGHT = 'knight',
	PAWN = 'pawn',
	QUEEN = 'queen',
	ROOK = 'rook',
	BISHOP = 'bishop',
}

export class Figure {
	color: Colors;
	logo: typeof logo | null;
	cell: Cell;
	name: FigureName;
	id: number;

	constructor(color: Colors, cell: Cell) {
		this.color = color;
		this.cell = cell;
		this.cell.figure = this;
		this.logo = null;
		this.name = FigureName.FIGURE;
		this.id = Math.random();
	}

	canMove(target: Cell) {
		return true;
	}

    moveFigure(target: Cell) {
         
    }
}
