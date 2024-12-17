import { optimize } from 'svgo';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgFolderPath = __dirname; // aktuelles Verzeichnis

fs.readdir(svgFolderPath, (err, files) => {
	if (err) {
		console.error('Fehler beim Lesen des Verzeichnisses:', err);
		return;
	}

	files.forEach((file) => {
		const filePath = path.join(svgFolderPath, file);

		if (path.extname(file) === '.svg') {
			fs.readFile(filePath, 'utf8', (err, data) => {
				if (err) {
					console.error('Fehler beim Lesen der Datei:', err);
					return;
				}

				const result = optimize(data, {
					path: filePath,
					multipass: true,
					plugins: [
						{
							name: 'preset-default',
							params: {
								overrides: {
									cleanupIds: false,
									inlineStyles: {
										onlyMatchedOnce: false
									}
								}
							}
						}
					]
				});

				fs.writeFile(filePath, result.data, 'utf8', (err) => {
					if (err) {
						console.error('Fehler beim Schreiben der Datei:', err);
						return;
					}

					console.log(`Optimiert: ${filePath}`);
				});
			});
		}
	});
});
