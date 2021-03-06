/** @jsxImportSource @emotion/react */

export function CanvasList({ children, props, isDragged }) {
	return (
		<ul
			{...props}
			css={{
				label: 'renderList',
				listStyle: 'none',
				padding: 0,
				margin: 0,
				cursor: isDragged ? 'grabbing' : 'inherit',
			}}
		>
			{children}
		</ul>
	);
}
