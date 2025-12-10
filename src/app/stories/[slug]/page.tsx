import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { hustlerStories } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';

export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = hustlerStories.find((s) => s.id === params.slug);

  if (!story) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
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

      <div className="prose prose-lg mx-auto max-w-none dark:prose-invert">
        <p className="lead text-xl text-muted-foreground">{story.excerpt}</p>
        <p>
            This is a placeholder for the full story content. In a real application, you would fetch this content from a CMS or a database. The story would elaborate on the journey, the challenges faced, and the lessons learned. It would provide actionable insights and inspiration for other hustlers.
        </p>
        <p>
            For example, in the story about bootstrapping a SaaS to $10k MRR, the author might detail their process for finding a profitable niche, validating the idea, building the MVP, and acquiring the first customers. They could share specific strategies, tools, and metrics that were crucial to their success.
        </p>
        <p>
            Similarly, a story about quitting a FAANG job to build an indie game could delve into the creative process, the technical challenges, and the emotional rollercoaster of entrepreneurship. It would offer a realistic and inspiring look at what it takes to follow your passion and build something of your own.
        </p>
         <Button asChild className="mt-8">
            <Link href="/stories">Back to All Stories</Link>
         </Button>
      </div>
    </article>
  );
}
