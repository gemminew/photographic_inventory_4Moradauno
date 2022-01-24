import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from './Home'
import './BrokerHome.css'
import MediaControlCard from './Cards';
import SearchContract from '../../components/SearchContract/SearchContract';
import { useNavigate } from "react-router-dom";

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();
  const goToStepper = () => {
    navigate("/section");
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="ya">
          <Tab label="Añadir" {...a11yProps(0)} />
          <Tab label="En proceso" {...a11yProps(1)} />
          <Tab label="Historial" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Home/>
        <button color="primary" className="goToNew"
                onClick={goToStepper}>Añadir nueva propiedad</button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Home/>
        <MediaControlCard/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <MediaControlCard/>
      <MediaControlCard/>
      </TabPanel>
    </Box>
  );
}