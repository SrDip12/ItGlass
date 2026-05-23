import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    summary: z.string(),
    problem: z.string(),
    goodFor: z.array(z.string()),
    brands: z.array(z.string()).default([]),
    priceFactors: z.array(z.string()),
    whatsappText: z.string()
  })
});

const works = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    category: z.string(),
    location: z.string(),
    summary: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    highlights: z.array(z.string()),
    whatsappText: z.string()
  })
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    date: z.string(),
    updated: z.string().optional(),
    category: z.string(),
    summary: z.string(),
    readingTime: z.string(),
    heroNote: z.string(),
    whatsappText: z.string(),
    relatedService: z.string().optional()
  })
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    slug: z.string(),
    order: z.number(),
    category: z.string(),
    answer: z.string(),
    whatsappText: z.string(),
    relatedUrl: z.string().optional()
  })
});

export const collections = { services, works, blog, faqs };
