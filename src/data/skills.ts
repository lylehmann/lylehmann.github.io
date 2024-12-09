import React from 'react';
import {
	FigmaSvg,
	SketchSvg,
	AdobeXdSvg,
	HtmlSvg,
	CssSvg,
	JavascriptSvg,
	NodeJsSvg,
	AstroSvg,
	GitSvg,
	GitHubSvg,
	WordPressSvg,
	TerminalSvg,
	EducationSvg,
	WorkSvg
} from '@src/assets/svgs';

type LanguageLevel = 'Native' | 'Fluent' | 'Intermediate' | 'Basic';

interface Language {
	name: string;
	level: LanguageLevel;
}

interface Skill {
	name: string;
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
	skillStack?: { text: string; type: string }[];
	motivation?: {
		name: string;
		description: string;
	}[];
}

type StackItem = {
	text: string;
	type: string;
	icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
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
	{ text: 'Accessible UX/UI Design', type: 'Design', icon: FigmaSvg },
	{ text: 'Inclusive Design', type: 'Design', icon: SketchSvg },
	{ text: 'Responsive Web Design', type: 'Design', icon: AdobeXdSvg },
	{ text: 'Mobile-first', type: 'Development', icon: HtmlSvg },
	{ text: 'Fluid Layouts', type: 'Development', icon: CssSvg },
	{ text: 'Media Queries', type: 'Development', icon: JavascriptSvg },
	{ text: 'Design Systems', type: 'Design', icon: NodeJsSvg },
	{ text: 'Consistent Design Patterns', type: 'Design', icon: AstroSvg },
	{ text: 'Reusable Components', type: 'Development', icon: GitSvg },
	{ text: 'Collaboration', type: 'Development', icon: GitHubSvg },
	{ text: 'Design Sprint', type: 'Design', icon: WordPressSvg },
	{ text: 'Design Thinking', type: 'Design', icon: TerminalSvg }
];

export const skills: Skill[] = [
	{
		name: 'Tech Stack',
		skillStack: skillStack
	}
];
