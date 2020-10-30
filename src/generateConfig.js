export function getConfig(config, phrase) {
	return {
		// TODO need to actually calculate the config hey ;)
		config: 1,
		config2: 2,
		...config,
		phrase,
	};
}
