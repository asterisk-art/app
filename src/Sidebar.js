/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/core';
import { List, arrayMove } from 'react-movable';

import * as layers from './layer';
import { getConfig } from './generateConfig';
import { LayerSelector, CanvasList, CanvasItem } from './sidebar/';

export function Sidebar({ phrase, canvas, setCanvas }) {
	const addLayer = (layer) => {
		layer.userSettings = getConfig(layer.layerSettings, phrase);
		setCanvas([...canvas, layer]);
	};

	const removeLayer = (key) => {
		const newCanvas = [...canvas];
		newCanvas.splice(key, 1);
		setCanvas(newCanvas);
	};

	return (
		<aside
			css={{
				borderLeft: '2px dashed var(--border)',
			}}
		>
			<h2
				css={{
					margin: 0,
				}}
			>
				Sidebar
			</h2>
			<LayerSelector layers={layers} addLayer={addLayer} isDisabled={!phrase} />
			Your selected layer:
			<List
				values={canvas}
				onChange={({ oldIndex, newIndex }) => {
					if (oldIndex !== newIndex) {
						setCanvas(arrayMove(canvas, oldIndex, newIndex));
					}
				}}
				renderList={CanvasList}
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
					<CanvasItem
						removeLayer={removeLayer}
						name={name}
						userSettings={userSettings}
						style={style}
						restProps={restProps}
						isDragged={isDragged}
						isSelected={isSelected}
						index={index}
						key={index}
					/>
				)}
			/>
		</aside>
	);
}
