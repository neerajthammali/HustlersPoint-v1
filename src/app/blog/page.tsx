import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getSortedPostsData } from '@/lib/posts';
import { CalendarDays, Book, UserCircle, Tag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function BlogPage() {
  const blogPosts = getSortedPostsData();

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
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Blog</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Explore research articles, productivity tips, and growth strategies for young hustlers.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="group flex flex-col overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={600}
                height={400}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
              <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
              
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
  );
}
