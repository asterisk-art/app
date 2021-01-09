/** @jsxImportSource @emotion/react */

export function NavIcon({ src, active }) {
	return (
		<span
			css={{
				background: active ? 'var(--primary)' : null,
				width: '1rem',
				height: '1rem',
				textAlign: 'center',
				display: 'inline-block',
			}}
		>
			{src}
		</span>
	);
}
