import { initializeApp } from "firebase/app";
import { getFirestore , Firestore , collection} from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import React from "react";

///////////////////////////////////////////////////
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFl88jrDYjctlqMXa7bBEHbrM0BaIqoqQ",
  authDomain: "my-first-react-zabeth16.firebaseapp.com",
  databaseURL: "https://my-first-react-zabeth16-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-first-react-zabeth16",
  storageBucket: "my-first-react-zabeth16.appspot.com",
  messagingSenderId: "322488107313",
  appId: "1:322488107313:web:842cfa905b258e66d47010"
};
///////////////////////////////////////////////////

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db 

// Initialize Cloud Firestore and get a reference to the service
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);