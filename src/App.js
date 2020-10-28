/** @jsxRuntime classic */
/** @jsx jsx */

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect, useContext, createContext } from 'react';
import { jsx, Global } from '@emotion/core';

import { Home } from './Home';
import { About } from './About';
import { Settings } from './Settings';
import { Navigation } from './Navigation';
import COLORS from './tokens/colors.json';

const ThemeContext = createContext();
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('To use useTheme please wrapp your component into <App />.');
	}
	return context;
};

export function App() {
	const [theme, setTheme] = useState(
		window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	);

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
					<Navigation />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/settings" component={Settings} />
					</Switch>
				</Router>
			</main>
		</ThemeContext.Provider>
	);
}
