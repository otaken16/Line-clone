import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDj_Lt8X-rA2f1otndmE4ZoRhbrWsk0_fg",
    authDomain: "react-line-clone-185bc.firebaseapp.com",
    projectId: "react-line-clone-185bc",
    storageBucket: "react-line-clone-185bc.appspot.com",
    messagingSenderId: "19880830460",
    appId: "1:19880830460:web:95c0d5bd3f202faaf47e79"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};