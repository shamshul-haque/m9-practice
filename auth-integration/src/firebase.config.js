// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVqe7Oo-CA5TV9UTWZ-letr9aLu1bfo-0",
  authDomain: "auth-integration-2d889.firebaseapp.com",
  projectId: "auth-integration-2d889",
  storageBucket: "auth-integration-2d889.appspot.com",
  messagingSenderId: "271202226200",
  appId: "1:271202226200:web:c5170b60c39aa6be65336d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
