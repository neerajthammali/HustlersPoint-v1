import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Lightbulb, Users, Sparkles, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts, serviceProfiles, hustlerStories } from '@/lib/placeholder-data';
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
              <Link href="/stories">Learn More</Link>
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
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Editor's Picks</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Hand-picked articles from our editors to get you started.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-none shadow-none transition-shadow duration-300 hover:shadow-xl bg-card">
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

      {/* Hustler Stories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Hustler Stories</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Real success stories from founders, creators, and indie hackers across the web.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {hustlerStories.map((story) => (
              <Card key={story.id} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                 <Link href="/stories">
                    <Image
                        src={story.imageUrl}
                        alt={story.title}
                        width={600}
                        height={400}
                        className="h-48 w-full object-cover"
                        data-ai-hint={story.imageHint}
                    />
                </Link>
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <story.sourceIcon className="h-4 w-4" />
                    <span>{story.source}</span>
                  </div>
                  <h3 className="font-headline mt-2 text-lg font-semibold">
                    <Link href="/stories" className="hover:text-primary transition-colors">{story.title}</Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">{story.excerpt}</p>
                   <div className="mt-4 text-xs font-medium text-muted-foreground">
                    By {story.author}
                  </div>
                </CardContent>
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
          <h2 className="text-center text-3xl font-bold md:text-4xl">Services Showcase</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Connect with talented freelancers, engineers, and SaaS builders ready to help you grow.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {serviceProfiles.map((profile) => (
              <Card key={profile.id} className="text-center transition-shadow duration-300 hover:shadow-xl bg-card">
                <CardContent className="p-6">
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
                  <p className="mt-2 text-sm text-muted-foreground">{profile.description}</p>
                  <Button asChild variant="outline" className="mt-6">
                    <Link href="/services">View Profile</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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
          <h2 className="text-center text-3xl font-bold md:text-4xl">What They're Saying</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Testimonials from our readers and community members.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="border-none bg-muted/50 p-6 shadow-sm">
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
      <section className="py-16 text-center md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold md:text-4xl">Join the Community</h2>
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
