// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const all = import.meta.env;

// done: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('key', all.API_KEY);
// console.log(process.env.API_KEY);
const firebaseConfig = {
  apiKey: "AIzaSyD54YaChx8XwinMKRpAUAiTlrryM9zFbQU",
  authDomain: "assignment-11-96d26.firebaseapp.com",
  projectId: "assignment-11-96d26",
  storageBucket: "assignment-11-96d26.appspot.com",
  messagingSenderId: "340492513125",
  appId: "1:340492513125:web:68b608d2d562cdf95afb8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;