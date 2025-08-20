import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
			z.object({
				title: z.string(),
				pubDate: z.coerce.date(),
				updatedDate: z.coerce.date().nullable().optional(),
				rating: z.number().min(1).max(5).nullable().optional(),
				status: z.enum(['draft', 'published', 'scheduled', 'archived'] as const).nullable().optional(),
				related_link: z.string().url().nullable().optional(),
				release_year: z.number().int().min(1900).max(new Date().getFullYear()).nullable().optional(),
				categories: z.array(z.string()).nullable().optional(),
				// Content type marker used by frontmatter tools
				fmContentType: z.string().nullable().optional()
			}),
});

export const collections = { blog };
