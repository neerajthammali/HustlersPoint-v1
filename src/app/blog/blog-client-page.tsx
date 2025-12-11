'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Book, UserCircle, Tag, Search } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import type { Post } from '@/lib/posts';

export default function BlogClientPage({ allPosts }: { allPosts: Post[] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    if (!searchTerm) {
      return allPosts;
    }
    return allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allPosts, searchTerm]);

  const CategoryIcon = ({ category }: { category: string }) => {
    switch (category.toLowerCase()) {
      case 'research':
        return <Book className="mr-1 h-3 w-3" />;
      case 'productivity':
        return <Tag className="mr-1 h-3 w-3" />;
      case 'growth':
        return <Tag className="mr-1 h-3 w-3" />;
      default:
        return <Tag className="mr-1 h-3 w-3" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          The Blog
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Explore research, productivity tips, and growth strategies for young
          hustlers.
        </p>
      </div>

      <div className="mt-8 mb-12 max-w-lg mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search articles..."
            className="w-full pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={post.imageHint}
                />
              </Link>
              <CardContent className="flex flex-1 flex-col p-4">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="flex items-center font-normal"
                  >
                    <CategoryIcon category={post.category} />
                    {post.category}
                  </Badge>
                </div>

                <h3 className="font-headline mt-3 text-lg font-semibold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <Separator className="my-0" />
              <div className="flex items-center justify-between p-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <UserCircle className="h-4 w-4" />
                  <Link
                    href={`/authors/${post.authorSlug}`}
                    className="hover:text-primary"
                  >
                    {post.author}
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Search className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-xl font-semibold">No Articles Found</h3>
          <p className="mt-2 text-muted-foreground">
            Your search for "{searchTerm}" did not match any articles.
          </p>
        </div>
      )}
    </div>
  );
}
