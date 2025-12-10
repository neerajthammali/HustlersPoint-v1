'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, useUser } from '@/firebase';
import { updateProfile } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ProfilePage() {
  const auth = useAuth();
  const { user, loading } = useUser();
  const router = useRouter();
  const { toast } = useToast();

  const [displayName, setDisplayName] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
    if (user && user.displayName) {
      setDisplayName(user.displayName);
    }
  }, [user, loading, router]);

  const handleSaveProfile = async () => {
    if (!auth || !auth.currentUser) {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: 'You must be logged in to update your profile.',
        });
        return;
    }
    if (!displayName.trim()) {
        toast({
            variant: 'destructive',
            title: 'Invalid Name',
            description: 'Display name cannot be empty.',
        });
        return;
    }

    setIsSaving(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      toast({
        title: 'Profile Updated',
        description: 'Your display name has been successfully updated.',
      });
      // Force a re-render or state update in header if needed
      // This might require a more global state management for user profile
    } catch (error: any) {
      console.error('Error updating profile:', error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error.message || 'Could not update your profile.',
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (loading || !user) {
    return (
        <div className="flex min-h-[calc(100vh-20rem)] items-center justify-center">
            <p>Loading...</p>
        </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-20rem)] items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <Avatar className="mx-auto h-24 w-24 mb-4">
            <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
            <AvatarFallback>{user.displayName?.charAt(0) || user.email?.charAt(0)}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold">Your Profile</CardTitle>
          <CardDescription>Update your personal information.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={user.email || ''} disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            <Button onClick={handleSaveProfile} disabled={isSaving} className="w-full">
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
