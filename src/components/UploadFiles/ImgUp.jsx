import React from 'react';
import LabelBottomNavigation from './LabelBottomNavigation';
import './ImgUp.css'

export default function ImgUp () {
  return (
    <div id = "div2">
    <h1 id='categoria'>Categorias  </h1>
    <LabelBottomNavigation/>
    <label for="file-upload" class="custom-file-upload">
    Subir Imágenes 
    </label>
    <input id="file-upload" type="file" accept="image/*" capture="camera"></input>
    <div id='divBoton'>
    <h1 id='comentarios' >Comentarios </h1>
    <input id='placeComent' type="text" placeholder='Agrega aqui tu comentario' />
    <button id='guardar'>Guardar</button>
    </div>
    
    </div>
  );
}
