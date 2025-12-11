'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import type { NewsArticle } from '@/lib/placeholder-data';

export default function NewsClientPage({ allNews }: { allNews: NewsArticle[] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = useMemo(() => {
    if (!searchTerm) {
      return allNews;
    }
    return allNews.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.source.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allNews, searchTerm]);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Trending News</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          The latest buzz from tech, startups, and the creator economy, all in one place.
        </p>
      </div>

      <div className="mt-8 mb-12 max-w-lg mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search news..."
            className="w-full pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredNews.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((article) => (
            <Card key={article.id} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
              <Link href="#" className="flex flex-col">
                <div>
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="h-48 w-full object-cover"
                    data-ai-hint={article.imageHint}
                  />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <h3 className="font-headline text-xl font-semibold hover:text-primary transition-colors">{article.title}</h3>
                  <div className="mt-2 flex items-center text-sm text-muted-foreground">
                    <span>{article.source}</span>
                    <span className="mx-2">•</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Search className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-xl font-semibold">No News Found</h3>
          <p className="mt-2 text-muted-foreground">
            Your search for "{searchTerm}" did not match any news articles.
          </p>
        </div>
      )}
    </div>
  );
}
