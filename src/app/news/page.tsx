import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { trendingNews } from '@/lib/placeholder-data';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Trending News</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          The latest buzz from tech, startups, and the creator economy, all in one place.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trendingNews.concat(trendingNews).concat(trendingNews).map((article, index) => (
        <Card key={`${article.id}-${index}`} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <Link href="#" className="flex flex-col">
              <div>
                <Image
                  src={article.imageUrl.replace(/seed\/\w+/, `seed/newspage${index}`)}
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
    </div>
  );
}
