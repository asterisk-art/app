/** @jsxImportSource @emotion/react */

import { useState } from 'react';

export function Phrase({ phrase, changePhrase }) {
	const [phraseVal, setPhrase] = useState(phrase);

	const changePhraseVal = (val) => {
		setPhrase(val);
		changePhrase(val);
	};

	return (
		<label>
			<span>Phrase</span>
			<input type="text" value={phraseVal} onChange={(event) => changePhraseVal(event.target.value)} />
		</label>
	);
}
