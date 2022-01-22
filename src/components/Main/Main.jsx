import React, { useContext }  from 'react'

import {FilesContext} from '../../context/filesContext'


import {
  onAuthStateChanged,
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
        {user ? <Home/> : <Login/>}
      </>
    );
  }
  
  export default Main; 