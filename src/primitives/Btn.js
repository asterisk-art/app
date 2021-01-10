/** @jsxImportSource @emotion/react */

import { SHAPE } from '../tokens';

export function Btn({children, primary, ...restProps}) {

	const buttonColor = () => {
		if(primary) {
			return restProps?.disabled ? 'lightgray' : 'var(--text)';
		}
		else {
			return restProps?.disabled ? 'lightgray' : 'var(--text)';
		}
	}

	return (
		<button
			{...restProps}
			css={{
			background: primary ? 'var(--primary)' : 'var(--alt-bg)',
			color: buttonColor(),
			appearance: 'none',
			border: 'none',
			borderRadius: SHAPE.borderRadius,
			padding: '0.5rem 1rem',
			cursor: 'pointer',

			':hover:not([disabled])': {
				textDecoration: 'underline',
			},

			':focus:active': {
				outline: 'none',
			},
		}}>
			{children}
		</button>
	);
}
