'use client';

import React from 'react';
import { FirebaseProvider } from './provider';
import { app, auth, firestore } from '.';

export const FirebaseClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <FirebaseProvider value={{ app, auth, firestore }}>
            {children}
        </FirebaseProvider>
    );
};
