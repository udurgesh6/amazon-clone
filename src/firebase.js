// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAgNFdVan1Oot84lu4ygSK1yjKKww_8kmM",
  authDomain: "clone-df4c3.firebaseapp.com",
  databaseURL: "https://clone-df4c3.firebaseio.com",
  projectId: "clone-df4c3",
  storageBucket: "clone-df4c3.appspot.com",
  messagingSenderId: "346442533276",
  appId: "1:346442533276:web:59ff97a2764711c3bda059",
  measurementId: "G-Y2KDBCRYTY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
