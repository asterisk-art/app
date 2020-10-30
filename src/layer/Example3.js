/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';

import { getSettings } from '../storage';

export function Layer({ circleAmount, dotsAmount }) {
	const SETTINGS = getSettings();

	return (
		<div>
			An example 3 layer that will use the data that was set in the sidebar and the stored settings
			<ul>
				<li>{JSON.stringify(circleAmount)}</li>
				<li>{JSON.stringify(dotsAmount)}</li>
				<li>{JSON.stringify(SETTINGS)}</li>
			</ul>
		</div>
	);
}

export const layerSettings = {
	name: 'Example 3',
	config: {
		circleAmount: {
			name: 'Number of circles',
			type: 'number',
			min: 0,
			max: 10,
		},
		dotsAmount: {
			name: 'Amount of dots',
			type: 'number',
			min: 1,
			max: 20,
		},
	},
};
