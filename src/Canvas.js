/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';

import { useGlobal } from './App';

export function Canvas({ canvas }) {
	const { layer, settings } = useGlobal();

	return (
		<div>
			<h2>Canvas</h2>
		</div>
	);
}
