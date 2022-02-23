import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

import "firebase/storage";
 
const firebaseConfig = {
  apiKey: "AIzaSyC46tFN7T2cxPmU3oWVVYYlWP2eXn-rCXg",
  authDomain: "reels-45d73.firebaseapp.com",
  projectId: "reels-45d73",
  storageBucket: "reels-45d73.appspot.com",
  messagingSenderId: "384487274153",
  appId: "1:384487274153:web:d4a08f4cbefd107f2b5bb8"
};

 
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
 

let provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;