/** @jsxImportSource @emotion/react */

import { Link } from 'react-router-dom';

export function EmptyState() {
	return (
		<main>
			<h2>Create unique artwork</h2>
			<p>Create, share and print algorithmic art</p>
			<Link to="new">Create artwork</Link>
			<Link to="about">Learn more</Link>
		</main>
	);
}
