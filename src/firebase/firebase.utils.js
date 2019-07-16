import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCA2YwakbVx_vI25bDva_-Rv833wTLNlUI",
  authDomain: "db-crwn.firebaseapp.com",
  databaseURL: "https://db-crwn.firebaseio.com",
  projectId: "db-crwn",
  storageBucket: "",
  messagingSenderId: "216092027204",
  appId: "1:216092027204:web:e81b57cb63549d46"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;