import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			seoTitle: z.string().optional(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			tags: z.array(z.string()).optional(),
			coverImage: image().optional(), // Sicherstellen, dass coverImage definiert ist
			clientName: z.string().optional() // Hinzufügen des clientName-Feldes
		})
});

export const collections = { blog };
