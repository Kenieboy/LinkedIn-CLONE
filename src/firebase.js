import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCvsYxxqlt7tokYvBPSQc1l8qw7bNyIEq4",
  authDomain: "linkedin-clone-yt-e971e.firebaseapp.com",
  projectId: "linkedin-clone-yt-e971e",
  storageBucket: "linkedin-clone-yt-e971e.appspot.com",
  messagingSenderId: "1007249768798",
  appId: "1:1007249768798:web:fd2d1c78d13bf0feb50fcf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
