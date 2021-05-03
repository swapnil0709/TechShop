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

// This is the object which is returned when a user is authenticated and it has the data.
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //if there is no object then just return.

  // If we do have the object then we want to store the data in firebase store in users collection.
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

//The below lines are for authentication purposes.

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
