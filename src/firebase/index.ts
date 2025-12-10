import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { firebaseConfig } from './config';

function initializeFirebase(config: FirebaseOptions) {
    const app = !getApps().length ? initializeApp(config) : getApp();
    const auth = getAuth(app);
    const firestore = getFirestore(app);

    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
        // Point to the emulators running on your local machine
        connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
        connectFirestoreEmulator(firestore, 'localhost', 8080);
    }
    
    return { app, auth, firestore };
}

const { app, auth, firestore } = initializeFirebase(firebaseConfig);

export { app, auth, firestore };

export { FirebaseProvider, FirebaseClientProvider, useFirebase, useFirebaseApp, useAuth, useFirestore } from './provider';
export { useUser } from './auth/use-user';
export { useDoc } from './firestore/use-doc';
export { useCollection } from './firestore/use-collection';
