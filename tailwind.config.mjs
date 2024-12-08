/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class', // oder 'media' je nach Bedarf
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				xl: '1024px'
			}
		},
		extend: {
			colors: {
				primary: '#1a202c',
				secondary: '#2d3748',
				accent: '#4a5568'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Merriweather', 'serif']
			},
			spacing: {
				128: '32rem',
				144: '36rem'
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '100%'
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
