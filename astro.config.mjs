import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	// Example: Set the default page layout to a custom component
	// layout: 'src/layouts/Default.astro',

	site: 'https://lylehmann.github.io/',

	integrations: [mdx(), sitemap(), partytown(), tailwind(), react()],

	experimental: {
		responsiveImages: true
	}
});
