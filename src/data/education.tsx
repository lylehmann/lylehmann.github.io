// src/data/education.tsx
import * as React from 'react';

export type TimelineItem = {
	date: string;
	text: string;
	place: string;
	location: string;
	svg: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
	color: string;
};

export const education: TimelineItem[] = [
	{
		date: 'September 2019 - June 2023',
		text: 'Bachelor of Science in Computer Science',
		place: 'Technical University of Berlin',
		location: 'Berlin, Germany',
		svg: (props) => <svg {...props} />, // Beispiel-SVG
		color: 'bg-blue-500'
	},
	{
		date: 'September 2017 - June 2019',
		text: 'Associate Degree in Information Technology',
		place: 'Community College of Berlin',
		location: 'Berlin, Germany',
		svg: (props) => <svg {...props} />, // Beispiel-SVG
		color: 'bg-green-500'
	}
	// Weitere Einträge
];