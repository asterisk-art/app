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
		<label css={{ display: 'block' }}>
			Phrase
			<input type="text" value={phraseVal} onChange={(event) => changePhraseVal(event.target.value)} />
		</label>
	);
}
