import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	// Example: Set the default page layout to a custom component
	output: 'server',
	adapter: netlify,

	build: {
		// Example: Generate `page.html` instead of `page/index.html` during build.
		format: 'file',
		client: './client',
		assets: '_astro',
		inlineStylesheets: `auto`
	},

	integrations: [
		mdx(),
		sitemap(),
		partytown(),
		tailwind({
			// Example: Allow writing nested CSS declarations
			// alongside Tailwind's syntax
			nesting: true
		}),
		react()
	],

	markdown: {
		extendDefaultPlugins: true,
		rehypePlugins: [
			[
				autoNewTabExternalLinks,
				{
					domain: 'localhost:4321'
				}
			]
		]
	},

	adapter: netlify()
});
