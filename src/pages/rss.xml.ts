import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getArticles } from '../lib/content';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const articles = (await getArticles()).filter((a) => !a.data.draft);
  return rss({
    title: `${site.name} — Articles`,
    description: site.description,
    site: context.site!,
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.pubDate,
      link: `/articles/${a.id}`,
      categories: a.data.tags,
    })),
  });
}
