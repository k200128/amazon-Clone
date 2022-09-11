// import firebase from "firebase";
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCW1Hxo8LT8T4FFNZnm5YigpID88iAuIis",
  authDomain: "clone-1c1c2.firebaseapp.com",
  projectId: "clone-1c1c2",
  storageBucket: "clone-1c1c2.appspot.com",
  messagingSenderId: "384538441158",
  appId: "1:384538441158:web:77420c6f3b2691669b6ec7",
  measurementId: "G-XSC3FS1HQ8"
};

const firebaseApp = initializeApp
  (firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export {auth, db}