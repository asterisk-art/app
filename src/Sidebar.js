/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';
import { List, arrayMove } from 'react-movable';

import * as layers from './layer';
import { getConfig } from './generateConfig';

export function Sidebar({ phrase, canvas, setCanvas }) {
	const addLayer = (layer) => {
		layer.userSettings = getConfig(layer.layerSettings.config, phrase);
		setCanvas([...canvas, layer]);
	};

	const removeLayer = (key) => {
		const newCanvas = [...canvas];
		newCanvas.splice(key, 1);
		setCanvas(newCanvas);
	};

	return (
		<aside>
			<h2>Sidebar</h2>
			Choose a layers:
			<ul>
				{Object.entries(layers).map(([id, { Layer, layerSettings }]) => (
					<li key={id}>
						<button onClick={() => addLayer({ Layer, layerSettings })} disabled={!phrase}>
							{layerSettings.name}
						</button>
					</li>
				))}
			</ul>
			Your selected layer:
			<List
				values={canvas}
				onChange={({ oldIndex, newIndex }) => {
					if (oldIndex !== newIndex) {
						setCanvas(arrayMove(canvas, oldIndex, newIndex));
					}
				}}
				renderList={({ children, props, isDragged }) => {
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
				}}
				renderItem={({
					value: {
						layerSettings: { name },
						userSettings,
					},
					props: { style, ...restProps },
					isDragged,
					isSelected,
					index,
				}) => (
					<li
						{...restProps}
						css={{
							...style,
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
				)}
			/>
		</aside>
	);
}
