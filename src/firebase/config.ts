
import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDI_uiGt5rT2OWuJWnSzwov9qTMFE75vEQ",
  authDomain: "studio-7981936388-fd16c.firebaseapp.com",
  projectId: "studio-7981936388-fd16c",
  storageBucket: "studio-7981936388-fd16c.firebasestorage.app",
  messagingSenderId: "123455126797",
  appId: "1:123455126797:web:34fd28c86c77468a1bc444",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage, app };
