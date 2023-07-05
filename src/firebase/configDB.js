
import firebase from "firebase/compat/app";

import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBFoRVauibpzvLHjTKM8sWLbTpYPZkR3V4",
  authDomain: "fir-bookstore-e00e7.firebaseapp.com",
  projectId: "fir-bookstore-e00e7",
  storageBucket: "fir-bookstore-e00e7.appspot.com",
  messagingSenderId: "985396897721",
  appId: "1:985396897721:web:944f9154726c15490cf868",
  measurementId: "G-1KGN2T2HP5"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
