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
	const [theme, setTheme] = useState(
		window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	);

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
		</ThemeContext.Provider>
	);
}
