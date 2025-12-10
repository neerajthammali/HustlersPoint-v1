import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { forumTopics } from '@/lib/placeholder-data';
import { MessageSquare, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { PopularPosts } from '@/components/shared/popular-posts';
import { BlogIdeasPoll } from '@/components/shared/blog-ideas-poll';

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Community Forums</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Join the conversation, ask questions, and share your journey with fellow hustlers.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-5 w-5" />
          Start a Discussion
        </Button>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-8">
            <Card>
            <CardHeader>
                <CardTitle>Popular Topics</CardTitle>
                <CardDescription>Trending discussions in the community.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col divide-y">
                {forumTopics.concat(forumTopics).map((topic, index) => (
                    <div key={`${topic.id}-${index}`} className="grid grid-cols-12 items-center gap-4 rounded-lg px-2 py-4 hover:bg-muted/50">
                    <div className="col-span-1 hidden text-center text-muted-foreground md:block">
                        <MessageSquare className="h-6 w-6 mx-auto" />
                    </div>
                    <div className="col-span-12 md:col-span-7">
                        <Link href="#" className="font-semibold hover:text-primary transition-colors">{topic.title}</Link>
                        <p className="text-sm text-muted-foreground">
                        Started by <span className="font-medium text-primary">{topic.author}</span> in <span className="font-medium">{topic.category}</span>
                        </p>
                    </div>
                    <div className="col-span-6 text-center md:col-span-2">
                        <div className="font-semibold">{topic.replies}</div>
                        <div className="text-xs text-muted-foreground">Replies</div>
                    </div>
                    <div className="col-span-6 text-right text-sm text-muted-foreground md:col-span-2">
                        {topic.lastReply}
                    </div>
                    </div>
                ))}
                </div>
            </CardContent>
            </Card>
        </div>
        <aside className="md:col-span-4 space-y-8">
            <PopularPosts />
            <BlogIdeasPoll />
        </aside>
      </div>
    </div>
  );
}
