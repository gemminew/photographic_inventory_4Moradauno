import React, {useContext, useEffect, useState} from 'react';

import {firestore} from '../../Firebase/config'
import {FilesContext} from '../../Context/filesContext'

import { doc, getDoc } from 'firebase/firestore'

function Home() {

    const {user, infoUser, setInfoUser, propiedades, setPropiedades} = useContext(FilesContext)
    const [infoPropiedad, setInfoPropiedad] = useState()

    async function infoUsuario (coleccion, idDocumento) {
        const docuRef= doc(firestore, `${coleccion}/${idDocumento}`)
        const consulta = await getDoc(docuRef)
        const infoDocu = consulta.data();
        return infoDocu
    }

    useEffect(() => {
        async function fetchInfoUsuario() {
            const propiedades = await infoUsuario("usuarios", user.email)
            setPropiedades(propiedades.propiedades_rentadas)
            setInfoUser(propiedades)
        }
        fetchInfoUsuario()
    }, [])

    useEffect(() => {
        async function fetchCasas(){
            let array = []
            for (let index = 0; index < propiedades.length; index++) {
                const element = propiedades[index];
                const datosCasa = await infoUsuario("contratos", element)
                array.push(datosCasa)
            }
            setInfoPropiedad(array)
        }
        fetchCasas()
    }, [propiedades])
    

    console.log(infoPropiedad)
    console.log(propiedades)
    console.log(infoUser)
    return (
        <>
            <h1>Home</h1>
        </>
    ) 
}

export default Home;
