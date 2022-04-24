// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFuOpN_ehc0XuGcbiikUkswoIvRdE1cpM",
  authDomain: "swara-sanchari-a4790.firebaseapp.com",
  projectId: "swara-sanchari-a4790",
  storageBucket: "swara-sanchari-a4790.appspot.com",
  messagingSenderId: "101690915021",
  appId: "1:101690915021:web:ddad2f0b15fdb416231184",
  measurementId: "G-7W2XPNDTQS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
