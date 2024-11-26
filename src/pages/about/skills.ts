import type { ListFormat } from 'typescript';
import { WorkSvg } from '@src/components/svgs';
import { FaJsSquare, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaFigma, FaSketch, FaWordpress, FaGithub, FaTerminal } from 'react-icons/fa';
import { SiTypescript, SiObsidian, SiAstro, SiAdobexd } from 'react-icons/si';

export const skills: Skill[] = [
	{
		name: 'Languages',
		languages: [
			{ name: 'German', level: 'Native' },
			{ name: 'English', level: 'Fluent' },
			{ name: 'Hebrew', level: 'Intermediate' }
		]
	},
	{
		name: 'Experience',
		timeline: [
			{ date: 'Jul 2024 - Nov 2024', text: 'Product UX Design at WBS CODING SCHOOL', svg: WorkSvg, color: 'bg-blue-100 dark:bg-blue-900' },
			{
				date: 'Jul 2023 - Mar 2024',
				text: 'Certified in UX/UI Design and Scrum Master (PSM I) from cimdata',
				svg: WorkSvg,
				color: 'bg-blue-100 dark:bg-blue-900'
			},
			{ date: '2005 - 2011', text: 'BA in Jewish Studies, HfJS Heidelberg', svg: WorkSvg, color: 'bg-blue-100 dark:bg-blue-900' },
			{
				date: 'Transitioned from disability work, website management and publishing to UX/UI design',
				text: 'Transitioned from disability work, website management and publishing to UX/UI design',
				svg: WorkSvg,
				color: 'bg-green-100 dark:bg-green-900'
			},
			{
				date: 'Managed complex book projects at De Gruyter',
				text: 'Managed complex book projects at De Gruyter, developing strong project management skills',
				svg: WorkSvg,
				color: 'bg-green-100 dark:bg-green-900'
			},
			{
				date: 'Created and maintained websites using HTML, CSS, and WordPress',
				text: 'Created and maintained websites using HTML, CSS, and WordPress',
				svg: WorkSvg,
				color: 'bg-green-100 dark:bg-green-900'
			},
			{
				date: 'Experience at Shekel and Saint Vincent',
				text: 'Experience at Shekel and Saint Vincent, working with people with special needs, deeply influences my approach to inclusive design and accessibility',
				svg: WorkSvg,
				color: 'bg-green-100 dark:bg-green-900'
			}
		]
	},
	{
		name: 'Tech Stack',
		techStack: [
			{ name: 'Figma', icon: FaFigma },
			{ name: 'Sketch', icon: FaSketch },
			{ name: 'Adobe XD', icon: SiAdobexd },
			{ name: 'HTML', icon: FaHtml5 },
			{ name: 'CSS', icon: FaCss3Alt },
			{ name: 'JavaScript', icon: FaJsSquare },
			{ name: 'Node.js', icon: FaNodeJs },
			{ name: 'Astro', icon: SiAstro },
			{ name: 'Git', icon: FaGitAlt },
			{ name: 'GitHub', icon: FaGithub },
			{ name: 'WordPress', icon: FaWordpress },
			{ name: 'Terminal', icon: FaTerminal }
		]
	},
	{
		name: 'Skill Stack',
		skillStack: [
			{ text: 'Accessible UX/UI Design', type: 'hard' },
			{ text: 'Inclusive Design', type: 'hard' },
			{ text: 'Responsive Web Design', type: 'hard' },
			{ text: 'Mobile-first', type: 'hard' },
			{ text: 'Fluid Layouts', type: 'hard' },
			{ text: 'Media Queries', type: 'hard' },
			{ text: 'Design Systems', type: 'hard' },
			{ text: 'Consistent Design Patterns', type: 'hard' },
			{ text: 'Reusable Components', type: 'hard' },
			{ text: 'Collaboration', type: 'soft' },
			{ text: 'Design Sprint', type: 'hard' },
			{ text: 'Design Thinking', type: 'hard' },
			{ text: 'Remote Team Communication', type: 'soft' },
			{ text: 'Diverse User Needs', type: 'soft' },
			{ text: 'Disability Support', type: 'soft' },
			{ text: 'Project Management', type: 'soft' },
			{ text: 'Problem-Solving', type: 'soft' },
			{ text: 'Clear Communication', type: 'soft' },
			{ text: 'Design Tools', type: 'hard' },
			{ text: 'Figma', type: 'hard' },
			{ text: 'Adobe XD', type: 'hard' },
			{ text: 'Sketch', type: 'hard' },
			{ text: 'Neurodivergent Perspective', type: 'soft' },
			{ text: 'Creative Solutions', type: 'soft' }
		]
	},
	{
		name: 'Certifications',
		certifications: [
			{ name: 'Product UX Design', institution: 'WBS Coding School', date: 'July 2024 - November 2024' },
			{ name: 'UX/UI Design & Scrum Master (PSM I)', institution: 'cimdata Bildungsakademie', date: 'July 2023 - March 2024' },
			{ name: 'Content Marketing Manager', institution: 'WBS Training AG', date: 'October 2021 - July 2022' }
		]
	},
	{
		name: "Why I'm the Designer You Need",
		motivation: [
			{
				name: 'Understanding User Needs',
				description:
					'I bring a deep understanding of diverse user needs, honed through my experience in disability support. This allows me to design with empathy and inclusivity at the forefront.'
			},
			{
				name: 'Versatile Skill Set',
				description:
					'With a background spanning multiple industries, I excel in project management, problem-solving, and clear communication—skills that ensure seamless collaboration and impactful results.'
			},
			{
				name: 'Proficiency in Design Tools',
				description:
					'I’m highly skilled in industry-standard tools like Figma, Adobe XD, and Sketch, enabling me to craft intuitive and visually compelling designs.'
			},
			{
				name: 'Code Awareness and Collaboration',
				description:
					'While not a developer, I have a strong awareness of front-end technologies like HTML and CSS. This allows me to collaborate effectively with developers, design feasible solutions, and bridge the gap between design and implementation.'
			},
			{
				name: 'A Neurodivergent Perspective',
				description:
					'As a neurodivergent designer, I offer a unique lens that fosters innovative and creative solutions. My perspective helps me challenge conventions and design for diverse audiences.'
			}
		]
	}
];
