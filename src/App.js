import React from 'react'

import { FilesProvider } from './context/filesContext'
import './App.css';

function App() {
  return (
    <FilesProvider>
       <div id="containerHeader">
         <h1><img src="images/moradalogo.png" alt="moradalogo" width="40%"/>
         {/* <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap" rel="stylesheet"></link> */}
      <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400&display=swap" rel="stylesheet"></link>
         <button className="LogOut" type="submit" >Cerrar sesión</button>
          </h1>
       </div>
       <body>
       <button className="addItem" type="submit" >Añadir nuevo registro</button>
       </body>
    </FilesProvider>
  );
}

export default App;
