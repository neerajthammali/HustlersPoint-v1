'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const commentSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  comment: z.string().min(5, { message: 'Comment must be at least 5 characters.' }),
});

type CommentFormValues = z.infer<typeof commentSchema>;

type Comment = {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  timestamp: string;
};

const initialComments: Comment[] = [
  {
    id: 1,
    name: 'Alice',
    avatar: 'https://picsum.photos/seed/alice/40/40',
    comment: 'This is a really insightful article. Thanks for sharing!',
    timestamp: '2 days ago',
  },
  {
    id: 2,
    name: 'Bob',
    avatar: 'https://picsum.photos/seed/bob/40/40',
    comment: 'I had a similar experience. It\'s great to see it articulated so well.',
    timestamp: '1 day ago',
  },
];

export function CommentSection() {
  const { toast } = useToast();
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const form = useForm<CommentFormValues>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      name: '',
      comment: '',
    },
  });

  const onSubmit: SubmitHandler<CommentFormValues> = (data) => {
    // In a real app, you would submit this to your backend
    const newComment: Comment = {
      id: comments.length + 1,
      name: data.name,
      avatar: `https://picsum.photos/seed/${data.name.toLowerCase()}/40/40`,
      comment: data.comment,
      timestamp: 'Just now',
    };

    setComments([newComment, ...comments]);

    toast({
      title: 'Comment Submitted!',
      description: 'Thanks for your feedback.',
    });

    form.reset();
  };

  return (
    <div className="mt-16">
      <Card>
        <CardHeader>
          <CardTitle>Join the Discussion</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Comment</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Share your thoughts..." {...field} className="min-h-[120px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Post Comment</Button>
            </form>
          </Form>

          <Separator className="my-8" />

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">{comments.length} Comments</h3>
            {comments.map((comment) => (
              <div key={comment.id} className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src={comment.avatar} alt={comment.name} />
                  <AvatarFallback>{comment.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{comment.name}</p>
                    <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
