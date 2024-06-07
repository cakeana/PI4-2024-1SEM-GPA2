import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; 
const firebaseConfig = {
  apiKey: "AIzaSyBiebt9SSsCxwY8Rh5rd6sW_L2YjfF3jMc",
  authDomain: "forum-9432a.firebaseapp.com",
  projectId: "forum-9432a",
  storageBucket: "forum-9432a.appspot.com",
  messagingSenderId: "594328927408",
  appId: "1:594328927408:web:c6e5713e7c306f5d1f0f75",
  measurementId: "G-J7FSPRB4MN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);