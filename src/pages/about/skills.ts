import type { ListFormat } from "typescript";
import { EducationSvg, WorkSvg } from '@src/components/svgs';
import { FaJsSquare, FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaDocker, FaFigma, FaSketch, FaWordpress, FaGithub, FaTerminal } from 'react-icons/fa';
import { SiTypescript, SiObsidian, SiAstro, SiAdobexd } from 'react-icons/si';

export const skills: Skill[] = [
  {
    name: 'Profile Picture',
    image: {
      src: '/src/assets/img/lylehmann.jpg',
      alt: 'Lukas Lehmann',
      width: 300,
      height: 100
    }
  },
  {
    name: 'Role',
    description: {
      kind: "list",
      elements: [{ text: 'Digital Product Designer' }]
    } as unknown as ListFormat,
  },
  {
    name: 'Demographics',
    description: {
      kind: "list",
      elements: [
        { text: 'located in Berlin, Germany; previously in Heidelberg, Germany and Jerusalem, Israel' },
        { text: 'speaks German, English, and Hebrew' },
      ]
    } as unknown as ListFormat,
  },
  {
    name: 'Education',
    timeline: [
      { date: 'Jul 2024 - Nov 2024', text: 'Product UX Design at WBS CODING SCHOOL', svg: EducationSvg, color: 'bg-blue-100 dark:bg-blue-900' },
      { date: 'Jul 2023 - Mar 2024', text: 'Certified in UX/UI Design and Scrum Master (PSM I) from cimdata', svg: EducationSvg, color: 'bg-blue-100 dark:bg-blue-900' },
      { date: '2005 - 2011', text: 'BA in Jewish Studies, HfJS Heidelberg', svg: EducationSvg, color: 'bg-blue-100 dark:bg-blue-900' },
      { date: 'Transitioned from disability work, website management and publishing to UX/UI design', text: 'Transitioned from disability work, website management and publishing to UX/UI design', svg: WorkSvg, color: 'bg-green-100 dark:bg-green-900' },
      { date: 'Managed complex book projects at De Gruyter', text: 'Managed complex book projects at De Gruyter, developing strong project management skills', svg: WorkSvg, color: 'bg-green-100 dark:bg-green-900' },
      { date: 'Created and maintained websites using HTML, CSS, and WordPress', text: 'Created and maintained websites using HTML, CSS, and WordPress', svg: WorkSvg, color: 'bg-green-100 dark:bg-green-900' },
      { date: 'Experience at Shekel and Saint Vincent', text: 'Experience at Shekel and Saint Vincent, working with people with special needs, deeply influences my approach to inclusive design and accessibility', svg: WorkSvg, color: 'bg-green-100 dark:bg-green-900' }
    ]
  },
  {
    name: 'Tech Stack',
    techStack: [
      { name: 'JavaScript', icon: FaJsSquare },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'Git', icon: FaGitAlt },
      { name: 'Docker', icon: FaDocker },
      { name: 'Figma', icon: FaFigma },
      { name: 'Sketch', icon: FaSketch },
      { name: 'Adobe XD', icon: SiAdobexd },
      { name: 'WordPress', icon: FaWordpress },
      { name: 'Obsidian', icon: SiObsidian },
      { name: 'Astro', icon: SiAstro },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Terminal', icon: FaTerminal }
    ]
  },
  {
    name: 'Skill Stack',
    skillStack: [
      { text: 'Accessible UX/UI Design' },
      { text: 'Inclusive Design' },
      { text: 'Responsive Web Design' },
      { text: 'Mobile-first' },
      { text: 'Fluid Layouts' },
      { text: 'Media Queries' },
      { text: 'Design Systems' },
      { text: 'Consistent Design Patterns' },
      { text: 'Reusable Components' },
      { text: 'Collaboration' },
      { text: 'Design Sprint' },
      { text: 'Design Thinking' },
      { text: 'Remote Team Communication' }
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
    name: 'Strength',
    strength: [
      { text: 'Diverse User Needs' },
      { text: 'Disability Support' },
      { text: 'Project Management' },
      { text: 'Problem-Solving' },
      { text: 'Clear Communication' },
      { text: 'Design Tools' },
      { text: 'Figma' },
      { text: 'Adobe XD' },
      { text: 'Sketch' },
      { text: 'Neurodivergent Perspective' },
      { text: 'Creative Solutions' }
    ]
  },
  {
    name: 'Motivation',
    motivation: [
      { text: '<strong>Deep understanding</strong> of diverse user needs from my work in <strong>disability support</strong>' },
      { text: 'Wide range of skills from working in different industries, including <strong>project management</strong>, <strong>problem-solving</strong>, and <strong>clear communication</strong>' },
      { text: 'Skilled in design tools: <strong>Figma</strong>, <strong>Adobe XD</strong>, <strong>Sketch</strong>' },
      { text: 'Unique perspective as a <strong>neurodivergent designer</strong>, helping to create new and <strong>creative solutions</strong>' }
    ]
  }
];
