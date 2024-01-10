// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV3yBEJSQF0jQpWZa5_HSBkBPGQPAsBCQ",
  authDomain: "fir-practice-1a324.firebaseapp.com",
  projectId: "fir-practice-1a324",
  storageBucket: "fir-practice-1a324.appspot.com",
  messagingSenderId: "379820523476",
  appId: "1:379820523476:web:b768f5c373e34abe486041"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
