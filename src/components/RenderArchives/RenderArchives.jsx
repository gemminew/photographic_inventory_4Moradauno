import React, {useContext, useEffect} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { FilesContext } from "../../context/filesContext";
import ImgUp from "../UploadFiles/ImgUp";

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
    </TabPanel>
    <TabPanel value={value} index={1}>
    </TabPanel>
  </Box>
    </>
  );
}


