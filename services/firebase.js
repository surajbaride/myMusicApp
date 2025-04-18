import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2aiX2UbOyWdvZabBXG2nd2D1QikZJMi4",
  authDomain: "musicroomapp-17387.firebaseapp.com",
  projectId: "musicroomapp-17387",
  storageBucket: "musicroomapp-17387.appspot.com",
  messagingSenderId: "724995653421",
  appId: "1:724995653421:web:164bf5d4207f499672dda4"
};

// ✅ Only initialize if no apps exist
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
