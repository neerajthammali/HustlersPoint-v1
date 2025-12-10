import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CommentSection } from '@/components/shared/comment-section';
import { getStoryData, getSortedStoriesData } from '@/lib/posts';
import { NewsletterBanner } from '@/components/layout/newsletter-banner';

export async function generateStaticParams() {
  const stories = getSortedStoriesData();
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export default async function StoryPage({ params }: { params: { slug: string } }) {
  const story = await getStoryData(params.slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <article>
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <story.sourceIcon className="h-5 w-5" />
              <span>{story.source}</span>
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
              {story.title}
            </h1>
            <div className="text-muted-foreground">
              By {story.author}
            </div>
          </div>

          <div className="my-8">
            <Image
              src={story.imageUrl.replace('600/400', '1200/600')}
              alt={story.title}
              width={1200}
              height={600}
              className="rounded-lg object-cover"
              data-ai-hint={story.imageHint}
            />
          </div>

          <div 
            className="prose prose-lg mx-auto max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: story.contentHtml }}
          />

          <div className="prose prose-lg mx-auto max-w-none dark:prose-invert">
            <Button asChild className="mt-8 no-underline">
                <Link href="/stories">Back to All Stories</Link>
            </Button>
          </div>
          
          <div className="my-16">
            <NewsletterBanner />
          </div>

          <CommentSection articleId={`story-${story.id}`} />
        </article>
      </div>
    </div>
  );
}
