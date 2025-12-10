'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, useUser } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Chrome } from 'lucide-react';
import type { Metadata } from 'next';

const metadata: Metadata = {
    title: 'Login',
    description: 'Sign in to join the Hustlerspoint community.',
};


export default function LoginPage() {
    const auth = useAuth();
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push('/');
        }
    }, [user, router]);

    const handleGoogleSignIn = async () => {
        if (auth) {
            const provider = new GoogleAuthProvider();
            try {
                await signInWithPopup(auth, provider);
                router.push('/');
            } catch (error: any) {
                if (error.code !== 'auth/popup-closed-by-user') {
                    console.error('Error signing in with Google: ', error);
                }
            }
        }
    };

    return (
        <div className="flex min-h-[calc(100vh-20rem)] items-center justify-center bg-background px-4 py-12">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">Join Hustlerspoint</CardTitle>
                    <CardDescription>Sign in to join the community and share your story.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col space-y-4">
                        <Button onClick={handleGoogleSignIn} variant="outline" className="w-full">
                            <Chrome className="mr-2 h-5 w-5" />
                            Sign in with Google
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
