// src/data/experience.tsx
import * as React from 'react';

export type TimelineItem = {
	date: string;
	text: string;
	place: string;
	location: string;
	svg: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
	color: string;
};

export const experience: TimelineItem[] = [
	{
		date: 'July 2024 - November 2024',
		text: 'Product UX Design',
		place: 'WBS Coding School',
		location: 'Berlin, Germany',
		svg: (props) => <svg {...props} />, // Beispiel-SVG
		color: 'bg-blue-500'
	},
	{
		date: 'July 2023 - March 2024',
		text: 'UX/UI Design',
		place: 'cimdata Bildungsakademie',
		location: 'Berlin, Germany',
		svg: (props) => <svg {...props} />, // Beispiel-SVG
		color: 'bg-green-500'
	},
	{
		date: 'October 2021 - July 2022',
		text: 'Content Marketing Manager',
		place: 'WBS Training AG',
		location: 'Berlin, Germany',
		svg: (props) => <svg {...props} />, // Beispiel-SVG
		color: 'bg-red-500'
	}
	// Weitere Einträge
];
