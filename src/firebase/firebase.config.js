// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZC8aqC1vFXnhH8DJ_ccsNKSVu96F8Jyg",
    authDomain: "victorians-skill-dev.firebaseapp.com",
    projectId: "victorians-skill-dev",
    storageBucket: "victorians-skill-dev.appspot.com",
    messagingSenderId: "121482608085",
    appId: "1:121482608085:web:c07c6d3f3f1d5d08d1915c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;