/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';

import * as layers from './layer';

export function Sidebar({ phrase, setPhrase, canvas, setCanvas }) {
	const removeLayer = (key) => {
		const newCanvas = [...canvas];
		newCanvas.splice(key, 1);
		setCanvas(newCanvas);
	};

	return (
		<aside>
			<h2>Sidebar</h2>
			<label css={{ display: 'block' }}>
				Phrase
				<input type="text" value={phrase} onChange={(event) => setPhrase(event.target.value)} />
			</label>
			Choose a layer:
			<ul>
				{Object.entries(layers).map(([id, { settings, Layer }]) => (
					<li key={id}>
						<button onClick={() => setCanvas([...canvas, { component: Layer, settings }])}>
							{settings.name}
						</button>
					</li>
				))}
			</ul>
			Your selected layer:
			<ul>
				{canvas.map(({ settings: { name, config } }, i) => (
					<li key={i}>
						{name}
						<button onClick={() => removeLayer(i)}>delete</button>
					</li>
				))}
			</ul>
		</aside>
	);
}
