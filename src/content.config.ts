import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		author: z.string(),
		role: z.string(),
		year: z.number(),
		tags: z.array(z.string()).default([]),
		cover: z.string().optional(),
		status: z.enum(['in-progress', 'complete']).default('complete'),
		draft: z.boolean().default(false),
	}),
});

export const collections = { projects };
