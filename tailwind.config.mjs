const primary400 = 'hsl(47, 8%, 46%)';
const primaryDark400 = 'hsl(47, 8%, 16%)';

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class', // Enable dark mode
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
				// Base colors
				blue: {
					500: 'hsl(204, 70%, 50%)'
				},
				red: {
					500: 'hsl(0, 70%, 50%)'
				},
				yellow: {
					500: 'hsl(48, 100%, 50%)'
				},
				green: {
					500: 'hsl(120, 70%, 40%)'
				},
				// Neutral colors
				black: {
					500: 'hsl(0, 0%, 0%)'
				},
				white: {
					500: 'hsl(0, 0%, 100%)'
				},
				// Semantic colors for light mode
				text: {
					primary: 'hsl(0, 0%, 0%)',
					secondary: 'hsla(0, 0%, 0%, 0.8)',
					tertiary: 'hsla(0, 0%, 0%, 0.6)',
					quaternary: 'hsla(0, 0%, 0%, 0.4)',
					negative: 'hsl(0, 70%, 50%)',
					onAccent: 'hsl(0, 0%, 100%)',
					premium: 'hsl(48, 100%, 50%)',
					brand: {
						primary: 'hsl(204, 70%, 50%)',
						secondary: 'hsla(204, 70%, 50%, 0.8)'
					},
					positive: 'hsl(120, 70%, 40%)',
					attention: 'hsl(48, 100%, 50%)'
				},
				fill: {
					primary: 'hsl(0, 0%, 0%)',
					secondary: 'hsla(0, 0%, 0%, 0.8)',
					tertiary: 'hsla(0, 0%, 0%, 0.6)',
					quaternary: 'hsla(0, 0%, 0%, 0.4)',
					quinary: 'hsla(0, 0%, 0%, 0.2)',
					senary: 'hsla(0, 0%, 0%, 0.1)',
					onAccent: 'hsl(0, 0%, 100%)',
					premium: {
						primary: 'hsl(48, 100%, 50%)',
						secondary: 'hsla(48, 100%, 50%, 0.8)',
						teriary: 'hsla(48, 100%, 50%, 0.6)'
					},
					negative: {
						primary: 'hsl(0, 70%, 50%)',
						secondary: 'hsla(0, 70%, 50%, 0.8)',
						teriary: 'hsla(0, 70%, 50%, 0.6)'
					},
					accent: {
						purplish: 'hsl(270, 70%, 50%)',
						violet: 'hsl(270, 70%, 50%)',
						turquoise: 'hsl(180, 70%, 50%)',
						green: 'hsl(120, 70%, 40%)',
						yellow: 'hsl(48, 100%, 50%)',
						orange: 'hsl(30, 100%, 50%)',
						red: 'hsl(0, 70%, 50%)'
					},
					brand: {
						primary: 'hsl(204, 70%, 50%)',
						secondary: 'hsla(204, 70%, 50%, 0.8)',
						teriary: 'hsla(204, 70%, 50%, 0.6)'
					},
					positive: {
						primary: 'hsl(120, 70%, 40%)',
						secondary: 'hsla(120, 70%, 40%, 0.8)',
						teriary: 'hsla(120, 70%, 40%, 0.6)'
					},
					attention: {
						primary: 'hsl(48, 100%, 50%)',
						secondary: 'hsla(48, 100%, 50%, 0.8)',
						teriary: 'hsla(48, 100%, 50%, 0.6)'
					}
				},
				stroke: {
					primary: 'var(--fill-quaternary)',
					secondary: 'var(--fill-tertiary)',
					tertiary: 'var(--fill-senary)',
					brand: 'var(--fill-brand-primary)',
					premium: 'var(--fill-premium-primary)',
					positive: 'var(--fill-positive-primary)',
					negative: 'var(--fill-negative-primary)',
					attention: 'var(--fill-attention-primary)'
				},
				layer: {
					floor0: 'hsl(0, 0%, 100%)',
					floor1: 'hsl(0, 0%, 90%)',
					floor2: 'hsl(0, 0%, 80%)',
					floor3: 'hsl(0, 0%, 70%)',
					overlay: 'hsla(0, 0%, 0%, 0.5)',
					// Semantic colors for dark mode
					dark: {
						text: {
							primary: 'hsl(0, 0%, 100%)',
							secondary: 'hsla(0, 0%, 100%, 0.8)',
							tertiary: 'hsla(0, 0%, 100%, 0.6)',
							quaternary: 'hsla(0, 0%, 100%, 0.4)',
							negative: 'hsl(0, 70%, 50%)',
							onAccent: 'hsl(0, 0%, 0%)',
							premium: 'hsl(48, 100%, 50%)',
							brand: {
								primary: 'hsl(204, 70%, 50%)',
								secondary: 'hsla(204, 70%, 50%, 0.8)'
							},
							positive: 'hsl(120, 70%, 40%)',
							attention: 'hsl(48, 100%, 50%)'
						},
						fill: {
							primary: 'hsl(0, 0%, 100%)',
							secondary: 'hsla(0, 0%, 100%, 0.8)',
							tertiary: 'hsla(0, 0%, 100%, 0.6)',
							quaternary: 'hsla(0, 0%, 100%, 0.4)',
							quinary: 'hsla(0, 0%, 100%, 0.2)',
							senary: 'hsla(0, 0%, 100%, 0.1)',
							onAccent: 'hsl(0, 0%, 0%)',
							premium: {
								primary: 'hsl(48, 100%, 50%)',
								secondary: 'hsla(48, 100%, 50%, 0.8)',
								teriary: 'hsla(48, 100%, 50%, 0.6)'
							},
							negative: {
								primary: 'hsl(0, 70%, 50%)',
								secondary: 'hsla(0, 70%, 50%, 0.8)',
								teriary: 'hsla(0, 70%, 50%, 0.6)'
							},
							accent: {
								purplish: 'hsl(270, 70%, 50%)',
								violet: 'hsl(270, 70%, 50%)',
								turquoise: 'hsl(180, 70%, 50%)',
								green: 'hsl(120, 70%, 40%)',
								yellow: 'hsl(48, 100%, 50%)',
								orange: 'hsl(30, 100%, 50%)',
								red: 'hsl(0, 70%, 50%)'
							},
							brand: {
								primary: 'hsl(204, 70%, 50%)',
								secondary: 'hsla(204, 70%, 50%, 0.8)',
								teriary: 'hsla(204, 70%, 50%, 0.6)'
							},
							positive: {
								primary: 'hsl(120, 70%, 40%)',
								secondary: 'hsla(120, 70%, 40%, 0.8)',
								teriary: 'hsla(120, 70%, 40%, 0.6)'
							},
							attention: {
								primary: 'hsl(48, 100%, 50%)',
								secondary: 'hsla(48, 100%, 50%, 0.8)',
								teriary: 'hsla(48, 100%, 50%, 0.6)'
							}
						},
						stroke: {
							primary: 'var(--dark-fill-quaternary)',
							secondary: 'var(--dark-fill-tertiary)',
							tertiary: 'var(--dark-fill-senary)',
							brand: 'var(--dark-fill-brand-primary)',
							premium: 'var(--dark-fill-premium-primary)',
							positive: 'var(--dark-fill-positive-primary)',
							negative: 'var(--dark-fill-negative-primary)',
							attention: 'var(--dark-fill-attention-primary)'
						},
						layer: {
							floor0: 'hsl(0, 0%, 10%)',
							floor1: 'hsl(0, 0%, 20%)',
							floor2: 'hsl(0, 0%, 30%)',
							floor3: 'hsl(0, 0%, 40%)',
							overlay: 'hsla(0, 0%, 0%, 0.5)'
						}
					}
				}
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
			},
			boxShadow: {
				card: '0 4px 6px rgba(0, 0, 0, 0.1)'
			},
			borderRadius: {
				lg: '10px'
			},
			transitionProperty: {
				shadow: 'box-shadow'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
