import { trendingNews } from '@/lib/placeholder-data';
import NewsClientPage from './news-client-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News',
  description: 'The latest buzz from tech, startups, and the creator economy, all in one place.',
};

export default function NewsPage() {
  const allNews = trendingNews.concat(trendingNews).concat(trendingNews).map((article, index) => ({...article, id: `${article.id}-${index}`}));

  return <NewsClientPage allNews={allNews} />;
}
