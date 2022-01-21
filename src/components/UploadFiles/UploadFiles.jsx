import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ImgUp from './ImgUp'

export default function UploadFiles() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Subir archivo
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
         <ImgUp></ImgUp>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}