import React, {useContext, useState, useEffect} from 'react';

import LabelBottomNavigation from './LabelBottomNavigation';
import './ImgUp.css'

import { FilesContext } from '../../Context/filesContext'

import { storage, firestore } from '../../Firebase/config'

import { doc, updateDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export default function ImgUp () {

  const { seccion, getInfo, propiedadQueSubeFotos, infoPropiedad, setInfoPropiedad} = useContext(FilesContext)

  const [urlDescarga, setUrlDescarga] = useState()
  const [fotosNombre, setFotosNombre] = useState()

  const nomFot = "fotos_" + seccion
  useEffect(()=> {
      setFotosNombre(nomFot)
  }, [nomFot])
  
  useEffect(() => {
      async function fetchInfoPropiedad() {
          const setearPropiedadInfo = await getInfo("contratos", propiedadQueSubeFotos)
          setInfoPropiedad(setearPropiedadInfo)
      }
      fetchInfoPropiedad()
  }, []) 

  async function fileHandler (e) {
      const archivoLocal = e.target.files
      
      let array = []
      for (let index = 0; index < archivoLocal.length; index++) {
          const element = archivoLocal[index];
          const archivoRef = ref(storage, `fotografias/${element.name}`)
          await uploadBytes(archivoRef, element)
          const urlDesc = await getDownloadURL(archivoRef)
          array.push(urlDesc)
      }
      setUrlDescarga(array)
  }
  
   async function añadirFotosApropiedad(e){
      e.preventDefault()
      const descripcion = e.target.descripcion.value
      const nuevoArrayPropiedad = 
          {
              ...infoPropiedad,
              [fotosNombre]: {
                  comentarios: descripcion,
                  fotos: urlDescarga
              }
          }
      

      const docuRef = doc(firestore, `contratos/${propiedadQueSubeFotos}`)
      await updateDoc(docuRef, nuevoArrayPropiedad)
      e.target.descripcion.value = ""
  }


  console.log(urlDescarga)
  console.log(infoPropiedad)
  console.log(propiedadQueSubeFotos)

  return (
    <div id = "div2">
    <h1 id='categoria'>{seccion} </h1>
    <LabelBottomNavigation/>
    {/* <label for="file-upload" class="custom-file-upload">
    Subir Imágenes 
    </label> */}
    <form onSubmit={añadirFotosApropiedad}>
        <p id='comentarios'> Comentarios </p>
        <input id='descripcion' type="text" placeholder='Agrega aqui tu comentario' />
        <p>sube tus imágenes</p>
        <input id="file-upload"  type="file" accept='image/*' multiple onChange={fileHandler}></input>
        <button id='guardar' type='submit'>Guardar imágenes</button>
    </form>
    {/* <input id="file-upload" type="file" accept="image/*" capture="camera"></input> */}
    
    </div>
  );
}
