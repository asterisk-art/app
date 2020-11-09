/** @jsxImportSource @emotion/core */

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect, useContext, createContext } from 'react';
import { Global } from '@emotion/core';

import { About } from './About';
import { COLORS } from './tokens';
import { Header } from './Header';
import { Editor } from './Editor';
import { Footer } from './Footer';
import { Settings } from './Settings';
import { getConfig } from './generateConfig';

// The theme context
const ThemeContext = createContext();
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('To use useTheme please wrap your component into <App />.');
	}
	return context;
};

export function App() {
	const [phrase, setPhrase] = useState(''); // the phrase we will use to generate our config for each layer
	const [canvas, setCanvas] = useState([]); // The layers which have been set onto the canvas
	const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

	// switch theme mode when os mode changes
	useEffect(() => {
		const modeListener = (event) => {
			if (event.matches) {
				setTheme('dark');
			} else {
				setTheme('light');
			}
		};
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', modeListener);

		return window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', modeListener);
	}, []);

	const regenCanvas = (canvas, phrase) => {
		const newCanvas = canvas.map(({ layerSettings, userSettings, subPhrase, ...rest }) => ({
			userSettings: getConfig(layerSettings, subPhrase ? subPhrase : phrase),
			layerSettings,
			subPhrase,
			...rest,
		}));
		setCanvas(newCanvas);
	};

	const changePhrase = (phrase) => {
		regenCanvas(canvas, phrase);
		setPhrase(phrase);
	};

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Global
				styles={{
					textRendering: 'optimizeLegibility',
					fontKerning: 'auto',
					MozOsxFontSmoothing: 'grayscale',
					'#root': {
						display: 'grid',
						gridTemplateRows: 'auto 1fr auto',
						height: '100%',
					},
					':root': {
						...COLORS[theme],
					},
				}}
			/>
			<Router>
				<Header phrase={phrase} changePhrase={changePhrase} />
				<Switch>
					<Route
						exact
						path="/"
						component={() => <Editor phrase={phrase} canvas={canvas} setCanvas={setCanvas} regenCanvas={regenCanvas} />}
					/>
					<Route exact path="/about" component={About} />
					<Route exact path="/settings" component={Settings} />
				</Switch>
				<Footer />
			</Router>
		</ThemeContext.Provider>
	);
}
