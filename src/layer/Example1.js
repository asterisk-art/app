/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';

import { useGlobal } from './../App';

export function Example1() {
	const { layer, settings } = useGlobal();

	return (
		<div>
			An example 1 layer that will use the data that was set in the sidebar and the stored settings
		</div>
	);
}

export const settings = {
	name: 'example1',
	config: [
		{
			name: 'Stroke color',
			type: 'color',
		},
		{
			name: 'Stroke width',
			type: 'range',
			from: 1,
			to: 5,
			steps: 0.5,
		},
		{
			name: 'Number of lines',
			type: 'number',
			min: 1,
		},
	],
};
