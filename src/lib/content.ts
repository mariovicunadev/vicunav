import { getCollection, type CollectionEntry } from 'astro:content';

/** Public path for a page: build.format 'file' reports `/about.html` and `/index.html`. */
export const cleanPath = (pathname: string) =>
  pathname.replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '') || '/';

export const formatDate =(d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

/** Drafts show in `astro dev` and never reach the production build (spec 004). */
export async function getArticles() {
  const all = await getCollection('articles', (a) => import.meta.env.DEV || !a.data.draft);
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getProjects() {
  const all = await getCollection('projects');
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** Feature ids look like `<project>/<feature>`; the URL uses the last segment. */
export const featureSlug = (f: CollectionEntry<'features'>) => f.id.split('/').pop()!;

export async function getFeatures(projectId?: string) {
  const all = await getCollection('features', (f) => !projectId || f.data.project.id === projectId);
  return all.sort((a, b) => a.data.order - b.data.order);
}
