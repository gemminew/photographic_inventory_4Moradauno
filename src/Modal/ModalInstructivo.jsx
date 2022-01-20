import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';

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
  width: 400,
  bgcolor: '#5B1A96',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

export default function ModalUnstyledDemo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Guia de fotos
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
        <img src="images/camara.png" alt="camara"  />

          <h2 id="unstyled-modal-title">Consideraciones que deben cumplir tus fotografias.</h2>
          <p>Hacer las fotos en días soleados y a las horas centrales del día para evitar sombras,  enciende todas las luces disponibles.
              No uses flash.
              Fotografía  desde las esquinas y evita que aparezcan personas en las fotos.
              Tomar fotos por sección de la casa e incluir estanterias, muebles, electrodométicos.
              Agrega fotografias que se concentren en mostrar daños superficiales o desperfectos, en caso de que existan.</p>
        </Box>
      </StyledModal>
    </div>
  );
}