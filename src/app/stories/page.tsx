import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { hustlerStories } from '@/lib/placeholder-data';

export default function StoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Hustler Stories</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Real success stories from founders, creators, and indie hackers across the web.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {hustlerStories.concat(hustlerStories).map((story, index) => (
          <Card key={`${story.id}-${index}`} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <Link href="#">
              <Image
                src={story.imageUrl.replace(/seed\/\w+/, `seed/storypage${index}`)}
                alt={story.title}
                width={600}
                height={400}
                className="h-48 w-full object-cover"
                data-ai-hint={story.imageHint}
              />
            </Link>
            <CardContent className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <story.sourceIcon className="h-4 w-4" />
                <span>{story.source}</span>
              </div>
              <h3 className="font-headline mt-2 text-lg font-semibold">
                <Link href="#" className="hover:text-primary transition-colors">{story.title}</Link>
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">{story.excerpt}</p>
              <div className="mt-4 text-xs font-medium text-muted-foreground">
                By {story.author}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
