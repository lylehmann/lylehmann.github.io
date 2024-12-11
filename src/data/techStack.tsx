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
	TerminalSvg
} from '@src/assets/svgs';

interface Skill {
	icon?: React.ReactNode;
	text: string;
}

export const techStack: Skill[] = [
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
];
