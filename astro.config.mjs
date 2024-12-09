import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';

const SERVER_PORT = 4321;
//the url to use when running the website locally
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
//the url to access the website after it has been deployed (e.g. on Vercel)
const LIVE_URL = 'https://lylehmann.github.io';
//this is the astro command your npm script uses to start the server
const SCRIPT = process.env.npm_lifecycle_script || '';
const isBuild = SCRIPT.includes('astro build');
let BASE_URL = LOCALHOST_URL;
//when you are building the website in local or in CI, you set your URL manually
if (isBuild) {
	BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
	// Example: Set the default page layout to a custom component
	// layout: 'src/layouts/Default.astro',
	server: {
		port: SERVER_PORT
	},
	site: BASE_URL,

	integrations: [mdx(), sitemap(), partytown(), tailwind(), react()]
});
