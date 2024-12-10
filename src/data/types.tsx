// Pfad: src/data/types.tsx
export type Skill = {
	name: string;
	timeline: any;
	certifications?: { name: string; institution: string; date: string }[];
	techStack?: { name: string; icon: JSX.Element }[];
	skillStack?: { text: string; type: string }[];
	motivation?: { name: string; description: string }[];
	image?: string;
};

export interface TimelineItem {
	date: string;
	text: string;
	place: string;
	location: string;
	svg?: JSX.Element;
	color?: string;
}
