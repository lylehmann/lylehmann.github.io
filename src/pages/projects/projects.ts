import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
    {
    name: 'Squirrel Website (2022)',
    description: 'WBS Training project: HTML/CSS website about squirrels.',
    demoLink: 'https://lylehmann.github.io/eichhoernchen-wiki-projektarbeit/',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['HTML', 'CSS', 'GitHub']
  },
  {
    name: 'Leo Baeck Institute Jerusalem (2014–2015)',
    description: 'Website redesign and CMS migration to WordPress.',
    demoLink: 'https://leobaeck.org',
    tags: ['Website', 'Redesign', 'WordPress']
  },
  {
    name: 'Hochschule für Jüdische Studien Heidelberg (2006–2008)',
    description: 'Webmaster role: managing and maintaining the institutions website.',
    demoLink: 'https://www.hfjs.eu/',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Website', 'HTML', 'CSS']
  }
]
