// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBQ6IGF_AZmA582zx6qnfsTOivZg43Q-2g",
    authDomain: "instagram-vistrit.firebaseapp.com",
    databaseURL: "https://instagram-vistrit.firebaseio.com",
    projectId: "instagram-vistrit",
    storageBucket: "instagram-vistrit.appspot.com",
    messagingSenderId: "420177454301",
    appId: "1:420177454301:web:bb1ee2dc95924574dc6734",
    measurementId: "G-6VHZREFRTJ"
  });

const storage = firebase.storage();
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth, storage};