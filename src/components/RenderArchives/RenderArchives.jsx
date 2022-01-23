import React, {useContext, useEffect} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {FilesContext} from '../../context/filesContext'

//fotos_fachada, fotos_recamara, fotos_baño, fotos_cocina, fotos_sala, fotos_otros


export default function RenderArchives() {
   
  const { 
    infoSeccion, 
    setInfoSeccion, 
    infoPropiedad 
  } = useContext(FilesContext)

  const [value, setValue] = React.useState(0);

  const secciones = ["fotos_fachada", "fotos_recamara", "fotos_baño", "fotos_cocina", "fotos_sala", "fotos_otros"]

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  

    
    

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
        
    setInfoSeccion(arraysecciones) 
  }, []); 
     
  
 
  return (
    <>
    <h1>Categorias</h1>
    <div>
      <h2>Por favor, verifica que estás feliz con las fotos que subiste</h2>
      <p>En caso de que necesites borrar alguna, vuelve al paso anterior</p>
    </div> 
    <div>
{/*     comentarios: descripcion,
      fotos: urlDescarga,
      seccion: seccion */}
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
 <Box sx={{ maxWidth: 480, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Estancia" />
        <Tab label="Comedor" />
        <Tab label="Sala" />
        <Tab label="Habitación" />
        <Tab label="Baño" />
        <Tab label="Cocina" />
        <Tab label="Otros" />
      </Tabs>
    </Box> 
    </>
  );
}

//import comedor from "../Assets/comedor.jpg";

/* const RenderArchives = () => {

  return (
    <div>
      <h1>Categorias</h1>
      <div>
        <h2>Por favor, verifica que estás feliz con las fotos que subiste</h2>
        <p>En caso de que necesites borrar alguna, vuelve al paso anterior</p>


      </div>
    </div>
  );
}

export default RenderArchives; */
