import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom'

import {firestore} from '../../Firebase/config'
import { FilesContext } from '../../context/filesContext'

import { doc, getDoc } from 'firebase/firestore'
import './Home.css'
import ModalGaleria from '../Modales/ModalGaleria';
import { StyledEngineProvider } from '@mui/material/styles';

import Subir from '../UploadFiles/Subir'

function Home() {

  
        //obtener documento para sacar la url de la foto de la fachada y la aprobación de la propiedad.
    const {user, infoUser, setInfoUser, propiedades, setPropiedades, getInfo} = useContext(FilesContext)
    const [infoPropiedades, setInfoPropiedades] = useState()



    useEffect(() => {
        async function fetchInfoUsuario() {
            const propiedadesR = await getInfo("usuarios", user.email)
            setPropiedades(propiedadesR.propiedades_rentadas)
            setInfoUser(propiedadesR)
        }
        fetchInfoUsuario()
    }, [])

    useEffect(() => {
        async function fetchCasas(){
            let array = []
            for (let index = 0; index < propiedades.length; index++) {
                const element = propiedades[index];
                const datosCasa = await getInfo("contratos", element)
                array.push(datosCasa)
            }
            setInfoPropiedades(array)
        }
        fetchCasas()
    }, [propiedades])
    

    console.log(infoPropiedades)
    console.log(propiedades)
    console.log(infoUser)
    return (
        <>
            <h1>Home</h1>
            <Subir/> 
            <section className="home-container">
            <section className="left-container">
                <h3>Casa Lomas</h3>
                <p>Contrato: 31416</p> 
                <p>Pendiente de aprobación</p>
            </section>
            <section className="right-contains">
            <section className="right-container">
           
            </section>
            <section>
                <StyledEngineProvider injectFirst>
                <ModalGaleria />
                </StyledEngineProvider>
                <Link to="/section" ><a href="url">Ver las fotos</a></Link>
            </section>
            </section>
            </section>
        </>
    ) 
}

export default Home;
