import type { ReactNode } from 'react';
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
import React from 'react';

interface Skill {
	icon: ReactNode;
	text: string;
}

export const hardSkills: Skill[] = [
	{ icon: <FigmaSvg />, text: 'Figma' },
	{ icon: <SketchSvg />, text: 'Sketch' },
	{ icon: <AdobeXdSvg />, text: 'Adobe XD' },
	{ icon: <HtmlSvg />, text: 'HTML' },
	{ icon: <CssSvg />, text: 'CSS' },
	{ icon: <JavascriptSvg />, text: 'JavaScript' },
	{ icon: <NodeJsSvg />, text: 'Node.js' },
	{ icon: <AstroSvg />, text: 'Astro' },
	{ icon: <GitSvg />, text: 'Git' },
	{ icon: <GitHubSvg />, text: 'GitHub' },
	{ icon: <WordPressSvg />, text: 'WordPress' },
	{ icon: <TerminalSvg />, text: 'Terminal' }
	// Weitere Hard Skills hier
];
