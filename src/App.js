/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Global } from '@emotion/core';
import { Fragment, useState } from 'react';

import COLORS from './tokens/colors.json';

export function App() {
	const [theme, setTheme] = useState('light');

	return (
		<Fragment>
			<Global
				styles={{
					':root': {
						...COLORS[theme],
					},
				}}
			/>
			<main
				css={{
					textRendering: 'optimizeLegibility',
					fontKerning: 'auto',
					MozOsxFontSmoothing: 'grayscale',
				}}
			>
				Hello world
				<button
					onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
					css={{ background: 'var(--action)' }}
				>
					Switch theme
				</button>
			</main>
		</Fragment>
	);
}
