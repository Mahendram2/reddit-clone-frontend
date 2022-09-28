
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAwGRsP0M0py0o2rWVuKTZ-B-K32ephOPM",
  authDomain: "redundant-447d0.firebaseapp.com",
  projectId: "redundant-447d0",
  storageBucket: "redundant-447d0.appspot.com",
  messagingSenderId: "732660554714",
  appId: "1:732660554714:web:7d8542e5d0304ee725bee3"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

function login() {
    return signInWithPopup(auth, provider)
}

function logout() {
    return signOut(auth)
}

export { auth, login, logout };