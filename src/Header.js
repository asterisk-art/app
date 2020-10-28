/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';

import { useTheme } from './App';
import { Navigation } from './Navigation';

export function Header() {
	const { theme, setTheme } = useTheme();

	return (
		<header>
			<h1>Logo</h1>

			<Navigation />

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
		</header>
	);
}
