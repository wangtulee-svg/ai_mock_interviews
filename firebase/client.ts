
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDNKw-L09mnQgBJCLi1uZ4lX_qRsLXZBI",
  authDomain: "prepwise-9d797.firebaseapp.com",
  projectId: "prepwise-9d797",
  storageBucket: "prepwise-9d797.firebasestorage.app",
  messagingSenderId: "804321595242",
  appId: "1:804321595242:web:04d5beb7bd35931e779f13",
  measurementId: "G-NPNDT0CWKX"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)