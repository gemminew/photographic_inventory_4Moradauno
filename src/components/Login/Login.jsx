import React, { useState, useContext } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/config";
import { FilesContext } from "../../context/filesContext"
import Checkout from "../Stepper"

const Login = () => {
/*  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState({}); */ 

  const {user, setUser, email, setEmail, password, setPassword} = useContext(FilesContext);



  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(setUser);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <div>
        <h1> Ingresa aqui </h1>
    <form action="">
      <h2>Nombre</h2>
      <input type="text" placeholder = " Susana Garcia " />
      <h2 >Correo Electronico</h2>
      <input type="text"  placeholder="ej. example@gmail.com"
                onChange={(event) => {
                  setEmail(event.target.value);
                  console.log(email)
                }}/>
      <h2>Inmobiliaria</h2>
      <input type="text" placeholder = "ej. Mi casa " />
      <h2 className ="text-login" > Contraseña </h2>
     <input className ="input-login" id="contraseña" type="password" name="password" placeholder="**********"
               onChange={(event) => {
                setPassword(event.target.value);
              
              }}
     />
      <button onClick={login}> Iniciar Sesion </button>

      <h4> Usuario </h4>
      {user?.rol}
      {user?.email}
    {/*   {user? <Checkout/> : <Login/>} */}
      
      <button onClick={logout}> Saquese </button>
    </form>
    </div>
    </div>
  );
}

export default Login;

