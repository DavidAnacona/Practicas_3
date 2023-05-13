import React from 'react'
import { Box, Typography, Button, CardMedia, Card, CardContent } from '@mui/material'
import avatar from "../../avatar.jpg"
import contacto1 from "../../contacto1.jpg"
import contacto2 from "../../contacto2.jpg"
import contacto3 from "../../contacto3.jpg"
import contacto4 from "../../contacto4.jpg"
import contacto5 from "../../contacto5.jpg"
import doctor1 from "../../doctor1 .jpg"
import doctor2 from "../../doctor2.jpg"
import doctor3 from "../../doctor3.jpg"
import doctor4 from "../../doctor4.jpg"
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom'
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded'
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';

const Home = () => {
    return (
        <>
            <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#E8F8F5"}}>
              <Box sx= {{ width: "90vw", height: "15vh", marginTop: "20px", display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "80px"}}>
                <CardMedia component="img" image={avatar}  sx={{height: "100px", width: "100px", borderRadius: "50%", border: "1px solid black"}}/>
                <Typography paragraph sx={{ fontSize: "38px", fontFamily: "monospace", fontWeight: "bold", marginLeft: "30px"}}>Hola Juan Esteban Lugo</Typography>
                <Link to="/"><Button variant="contained" sx={{fontSize: "14px", width: "70px", marginLeft: "390px",fontFamily: "monospace", fontWeight: "bold"}} color="error" >Salir</Button></Link>
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
                    <Button variant="contained" startIcon={<CallIcon />} color="success" sx={{ fontSize: "18px", fontFamily: "monospace", fontWeight: "bold", width: "170px", marginTop: "10px", height: "30px" }}>Videollamada</Button>
                  </CardContent>
                </Card>
                <Card sx={{width: "180px", height: "240px", backgroundColor: "#D6EAF8", display: "flex", flexDirection: "column", alignItems: "center",  border: "1px solid #D6EAF8", textAlign: "center"}}>
                  <CardMedia component="img" image={contacto2} sx={{width: "150px", height: "110px", borderRadius: "10px", marginTop: "20px"}} />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{fontSize: "22px", fontFamily: "monospace", fontWeight: "bold", color: "black"}}>
                    Sobrino Jose
                    </Typography>
                    <Button variant="contained" startIcon={<CallIcon />} color="success" sx={{ fontSize: "18px", fontFamily: "monospace", fontWeight: "bold", width: "170px", marginTop: "10px", height: "30px" }}>Videollamada</Button>
                  </CardContent>
                </Card>
                <Card sx={{width: "180px", height: "240px", backgroundColor: "#D6EAF8", display: "flex", flexDirection: "column", alignItems: "center",  border: "1px solid #D6EAF8", textAlign: "center"}}>
                  <CardMedia component="img" image={contacto3} sx={{width: "150px", height: "120px", borderRadius: "10px", marginTop: "20px"}} />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{fontSize: "22px", fontFamily: "monospace", fontWeight: "bold", color: "black"}}>
                    Hijo Luis
                    </Typography>
                    <Button variant="contained" startIcon={<CallIcon />} color="success" sx={{ fontSize: "18px", fontFamily: "monospace", fontWeight: "bold", width: "170px", marginTop: "10px", height: "30px" }}>Videollamada</Button>
                  </CardContent>
                </Card>
                <Card sx={{width: "180px", height: "240px", backgroundColor: "#D6EAF8", display: "flex", flexDirection: "column", alignItems: "center",  border: "1px solid #D6EAF8", textAlign: "center"}}>
                  <CardMedia component="img" image={contacto4} sx={{width: "150px", height: "120px", borderRadius: "10px", marginTop: "20px"}} />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{fontSize: "22px", fontFamily: "monospace", fontWeight: "bold", color: "black"}}>
                    Abogado 
                    </Typography>
                    <Button variant="contained" startIcon={<CallIcon />} color="success" sx={{ fontSize: "18px", fontFamily: "monospace", fontWeight: "bold", width: "170px", marginTop: "10px", height: "30px" }}>Videollamada</Button>
                  </CardContent>
                </Card>
                <Card sx={{width: "180px", height: "240px", backgroundColor: "#D6EAF8", display: "flex", flexDirection: "column", alignItems: "center",  border: "1px solid #D6EAF8", textAlign: "center"}}>
                  <CardMedia component="img" image={contacto5} sx={{width: "150px", height: "120px", borderRadius: "10px", marginTop: "20px"}} />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{fontSize: "22px", fontFamily: "monospace", fontWeight: "bold", color: "black"}}>
                    Esposa
                    </Typography>
                    <Button variant="contained" startIcon={<CallIcon />} color="success" sx={{ fontSize: "18px", fontFamily: "monospace", fontWeight: "bold", width: "170px", marginTop: "10px", height: "30px" }}>Videollamada</Button>
                  </CardContent>
                </Card>
                </Box>
              </Box>
              <Box sx={{ width: "96vw", height: "520px", backgroundColor: "#118528", marginTop: "180px", borderRadius: "20px", color: "white"}}>
                <Typography paragraph sx={{fontSize: "40px", fontFamily: "monospace", fontWeight: "bold", marginTop: "20px"}}>Sugerencias de profesionales para ti:</Typography>
                <Box sx={{ width: "100%", height: "300px", display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "20px"}}>
                  <Card sx={{ width: "30%" , height: "150px", borderRadius: "15px" ,display: 'flex', cursor: "pointer" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Typography component="div" variant="h5">
                          Juliana Guerra
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                           Psicologia
                        </Typography>
                      </CardContent>
                    </Box>
                    <CardMedia component="img" sx={{ width: "170px", height: "150px", borderRadius: "10px" }} image={doctor1}  />
                  </Card>
                  <Card sx={{ width: "30%" , height: "150px", borderRadius: "15px" ,display: 'flex', cursor: "pointer" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Typography component="div" variant="h5">
                          Daniel Castellanos
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                           Reumatologia
                        </Typography>
                      </CardContent>
                    </Box>
                    <CardMedia component="img" sx={{ width: "170px", height: "150px", borderRadius: "10px" }} image={doctor2}  />
                  </Card>
                </Box>
                <Box sx={{ width: "100%", height: "300px", display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "-100px"}}>
                  <Card sx={{ width: "30%" , height: "150px", borderRadius: "15px" ,display: 'flex', cursor: "pointer" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Typography component="div" variant="h5">
                          Martin Castañe
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                           Cardiologia
                        </Typography>
                      </CardContent>
                    </Box>
                    <CardMedia component="img" sx={{ width: "170px", height: "150px", borderRadius: "10px" }} image={doctor3}  />
                  </Card>
                  <Card sx={{ width: "30%" , height: "150px", borderRadius: "15px" ,display: 'flex', cursor: "pointer" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Typography component="div" variant="h5">
                          Laura Anacona
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                           Oftalmologia
                        </Typography>
                      </CardContent>
                    </Box>
                    <CardMedia component="img" sx={{ width: "170px", height: "150px", borderRadius: "10px" }} image={doctor4}  />
                  </Card>
                </Box>
              </Box>
              <Box sx={{ width: "96vw", height: "400px", marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <Box sx={{ cursor: "pointer"}}>
                    <LibraryBooksRoundedIcon sx={{ color: "green", width: "250px", height: "250px"}}/>
                    <Typography paragraph sx={{color: "green", fontSize: "30px", fontFamily: "monospace", fontWeight: "bold"}}>Historial medico</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: "150px"}}>
                    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                        <MedicalInformationOutlinedIcon sx={{ color: "green", width: "250px", height: "250px"}}/>
                        <Box sx={{display: "flex", flexDirection: "column"}}>
                            <Button variant="contained" sx={{fontSize: "14px", width: "150px", marginLeft: "10px",fontFamily: "monospace", fontWeight: "bold", marginTop: "50px", backgroundColor:"orange"}} >Ver Examenes</Button>
                            <Button variant="contained" sx={{fontSize: "14px", width: "150px", marginLeft: "10px",fontFamily: "monospace", fontWeight: "bold", marginTop: "20px", backgroundColor:"blue"}} color="error" >Cargar Examen</Button>
                        </Box>
                    </Box>
                    <Typography paragraph sx={{color: "green", fontSize: "30px", fontFamily: "monospace", fontWeight: "bold"}}>Examenes medicos</Typography>
                </Box>
              </Box>
            </Box>
        </>
    )
}

export default Home