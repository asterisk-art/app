/** @jsxImportSource @emotion/core */

import { getSettings } from '../storage';

export function Layer({ color, dotsAmount }) {
	const SETTINGS = getSettings();

	return (
		<div>
			An example 2 layer that will use the data that was set in the sidebar and the stored settings
			<ul>
				<li css={{ background: color }}>{JSON.stringify(color)}</li>
				<li>{JSON.stringify(dotsAmount)}</li>
				<li>{JSON.stringify(SETTINGS)}</li>
			</ul>
		</div>
	);
}

export const layerSettings = {
	name: 'Example 2',
	config: {
		color: {
			name: 'Color',
			type: 'color',
		},
		dotsAmount: {
			name: 'Amount of dots',
			type: 'number',
			min: 1,
			max: 20,
		},
	},
};
