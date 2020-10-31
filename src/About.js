/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';

import { version } from '../package.json';

export function About() {
	return (
		<main>
			<h2>About</h2>v{version}
		</main>
	);
}
