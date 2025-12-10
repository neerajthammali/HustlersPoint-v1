import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { getSortedAuthorsData } from '@/lib/authors';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writers',
  description: 'Meet the talented writers and creators behind HustlersPo!nt.',
};

export default function WritersPage() {
  const authors = getSortedAuthorsData();

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Our Writers</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Meet the talented writers, founders, and creators sharing their insights on HustlersPo!nt.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {authors.map((author) => (
          <Card key={author.slug} className="group overflow-hidden rounded-xl text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <Link href={`/authors/${author.slug}`} className="flex flex-col h-full">
              <CardContent className="flex flex-1 flex-col items-center p-6">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={128}
                  height={128}
                  className="h-32 w-32 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={author.imageHint}
                />
                <h3 className="font-headline mt-4 text-xl font-semibold group-hover:text-primary transition-colors">{author.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">{author.bio}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
