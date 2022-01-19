import React from 'react';
import comedor from "../Assets/comedor.jpg";

const RenderArchives = () => {

  return (
    <div>
      <h1> Galeria - 18723912 </h1>
      <div>
        <img id="img-logo" src={comedor} alt="img" className="logo-img" with ="100px" height="70"/>
        <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit tristique suscipit, mus pharetra nostra nisl lacinia senectus lacus quisque.</h3>
      </div>
      <div>
        <button> Regresar </button>
        <button> Cerrar Sesion </button>
      </div>
    </div>
  );
}

export default RenderArchives;
