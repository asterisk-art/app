const STORAGE_KEY = 'asterisk-art-settings';

/**
 * Retrieve data from localStorage
 *
 * @param  {string} defaultVal - The default value fallback
 *
 * @return {any}               - The data
 */
export function getSettings() {
	const defaultVal = {
		colorMode: 'default',
		manualAdjustments: false,
	};

	const locallyStored = localStorage.getItem(STORAGE_KEY);
	if (locallyStored) {
		try {
			return JSON.parse(locallyStored);
		} catch (_) {
			return defaultVal;
		}
	} else {
		return defaultVal;
	}
}

/**
 * Write to localStorage
 *
 * @param  {any}    data - The data to be stored
 */
export function writeSettings(data) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
