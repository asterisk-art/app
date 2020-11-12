/** @jsxImportSource @emotion/react */

import { useTheme } from '../App';

function SunRay({ rotate, visible }) {
	return (
		<small
			css={{
				position: 'absolute',
				width: 2,
				height: visible ? '100%' : 0,
				background: '#da7c00',
				display: 'block',
				zIndex: -1,
				transition: '0.4s all, height 0.5s ease-in-out',
				transform: `rotate(${rotate}deg)`,
				'button:hover &': {
					transform: visible ? `rotate(${rotate - 20}deg)` : `rotate(${rotate - 45}deg)`,
				},
			}}
		/>
	);
}

export function ThemeBtn(props) {
	const { theme, setTheme } = useTheme();

	const handleSwitch = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<button
			onClick={handleSwitch}
			css={{
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				appearance: 'none',
				background: 'transparent',
				cursor: 'pointer',
				padding: 0,
				margin: 0,
				textTransform: 'none',
				overflow: 'hidden',
				borderStyle: 'none',
				textIndent: -9999,
				color: 'transparent',
				width: '2.2rem',
				height: '2.2rem',
				borderRadius: '100%',
				'&:focus:not(:focus-visible)': {
					outline: 'none',
				},
				'&:focus-visible': {
					boxShadow: '0 0 0 3px var(--bg), 0 0 0 5px var(--focus)',
				},
				'&:before, &:after': {
					content: '""',
					display: 'block',
					position: 'absolute',
					width: '1.45rem',
					height: '1.45rem',
					background: theme === 'light' ? '#da7c00' : '#e684af',
					borderRadius: '100%',
					border: theme === 'light' ? '3px solid var(--bg)' : 'none',
					transition: 'all 0.4s ease-in-out',
					zIndex: 2,
				},
				'&:after': {
					width: theme === 'light' ? 0 : '1.3rem',
					height: theme === 'light' ? 0 : '1.3rem',
					border: 'none',
					marginTop: '-15%',
					marginLeft: '-25%',
					background: 'var(--bg)',
				},
				'&:hover:after': {
					marginTop: '-25%',
					marginLeft: '-15%',
				},
			}}
			{...props}
		>
			Switch between dark and light mode
			<SunRay rotate={90} visible={theme === 'light'} />
			<SunRay rotate={120} visible={theme === 'light'} />
			<SunRay rotate={150} visible={theme === 'light'} />
			<SunRay rotate={180} visible={theme === 'light'} />
			<SunRay rotate={210} visible={theme === 'light'} />
			<SunRay rotate={240} visible={theme === 'light'} />
		</button>
	);
}
