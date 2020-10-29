/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';

import { useGlobal } from './../App';

export function Example2() {
	const { layer, settings } = useGlobal();

	return (
		<div>
			An example 2 layer that will use the data that was set in the sidebar and the stored settings
		</div>
	);
}

export const settings = {
	name: 'example1',
	config: [
		{
			name: 'Color',
			type: 'color',
		},
		{
			name: 'Amount of dots',
			type: 'number',
			min: 1,
			max: 20,
		},
	],
};
