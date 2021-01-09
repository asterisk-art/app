/** @jsxImportSource @emotion/react */

import { Link, useLocation } from 'react-router-dom';
import { NavIcon } from './NavIcon';

export function Navigation() {
	const { pathname } = useLocation();

	const mainNav = [
		{
			name: 'New artwork',
			url: '/new',
			icon: 'a',
		},
	];

	const secondaryNav = [
		{
			name: 'Settings',
			url: '/settings',
			icon: 'b',
		},
		{
			name: 'About',
			url: '/about',
			icon: 'c',
		},
	];

	const linkStyle = {
		textDecoration: 'none',
		':hover': {
			textDecoration: 'none',
		},
	};

	const listStyle = {
		listStyle: 'none',
		display: 'block',
		padding: '0 5rem 0 0',
		margin: 0,
	};

	return (
		<aside
			css={{
				background: 'var(--alt-bg)',
				padding: '3.75rem 2rem',
			}}
		>
			<header>
				<h1
					css={{
						fontSize: '1rem',
						margin: '0',
						fontWeight: 'medium',
					}}
				>
					<NavIcon src={'z'} active={pathname === '/'} />
					<Link to={'/'} css={linkStyle}>
						asterisk.art
					</Link>
				</h1>
			</header>
			<hr />
			<nav>
				<ul css={listStyle}>
					{mainNav.map(({ name, url, icon }) => (
						<li key={url}>
							<NavIcon src={icon} active={pathname === url} />
							<Link to={url} css={linkStyle}>
								{name}
							</Link>
						</li>
					))}
				</ul>
				<hr />
				<ul css={listStyle}>
					{secondaryNav.map(({ name, url, icon }) => (
						<li key={url}>
							<NavIcon src={icon} active={pathname === url} />
							<Link to={url} css={linkStyle}>
								{name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}
