import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/reviews" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    rating: z.number().min(1).max(5),
    related_link: z.string().url().optional(),
    release_year: z.number().int().optional(),
    categories: z.array(z.string()).max(1),
  }),
});

export const collections = { reviews };
