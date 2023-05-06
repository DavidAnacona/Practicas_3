import React, { useState } from 'react'
import { Box, Container, Typography, TextField, Button, CardMedia, Card, CardContent } from '@mui/material'
import back_log from "../../back-log.jpg"
import avatar from "../../avatar.jpg"
import contacto1 from "../../contacto1.jpg"
import contacto2 from "../../contacto2.jpg"
import contacto3 from "../../contacto3.jpg"
import contacto4 from "../../contacto4.jpg"
import contacto5 from "../../contacto5.jpg"
import CallIcon from '@mui/icons-material/Call';

const Login = () => {

  const [auth, setAuth] = useState(true);


  const loginAction = () => {
    setAuth(false)
  }

  const logoutAction = () => {
    setAuth(false)
  }
  return (
      <>
        {console.log(auth)}
        { auth ? (
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
            <Button variant="contained" sx={{fontSize: "22px", width: "300px", marginTop: "60px", fontFamily: "monospace", fontWeight: "bold"}}  onClick={loginAction}>Iniciar sesión</Button>
            {console.log(auth)}
          </Container></>
        ) : (
          <>
            <Box sx={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#E8F8F5"}}>
              <Box sx= {{ width: "90vw", height: "15vh", marginTop: "20px", display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "80px"}}>
                <CardMedia component="img" image={avatar}  sx={{height: "100px", width: "100px", borderRadius: "50%", border: "1px solid black"}}/>
                <Typography paragraph sx={{ fontSize: "38px", fontFamily: "monospace", fontWeight: "bold", marginLeft: "30px"}}>Hola Juan Esteban Lugo</Typography>
              </Box>
              <Box sx={{ width: "90vw", height: "200px", textAlign: "left", marginTop: "40px"}}>
                <Typography paragraph sx={{ fontSize: "38px", fontFamily: "monospace", fontWeight: "bold", marginLeft: "30px"}}>Tus contactos:</Typography>
                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                <Card sx={{width: "180px", height: "240px", backgroundColor: "#D6EAF8", display: "flex", flexDirection: "column", alignItems: "center",  border: "1px solid #D6EAF8", textAlign: "center"}}>
                  <CardMedia component="img" image={contacto1} sx={{width: "150px", height: "120px", borderRadius: "10px", marginTop: "20px"}} />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{fontSize: "22px", fontFamily: "monospace", fontWeight: "bold", color: "black"}}>
                    Hija Martina
                    </Typography>
                    <Button variant="contained" startIcon={<CallIcon />} color="success" sx={{ fontSize: "18px", fontFamily: "monospace", fontWeight: "bold", width: "120px", marginTop: "10px", height: "30px" }}>LLamar</Button>
                  </CardContent>
                </Card>
                <Card sx={{width: "180px", height: "240px", backgroundColor: "#D6EAF8", display: "flex", flexDirection: "column", alignItems: "center",  border: "1px solid #D6EAF8", textAlign: "center"}}>
                  <CardMedia component="img" image={contacto2} sx={{width: "150px", height: "110px", borderRadius: "10px", marginTop: "20px"}} />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{fontSize: "22px", fontFamily: "monospace", fontWeight: "bold", color: "black"}}>
                    Sobrino Jose
                    </Typography>
                    <Button variant="contained" startIcon={<CallIcon />} color="success" sx={{ fontSize: "18px", fontFamily: "monospace", fontWeight: "bold", width: "120px", marginTop: "10px", height: "30px" }}>LLamar</Button>
                  </CardContent>
                </Card>
                <Card sx={{width: "180px", height: "240px", backgroundColor: "#D6EAF8", display: "flex", flexDirection: "column", alignItems: "center",  border: "1px solid #D6EAF8", textAlign: "center"}}>
                  <CardMedia component="img" image={contacto3} sx={{width: "150px", height: "120px", borderRadius: "10px", marginTop: "20px"}} />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{fontSize: "22px", fontFamily: "monospace", fontWeight: "bold", color: "black"}}>
                    Hijo Luis
                    </Typography>
                    <Button variant="contained" startIcon={<CallIcon />} color="success" sx={{ fontSize: "18px", fontFamily: "monospace", fontWeight: "bold", width: "120px", marginTop: "10px", height: "30px" }}>LLamar</Button>
                  </CardContent>
                </Card>
                <Card sx={{width: "180px", height: "240px", backgroundColor: "#D6EAF8", display: "flex", flexDirection: "column", alignItems: "center",  border: "1px solid #D6EAF8", textAlign: "center"}}>
                  <CardMedia component="img" image={contacto4} sx={{width: "150px", height: "120px", borderRadius: "10px", marginTop: "20px"}} />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{fontSize: "22px", fontFamily: "monospace", fontWeight: "bold", color: "black"}}>
                    Abogado 
                    </Typography>
                    <Button variant="contained" startIcon={<CallIcon />} color="success" sx={{ fontSize: "18px", fontFamily: "monospace", fontWeight: "bold", width: "120px", marginTop: "10px", height: "30px" }}>LLamar</Button>
                  </CardContent>
                </Card>
                <Card sx={{width: "180px", height: "240px", backgroundColor: "#D6EAF8", display: "flex", flexDirection: "column", alignItems: "center",  border: "1px solid #D6EAF8", textAlign: "center"}}>
                  <CardMedia component="img" image={contacto5} sx={{width: "150px", height: "120px", borderRadius: "10px", marginTop: "20px"}} />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{fontSize: "22px", fontFamily: "monospace", fontWeight: "bold", color: "black"}}>
                    Esposa
                    </Typography>
                    <Button variant="contained" startIcon={<CallIcon />} color="success" sx={{ fontSize: "18px", fontFamily: "monospace", fontWeight: "bold", width: "120px", marginTop: "10px", height: "30px" }}>LLamar</Button>
                  </CardContent>
                </Card>
                </Box>
                
              </Box>
            </Box>
          </>
        )}
      </>
  )
}

export default Login
