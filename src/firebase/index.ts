import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './config';

function initializeFirebase(config: FirebaseOptions) {
    // Check if all required config values are present
    if (!config.apiKey || config.apiKey === 'your-api-key') {
        console.warn('Firebase configuration is incomplete. Please check your environment variables.');
        return { app: null, auth: null, firestore: null };
    }

    const app = !getApps().length ? initializeApp(config) : getApp();
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    
    return { app, auth, firestore };
}

const { app, auth, firestore } = initializeFirebase(firebaseConfig as FirebaseOptions);

export { app, auth, firestore };

export { FirebaseProvider, useFirebase, useFirebaseApp, useAuth, useFirestore } from './provider';
export { FirebaseClientProvider } from './client-provider';
export { useUser } from './auth/use-user';
export { useDoc } from './firestore/use-doc';
export { useCollection } from './firestore/use-collection';
