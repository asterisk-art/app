/** @jsxImportSource @emotion/core */

export function CanvasItem({ removeLayer, name, userSettings, style, restProps, isDragged, isSelected, index }) {
	return (
		<li
			{...restProps}
			css={{
				...style,
				listStyle: 'none',
				cursor: isDragged ? 'grabbing' : 'inherit',
				backgroundColor: isDragged || isSelected ? 'var(--alt-bg)' : 'var(--bg)',
			}}
		>
			<div
				css={{
					display: 'grid',
					gridTemplateColumns: '2rem 1fr',
				}}
			>
				<button
					data-movable-handle
					css={{
						position: 'relative',
						cursor: isDragged ? 'grabbing' : 'grab',
						overflow: 'hidden',
						textIndent: '5rem',
						whiteSpace: 'nowrap',
						border: 'none',
						padding: 0,
						background: 'transparent',
						appearance: 'none',
						'&:before, &:after': {
							content: '""',
							position: 'absolute',
							top: '50%',
							left: '0.5rem',
							width: '1rem',
							boxSizing: 'border-box',
							borderStyle: 'solid',
							borderColor: 'var(--border)',
						},
						'&:before': {
							height: '10px',
							borderWidth: '2px 0 2px 0',
							marginTop: '-5px',
						},
						'&:after': {
							borderWidth: '2px 0 0 0',
							height: 0,
							marginTop: '-1px',
						},
					}}
					tabIndex={-1}
				>
					Drag to reorder
				</button>
				<div>
					{name}
					<button onClick={() => removeLayer(index)}>delete</button>
					<textarea defaultValue={JSON.stringify(userSettings, null, 2)} />
				</div>
			</div>
		</li>
	);
}
