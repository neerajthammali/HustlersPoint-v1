'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../provider';
import type { User } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

export function useUser() {
    const auth = useAuth();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (auth) {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                setUser(user);
                setLoading(false);
            });
            return () => unsubscribe();
        }
         setLoading(false);
    }, [auth]);

    return { user, loading };
}
