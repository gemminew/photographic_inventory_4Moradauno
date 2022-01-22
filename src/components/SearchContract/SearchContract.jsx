import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import ModalInstructivo from '../../Modales/ModalInstructivo';

export default function SearchContract() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Número de Contrato
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="numeroContrato"
            name="numeroContrato"
            label="Número de Contrato"
            fullWidth
            autoComplete="contrato"
            variant="standard"
          />
        </Grid>
        <br></br>
        <Typography variant="h6" gutterBottom>
         Nombre de Propiedad
      </Typography>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nombrePropiedad"
            name="nombrePropiedad"
            label="Nombre de Propiedad"
            fullWidth
            autoComplete="contrato"
            variant="standard"
          />
        </Grid>
        <ModalInstructivo></ModalInstructivo>
       
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}