import React, { useContext }  from 'react'

import {FilesContext} from '../../context/filesContext'
import { StyledEngineProvider } from '@mui/material/styles';

import {
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../Firebase/config";

import Login from '../Login/Login'
import Home from '../Home/Home'
import BrokerHome from '../Home/BrokerHome'

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
        {user ? 
            <StyledEngineProvider injectFirst>
                    <BrokerHome/>
          </StyledEngineProvider>
         : <Login/>}
      </>
    );
  }
  
  export default Main; 