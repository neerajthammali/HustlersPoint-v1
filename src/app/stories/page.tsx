import { getSortedStoriesData } from '@/lib/posts';
import StoriesClientPage from './stories-client-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hustler Stories',
  description: 'Real success stories from founders, creators, and indie hackers across the web.',
};

export default function StoriesPage() {
  const allStories = getSortedStoriesData();
  return <StoriesClientPage allStories={allStories} />;
}
