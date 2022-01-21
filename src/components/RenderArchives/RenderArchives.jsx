import React, {useContext} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {FilesContext} from '../../Context/filesContext'
import ImgUp from '../UploadFiles/ImgUp'

export default function RenderArchives() {
   
  const {} = useContext(FilesContext)

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <h1>Categorias</h1>
    <div>
      <h2>Por favor, verifica que estás feliz con las fotos que subiste</h2>
      <p>En caso de que necesites borrar alguna, vuelve al paso anterior</p>
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
