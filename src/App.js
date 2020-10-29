/** @jsxRuntime classic */
/** @jsx jsx */

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect, useContext, createContext } from 'react';
import { jsx, Global } from '@emotion/core';

import { About } from './About';
import { Header } from './Header';
import { Editor } from './Editor';
import { Settings } from './Settings';
import COLORS from './tokens/colors.json';
import * as importedLayers from './layer';

// The theme context
const ThemeContext = createContext();
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('To use useTheme please wrap your component into <App />.');
	}
	return context;
};

// The global context for state lifted to this level
const GlobalContext = createContext();
export const useGlobal = () => {
	const context = useContext(GlobalContext);
	if (!context) {
		throw new Error('To use useGlobal please wrap your component into <App />.');
	}
	return context;
};

export function App() {
	const [theme, setTheme] = useState(
		window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	);
	const [layer, setLayer] = useState(importedLayers); // all supported layers and their settings
	const [settings, setSettings] = useState({}); // the app settings

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

		return window
			.matchMedia('(prefers-color-scheme: dark)')
			.removeEventListener('change', modeListener);
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<GlobalContext.Provider value={{ layer, setLayer, settings, setSettings }}>
				<Global
					styles={{
						':root': {
							...COLORS[theme],
						},
					}}
				/>
				<main
					css={{
						textRendering: 'optimizeLegibility',
						fontKerning: 'auto',
						MozOsxFontSmoothing: 'grayscale',
					}}
				>
					<Router>
						<Header />
						<Switch>
							<Route exact path="/" component={Editor} />
							<Route exact path="/about" component={About} />
							<Route exact path="/settings" component={Settings} />
						</Switch>
					</Router>
				</main>
			</GlobalContext.Provider>
		</ThemeContext.Provider>
	);
}
