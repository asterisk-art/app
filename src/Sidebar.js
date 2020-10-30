/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';

import * as layers from './layer';
import { getConfig } from './generateConfig';

export function Sidebar({ phrase, setPhrase, canvas, setCanvas }) {
	const addLayer = (layer) => {
		layer.userSettings = getConfig(layer.layerSettings.config, phrase);
		setCanvas([...canvas, layer]);
	};

	const removeLayer = (key) => {
		const newCanvas = [...canvas];
		newCanvas.splice(key, 1);
		setCanvas(newCanvas);
	};

	const changePhrase = (phrase) => {
		const newCanvas = canvas.map(({ layerSettings, userSettings, ...rest }) => ({
			userSettings: getConfig(layerSettings.config, phrase),
			layerSettings,
			...rest,
		}));
		setCanvas(newCanvas);
		setPhrase(phrase);
	};

	return (
		<aside>
			<h2>Sidebar</h2>
			<label css={{ display: 'block' }}>
				Phrase
				<input type="text" value={phrase} onChange={(event) => changePhrase(event.target.value)} />
			</label>
			Choose a layer:
			<ul>
				{Object.entries(layers).map(([id, { Layer, layerSettings }]) => (
					<li key={id}>
						<button onClick={() => addLayer({ Layer, layerSettings })} disabled={!phrase}>
							{layerSettings.name}
						</button>
					</li>
				))}
			</ul>
			Your selected layer:
			<ul>
				{canvas.map(({ layerSettings: { name }, userSettings }, i) => (
					<li key={i}>
						{name}
						<button onClick={() => removeLayer(i)}>delete</button>
						<textarea defaultValue={JSON.stringify(userSettings, null, 2)} />
					</li>
				))}
			</ul>
		</aside>
	);
}
