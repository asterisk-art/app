/** @jsxRuntime classic */
/** @jsx jsx */

import { useState } from 'react';
import { jsx } from '@emotion/core';

import { getSettings, writeSettings } from './storage';

export function Settings() {
	const localSettings = getSettings();
	const [colorMode, setColorMode] = useState(localSettings.colorMode);
	const [manualAdjustments, setManualAdjustments] = useState(localSettings.manualAdjustments);

	const handleSubmit = (event) => {
		event.preventDefault();

		writeSettings({
			colorMode,
			manualAdjustments,
		});
	};

	return (
		<div>
			<h1>Settings</h1>

			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>Canvas settings</legend>
					<ul>
						<li>
							<p id="colorMode">Mode for color generations</p>
							<label aria-describedby="colorMode">
								<input
									type="radio"
									name="colorMode"
									value="default"
									checked={colorMode === 'default'}
									onChange={() => setColorMode('default')}
								/>
								Default
							</label>
							<label aria-describedby="colorMode">
								<input
									type="radio"
									name="colorMode"
									value="rainbow"
									checked={colorMode === 'rainbow'}
									onChange={() => setColorMode('rainbow')}
								/>
								Rainbow
							</label>
							<label aria-describedby="colorMode">
								<input
									type="radio"
									name="colorMode"
									value="monochromatic"
									checked={colorMode === 'monochromatic'}
									onChange={() => setColorMode('monochromatic')}
								/>
								Monochromatic
							</label>
						</li>
						<li>
							<label>
								<input
									type="checkbox"
									value="manualAdjustments"
									checked={manualAdjustments}
									onChange={(event) => setManualAdjustments(!!event.target.checked)}
								/>
								Allow manual adjustments
							</label>
						</li>
					</ul>
				</fieldset>
				<button type="submit">Save</button>
			</form>
		</div>
	);
}
