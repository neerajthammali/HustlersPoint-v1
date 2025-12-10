import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PopularPosts } from '@/components/shared/popular-posts';
import { BlogIdeasPoll } from '@/components/shared/blog-ideas-poll';
import { getSortedPostsData } from '@/lib/posts';

export default function BlogPage() {
  const blogPosts = getSortedPostsData();

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Blog</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Explore research articles, productivity tips, and growth strategies for young hustlers.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={post.id} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.imageUrl.replace(/seed\/\w+/, `seed/blogpage${index}`)}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover"
                  data-ai-hint={post.imageHint}
                />
              </Link>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-2">{post.category}</Badge>
                <h3 className="font-headline text-lg font-semibold">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 flex items-center text-xs text-muted-foreground">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <aside className="md:col-span-4 space-y-8">
            <PopularPosts />
            <BlogIdeasPoll />
        </aside>
      </div>
    </div>
  );
}
