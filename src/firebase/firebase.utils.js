import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBna7xq19IwsIRhlrZ2tV_QQDN8Oz2o9KY",
  authDomain: "crwn-db-df2d8.firebaseapp.com",
  projectId: "crwn-db-df2d8",
  storageBucket: "crwn-db-df2d8.appspot.com",
  messagingSenderId: "831720444346",
  appId: "1:831720444346:web:6aaf572843a2c26123cd83",
  measurementId: "G-MTSGBTLF3J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;