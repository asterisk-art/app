/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';

import { useTheme } from './App';
import { Phrase } from './Phrase';

export function Header({ phrase, changePhrase }) {
	const { theme, setTheme } = useTheme();

	return (
		<header
			css={{
				position: 'relative',
				borderBottom: '2px dashed var(--border)',
				paddingBottom: '1rem',
				textAlign: 'center',
			}}
		>
			<h1
				css={{
					margin: 0,
				}}
			>
				Logo
			</h1>

			<button
				onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
				css={{
					position: 'absolute',
					top: '1rem',
					right: '1rem',
					background: 'var(--danger)', // just to show how different colors would work
					margin: 0,
					':focus': {
						outline: 'none',
						boxShadow: '0 0 0 2px var(--bg), 0 0 0 5px var(--focus)',
					},
				}}
			>
				Switch theme
			</button>

			<Phrase phrase={phrase} changePhrase={changePhrase} />
		</header>
	);
}
