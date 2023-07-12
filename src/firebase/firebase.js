// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCTH2n9ZoTrYL-WBNGjjahldl2uxTf_-I",
  authDomain: "login-4c358.firebaseapp.com",
  projectId: "login-4c358",
  storageBucket: "login-4c358.appspot.com",
  messagingSenderId: "122550767104",
  appId: "1:122550767104:web:0a2b1cbbf8e557641592e5",
  measurementId: "G-SMY4KWR1HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app