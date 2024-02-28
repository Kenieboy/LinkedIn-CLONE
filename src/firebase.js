// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvsYxxqlt7tokYvBPSQc1l8qw7bNyIEq4",
  authDomain: "linkedin-clone-yt-e971e.firebaseapp.com",
  projectId: "linkedin-clone-yt-e971e",
  storageBucket: "linkedin-clone-yt-e971e.appspot.com",
  messagingSenderId: "1007249768798",
  appId: "1:1007249768798:web:fd2d1c78d13bf0feb50fcf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
