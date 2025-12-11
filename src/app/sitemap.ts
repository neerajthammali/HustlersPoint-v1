import { MetadataRoute } from 'next';
import { getSortedPostsData, getSortedStoriesData } from '@/lib/posts';
import { getSortedAuthorsData } from '@/lib/authors';

const URL = 'https://hustlerspoint.com'; // Replace with your actual domain

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData();
  const postUrls = posts.map((post) => ({
    url: `${URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const stories = getSortedStoriesData();
  const storyUrls = stories.map((story) => ({
    url: `${URL}/stories/${story.slug}`,
    lastModified: new Date(), // Stories don't have a date, using current
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const authors = getSortedAuthorsData();
  const authorUrls = authors.map((author) => ({
    url: `${URL}/authors/${author.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  const staticPages = [
    { url: URL, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${URL}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${URL}/community`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.7 },
    { url: `${URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${URL}/news`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.7 },
    { url: `${URL}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${URL}/stories`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: `${URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.2 },
  ];

  return [
    ...staticPages,
    ...postUrls,
    ...storyUrls,
    ...authorUrls,
  ];
}
