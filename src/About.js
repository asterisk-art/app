/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';

import { version } from '../package.json';

export function About() {
	return (
		<div>
			<h1>About</h1>
			v{version}
		</div>
	);
}
