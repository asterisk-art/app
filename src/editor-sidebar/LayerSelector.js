/** @jsxImportSource @emotion/react */

import { Btn } from '../primitives/Btn';

export function LayerSelector({ layers, isDisabled, addLayer }) {
	return (
		<section>
			Choose a layers:
			<ul>
				{Object.entries(layers).map(([id, { Layer, layerSettings }]) => (
					<li key={id}>
						<Btn onClick={() => addLayer({ Layer, layerSettings })} disabled={isDisabled}>
							{layerSettings.name}
						</Btn>
					</li>
				))}
			</ul>
		</section>
	);
}
