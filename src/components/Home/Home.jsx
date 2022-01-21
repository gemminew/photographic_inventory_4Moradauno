import React, {useContext, useEffect} from 'react';

import {firestore} from '../../Firebase/config'
import {FilesContext} from '../../Context/filesContext'

import { doc, getDoc } from 'firebase/firestore'

function Home() {

    const {user, infoUser, setInfoUser, propiedades, setPropiedades} = useContext(FilesContext)

    async function infoUsuario (idDocumento) {
        const docuRef= doc(firestore, `usuarios/${idDocumento}`)
        const consulta = await getDoc(docuRef)
        const infoDocu = consulta.data();
        return infoDocu
    }

    useEffect(() => {
        async function fetchInfoUsuario() {
            const propiedades = await infoUsuario(user.email)
            setPropiedades(propiedades.propiedades_rentadas)
            setInfoUser(propiedades)
        }
        fetchInfoUsuario()
    }, [])

/*     propiedades.forEach((propiedad, i) =>{
        async function propiedades (idDocumento) {
            const docuRef= doc(firestore, `contratos/${propiedad}`)
            const consulta = await getDoc(docuRef)
            if (consulta.exists()){
                const infoDocu = consulta.data();
                setPropiedades(infoDocu)
                return infoDocu.propiedades_rentadas
            } else {
                return "no tiene propiedades en proceso"
            }
        }
    
    }) */


    console.log(propiedades)
    console.log(infoUser)
    return (
        <>
            <h1>Home</h1>
            
        </>
    ) 
}

export default Home;
