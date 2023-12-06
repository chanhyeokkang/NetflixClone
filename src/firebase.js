import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDKdZX3A3Vc98cVJNcD_GHMsDDomJmQ374",
  authDomain: "react-netflix-71a82.firebaseapp.com",
  projectId: "react-netflix-71a82",
  storageBucket: "react-netflix-71a82.appspot.com",
  messagingSenderId: "860557306283",
  appId: "1:860557306283:web:616f98dd446cbe9dc30aee"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { auth, createUserWithEmailAndPassword };
export default db;