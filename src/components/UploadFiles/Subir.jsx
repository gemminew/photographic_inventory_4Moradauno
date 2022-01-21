import React, {useContext, useState, useEffect} from 'react';

import { FilesContext } from '../../context/filesContext'

import { storage, firestore } from '../../Firebase/config'

import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'


const Subir = () => {

    const {fotografias, setFotografias, seccion, getInfo, propiedadQueSubeFotos, infoPropiedad, setInfoPropiedad} = useContext(FilesContext)

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
        <div>
            <h2>{seccion}</h2>
            <form onSubmit={añadirFotosApropiedad}>
                <p>Añade la descripción del espacio</p>
                <input type="text" id="descripcion"></input>
                <input type="file" accept='image/*' multiple onChange={fileHandler}/>
                <button type='submit'>Enviar</button>
            </form>

        </div>
    );
};

export default Subir;