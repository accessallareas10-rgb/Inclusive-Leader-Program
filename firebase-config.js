// Import Firebase core and services
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js";

// Replace these values with your actual Firebase config from the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyD76PmR-DCGhE9ksbfusGJP7aqtISSRtDU",
  authDomain: "inclusive-leadership-program.firebaseapp.com",
  projectId: "inclusive-leadership-program",
  storageBucket: "inclusive-leadership-program.firebasestorage.app",
  messagingSenderId: "900936263943",
  appId: "1:900936263943:web:b023267e9ae77900c9fda2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Storage instances
export const db = getFirestore(app);
export const storage = getStorage(app);
