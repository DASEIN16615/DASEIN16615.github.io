import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Dasein',
    description: '此在 —— 数字笔记',
    site: context.site,
    items: posts
      .filter((p) => !p.data.draft)
      .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/posts/${post.id}/`,
      })),
    customData: '<language>zh-CN</language>',
  });
}