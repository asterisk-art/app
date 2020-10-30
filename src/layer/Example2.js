/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';

import { getSettings } from '../storage';

export function Layer({ color, dotsAmount }) {
	const SETTINGS = getSettings();

	return (
		<div>
			An example 2 layer that will use the data that was set in the sidebar and the stored settings
			<ul>
				<li>{color}</li>
				<li>{dotsAmount}</li>
				<li>
					<textarea defaultValue={JSON.stringify(SETTINGS, null, 2)} />
				</li>
			</ul>
		</div>
	);
}

export const settings = {
	name: 'Example 2',
	config: [
		{
			name: 'Color',
			prop: 'color',
			type: 'color',
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
