// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCQxzaLbmm3yJgbKmqjcBqKv4BYnwF2Yv8",
  authDomain: "vistrit-insta.firebaseapp.com",
  databaseURL: "https://vistrit-insta.firebaseio.com",
  projectId: "vistrit-insta",
  storageBucket: "vistrit-insta.appspot.com",
  messagingSenderId: "987746635486",
  appId: "1:987746635486:web:e8c0970fc431f8bc603c4f",
  measurementId: "G-TJLQ9QR65F"

  });

const storage = firebase.storage();
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth, storage};