import React, { useState } from 'react'
import { Box, Container, Typography, TextField, Button } from '@mui/material'
import back_log from "../../back-log.jpg"
import { Link } from 'react-router-dom'

const Login = () => {

  return (
      <>
            <Box sx={{ width: "100vw", height: "100vh", backgroundImage: `url('${back_log}')`, backgroundPosition: 'center center', backgroundSize: "cover", opacity: "0.6", position: "relative" }} >
            <Container sx={{
              position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", opacity: "1", width: "500px", height: "500px",
              backgroundColor: "white",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "20px",
              flexDirection: "column",
              fontSize: "32px"
            }}>
              <Typography variant='h3' sx={{fontWeight: "bold", fontFamily: "monospace"}}>Bienvenido a CPDC</Typography>
              <TextField fullWidth inputProps={{ style: { fontSize: "22px" } }}  id="standard-basic" label="Usuario" variant="standard" size='medium' sx={{marginTop: "40px", fontFamily: "monospace"}}/>
              <TextField fullWidth inputProps={{ style: { fontSize: "22px" } }} fontWeight="bold" id="standard-basic" label="Contraseña" variant="standard" size='medium' sx={{marginTop: "40px", fontFamily: "monospace"}}/>
              <Link to="/home"><Button variant="contained" sx={{fontSize: "22px", width: "300px", marginTop: "40px", fontFamily: "monospace", fontWeight: "bold"}}  >Iniciar sesión</Button></Link>
              <Link to="/register"><Button variant="contained" sx={{fontSize: "22px", width: "300px", marginTop: "10px", fontFamily: "monospace", fontWeight: "bold"}}  color="success" >Registrarse</Button></Link>
            </Container>
            </Box>
      </>
  )
}

export default Login
