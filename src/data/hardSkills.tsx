import type { ReactNode } from 'react';
import { FigmaSvg } from '@src/assets/svgs'; // Adjust the path as necessary

interface Skill {
	[x: string]: any;
	icon?: ReactNode;
	text: string;
}

export const hardSkills: Skill[] = [
	{ icon: <FigmaSvg />, text: 'Hard Skill 1' },
	{ icon: <FigmaSvg />, text: 'Hard Skill 2' }
	// Weitere Hard Skills hier
];
