import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://lylehmann.com',
  integrations: [
    mdx(),
    sitemap(),
    partytown(),
    tailwind({
      // Example: Allow writing nested CSS declarations
      // alongside Tailwind's syntax
      nesting: true,
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
  }
});
