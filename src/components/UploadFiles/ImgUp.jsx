import React from 'react';
import LabelBottomNavigation from './LabelBottomNavigation';
import './ImgUp.css'

export default function ImgUp () {
  return (
    <div id = "div2">
    <h1 id='comentarios' >Cometarios </h1>
    <input id='placeComent' type="text" placeholder='Agrega aqui tu comentario' />
    <h1 id='categoria'>Categorias  </h1>
    <LabelBottomNavigation/>
    <h1 id='imagenes'>Imagenes</h1>
    <label for="file-upload" class="custom-file-upload">
    Subir Imagen 
</label>
    <input id="file-upload" type="file" accept="image/*" capture="camera"></input>
    <div id='divBoton'>
    <button id='guardar'>Guardar</button>
    <button id='enviar'>Enviar</button>
    </div>
    
    </div>
  );
}
