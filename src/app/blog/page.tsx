import { getSortedPostsData } from '@/lib/posts';
import BlogClientPage from './blog-client-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Explore research, productivity tips, and growth strategies for young hustlers.',
};

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return <BlogClientPage allPosts={allPosts} />;
}
