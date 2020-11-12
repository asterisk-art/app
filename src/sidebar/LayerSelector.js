/** @jsxImportSource @emotion/react */

export function LayerSelector({ layers, isDisabled, addLayer }) {
	return (
		<section>
			Choose a layers:
			<ul>
				{Object.entries(layers).map(([id, { Layer, layerSettings }]) => (
					<li key={id}>
						<button onClick={() => addLayer({ Layer, layerSettings })} disabled={isDisabled}>
							{layerSettings.name}
						</button>
					</li>
				))}
			</ul>
		</section>
	);
}
