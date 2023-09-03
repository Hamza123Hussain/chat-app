// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth,GoogleAuthProvider} from'firebase/auth'
import{getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpyabvLPD-IjnRn7AVr5mENOsXBwaFO2E",
  authDomain: "chatapp-21f91.firebaseapp.com",
  projectId: "chatapp-21f91",
  storageBucket: "chatapp-21f91.appspot.com",
  messagingSenderId: "962939603986",
  appId: "1:962939603986:web:f556b016a1327bef671ccb",
  measurementId: "G-S00KELHGJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider= new GoogleAuthProvider();
export const db= getFirestore(app);