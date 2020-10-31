/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';

import { Navigation } from './Navigation';

export function Footer() {
	return (
		<footer
			css={{
				padding: '1rem 0',
				borderTop: '2px dashed var(--border)',
				textAlign: 'center',
			}}
		>
			<Navigation />
		</footer>
	);
}
