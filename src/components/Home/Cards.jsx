import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { CardActionArea } from "@mui/material";
import ModalGaleria from "../Modales/ModalGaleria";
import { StyledEngineProvider } from "@mui/material/styles";
import './Cards.css';
import logo from '../../Assets/Logo.png'

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card>
      <CardActionArea>
        <form class="yayu">
        <section class="up">
        <Typography gutterBottom variant="h5" component="div">
            Casa Lomas
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Número de Contrato: 1234
          </Typography>
        </section>
        <section class="make-it-flex">
          <img src={logo} class="image"/>
          <section>
            <StyledEngineProvider injectFirst>
              <ModalGaleria />
            </StyledEngineProvider>
          </section>
        </section>
        </form>
      </CardActionArea>
    </Card>
  );
}
