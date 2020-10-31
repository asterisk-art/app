/** @jsxRuntime classic */
/** @jsx jsx */

import { useState } from 'react';
import { jsx } from '@emotion/core';

export function Phrase({ phrase, changePhrase }) {
	const [phraseVal, setPhrase] = useState(phrase);

	const changePhraseVal = (val) => {
		setPhrase(val);
		changePhrase(val);
	};

	return (
		<label
			css={{
				display: 'inline-block',
				margin: '1rem 1rem 0.5rem 1rem',
			}}
		>
			<span
				css={{
					display: 'block',
					fontSize: '1.2rem',
				}}
			>
				Phrase
			</span>
			<input
				type="text"
				value={phraseVal}
				onChange={(event) => changePhraseVal(event.target.value)}
				css={{
					maxWidth: 'calc(100vw - 2rem)',
					width: '30em',
					fontSize: '2rem',
				}}
			/>
		</label>
	);
}
