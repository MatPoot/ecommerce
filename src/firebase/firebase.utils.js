import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCDBYG32Mi7tBDqEzQV7zI9SncyXkpo7uU",
  authDomain: "ecommerce-demonstrate.firebaseapp.com",
  databaseURL: "https://ecommerce-demonstrate.firebaseio.com",
  projectId: "ecommerce-demonstrate",
  storageBucket: "ecommerce-demonstrate.appspot.com",
  messagingSenderId: "537410858855",
  appId: "1:537410858855:web:190ec2e3b14fe8dac6c9c2",
  measurementId: "G-GTNPKF4600"
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return; //evaluate for null

  console.log(firestore.doc("users/test"));

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    // if no existing logged in snapshot, create another one to prevent doubles
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData
      });
    } catch (e) {
      console.log(`error creating user`, e.message);
    }
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
