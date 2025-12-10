import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { getSortedStoriesData } from '@/lib/posts';
import { Separator } from '@/components/ui/separator';
import { UserCircle } from 'lucide-react';

export default function StoriesPage() {
  const hustlerStories = getSortedStoriesData();
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Hustler Stories</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Real success stories from founders, creators, and indie hackers across the web.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hustlerStories.map((story) => (
        <Card key={story.id} className="group flex flex-col overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <Link href={`/stories/${story.slug}`} className="block overflow-hidden">
                <Image
                    src={story.imageUrl}
                    alt={story.title}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={story.imageHint}
                />
            </Link>
            <CardContent className="flex flex-1 flex-col p-4">
              <h3 className="font-headline mt-3 text-lg font-semibold">
                  <Link href={`/stories/${story.slug}`} className="hover:text-primary transition-colors">{story.title}</Link>
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">{story.excerpt}</p>
            </CardContent>
            <Separator className="my-0" />
            <div className="flex items-center justify-between p-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                    <UserCircle className="h-4 w-4" />
                    <span>{story.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <story.sourceIcon className="h-4 w-4" />
                    <span>{story.source}</span>
                </div>
              </div>
        </Card>
        ))}
      </div>
    </div>
  );
}
