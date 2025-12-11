'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { UserCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import type { Story } from '@/lib/posts';
import { storyIconMapper } from '@/lib/icon-mappers/story-icon-mapper';

export default function StoriesClientPage({ allStories }: { allStories: Story[] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStories = useMemo(() => {
    if (!searchTerm) {
      return allStories;
    }
    return allStories.filter(
      (story) =>
        story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.source.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allStories, searchTerm]);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Hustler Stories</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Real success stories from founders, creators, and indie hackers across the web.
        </p>
      </div>

      <div className="mt-8 mb-12 max-w-lg mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search stories..."
            className="w-full pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredStories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => {
            const Icon = storyIconMapper(story.source);
            return (
                <Card key={story.id} className="group flex flex-col overflow-hidden">
                <Link href={`/stories/${story.slug}`} className="block overflow-hidden">
                    <Image
                        src={story.imageUrl}
                        alt={story.title}
                        width={600}
                        height={400}
                        className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={story.imageHint}
                    />
                </Link>
                <CardContent className="flex flex-1 flex-col p-4">
                    <h3 className="font-headline text-lg font-semibold">
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
                        <Icon className="h-4 w-4" />
                        <span>{story.source}</span>
                    </div>
                    </div>
                </Card>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <Search className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-xl font-semibold">No Stories Found</h3>
          <p className="mt-2 text-muted-foreground">
            Your search for "{searchTerm}" did not match any stories.
          </p>
        </div>
      )}
    </div>
  );
}
