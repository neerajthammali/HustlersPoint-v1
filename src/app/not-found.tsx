"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex min-h-[calc(100vh-20rem)] flex-col items-center justify-center text-center">
            <FileQuestion className="mx-auto h-24 w-24 text-muted-foreground" />
            <h1 className="mt-8 font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
                404 - Page Not Found
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
                Oops! The page you're looking for doesn't seem to exist.
            </p>
            <Button asChild className="mt-8">
                <Link href="/">Go Back to Homepage</Link>
            </Button>
        </div>
    </div>
  );
}
