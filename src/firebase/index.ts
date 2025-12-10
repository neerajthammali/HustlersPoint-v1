import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './config';

function initializeFirebase(config: FirebaseOptions) {
    const app = !getApps().length ? initializeApp(config) : getApp();
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    
    return { app, auth, firestore };
}

const { app, auth, firestore } = initializeFirebase(firebaseConfig);

export { app, auth, firestore };

export { FirebaseProvider, FirebaseClientProvider, useFirebase, useFirebaseApp, useAuth, useFirestore } from './provider';
export { useUser } from './auth/use-user';
export { useDoc } from './firestore/use-doc';
export { useCollection } from './firestore/use-collection';
