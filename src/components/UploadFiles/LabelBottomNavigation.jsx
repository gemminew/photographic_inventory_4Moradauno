import * as React from 'react';
import { useState, useContext } from 'react'
import { FilesContext } from '../../context/filesContext'
import { Typography } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import GrassIcon from '@mui/icons-material/Grass';
import BedIcon from '@mui/icons-material/Bed';
import WcIcon from '@mui/icons-material/Wc';
import WeekendIcon from '@mui/icons-material/Weekend';
import BlenderIcon from '@mui/icons-material/Blender';
import HomeIcon from '@mui/icons-material/Home';
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette:{
    primary:{
      main:'#512da8'},
    secondary:{
      main:'#ff9800'
    },
  },
 
})

export default function LabelBottomNavigation() {
  const [value, setValue] = useState('recents');
  const {setSeccion} = useContext(FilesContext)

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSeccion(newValue)
  };

  return (
    <Typography  sx={{ width: 500 }} color="text.secondary">
    <ThemeProvider theme={theme}>
    <BottomNavigation color= "secondary" value={value}  onChange={handleChange}>
      <BottomNavigationAction 
        color= "secondary"
        label="Fachada"
        value="Fachada"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction 
    
        label="Recamara"
        value="Recamara"
        icon={<BedIcon />}
      />
      <BottomNavigationAction
     
        label="Baño"
        value="Baño"
        icon={<WcIcon />}
      />
      <BottomNavigationAction
   
        label="Cocina"
        value="Cocina"
        icon={<BlenderIcon />}
      />
      <BottomNavigationAction
    
        label="Sala"
        value="Sala"
        icon={<WeekendIcon />}
      />
      <BottomNavigationAction 
      
        label="Otros"
        value="Otros" 
        icon={<GrassIcon/>} />
    </BottomNavigation>
    </ThemeProvider>
    </Typography>
  );
}
