/** @jsxRuntime classic */
/** @jsx jsx */

import { useState } from 'react';
import { jsx } from '@emotion/core';

import { Canvas } from './Canvas';
import { Sidebar } from './Sidebar';

export function Editor() {
	// we hoist the state here so only sidebar and the canvas is re-rendered when it changes
	const [phrase, setPhrase] = useState(''); // the phrase we will use to generate our config for each layer
	const [canvas, setCanvas] = useState([]); // The layers which have been set onto the canvas

	return (
		<div
			css={{
				display: 'grid',
				gridTemplateColumns: '1fr 18.75rem',
			}}
		>
			<Canvas canvas={canvas} />
			<Sidebar phrase={phrase} setPhrase={setPhrase} canvas={canvas} setCanvas={setCanvas} />
		</div>
	);
}
