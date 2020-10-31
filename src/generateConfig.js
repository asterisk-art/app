/**
 * Generate a hash from a string
 *
 * @param  {string} str - The string to be hashed
 *
 * @return {number}     - The hash as a number
 */
function getHash(str) {
	let hash = 5381;
	for (var i = 0; i < str.length; i++) {
		hash = (hash * 33) ^ str.charCodeAt(i);
	}
	return hash >>> 0;
}

/**
 * Generate a number from a phrase between two boundaries
 *
 * @param  {string} phrase - The string to be converted to a number
 * @param  {number} min    - The min boundary
 * @param  {number} max    - The max boundary
 *
 * @return {number}        - The resulting number
 */
function getNumber(phrase, max, min = 0) {
	const hash = getHash(phrase);
	return (hash % max) + 1;
}

/**
 * Generate a color from a string
 *
 * @param  {string} phrase - The string to be converted to a color
 *
 * @return {string}        - the hex color
 */
function getColor(phrase) {
	const hash = getHash(phrase);
	const length = Math.round(hash.toString().length / 3);
	const r = Number(hash.toString().slice(0, length)) % 256;
	const g = Number(hash.toString().slice(length, length * 2)) % 256;
	const b = Number(hash.toString().slice(length * 2, hash.length)) % 256;
	return `#${Math.round(r).toString(16)}${Math.round(g).toString(16)}${Math.round(b).toString(16)}`;
}

/**
 * Generate the config of a layer based on a phrase
 *
 * @param  {object} config - The layer config that tells us what types this layer expects
 * @param  {string} phrase - The phrase to be used as a deterministic seed
 *
 * @return {object}        - The object the layer expects
 */
export function getConfig(config, phrase) {
	const newConfig = {};

	Object.entries(config).forEach(([key, item]) => {
		if (item.type === 'number') {
			newConfig[key] = getNumber(phrase, item.max, item.min);
		}
		if (item.type === 'color') {
			newConfig[key] = getColor(phrase);
		}
		// we ignore unsupported types
	});

	return newConfig;
}
