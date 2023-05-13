import React from "react";
import { Box, Container, Typography, Button } from '@mui/material'

const Politics  = () => {
    <>
            <Box sx={{ width: "100vw", height: "100vh", backgroundImage: `url('${back_log}')`, backgroundPosition: 'center center', backgroundSize: "cover", opacity: "0.6", position: "relative" }} ></Box>
            <Container sx={{
              position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", opacity: "1", width: "500px", height: "450px",
              backgroundColor: "white",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "20px",
              flexDirection: "column",
              fontSize: "32px"
            }}>
              <Typography variant='h3' sx={{fontWeight: "bold", fontFamily: "monospace"}}>Bienvenido a CPDC</Typography>
              <Typography paragraph sx={{ marginTop: "20px", fontSize: "18px", fontFamily: "monospace"}} >Al darle aceptar declara que CPDC puede utilizar su información personal según los términos y condiciones de políticas de privacidad y políticas de protección de datos de acuerdo a la Ley de Protección de Datos Personales 1581 de 2012</Typography>
              <Link to="/home"><Button variant="contained" sx={{fontSize: "22px", width: "300px", marginTop: "20px", fontFamily: "monospace", fontWeight: "bold"}}  onClick={loginAction} color='success'>Aceptar</Button></Link>
              <Link to="/register"><Button variant="contained" sx={{fontSize: "22px", width: "300px", marginTop: "10px", fontFamily: "monospace", fontWeight: "bold"}}  onClick={loginAction2} color="error" >Denegar</Button></Link>
            </Container>            
        </>
}

export default Politics