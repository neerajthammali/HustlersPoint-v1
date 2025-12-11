'use client';

import { useEffect, useState } from 'react';
import { Twitter, Linkedin, Facebook, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function ShareButtons({ title }: { title: string }) {
  const [url, setUrl] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareOptions = [
    {
      name: 'Twitter',
      Icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: 'LinkedIn',
      Icon: Linkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    },
    {
      name: 'Facebook',
      Icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      toast({
        title: 'Link Copied!',
        description: 'The link has been copied to your clipboard.',
      });
    }, (err) => {
      console.error('Could not copy text: ', err);
      toast({
        variant: 'destructive',
        title: 'Copy Failed',
        description: 'Could not copy the link to your clipboard.',
      });
    });
  };

  if (!url) {
    return null; // Don't render until the URL is available on the client
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground">Share:</span>
      {shareOptions.map(({ name, Icon, url }) => (
        <Button
          key={name}
          variant="outline"
          size="icon"
          asChild
          className="h-9 w-9"
        >
          <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${name}`}>
            <Icon className="h-4 w-4" />
          </a>
        </Button>
      ))}
      <Button variant="outline" size="icon" onClick={handleCopy} className="h-9 w-9">
        <Copy className="h-4 w-4" />
        <span className="sr-only">Copy link</span>
      </Button>
    </div>
  );
}
