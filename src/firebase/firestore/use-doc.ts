'use client';

import { useState, useEffect } from 'react';
import { doc, onSnapshot, DocumentReference } from 'firebase/firestore';
import { useFirestore } from '../provider';

export function useDoc<T>(path: string) {
    const db = useFirestore();
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (db) {
            const docRef = doc(db, path) as DocumentReference<T>;
            const unsubscribe = onSnapshot(docRef, (doc) => {
                if (doc.exists()) {
                    setData({ ...doc.data(), id: doc.id });
                } else {
                    setData(null);
                }
                setLoading(false);
            });
            return () => unsubscribe();
        }
    }, [db, path]);

    return { data, loading };
}
