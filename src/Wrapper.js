/** @jsxRuntime classic */
/** @jsx jsx */

import { Fragment, useState } from 'react';
import { jsx } from '@emotion/core';

import { Canvas } from './Canvas';
import { Sidebar } from './Sidebar';

export function Wrapper() {
	const [phrase, setPhrase] = useState('');
	const [canvas, setCanvas] = useState([]);

	return (
		<Fragment>
			<Canvas canvas={canvas} />
			<Sidebar phrase={phrase} setPhrase={setPhrase} canvas={canvas} setCanvas={setCanvas} />
		</Fragment>
	);
}
