import React, { useEffect, useRef, useState } from 'react';
import { Colors } from '../../modals/Colors';
import { Player } from '../../modals/Player';

interface Props {
	currentPlayer: Player | null;
	restart: () => void;
}

export const Timer = ({ currentPlayer, restart }: Props) => {
	const [blackTime, setBlackTime] = useState(300);
	const [whiteTime, setWhiteTime] = useState(300);

	const timer = useRef<null | ReturnType<typeof setInterval>>(null);

	function startTimer() {
		if (timer.current) {
			clearInterval(timer.current);
		}

		const callback =
			currentPlayer?.color === Colors.WHITE
				? decrementWhiteTimer
				: decrementBlackTimer;

		timer.current = setInterval(callback, 1000);
	}

	function decrementBlackTimer() {
		setBlackTime((prev) => prev - 1);
	}

	function decrementWhiteTimer() {
		setWhiteTime((prev) => prev - 1);
	}

	function handleRestart() {
		setWhiteTime(300);
		setBlackTime(300);
		restart();
	}

	useEffect(() => {
		startTimer();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPlayer]);

	return (
		<div>
			<div>
				<button onClick={handleRestart}>Restart game</button>
			</div>
			<h2>Black Time: {blackTime}</h2>
			<h2>White Time: {whiteTime}</h2>
		</div>
	);
};
