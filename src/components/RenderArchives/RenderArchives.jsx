import React, {useContext, useEffect} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { FilesContext } from "../../context/filesContext";
import {updateDoc, doc} from 'firebase/firestore'
import {firestore} from '../../Firebase/config'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function RenderArchives() {
   
  const { 
      infoUser,
      user,
      infoPropiedad,
      setInfoPropiedad,
      propiedadQueSubeFotos,
      getInfo 
    } = useContext(FilesContext)


  const [infoSeccion, setInfoseccion] = React.useState([]);
  const [value, setValue] = React.useState(0);
  const [mensaje, setMensaje] = React.useState()

 
  const secciones = ["fotos_fachada", "fotos_recamara", "fotos_baño", "fotos_cocina", "fotos_sala", "fotos_otros"]
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 useEffect(() => {
    async function actualizarDatosPropiedad(){
      const actualizar = await getInfo("contratos", propiedadQueSubeFotos)
      setInfoPropiedad(actualizar)
    }
    actualizarDatosPropiedad()
  }, []);   



    useEffect(() => {

    let arraysecciones = []
    for (let index = 0; index < secciones.length; index++) {
      const element = secciones[index];
      Object.entries(infoPropiedad).forEach(([key, value]) => {
        if(key === element){
          arraysecciones.push({
            [element]: value
          })
        }
      })
    }
    console.log(arraysecciones)
    setInfoseccion(arraysecciones) 
  }, []);  

  function handleAceptar (){
    
    const docuRef = doc(firestore, `contratos/${propiedadQueSubeFotos}`)
    updateDoc(docuRef, {
      [infoUser?.rol]: {
        aprobacion_fotografias: true,
        usuario: user?.email
      }
    }) 
  }
 
  return (
    <>
    <h1>Categorias</h1>
    <div>
      <h2>Por favor, verifica que estás feliz con las fotos que subiste</h2>
      <p>En caso de que necesites borrar alguna, vuelve al paso anterior</p>
    </div> 

    <Box sx={{ width: "100%" }}>
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Asesor@ Inmobiliario" {...a11yProps(0)} />
        <Tab label="Inquilin@" {...a11yProps(1)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
    <div>
      {
        infoSeccion.map((element) => {
          return( //todas las secciones
            Object.entries(element).map(([key, value]) => {
              const fotos = value.fotos
              return( //values de cada sección
                <>
                  <p key={key}>{value.seccion}</p>
                  <p key={value.seccion}>{value.comentarios}</p>
                  <div key={element.length} style={{display: "flex", flexWrap: "wrap"}}>
                  {
                    fotos.map((url, i) => {
                      return(
                        <img key={i}src={url} alt={`foto`} style={{width: "100px"}} />
                      )
                    })
                  }
                  </div>
                </>
              )
            })
          )
        })
      }
    </div>
    <div className='divAceptar'>
      {infoPropiedad.inquilino.aprobacion_fotografias === true && infoPropiedad.broker.aprobacion_fotografias === true ? 
      <p style={{marginTop: "30px", fontSize: "20px"}}>El contrato está listo para la firma, manda un mensaje al inquilino https://morada-uno.web.app/</p> :
        <>
        <p style={{marginTop: "30px", fontSize: "20px"}}>¿Aceptas las fotografias de la propiedad?</p>
      <button className='buttonGuardar' onClick={handleAceptar}>Aceptar</button>
        </>
      
      
      }

      
    </div>
    </TabPanel>
    <TabPanel value={value} index={1}>
    </TabPanel>
  </Box>
    </>
  );
}