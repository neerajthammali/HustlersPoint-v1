import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Lightbulb, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts, serviceProfiles } from '@/lib/placeholder-data';
import { Badge } from '@/components/ui/badge';

const stats = [
  { value: '5+', label: 'Articles Published', Icon: BookOpen },
  { value: '85+', label: 'Ideas Shared', Icon: Lightbulb },
  { value: '500+', label: 'Community Members', Icon: Users },
];

const testimonials = [
  {
    quote: "Hustler's Point is my go-to for no-fluff, actionable advice. The case studies on startup growth have been a game-changer for my own venture.",
    author: 'Alex Johnson',
    role: 'SaaS Founder',
    imageUrl: 'https://picsum.photos/seed/alex/100/100',
    imageHint: 'man portrait',
  },
  {
    quote: "The community is incredible. Being able to connect with other founders who are facing the same challenges is invaluable. It's like a mastermind group in my pocket.",
    author: 'Samantha Lee',
    role: 'Early-Stage Entrepreneur',
    imageUrl: 'https://picsum.photos/seed/samantha/100/100',
    imageHint: 'woman portrait',
  },
  {
    quote: "The breakdowns of how successful companies solved real-world problems are pure gold. It's inspiring and gives me tangible ideas to apply to my own business.",
    author: 'David Chen',
    role: 'Bootstrapped Founder',
    imageUrl: 'https://picsum.photos/seed/david/100/100',
    imageHint: 'person glasses',
  },
];


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 text-center md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Publish Your Ideas.
            <br />
            Build Your Future.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A creator platform for writers, founders, and learners to share powerful
            insights and grow an audience.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/blog">
                Explore Articles <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="#">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid grid-cols-1 gap-8 border-y border-border py-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
                <stat.Icon className="h-8 w-8 text-primary" />
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Editor's Picks</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Hand-picked articles from our editors to get you started.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-none shadow-none transition-shadow duration-300 hover:shadow-xl">
                <Link href="/blog">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="h-48 w-full rounded-md object-cover"
                    data-ai-hint={post.imageHint}
                  />
                </Link>
                <CardContent className="p-4">
                  <p className="mb-2 text-sm font-medium text-primary">{post.category}</p>
                  <h3 className="text-lg font-bold">
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
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl">What They're Saying</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Testimonials from our readers and community members.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="border-none bg-background p-6 shadow-sm">
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
      <section className="py-16 text-center md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold md:text-4xl">Join the Community</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Connect with fellow hustlers, founders, and creators. Share ideas, get feedback, and grow together.
          </p>
          <div className="mt-8 flex justify-center gap-4">
             <Button asChild size="lg">
                <Link href="#">Join Discord</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
                <Link href="#">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 2.85 1.2 5.42 3.14 7.27L3.5 21.96l2.84-1.7c1.7.98 3.65 1.54 5.7 1.54 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2m.01 1.64c4.54 0 8.27 3.73 8.27 8.27 0 4.54-3.73 8.27-8.27 8.27-1.99 0-3.82-.7-5.23-1.84l-.37-.22-3.87 2.31.8-3.79-.25-.39a8.17 8.17 0 0 1-1.9-5.24c0-4.54 3.73-8.27 8.27-8.27M8.53 7.33c-.22 0-.44.02-.65.05-.22.03-.46.45-.53.53-.08.08-.82 1.43-.82 3.48s.9 3.93 1.01 4.1c.11.17 1.48 2.65 4.3 3.5.6.19 1.1.25 1.49.22.39-.03 1.2-.48 1.37-.94.17-.45.17-.84.12-.94s-.08-.16-.17-.25l-1.12-.56s-.45-.22-.65.22c-.2.45-.65.8-1.01.9s-.73.08-1.37-.3C9.57 16.5 8.5 15.3 8.5 15.3s-.45-.53-.9-.53h-.45m3.51 5.56c.22 0 .45-.02.65-.05.22-.03.46-.45.53-.53.08-.08.82-1.43.82-3.48s-.9-3.93-1.01-4.1c-.11-.17-1.48-2.65-4.3-3.5-.6-.19-1.1-.25-1.49-.22-.39.03-1.2.48-1.37.94-.17-.45-.17-.84-.12-.94s.08-.16.17-.25l1.12-.56s.45-.22.65.22c.2.45.65.8 1.01.9s.73.08 1.37-.3c2.08-.94 3.13-2.14 3.13-2.14s.45-.53.9-.53h.45c.45 0 .9.22.9.53s.9 3.93.9 3.93s-.45.53-.9.53h-.45"/></svg>
                  Join WhatsApp
                </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
