// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyPq1KXvrGJuF-UrxkUv3Ef04PAeaKRGk",
  authDomain: "olxcars-prueba-coder.firebaseapp.com",
  projectId: "olxcars-prueba-coder",
  storageBucket: "olxcars-prueba-coder.appspot.com",
  messagingSenderId: "401483868094",
  appId: "1:401483868094:web:b7e6e0297de1818788fbef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;