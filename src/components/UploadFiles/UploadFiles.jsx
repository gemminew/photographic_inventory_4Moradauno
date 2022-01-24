import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ImgUp from './ImgUp'
import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles({
  subir: {
    fontFamily: 'M PLUS 1',
    fontSize: '1.2em',
    color: '#424242',
  },
})
export default function UploadFiles() {
  const classes = useStyle()
  return (
    <React.Fragment>
      <Typography className={classes.subir} variant="h6" gutterBottom>
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