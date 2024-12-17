interface Skill {
	icon?: string; // Verwenden Sie string für den Pfad oder die URL des Icons
	text: string;
}

export const techStack: Skill[] = [
	{ icon: '/assets/icons/figma.svg', text: 'Figma' },
	{ icon: '/assets/icons/sketch.svg', text: 'Sketch' },
	{ icon: '/assets/icons/adobe-xd.svg', text: 'Adobe XD' },
	{ icon: '/assets/icons/html.svg', text: 'HTML' },
	{ icon: '/assets/icons/css.svg', text: 'CSS' },
	{ icon: '/assets/icons/javascript.svg', text: 'JavaScript' },
	{ icon: '/assets/icons/nodejs.svg', text: 'Node.js' },
	{ icon: '/assets/icons/astro.svg', text: 'Astro' },
	{ icon: '/assets/icons/git.svg', text: 'Git' },
	{ icon: '/assets/icons/github.svg', text: 'GitHub' },
	{ icon: '/assets/icons/wordpress.svg', text: 'WordPress' },
	{ icon: '/assets/icons/terminal.svg', text: 'Terminal' }
];
