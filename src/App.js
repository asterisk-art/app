/** @jsxImportSource @emotion/react */

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect, useContext, createContext } from 'react';
import { Global } from '@emotion/react';

import { About } from './About';
import { COLORS } from './tokens';
import { EmptyState } from './EmptyState';
import { Editor } from './Editor';
import { Navigation } from './Navigation';
import { Settings } from './Settings';

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

		return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', modeListener);
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Global
				styles={{
					textRendering: 'optimizeLegibility',
					fontKerning: 'auto',
					MozOsxFontSmoothing: 'grayscale',
					'#root': {
						display: 'grid',
						gridAutoFlow: 'column',
						gridTemplateColumns: 'minmax(min-content, 320px)',
						height: '100%',
					},
					':root': {
						...COLORS[theme],
					},
				}}
			/>
			<Router>
				<Navigation />
				<Switch>
					<Route exact path="/" component={EmptyState} />
					<Route exact path="/new" component={Editor} />
					<Route exact path="/about" component={About} />
					<Route exact path="/settings" component={Settings} />
				</Switch>
			</Router>
		</ThemeContext.Provider>
	);
}
