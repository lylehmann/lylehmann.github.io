import type { ReactNode } from 'react';
import { FigmaSvg } from '@src/assets/svgs';

interface Skill {
	[x: string]: any;
	icon?: ReactNode;
	text: string;
}

export const softSkills: Skill[] = [
	{ icon: <FigmaSvg />, text: 'Soft Skill 1' },
	{ icon: <FigmaSvg />, text: 'Soft Skill 2' }
	// Weitere Soft Skills hier
];
