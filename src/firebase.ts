import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Only initialise Firebase when a valid config is present
const isConfigured = !!firebaseConfig.apiKey && !!firebaseConfig.databaseURL;
const app = isConfigured ? initializeApp(firebaseConfig) : null;
const database = isConfigured && app ? getDatabase(app) : null;

export const incrementViewCount = async (): Promise<number> => {
  if (!database) return 0;
  try {
    const viewsRef = ref(database, "portfolio/views");
    const snapshot = await get(viewsRef);
    const currentViews = snapshot.exists() ? snapshot.val() : 0;
    await set(viewsRef, currentViews + 1);
    return currentViews + 1;
  } catch (error) {
    console.error("Error incrementing view count:", error);
    return 0;
  }
};
