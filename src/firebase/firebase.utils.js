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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;