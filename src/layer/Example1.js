/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';

import { getSettings } from '../storage';

export function Layer({ strokeColor, strokeWidth, lineNumbers }) {
	const SETTINGS = getSettings();

	return (
		<div>
			<strong>Example 1</strong>
			<ul>
				<li css={{ background: strokeColor }}>{JSON.stringify(strokeColor)}</li>
				<li>{JSON.stringify(strokeWidth)}</li>
				<li>{JSON.stringify(lineNumbers)}</li>
				<li>{JSON.stringify(SETTINGS)}</li>
			</ul>
		</div>
	);
}

export const layerSettings = {
	name: 'Example 1',
	config: {
		strokeColor: {
			name: 'Stroke color',
			type: 'color',
		},
		strokeWidth: {
			name: 'Stroke width',
			type: 'number',
			min: 1,
			max: 5,
			steps: 0.5,
		},
		lineNumbers: {
			name: 'Number of lines',
			type: 'number',
			min: 1,
			max: 20,
		},
	},
};
