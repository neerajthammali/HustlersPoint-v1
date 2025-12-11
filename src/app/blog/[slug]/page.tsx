import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { GiscusComments } from '@/components/shared/giscus-comments';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import { NewsletterBanner } from '@/components/layout/newsletter-banner';
import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostData(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The post you are looking for does not exist.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 600,
          alt: post.title,
        },
      ],
    },
  };
}

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
      <div className="max-w-4xl mx-auto">
        <article>
          <div className="space-y-4 text-center">
            <Badge variant="outline">{post.category}</Badge>
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <span>By <Link href={`/authors/${post.authorSlug}`} className="hover:text-primary">{post.author}</Link></span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>

          <div className="my-8">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={1200}
              height={600}
              className="rounded-lg object-cover"
              data-ai-hint={post.imageHint}
              priority
            />
          </div>

          <div 
            className="prose prose-lg mx-auto max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div className="my-16">
            <NewsletterBanner />
          </div>

          <GiscusComments />
        </article>
      </div>
    </div>
  );
}
