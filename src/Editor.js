/** @jsxImportSource @emotion/core */

import { Canvas } from './Canvas';
import { Sidebar } from './Sidebar';

export function Editor({ phrase, canvas, setCanvas, regenCanvas }) {
	return (
		<main
			css={{
				display: 'grid',
				gridTemplateColumns: '1fr 18.75rem',
			}}
		>
			<Canvas canvas={canvas} />
			<Sidebar phrase={phrase} canvas={canvas} setCanvas={setCanvas} regenCanvas={regenCanvas} />
		</main>
	);
}
