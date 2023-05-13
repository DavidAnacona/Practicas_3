import React, { useState } from 'react'
import { Box, Container, Typography, TextField, Button } from '@mui/material'
import back_log from "../../back-log.jpg"
import { Link } from 'react-router-dom'

const Login = () => {

  const [auth, setAuth] = useState(true);


  const loginAction = () => {
    setAuth(false)
  }

  const loginAction2 = () => {
    setAuth(true)
  }

  return (
      <>
          { auth ? (
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
              <Button variant="contained" sx={{fontSize: "22px", width: "300px", marginTop: "20px", fontFamily: "monospace", fontWeight: "bold"}}  onClick={loginAction} color='success'>Aceptar</Button>
              <Button variant="contained" sx={{fontSize: "22px", width: "300px", marginTop: "10px", fontFamily: "monospace", fontWeight: "bold"}}  onClick={loginAction2} color="error" >Denegar</Button>
            </Container>            </>
          ): (
            <>
            <Box sx={{ width: "100vw", height: "100vh", backgroundImage: `url('${back_log}')`, backgroundPosition: 'center center', backgroundSize: "cover", opacity: "0.6", position: "relative" }} ></Box>
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
        </>
          )}
      </>
  )
}

export default Login
