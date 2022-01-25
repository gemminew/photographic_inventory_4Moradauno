import * as React from "react";
import { useContext } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchContract from "./SearchContract/SearchContract";
import UploadFiles from "./UploadFiles/UploadFiles";
import RenderArchives from "./RenderArchives/RenderArchives";
import { useNavigate } from "react-router-dom";
import { FilesContext } from "../context/filesContext";

const theme = createTheme({
  palette:{
    primary:{
      main:'#FF7457'},
    secondary:{
      main:'#263238'
    },
  }
})

function Copyright() {
  return (
    <Typography variant="body2" color="text.primary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Morada Uno
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Buscar contrato", "Subir fotos", "Revisar fotos"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <SearchContract />;
    case 1:
      return <UploadFiles />;
    case 2:
      return <RenderArchives />;
    default:
      throw new Error("Unknown step");
  }
}



export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/");
  };

  console.log("steper")
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="secondary"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography color= "secondary" component="h1" variant="h4" align="center">
            Inventario fotográfico
          </Typography>
          <Stepper  color= "secondary" activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <h2>Tus fotos han sido almacenadas.</h2>
                <h5>
                  Ahora puedes notificar al inquilino para que autorice las
                  fotos o agregue más con este enlace:
                  https://morada-uno.web.app/
                </h5>
                <button id="copy"  border= "1px solid #ccc" padding="6px 12px" cursor="pointer"  color="#FFFFFF" background= "#7E288B" border-radius="4px"  margin-top="2em" 
                  onClick={() =>
                    navigator.clipboard.writeText("Ahora puedes notificar al inquilino para que autorice las fotos o agregue más con este enlace:https://morada-uno.web.app/")
                  }
                >
                  Copy
                </button>
                <button color="primary" className="goToNew" onClick={goToMain}>
                  Regresar al menú principal
                </button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Regresar
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
