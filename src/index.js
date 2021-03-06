import * as serviceWorker from './serviceWorker';
import { Global } from '@emotion/react';
import ReactDOM from 'react-dom';
import { App } from './App';
import React from 'react';

import { normalize } from './assets/reset';

ReactDOM.render(
	<React.StrictMode>
		<Global styles={normalize} />
		<Global
			styles={{
				'html, body': {
					height: '100%',
				},
				body: {
					fontFamily:
						'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
					lineHeight: 1.2,
					margin: 0,
					padding: 0,
					color: 'var(--text)',
					background: 'var(--bg)',
					transition: 'background 0.2s ease, color 0.2s ease',
				},
				a: {
					color: 'var(--text)',
				},
				'*, *:before, *:after': {
					boxSizing: 'border-box',
				},
			}}
		/>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
