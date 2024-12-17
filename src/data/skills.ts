import React from 'react';
import FigmaSvg from '@src/assets/icons/FigmaIcon.svg';
import SketchSvg from '@src/assets/icons/SketchIcon.svg';
import AdobeXdSvg from '@src/assets/icons/AdobeXDIcon.svg';
import HtmlSvg from '@src/assets/icons/HtmlIcon.svg';
import CssSvg from '@src/assets/icons/CssIcon.svg';
import JavascriptSvg from '@src/assets/icons/JavascriptIcon.svg';
import NodeJsSvg from '@src/assets/icons/NodeIcon.svg';
import AstroSvg from '@src/assets/icons/AstroIcon.svg';
import GitSvg from '@src/assets/icons/GitIcon.svg';
import GitHubSvg from '@src/assets/icons/GitHubIcon.svg';
import WordPressSvg from '@src/assets/icons/WordpressIcon.svg';
import TerminalSvg from '@src/assets/icons/TerminalIcon.svg';

type LanguageLevel = 'Native' | 'Fluent' | 'Intermediate' | 'Basic';

interface Language {
	name: string;
	level: LanguageLevel;
}

interface Skill {
	name: string;
	skillStack?: StackItem[];
	languages?: { name: string; level: LanguageLevel }[];
	timeline?: {
		date: string;
		text: string;
		place?: string;
		location?: string;
		svg: React.ComponentType;
		color: string;
	}[];
	certifications?: {
		name: string;
		institution: string;
		date: string;
	}[];
	techStack?: { name: string; icon: React.ComponentType }[];
	motivation?: {
		name: string;
		description: string;
	}[];
}

type StackItem = {
	text: string;
	type: string;
	icon: React.ComponentType;
};

export const techStack: StackItem[] = [
	{
		text: 'Figma',
		icon: FigmaSvg,
		type: ''
	},
	{
		text: 'Sketch',
		icon: SketchSvg,
		type: ''
	},
	{
		text: 'Adobe XD',
		icon: AdobeXdSvg,
		type: ''
	},
	{
		text: 'HTML',
		icon: HtmlSvg,
		type: ''
	},
	{
		text: 'CSS',
		icon: CssSvg,
		type: ''
	},
	{
		text: 'JavaScript',
		icon: JavascriptSvg,
		type: ''
	},
	{
		text: 'Node.js',
		icon: NodeJsSvg,
		type: ''
	},
	{
		text: 'Astro',
		icon: AstroSvg,
		type: ''
	},
	{
		text: 'Git',
		icon: GitSvg,
		type: ''
	},
	{
		text: 'GitHub',
		icon: GitHubSvg,
		type: ''
	},
	{
		text: 'WordPress',
		icon: WordPressSvg,
		type: ''
	},
	{
		text: 'Terminal',
		icon: TerminalSvg,
		type: ''
	}
];
export const skillStack: StackItem[] = [
	{ text: 'UX Design', type: 'Design', icon: FigmaSvg },
	{ text: 'Inclusive Design', type: 'Design', icon: SketchSvg },
	{ text: 'Responsive Design', type: 'Design', icon: AdobeXdSvg },
	{ text: 'Design Systems', type: 'Design', icon: NodeJsSvg },
	{ text: 'Design Thinking', type: 'Design', icon: TerminalSvg },
	{ text: 'Empathy', type: 'Soft Skill', icon: SketchSvg },
	{ text: 'Communication', type: 'Soft Skill', icon: AdobeXdSvg },
	{ text: 'Curiosity', type: 'Soft Skill', icon: FigmaSvg },
	{ text: 'Flexibility', type: 'Soft Skill', icon: HtmlSvg },
	{ text: 'Goal-oriented', type: 'Soft Skill', icon: CssSvg }
];

export const skills: Skill[] = [
	{
		name: 'Tech Stack',
		skillStack: skillStack
	}
];
