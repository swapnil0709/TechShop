import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD4-3PmoWR7bltbK-J-Vphnzhy9jnzoNhY",
  authDomain: "shopdb-f8bb6.firebaseapp.com",
  projectId: "shopdb-f8bb6",
  storageBucket: "shopdb-f8bb6.appspot.com",
  messagingSenderId: "167397131434",
  appId: "1:167397131434:web:fccf12c7039f04fc3b3cd3",
  measurementId: "G-YXHYPSMV2V",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
