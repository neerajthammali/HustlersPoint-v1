import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { features, blogPosts, serviceProfiles } from '@/lib/placeholder-data';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-card py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Level Up Your Hustle.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A launchpad for the next generation of builders, thinkers, and creators.
            Articles, stories, and a community to fuel your growth.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/blog">
                Start Reading <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/community">Join Community</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="flex flex-col items-start p-6 text-left transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-4 rounded-md bg-primary/10 p-3 text-primary">
                  <feature.Icon className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
                <Button variant="link" asChild className="mt-auto px-0 pt-4">
                  <Link href={feature.href}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-center text-3xl font-bold md:text-4xl">From the Blog</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Fresh insights on productivity, growth, and self-development.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                <Link href="/blog">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover"
                    data-ai-hint={post.imageHint}
                  />
                </Link>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-2">{post.category}</Badge>
                  <h3 className="font-headline text-lg font-semibold">
                    <Link href="/blog" className="hover:text-primary transition-colors">{post.title}</Link>
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-center text-3xl font-bold md:text-4xl">Meet the Hustlers</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            A curated list of talented individuals building the future.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {serviceProfiles.map((profile) => (
              <Card key={profile.id} className="text-center transition-shadow duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <Image
                    src={profile.imageUrl}
                    alt={profile.name}
                    width={100}
                    height={100}
                    className="mx-auto h-24 w-24 rounded-full object-cover"
                    data-ai-hint={profile.imageHint}
                  />
                  <h3 className="font-headline mt-4 text-xl font-semibold">{profile.name}</h3>
                  <p className="text-sm text-primary">{profile.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{profile.description}</p>
                   <Button variant="link" asChild className="mt-4">
                    <Link href="/services">View Profile</Link>
                   </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
