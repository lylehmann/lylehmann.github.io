import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'jsdom',
		coverage: {
			provider: 'istanbul',
			reporter: ['text', 'json', 'html']
		},
		reporters: [['junit', { outputFile: './junit.xml' }]],
		include: ['src/**/*.test.ts'], // Passen Sie den Pfad an Ihre Testdateien an
		exclude: ['node_modules', 'dist'] // Schließen Sie unnötige Verzeichnisse aus
	}
});
