import * as React from 'react';
import { useState, useContext } from 'react'
import { FilesContext } from '../../context/filesContext'

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import FolderIcon from '@mui/icons-material/Folder';
import GrassIcon from '@mui/icons-material/Grass';
import BedIcon from '@mui/icons-material/Bed';
import WcIcon from '@mui/icons-material/Wc';
import WeekendIcon from '@mui/icons-material/Weekend';
import BlenderIcon from '@mui/icons-material/Blender';
import HomeIcon from '@mui/icons-material/Home';

export default function LabelBottomNavigation() {
  const [value, setValue] = useState('recents');
  const {setSeccion} = useContext(FilesContext)

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSeccion(newValue)
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} color ="primary" onChange={handleChange}>
      <BottomNavigationAction
        color ="primary"
        label="Fachada"
        value="fachada"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction 
        label="Recamara"
        value="recamara"
        icon={<BedIcon />}
      />
      <BottomNavigationAction
        label="Baño"
        value="baño"
        icon={<WcIcon />}
      />
      <BottomNavigationAction
        label="Cocina"
        value="cocina"
        icon={<BlenderIcon />}
      />
      <BottomNavigationAction
        label="Sala"
        value="sala"
        icon={<WeekendIcon />}
      />
      <BottomNavigationAction 
        label="Otros"
        value="otros" 
        icon={<GrassIcon/>} />
    </BottomNavigation>
  );
}
