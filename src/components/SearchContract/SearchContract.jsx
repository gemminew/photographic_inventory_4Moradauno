import * as React from 'react';
import {useContext, useEffect, useState} from 'react'
import {FilesContext} from '../../context/filesContext'
import {doc, updateDoc} from 'firebase/firestore'
import {firestore} from '../../Firebase/config'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import ModalInstructivo from '../Modales/ModalInstructivo';
import './SearchContract.css'




export default function SearchContract() {

  const {
    arrayNumerosContratos, 
    setPropiedadQueSubeFotos, 
    propiedadQueSubeFotos, 
    infoPropiedad, 
    setInfoPropiedad, 
    getInfo
  } = useContext(FilesContext)

  const [casa, setCasa] = useState()
  const [contrato, setContrato] = useState("")

  async function añadirNumeroContrato(e){
    e.preventDefault()
    const numero = e.target.numContrato.value
    setPropiedadQueSubeFotos(numero)
    if(arrayNumerosContratos.includes(numero) === false){
      alert("ingrese un número de contrato válido por favor, el que ha ingresado no se encuentra en nuestra base de datos")
      setPropiedadQueSubeFotos(null)
    } else {
      setPropiedadQueSubeFotos(numero)
    }
  }

  useEffect(() => {
    async function fetchInfoPropiedad() {
        const setearPropiedadInfo = await getInfo("contratos", propiedadQueSubeFotos)
        setInfoPropiedad(setearPropiedadInfo)
        setCasa(setearPropiedadInfo?.alias_casa)
        setContrato(setearPropiedadInfo?.numero_contrato)
    }
    fetchInfoPropiedad()
  
  }, [casa, getInfo, propiedadQueSubeFotos, setInfoPropiedad]) 


  
  return (
    
    <React.Fragment>
      <form className='formBusqueda' onSubmit={añadirNumeroContrato}>
        <p className='tituloInput'> Número de contrato </p>
        <input id='numContrato' type="text" placeholder='123' required/>
        <br/>
        <div className='buttons'>
        <button type='submit' className="buttonGuardar">Guardar</button>
        </div>
      </form>
      <div className='infoCasa'>
        <p className='infoCasa__text'>{casa}</p>
        <p className='infoCasa__text'>{contrato === undefined ? "" : `No. contrato ${contrato}`}</p>
      </div>
      <ModalInstructivo></ModalInstructivo>
      
    </React.Fragment>
  );
}