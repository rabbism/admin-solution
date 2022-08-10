// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-irk0uGIxJ9y9dsWLrnpE__g5qsbgWuY",
  authDomain: "iqra-book.firebaseapp.com",
  projectId: "iqra-book",
  storageBucket: "iqra-book.appspot.com",
  messagingSenderId: "162146683397",
  appId: "1:162146683397:web:c75cb387e9107f793faa6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;