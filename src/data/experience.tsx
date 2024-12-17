import type { TimelineItem } from './types';

export type { TimelineItem };

export interface Experience {
	title: string;
	company: string;
	date: string;
	description: string;
}

export const experiences: Experience[] = [
	{
		title: 'Software Engineer',
		company: 'Example Company',
		date: '2020 - Present',
		description: 'Developing awesome applications.'
	}
	// Weitere Erfahrungen hier
];

interface LocalTimelineItem {
	date: string;
	text: string;
	place: string;
	location: string;
	color?: string;
}

export const experience: LocalTimelineItem[] = [
	{
		date: 'July 2024 - November 2024',
		text: 'Product UX Design',
		place: 'WBS Coding School',
		location: 'Berlin, Germany',
		color: 'bg-blue-500'
	},
	{
		date: 'July 2023 - March 2024',
		text: 'UX/UI Design',
		place: 'cimdata Bildungsakademie',
		location: 'Berlin, Germany',
		color: 'bg-green-500'
	},
	{
		date: 'October 2021 - July 2022',
		text: 'Content Marketing Manager',
		place: 'WBS Training AG',
		location: 'Berlin, Germany',
		color: 'bg-red-500'
	}
	// Weitere Einträge
];
