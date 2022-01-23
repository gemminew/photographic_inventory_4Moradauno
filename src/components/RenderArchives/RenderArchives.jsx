import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
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
  const {} = useContext(FilesContext);

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
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Asesor@ Inmobiliario" {...a11yProps(0)} />
            <Tab label="Inquilin@" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ImgUp />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ImgUp />
        </TabPanel>
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
