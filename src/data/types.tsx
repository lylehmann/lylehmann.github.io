export type Skill = {
	name: string;
	timeline: any;
	certifications?: { name: string; institution: string; date: string }[];
	techStack?: { name: string; icon: string }[]; // Verwenden Sie string für den Pfad oder die URL des Icons
	skillStack?: { text: string; type: string }[];
	motivation?: { name: string; description: string }[];
	image?: string;
};

export interface TimelineItem {
	date: string;
	text: string;
	place: string;
	location: string;
	svg?: string; // Verwenden Sie string für den Pfad oder die URL des SVGs
	color?: string;
}

export interface TechStack {
	name: string;
	icon: string; // Verwenden Sie string für den Pfad oder die URL des Icons
}

export interface Project {
	svg?: string; // Verwenden Sie string für den Pfad oder die URL des SVGs
	techStack?: TechStack[];
	// Weitere Felder hier
}
