import React  from 'react'
import './main.css'

function Main() {
    return (
      <FilesProvider>
        <div id= "allContainer">
         <div id="containerHeader">
           <img src="images/moradalogo.png" alt="moradalogo" width="40%"/>
           {/* <button className="LogOut" type="submit" >Cerrar sesión</button> */}
           <img src="images/menu.png" alt="moradamenu" width="30%"/>
           {/* <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap" rel="stylesheet"></link> */}
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1.0" />
         </div>
         <body>
           <br></br>
         <button className="addItem" type="submit" >Añadir nuevo registro</button>
         </body>
         </div>
      </FilesProvider>
    );
  }
  
  export default Main;