import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getSortedAuthorsData, getAuthorData } from '@/lib/authors';
import { getPostsByAuthor } from '@/lib/posts';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';
import { CategoryIcon } from '@/components/shared/category-icon';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const author = getAuthorData(params.slug);

  if (!author) {
    return {
      title: 'Author Not Found',
    };
  }

  return {
    title: author.name,
    description: `Read articles by ${author.name}. ${author.bio}`,
  };
}

export async function generateStaticParams() {
  const authors = getSortedAuthorsData();
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export default function AuthorPage({ params }: { params: { slug: string } }) {
  const author = getAuthorData(params.slug);
  
  if (!author) {
    notFound();
  }

  const authorPosts = getPostsByAuthor(author.slug);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-8">
          <Image
            src={author.avatar}
            alt={author.name}
            width={150}
            height={150}
            className="rounded-full object-cover"
            data-ai-hint={author.imageHint}
          />
          <div className="flex-1">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
              {author.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{author.bio}</p>
          </div>
        </div>

        <Separator className="my-12" />

        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-12">
          Articles by {author.name}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {authorPosts.map((post) => (
            <Card key={post.id} className="group flex flex-col overflow-hidden">
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
                  <Badge variant="outline" className="flex items-center font-normal">
                    <CategoryIcon category={post.category} />
                    {post.category}
                  </Badge>
                </div>
                <h3 className="font-headline mt-3 text-lg font-semibold">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
                </h3>
              </CardContent>
              <Separator className="my-0" />
              <div className="flex items-center justify-between p-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                    <UserCircle className="h-4 w-4" />
                    <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{post.date}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
