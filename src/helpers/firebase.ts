// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGUDTAfrB9ZiWPq8wv36WfrIQDTyFx7As",
  authDomain: "swara-sanchari-abcc1.firebaseapp.com",
  databaseURL: "https://swara-sanchari-default-rtdb.firebaseio.com",
  projectId: "swara-sanchari",
  storageBucket: "swara-sanchari.appspot.com",
  messagingSenderId: "352617816664",
  appId: "1:352617816664:web:52f41e2e6b5a1d363aa02d",
  measurementId: "G-8TQDZFLRW6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
