import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Lightbulb, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about HustlersPo!nt, our mission, and our community.',
};

const missionStatements = [
    {
        Icon: Lightbulb,
        title: "Share Powerful Insights",
        description: "We provide a platform for writers, founders, and learners to share their knowledge and experiences with a growing community."
    },
    {
        Icon: Users,
        title: "Build Your Future",
        description: "We empower creators to build their audience, connect with peers, and create opportunities for growth."
    },
    {
        Icon: BookOpen,
        title: "Foster a Community",
        description: "We are building a space for like-minded hustlers to connect, collaborate, and learn from one another."
    }
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            About HustlersPo!nt
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A creator platform for writers, founders, and learners to share powerful
            insights and grow an audience.
          </p>
        </div>

        <div className="mt-16 prose prose-lg mx-auto max-w-none dark:prose-invert">
          <p>
            Welcome to HustlersPo!nt, the ultimate destination for the new generation of creators, builders, and innovators. Our mission is to provide a space where ambition meets opportunity, where your ideas can take root and flourish. We believe that everyone has a story to tell, an insight to share, and the potential to build something extraordinary.
          </p>
          <p>
            Whether you're a writer crafting your next viral article, a founder bootstrapping a SaaS startup, a student learning the ropes of entrepreneurship, or simply a curious mind eager to grow, HustlersPo!nt is your platform. We are more than just a collection of articles and stories; we are a vibrant community dedicated to mutual growth and success.
          </p>
        </div>

        <div className="mt-16">
            <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Our Mission</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {missionStatements.map(statement => (
                    <Card key={statement.title} className="text-center">
                        <CardHeader>
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <statement.Icon className="h-6 w-6" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-xl font-bold">{statement.title}</h3>
                            <p className="mt-2 text-muted-foreground">{statement.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
