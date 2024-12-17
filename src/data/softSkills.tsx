interface SoftSkill {
	icon: string; // Verwenden Sie string für den Pfad oder die URL des Icons
	text: string;
}

export const softSkills: SoftSkill[] = [
	{ icon: '/assets/icons/FigmaIcon.svg', text: 'Figma' },
	{ icon: '/assets/icons/SketchIcon.svg', text: 'Sketch' },
	{ icon: '/assets/icons/AdobeXDIcon.svg', text: 'Adobe XD' }
	// Weitere Soft Skills hier
];
