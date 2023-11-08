// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const all = import.meta.env;

// done: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log('key', all.VITE_API_KEY);
// console.log(process.env.API_KEY);
const firebaseConfig = {
  apiKey: all.VITE_API_KEY,
  authDomain: all.VITE_AUTH_DOMAIN,
  projectId: all.VITE_PROJECT_ID,
  storageBucket: all.VITE_STORAGE_BUCKET,
  messagingSenderId: all.VITE_MESSEGING_SENDER_ID,
  appId: all.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;