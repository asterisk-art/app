/** @jsxImportSource @emotion/react */

import { List, arrayMove } from 'react-movable';

import * as layers from './layer';
import { getConfig } from './generateConfig';
import { LayerSelector, CanvasList, CanvasItem } from './sidebar/';

export function Sidebar({ phrase, canvas, setCanvas, regenCanvas }) {
	const addLayer = (layer) => {
		layer.userSettings = getConfig(layer.layerSettings, phrase);
		layer.subPhrase = null;
		setCanvas([...canvas, layer]);
	};

	const removeLayer = (key) => {
		const newCanvas = [...canvas];
		newCanvas.splice(key, 1);
		setCanvas(newCanvas);
	};

	const addSubPhrase = (key, subPhrase) => {
		const newCanvas = [...canvas];
		newCanvas[key].subPhrase = subPhrase;
		regenCanvas(newCanvas, phrase);
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
						subPhrase,
					},
					props: { style, ...restProps },
					isDragged,
					isSelected,
					index,
				}) => (
					<CanvasItem
						removeLayer={removeLayer}
						addSubPhrase={addSubPhrase}
						subPhrase={subPhrase}
						name={name}
						phrase={phrase}
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
