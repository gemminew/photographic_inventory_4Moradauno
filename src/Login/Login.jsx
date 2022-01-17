import React from 'react';

const Login = () => {
  return (
    <div>
      <div>
        <h1> Ingresa aqui </h1>
    <form action="">
      <h2>Nombre</h2>
      <input type="text" placeholder = " Susana Garcia " />
      <h2 >Correo Electronico</h2>
      <input type="text"  placeholder="ej. example@gmail.com"/>
      <h2>Inmobiliaria</h2>
      <input type="text" placeholder = "ej. Mi casa " />
      <h2 className ="text-login" > Contraseña </h2>
     <input className ="input-login" id="contraseña" type="password" name="password" placeholder="**********"/>
      <button> Iniciar Sesion </button>
    </form>
    </div>
    </div>
  );
}

export default Login;
