interface Project {
	name: string;
	description: string;
	demoLink?: string;
	demoLinkRel?: string;
	startDate?: string;
	endDate?: string;
	client: string;
	tags: string[];
	[key: string]: any;
}

export const projects: Project[] = [
	{
		name: 'WBS Training Project',
		client: '-',
		description:
			'Designed and implemented a fully responsive website using HTML and CSS, showcasing advanced skills in front-end development.',
		demoLink: 'https://lylehmann.github.io/eichhoernchen-wiki-projektarbeit/',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['Website', 'HTML', 'CSS'],
		startDate: '2022',
		endDate: '2022'
	},
	{
		name: 'LBI Website Redesign',
		client: 'Leo Baeck Institute Jerusalem',
		description: 'Led the redesign of the Leo Baeck Institute website and migrated the CMS to WordPress.',
		demoLink: 'https://leobaeck.org',
		tags: ['Website', 'Redesign', 'WordPress'],
		startDate: '2014',
		endDate: '2015'
	},
	{
		name: 'HfJS Website Management',
		client: 'Hochschule für Jüdische Studien',
		description: "Managed and maintained the institution's website.",
		demoLink: 'https://www.hfjs.eu/',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['Website', 'HTML', 'CSS'],
		startDate: '2006',
		endDate: '2008'
	}
	// Add more projects here
];
