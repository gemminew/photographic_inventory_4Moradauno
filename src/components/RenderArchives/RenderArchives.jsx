import React, {useContext} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FilesContext } from '../../context/filesContext'

export default function RenderArchives() {
   
  const {seccion, setSeccion} = useContext(FilesContext)

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
        <Tab label="Estancia" onChange={(event) => {
                  setSeccion(event.target.value);  }} />
        <Tab label="Comedor" onChange={(event) => {
                  setSeccion(event.target.value);  }}/>
        <Tab label="Sala" onChange={(event) => {
                  setSeccion(event.target.value);  }} />
        <Tab label="Habitación" onChange={(event) => {
                  setSeccion(event.target.value);  }}/>
        <Tab label="Baño" onChange={(event) => {
                  setSeccion(event.target.value);  }} />
        <Tab label="Cocina" onChange={(event) => {
                  setSeccion(event.target.value);  }}/>
        <Tab label="Otros" onChange={(event) => {
                  setSeccion(event.target.value);  }} />
      </Tabs>
    </Box>
    </>
  );
}