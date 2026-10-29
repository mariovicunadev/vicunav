import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const status = z.enum(['shipped', 'in-progress', 'planned']);
const surface = z.enum(['theme', 'app', 'checkout', 'functions', 'headless', 'data', 'performance']);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(160),
      niche: z.string(),
      baseTheme: z.string(),
      kind: z.enum(['concept', 'client', 'employer']),
      role: z.string(),
      year: z.number().int(),
      status,
      surfaces: z.array(surface).min(1),
      stack: z.array(z.string()),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      repo: z.object({
        url: z.url().optional(),
        visibility: z.enum(['public', 'private', 'on-request']),
      }),
      live: z.object({ url: z.url(), note: z.string().optional() }).optional(),
      metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(100),
    }).refine((p) => !p.cover || p.coverAlt, { message: 'coverAlt is required when cover is set' }),
});

const features = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/features' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      project: reference('projects'),
      problem: z.string(),
      // For planned features: the intended approach, shown in the project's Defined scope block.
      decision: z.string(),
      status,
      surfaces: z.array(surface).min(1),
      skills: z.array(z.string()).default([]),
      demo: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      video: z.string().optional(),
      quality: z.array(z.string()).default([]),
      order: z.number().default(100),
    }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    project: reference('projects').optional(),
  }),
});

export const collections = { projects, features, articles };
