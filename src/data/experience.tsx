// src/data/experience.tsx
import * as React from 'react';
import type { TimelineItem } from './types';

export type { TimelineItem };

export const experience: TimelineItem[] = [
	{
		date: 'July 2024 - November 2024',
		text: 'Product UX Design',
		place: 'WBS Coding School',
		location: 'Berlin, Germany',
		svg: <svg />, // Beispiel-SVG
		color: 'bg-blue-500'
	},
	{
		date: 'July 2023 - March 2024',
		text: 'UX/UI Design',
		place: 'cimdata Bildungsakademie',
		location: 'Berlin, Germany',
		svg: <svg />, // Beispiel-SVG
		color: 'bg-green-500'
	},
	{
		date: 'October 2021 - July 2022',
		text: 'Content Marketing Manager',
		place: 'WBS Training AG',
		location: 'Berlin, Germany',
		svg: <svg />, // Beispiel-SVG
		color: 'bg-red-500'
	}
	// Weitere Einträge
];
