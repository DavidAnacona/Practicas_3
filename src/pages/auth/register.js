import React, { useState} from 'react'
import { Box, Container, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import back_log from "../../back-log.jpg"
import { Link } from 'react-router-dom'
import { OutlinedInput } from '@mui/material';

const Register = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [user, setUser] = useState('');

    const handleChange2 = (event) => {
        setUser(event.target.value);
    };
  return (
    <>
          <Box sx={{ width: "98.6vw", height: "1100px", backgroundImage: `url('${back_log}')`, backgroundPosition: 'center center', backgroundSize: "cover", opacity: "0.6", position: "relative" }} ></Box>
          <Container sx={{
            position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", opacity: "1", width: "500px", height: "1000px",
            backgroundColor: "white",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "20px",
            flexDirection: "column",
            fontSize: "32px", 
            marginTop: "200px"
          }}>
            <Typography variant='h3' sx={{fontWeight: "bold", fontFamily: "monospace"}}>Registrate en CPDC</Typography>
            <TextField fullWidth inputProps={{ style: { fontSize: "22px" } }}  id="standard-basic" label="Nombres" variant="standard" size='medium' sx={{marginTop: "20px", fontFamily: "monospace"}}/>
            <TextField fullWidth inputProps={{ style: { fontSize: "22px" } }} fontWeight="bold" id="standard-basic" label="Apellidos" variant="standard" size='medium' sx={{marginTop: "20px", fontFamily: "monospace"}}/>
            <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120, marginTop: "30px"}}>
                <InputLabel id="demo-simple-select-standard-label">Tipo de documento</InputLabel>
                    <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
                        <MenuItem value={5}>Cédula de ciudadania</MenuItem>
                        <MenuItem value={10}>Tarjeta de identidad</MenuItem>
                        <MenuItem value={20}>Tarjeta de extranjeria</MenuItem>
                        <MenuItem value={30}>Cédula de extranjeria</MenuItem>
                        <MenuItem value={40}>Pasaporte</MenuItem>
                    </Select>
            </FormControl>    
            <TextField fullWidth inputProps={{ style: { fontSize: "22px" } }} fontWeight="bold" id="standard-basic" label="No. identificación" variant="standard" size='medium' sx={{marginTop: "10px", fontFamily: "monospace"}}/>       
            <TextField fullWidth inputProps={{ style: { fontSize: "22px" } }} fontWeight="bold" id="standard-basic" label="Telefono de contacto" variant="standard" size='medium' sx={{marginTop: "10px", fontFamily: "monospace"}}/>       
            <TextField fullWidth inputProps={{ style: { fontSize: "22px" } }} fontWeight="bold" id="standard-basic" label="Telefono de emergencia" variant="standard" size='medium' sx={{marginTop: "10px", fontFamily: "monospace"}}/>  
            <TextField fullWidth inputProps={{ style: { fontSize: "22px" } }} fontWeight="bold" id="standard-basic" label="Correo electronico" variant="standard" size='medium' sx={{marginTop: "10px", fontFamily: "monospace"}}/>            
            <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120, marginTop: "10px"}}>
                <InputLabel id="demo-simple-select-standard-label">Tipo de usuario</InputLabel>
                    <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={user} onChange={handleChange2} label="Age">
                        <MenuItem value={5}>Administrativo</MenuItem>
                        <MenuItem value={10}>Paciente</MenuItem>
                        <MenuItem value={20}>Profesional de la salud</MenuItem>
                    </Select>
            </FormControl>  
            <Typography paragraph sx={{ marginTop: "20px", fontSize: "18px", fontFamily: "monospace"}} >En caso de que su usuario seleccionado sea PACIENTE utilice el siguiente campo para subir su historia medica</Typography>
            <OutlinedInput type='file' sx={{width: "450px"}}></OutlinedInput>
            <Link to="/politics"><Button variant="contained" sx={{fontSize: "22px", width: "300px", marginTop: "30px", fontFamily: "monospace", fontWeight: "bold"}}  color="success" >Registrarse</Button></Link>
          </Container>
        </>
  )
}

export default Register
