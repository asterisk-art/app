/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import { Canvas } from './Canvas';
import { Sidebar } from './Sidebar';
import { getConfig } from './generateConfig';

export function Editor() {
	const [phrase, setPhrase] = useState(''); // the phrase we will use to generate our config for each layer
	const [canvas, setCanvas] = useState([]); // The layers which have been set onto the canvas

	const regenCanvas = (canvas, phrase) => {
		const newCanvas = canvas.map(({ layerSettings, userSettings, subPhrase, ...rest }) => ({
			userSettings: getConfig(layerSettings, subPhrase ? subPhrase : phrase),
			layerSettings,
			subPhrase,
			...rest,
		}));
		setCanvas(newCanvas);
	};

	const changePhrase = (phrase) => {
		regenCanvas(canvas, phrase);
		setPhrase(phrase);
	};

	return (
		<main
			css={{
				display: 'grid',
				gridTemplateColumns: '1fr 18.75rem',
			}}
		>
			<Canvas canvas={canvas} />
			<Sidebar changePhrase={changePhrase} phrase={phrase} canvas={canvas} setCanvas={setCanvas} regenCanvas={regenCanvas} />
		</main>
	);
}
