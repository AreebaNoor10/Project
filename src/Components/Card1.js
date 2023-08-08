import React from 'react'
import { Data } from "./Data";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import Container from "@mui/material/Container";
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
const Card1 = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" style={{ marginTop: "50px" }}>
          What is HubSpot?
        </Typography>
        <Typography
              variant="body1"
              font-size="1rem"
              font-weight="300"
              lineHeight="25px"
              mt="2%"
              ml="20%"
              mr="10%"
            >
              HubSpot is a CRM platform with all the software, integrations, and
              resources you need to connect marketing, sales, content
              management, and customer service. Each product in the platform is
              powerful on its own, but the real magic happens when you use them
              together.
            </Typography>
        <Grid container spacing={3} style={{ marginTop: "20px", marginBottom:'40px' }}>
          {Data.map((car, index) => {
            return(
            <Grid item xs={12} sm={6} md={4}  key={index}>
              <Card sx={{ minWidth: 275,"&:hover": { transform: "scale3d(1.02, 1.02, 1)" },cursor:'pointer'}}>
                <CardContent sx={{ml:3, mr:3}}>
                  <Typography variant="h5" fontWeight={600} color='#2e475d' >{car.Icon}{car.title}</Typography>
                  <Typography variant="body1" color='#2e475d' mt={2}>{car.about}</Typography>
                  <Typography color='#2e475d'>_________________________________</Typography>
                  <Typography variant="h6" color='#2e475d'>{car.popular}</Typography>
                  <Typography variant="body2" color='#2e475d'><OfflinePinIcon style={{ color: "#ff5c35" }} fontSize='small'/>{car.Feature1}</Typography>
                  <Typography variant="body2" color='#2e475d'><OfflinePinIcon style={{ color: "#ff5c35" }} fontSize='small'/>{car.Feature2}</Typography>
                  <Typography variant="body2" color='#2e475d'><OfflinePinIcon style={{ color: "#ff5c35" }} fontSize='small'/>{car.Feature3}</Typography>
                </CardContent>
                <Button variant="contained" size="large" sx={{width:'300px', mb:3, ml:5,bgcolor: "#ff5c35",'&:hover': {
              backgroundColor: 'wheat',
            } }}>
                  Learn More
                </Button>
              </Card>
            </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

export default Card1
