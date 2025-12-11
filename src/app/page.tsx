
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Lightbulb, Users, CalendarDays, Book, UserCircle, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getSortedPostsData } from '@/lib/posts';
import { getSortedStoriesData } from '@/lib/posts';
import { serviceProfiles } from '@/lib/placeholder-data';
import { Badge } from '@/components/ui/badge';


const stats = [
  { value: '12+', label: 'Blogs', Icon: BookOpen },
  { value: '12K+', label: 'Impressions', Icon: Lightbulb },
  { value: '500+', label: 'Subscribers', Icon: Users },
];

const testimonials = [
  {
    quote: "Hustler's Point is my go-to for no-fluff, actionable advice. The case studies on startup growth have been a game-changer for my own venture.",
    author: 'Alex Johnson',
    role: 'SaaS Founder',
    imageUrl: 'https://picsum.photos/seed/alex/48/48',
    imageHint: 'man portrait',
  },
  {
    quote: "The community is incredible. Being able to connect with other founders who are facing the same challenges is invaluable. It's like a mastermind group in my pocket.",
    author: 'Samantha Lee',
    role: 'Early-Stage Entrepreneur',
    imageUrl: 'https://picsum.photos/seed/samantha/48/48',
    imageHint: 'woman portrait',
  },
  {
    quote: "The breakdowns of how successful companies solved real-world problems are pure gold. It's inspiring and gives me tangible ideas to apply to my own business.",
    author: 'David Chen',
    role: 'Bootstrapped Founder',
    imageUrl: 'https://picsum.photos/seed/david/48/48',
    imageHint: 'person glasses',
  },
];


export default function Home() {
  const blogPosts = getSortedPostsData().slice(0, 3);
  const hustlerStories = getSortedStoriesData().slice(0, 3);

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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 text-center md:py-32">
        <div className="absolute inset-0 z-0 opacity-10 dark:[&>div]:bg-primary/20 [&>div]:absolute [&>div]:-inset-y-1/4 [&>div]:w-1/4 [&>div]:animate-[spin_20s_linear_infinite] [&>div]:bg-secondary/20 [&>div]:blur-3xl">
            <div className="left-0"></div>
            <div className="left-1/4"></div>
            <div className="left-2/4"></div>
            <div className="left-3/4"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Grow Daily. <span className="text-primary">Hustle Wisely.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Better decisions through stories, research, and clarity.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="group">
              <Link href="/blog">
                Explore Articles <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/stories">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="border-b border-t">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
                {stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-center gap-4 p-6 transition-colors hover:bg-muted/50">
                    <stat.Icon className="h-10 w-10 text-primary" />
                    <div>
                        <p className="text-3xl font-bold">{stat.value}</p>
                        <p className="text-muted-foreground">{stat.label}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Editor's Picks</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Hand-picked articles from our editors to get you started.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group flex flex-col overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
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
           <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hustler Stories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Hustler Stories</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Real success stories from founders, creators, and indie hackers across the web.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {hustlerStories.map((story) => (
              <Card key={story.id} className="group flex flex-col overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
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
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/stories">View All Stories</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Showcase */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Most Reliable Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Connect with talented freelancers, engineers, and SaaS builders ready to help you grow.
          </p>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full mt-12"
          >
            <CarouselContent>
              {serviceProfiles.map((profile) => (
                <CarouselItem key={profile.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <CardContent className="flex h-full flex-col items-center p-6">
                        <Image
                          src={profile.imageUrl}
                          alt={profile.name}
                          width={128}
                          height={128}
                          className="mx-auto h-32 w-32 rounded-full object-cover"
                          data-ai-hint={profile.imageHint}
                        />
                        <h3 className="font-headline mt-4 text-xl font-semibold">{profile.name}</h3>
                        <p className="text-sm text-primary">{profile.role}</p>
                        <p className="mt-2 flex-1 text-sm text-muted-foreground">{profile.description}</p>
                        <Badge variant="secondary" className="mt-4">Most Reliable</Badge>
                        <Button asChild variant="outline" className="mt-6">
                          <Link href="/services">View Profile</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">What They're Saying</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Testimonials from our readers and community members.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-0">
                  <blockquote className="text-base italic text-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-6 flex items-center gap-4">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                      data-ai-hint={testimonial.imageHint}
                    />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Join Community Section */}
      <section className="py-16 text-center md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Join the Community</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Connect with fellow hustlers, founders, and creators. Share ideas, get feedback, and grow together.
          </p>
          <div className="mt-8 flex justify-center gap-4">
             <Button asChild size="lg">
                <Link href="/community">Join The Forums</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
                <Link href="#">
                  Join Discord
                </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
