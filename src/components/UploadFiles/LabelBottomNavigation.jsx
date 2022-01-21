import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import GrassIcon from '@mui/icons-material/Grass';
import BedIcon from '@mui/icons-material/Bed';
import WcIcon from '@mui/icons-material/Wc';
import WeekendIcon from '@mui/icons-material/Weekend';
import BlenderIcon from '@mui/icons-material/Blender';
import HomeIcon from '@mui/icons-material/Home';
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Fachada"
        value="recents"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Recamara"
        value="favorites"
        icon={<BedIcon />}
      />
      <BottomNavigationAction
        label=""
        value="Baño"
        icon={<WcIcon />}
      />
      <BottomNavigationAction
        label="Cocina"
        value="nearby"
        icon={<BlenderIcon />}
      />
      <BottomNavigationAction
        label="Sala"
        value="nearby"
        icon={<WeekendIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<GrassIcon />} />
    </BottomNavigation>
  );
}
