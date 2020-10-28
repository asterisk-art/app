/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';

import { useTheme } from './App';

export function Home() {
	const { theme, setTheme } = useTheme();

	return (
		<section>
			<h1>Home</h1>

			<button
				onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
				css={{
					background: 'var(--danger)', // just to show how different colors would work
					margin: '1rem',
					':focus': {
						outline: 'none',
						boxShadow: '0 0 0 2px var(--bg), 0 0 0 5px var(--focus)',
					},
				}}
			>
				Switch theme
			</button>
		</section>
	);
}
