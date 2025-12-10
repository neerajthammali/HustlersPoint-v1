'use client';

import { useState, useEffect } from 'react';
import { collection, onSnapshot, Query } from 'firebase/firestore';
import { useFirestore } from '../provider';

export function useCollection<T>(path: string) {
    const db = useFirestore();
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (db) {
            const collectionRef = collection(db, path) as Query<T>;
            const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
                const data: T[] = [];
                snapshot.forEach(doc => {
                    data.push({ ...doc.data(), id: doc.id });
                });
                setData(data);
                setLoading(false);
            });
            return () => unsubscribe();
        }
    }, [db, path]);

    return { data, loading };
}
