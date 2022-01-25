import * as React from 'react';
import {useContext, useEffect, useState} from 'react'
import {FilesContext} from '../../context/filesContext'
import {doc, updateDoc, onSnapshot} from 'firebase/firestore'
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

  function añadirNumeroContrato(e){
    e.preventDefault()
    const numero = e.target.numContrato.value
    setPropiedadQueSubeFotos(numero)
    if(arrayNumerosContratos.includes(numero) === false){
      alert("ingrese un número de contrato válido por favor, el que ha ingresado no se encuentra en nuestra base de datos")
      setPropiedadQueSubeFotos(null)
      
    } 
    
  }


  useEffect(() => {
    onSnapshot((firestore, "contratos", propiedadQueSubeFotos), (doc) => {
      setInfoPropiedad(doc.data())
      setCasa(doc.data().alias_casa)
      setContrato(doc.data().numero_contrato)
      })
  }, []);
 console.log("searContract")
      


  return (
    <React.Fragment>
      <form className='formBusqueda' onSubmit={añadirNumeroContrato}>
        <p className='tituloInput'> Número de contrato </p>
        <input id='numContrato' type="text" placeholder='123' required/>
        <br/>
        <div className='buttons'>
        <button type='submit' className="buttonGuardar">Buscar</button>
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