
'use client';

import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy, Query, DocumentData, OrderByDirection } from 'firebase/firestore';
import { useFirestore } from '../provider';

type UseCollectionOptions = {
    orderBy?: [string, OrderByDirection];
}

export function useCollection<T extends DocumentData>(path: string, options?: UseCollectionOptions) {
    const db = useFirestore();
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (db) {
            let collectionRef: Query<T> = collection(db, path) as Query<T>;
            
            if (options?.orderBy) {
                collectionRef = query(collectionRef, orderBy(...options.orderBy));
            }

            const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
                const data: T[] = [];
                snapshot.forEach(doc => {
                    data.push({ ...doc.data(), id: doc.id } as T);
                });
                setData(data);
                setLoading(false);
            }, (error) => {
                console.error("Error fetching collection: ", error);
                setLoading(false);
            });
            return () => unsubscribe();
        } else {
            setLoading(false);
        }
    }, [db, path, options?.orderBy?.[0], options?.orderBy?.[1]]);

    return { data, loading };
}
