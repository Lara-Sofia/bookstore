// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFoRVauibpzvLHjTKM8sWLbTpYPZkR3V4",
  authDomain: "fir-bookstore-e00e7.firebaseapp.com",
  projectId: "fir-bookstore-e00e7",
  storageBucket: "fir-bookstore-e00e7.appspot.com",
  messagingSenderId: "985396897721",
  appId: "1:985396897721:web:944f9154726c15490cf868",
  measurementId: "G-1KGN2T2HP5"
};

// Initialize Firebase la aplicación y la guadamos en firebase
const firebaseApp = initializeApp(firebaseConfig);
//Exportamos firebase para poder utilizarla en cualquier lugar de la app
export default firebaseApp;

