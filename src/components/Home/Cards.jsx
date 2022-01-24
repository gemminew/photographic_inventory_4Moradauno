import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ModalGaleria from "../Modales/ModalGaleria";
import { StyledEngineProvider } from "@mui/material/styles";
import './Cards.css';
import logo from '../../Assets/Logo.png'
import { useNavigate } from "react-router-dom";

export default function MediaControlCard({alias_casa, numero_contrato, foto_fachada}) {
  const theme = useTheme();

  const navigate = useNavigate();
  const goToStepper = () => {
    navigate("/section");
  }

  return (
    <Card onClick={goToStepper}>
      <CardActionArea>
        <form class="yayu">
        <section class="up">
        <Typography gutterBottom variant="h5" component="div">
            {alias_casa}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Número de Contrato: {numero_contrato}
          </Typography>
        </section>
        <section class="make-it-flex">
          <img src={foto_fachada} alt="fachada" class="image"/>
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
