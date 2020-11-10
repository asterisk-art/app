/** @jsxImportSource @emotion/core */

import { Phrase } from './Phrase';
import { ThemeBtn } from './primitives/ThemeBtn';

export function Header({ phrase, changePhrase }) {
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

			<ThemeBtn
				css={{
					position: 'absolute',
					top: '1rem',
					right: '1rem',
				}}
			/>

			<Phrase phrase={phrase} changePhrase={changePhrase} />
		</header>
	);
}
