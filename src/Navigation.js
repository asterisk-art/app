/** @jsxImportSource @emotion/react */

import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
	const { pathname } = useLocation();

	const nav = [
		{ name: 'Editor', url: '/' },
		{ name: 'Settings', url: '/settings' },
		{ name: 'About', url: '/about' },
	];

	return (
		<nav>
			<ul
				css={{
					listStyle: 'none',
					display: 'block',
					padding: '0 5rem 0 0',
					margin: 0,
				}}
			>
				{nav.map(({ name, url }) => (
					<li key={url}>
						<Link
							to={url}
							css={{
								fontWeight: pathname === url ? 900 : 400,
								':hover': {
									textDecoration: 'none',
								},
							}}
						>
							{name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
