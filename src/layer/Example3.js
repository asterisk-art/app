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
				<li>{circleAmount}</li>
				<li>{dotsAmount}</li>
				<li>
					<textarea defaultValue={JSON.stringify(SETTINGS, null, 2)} />
				</li>
			</ul>
		</div>
	);
}

export const settings = {
	name: 'Example 3',
	config: [
		{
			name: 'Number of circles',
			prop: 'circleAmount',
			type: 'number',
			max: 10,
		},
		{
			name: 'Amount of dots',
			prop: 'dotsAmount',
			type: 'number',
			min: 1,
			max: 20,
		},
	],
};
