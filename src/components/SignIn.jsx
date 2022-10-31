import React from 'react';
import firebase from 'firebase/compat/app'
import { auth } from "../firebase.js";
import { Button } from "@mui/material";


function SignIn() {
    const signInGoogle = () =>{
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  return (
    <div>
        <Button onClick={signInGoogle}>Googleでログインする</Button>  
    </div>
  )
}

export default SignIn