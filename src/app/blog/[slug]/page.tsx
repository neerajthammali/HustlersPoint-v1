import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PopularPosts } from '@/components/shared/popular-posts';
import { BlogIdeasPoll } from '@/components/shared/blog-ideas-poll';
import { CommentSection } from '@/components/shared/comment-section';
import { getPostData, getSortedPostsData } from '@/lib/posts';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <article className="md:col-span-8">
          <div className="space-y-4 text-center">
            <Badge variant="outline">{post.category}</Badge>
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>

          <div className="my-8">
            <Image
              src={post.imageUrl.replace('600/400', '1200/600')}
              alt={post.title}
              width={1200}
              height={600}
              className="rounded-lg object-cover"
              data-ai-hint={post.imageHint}
            />
          </div>

          <div 
            className="prose prose-lg mx-auto max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <CommentSection articleId={post.id} />
        </article>
        <aside className="md:col-span-4 space-y-8">
          <PopularPosts />
          <BlogIdeasPoll />
        </aside>
      </div>
    </div>
  );
}
