/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Global } from '@emotion/core';
import { Fragment, useState, useEffect } from 'react';

import COLORS from './tokens/colors.json';

export function App() {
	const [theme, setTheme] = useState(
		window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	);

	useEffect(() => {
		const modeListener = (event) => {
			if (event.matches) {
				setTheme('dark');
			} else {
				setTheme('light');
			}
		};
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', modeListener);

		return window
			.matchMedia('(prefers-color-scheme: dark)')
			.removeEventListener('change', modeListener);
	}, []);

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
