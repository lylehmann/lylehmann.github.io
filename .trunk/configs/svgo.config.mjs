import { optimize } from 'svgo';

const svgString = '<svg>...</svg>'; // Beispiel SVG-String

const result = optimize(svgString, {
	path: '/Users/lukaslehmann/Developer/lylehmann.github.io2/src/assets/icons/', // empfohlen
	multipass: true // alle anderen Konfigurationsfelder sind hier verfügbar
});

const optimizedSvgString = result.data;

export default {
	plugins: [
		{
			name: 'preset-default',
			params: {
				overrides: {
					// disable a default plugin
					cleanupIds: false,

					// customize the params of a default plugin
					inlineStyles: {
						onlyMatchedOnce: false
					}
				}
			}
		}
	]
};
