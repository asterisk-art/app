/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';

import { getSettings } from '../storage';

export function Example1({ strokeColor, strokeWidth, lineNumbers }) {
	const SETTINGS = getSettings();

	return (
		<div>
			An example 1 layer that will use the data that was set in the sidebar and the stored settings
			<ul>
				<li>{strokeColor}</li>
				<li>{strokeWidth}</li>
				<li>{lineNumbers}</li>
				<li>
					<textarea defaultValue={JSON.stringify(SETTINGS, null, 2)} />
				</li>
			</ul>
		</div>
	);
}

export const settings = {
	name: 'Example 1',
	config: [
		{
			name: 'Stroke color',
			prop: 'strokeColor',
			type: 'color',
		},
		{
			name: 'Stroke width',
			prop: 'strokeWidth',
			type: 'range',
			from: 1,
			to: 5,
			steps: 0.5,
		},
		{
			name: 'Number of lines',
			prop: 'lineNumbers',
			type: 'number',
			min: 1,
		},
	],
};
