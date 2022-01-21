import React, { useState, useContext } from "react";
//import { useNavigate } from "react-router-dom";
import '../Login/Login.css'
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/config";
import { FilesContext } from "../../Context/filesContext";
import Checkout from "../Stepper"


const Login = () => {

  const {user, setUser, email, setEmail, password, setPassword} = useContext(FilesContext);



  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className ='login-container'  >
      <div className ='login-tittle'>
        <h1> Ingresa aqui </h1>
    <form className="login-form" action="">
      <h2 >Correo Electronico</h2>
      <input type="text"  placeholder="ej. example@gmail.com"
                onChange={(event) => {
                  setEmail(event.target.value);
                  console.log(email)
                }}/>
      <h2 className ="text-login" > Contraseña </h2>
     <input className ="input-login" id="contraseña" type="password" name="password" placeholder="**********"
               onChange={(event) => {
                setPassword(event.target.value);
              
              }}
     />
      <button onClick={login}> Iniciar Sesion </button>

     

      
      </form>
    </div>
    </div>
  );
}

export default Login;

