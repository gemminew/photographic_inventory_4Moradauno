import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import camara from '../Assets/camara.png'

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
//   width: 400,
//   bgcolor: '#5B1A96',
   border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

export default function ModalGaleria() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button id="buttonModalGaleria" type="button" onClick={handleOpen}>
       Ver Galeria
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


          <h2 id="unstyled-modal-title">Aqui se mostrarán las fotos del inmueble</h2>
         
        </Box>
      </StyledModal>
    </div>
  );
}