/** @jsxImportSource @emotion/core */

export function Canvas({ canvas }) {
	return (
		<div>
			<h2>Canvas</h2>
			{canvas.map(({ Layer, layerSettings: { name }, userSettings }, i) => (
				<Layer key={i} {...userSettings} />
			))}
		</div>
	);
}
