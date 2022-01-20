import React, { useContext }  from 'react'

import {FilesContext} from '../../context/filesContext'
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/config";

import Login from '../Login/Login'
import Home from '../Home/Home'

function Main() {
    const {user, setUser} = useContext(FilesContext)

    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser){
        setUser(currentUser);
      } else {
        setUser(null)
      }
      
    });

    return (
      <>
        {}
      </>
    );
  }
  
  export default Main;