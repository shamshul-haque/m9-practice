// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDApx4tKmYfXVOU08rZ14Etre9_xk64wHM",
  authDomain: "user-authentication-85b9b.firebaseapp.com",
  projectId: "user-authentication-85b9b",
  storageBucket: "user-authentication-85b9b.appspot.com",
  messagingSenderId: "424338909773",
  appId: "1:424338909773:web:8017f8bb1be3625e0b4a04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
