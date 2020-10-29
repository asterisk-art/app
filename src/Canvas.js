/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';

export function Canvas({ canvas }) {
	return (
		<div>
			<h2>Canvas</h2>
			{canvas.map(({ component: Layer, settings: { name } }) => (
				<Layer key={name} />
			))}
		</div>
	);
}
