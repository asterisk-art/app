/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';

import * as layers from './layer';

export function Sidebar({ phrase, setPhrase, canvas, setCanvas }) {
	return (
		<aside>
			<h2>Sidebar</h2>
			<label css={{ display: 'block' }}>
				Phrase
				<input type="text" value={phrase} onChange={(event) => setPhrase(event.target.value)} />
			</label>
			Choose a layer:
			<ul>
				{Object.entries(layers)
					.filter(
						([
							_,
							{
								settings: { name },
							},
						]) => !canvas.map(({ settings: { name } }) => name).includes(name)
					)
					.map(([id, { settings, Layer }]) => (
						<li key={id}>
							<button onClick={() => setCanvas([...canvas, { component: Layer, settings }])}>
								{settings.name}
							</button>
						</li>
					))}
			</ul>
			Your selected layer:
			<ul>
				{canvas.map(({ settings: { name, config } }) => (
					<li key={name}>
						{name}
						<button onClick={() => setCanvas([...canvas.filter((c) => c.settings.name !== name)])}>
							delete
						</button>
					</li>
				))}
			</ul>
		</aside>
	);
}
