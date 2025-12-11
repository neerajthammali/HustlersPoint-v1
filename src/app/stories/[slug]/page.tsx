import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GiscusComments } from '@/components/shared/giscus-comments';
import { getStoryData, getSortedStoriesData } from '@/lib/posts';
import { NewsletterBanner } from '@/components/layout/newsletter-banner';
import type { Metadata } from 'next';
import { storyIconMapper } from '@/lib/icon-mappers/story-icon-mapper';
import { ShareButtons } from '@/components/shared/share-buttons';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const story = await getStoryData(params.slug);

  if (!story) {
    return {
      title: 'Story Not Found',
      description: 'The story you are looking for does not exist.',
    };
  }
  
  const fullUrl = `/stories/${story.slug}`;

  return {
    title: story.title,
    description: story.excerpt,
    openGraph: {
      title: story.title,
      description: story.excerpt,
      url: fullUrl,
      images: [
        {
          url: story.imageUrl,
          width: 1200,
          height: 600,
          alt: story.title,
        },
      ],
    },
    twitter: {
        card: 'summary_large_image',
        title: story.title,
        description: story.excerpt,
        images: [story.imageUrl],
      },
  };
}


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
  const Icon = storyIconMapper(story.source);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <article>
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Icon className="h-5 w-5" />
              <span>{story.source}</span>
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
              {story.title}
            </h1>
            <div className="text-muted-foreground">
              By {story.author}
            </div>
          </div>

          <div className="my-8 flex justify-center">
              <ShareButtons title={story.title} />
          </div>

          <div className="my-8">
            <Image
              src={story.imageUrl}
              alt={story.title}
              width={1200}
              height={600}
              className="rounded-lg object-cover"
              data-ai-hint={story.imageHint}
              priority
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

          <GiscusComments />
        </article>
      </div>
    </div>
  );
}
