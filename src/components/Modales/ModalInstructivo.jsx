import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import camara from '../../Assets/camara.png'
import './Modal.css'
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 500,
  bgcolor: '#5A1A6A',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 7,
};

export default function ModalInstructivo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="aiuda">
      
      <button className="buttonModalInstructivo" type="buttonModal" onClick={handleOpen}>
      Guia de imagenes
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
        <img src={camara} alt="camara" />

          <Typography variant="h6" color="white" align="center" paragraph  >Consideraciones que deben cumplir tus fotografías.</Typography>
          
          
          <Typography variant="subtitle1" color="white" align=" alignLeft" gutterBottom> <CheckCircleOutlineIcon fontSize="small"/>Hacer las fotos en días soleados y a las horas centrales del día para evitar sombras</Typography>
          <Typography variant="subtitle1" color="white" align=" alignLeft" gutterBottom><CheckCircleOutlineIcon fontSize="small"/>Enciende todas las luces disponibles.</Typography>
          <Typography variant="subtitle1" color="white" align=" alignLeft" gutterBottom><CheckCircleOutlineIcon fontSize="small"/>No uses flash.</Typography>
          <Typography variant="subtitle1" color="white" align=" alignLeft" gutterBottom><CheckCircleOutlineIcon fontSize="small"/>Fotografía  desde las esquinas y evita que aparezcan personas en las fotos.</Typography>
          <Typography variant="subtitle1" color="white" align=" alignLeft" gutterBottom><CheckCircleOutlineIcon fontSize="small"/>Tomar fotos por sección de la casa e incluir estanterías, muebles, electrodomésticos.</Typography>
          <Typography variant="subtitle1" color="white" align=" alignLeft" gutterBottom><CheckCircleOutlineIcon fontSize="small"/>Agrega fotografías que se muestren daños superficiales o desperfectos, en caso de que existan.</Typography>
              
              
              
              
        </Box>
      </StyledModal>
    </div>
  );
}