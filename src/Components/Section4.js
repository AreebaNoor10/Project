import { Grid, Typography,Box } from '@mui/material'
import React from 'react'

const Section4 = () => {
  return (
    <>
     <Grid container direction="row" color='#222' 
       mt={10} mb={10}>
        <Grid items xs={12} sm={6}>
            <Typography variant='h4' ml={15} fontWeight='bold'sx={{"@media (max-width:600px)": {textAlign:'center', ml:0}}}>177,000+</Typography>
            <Typography variant='h6' ml={15}sx={{"@media (max-width:600px)": {textAlign:'center',mb:5,ml:0}}}>customers in over 120 countries growing <br />their businesses with HubSpot</Typography>
        </Grid>
        <Grid container  xs={12} sm={2}>
          <Grid items xs={3} ><Box component='img' src='https://www.hubspot.com/hubfs/wwf.png' sx={{width:'250%',"@media (max-width:600px)": {width:'100px', ml:5}}}></Box></Grid>
          <Grid items xs={3} ><Box component='img' src='https://www.hubspot.com/hubfs/DoorDash%20Logo%20for%20HS%20Website-1.png' sx={{width:'250%', ml:8 ,"@media (max-width:600px)": {width:'100px',ml:5}}}></Box></Grid>
          <Grid items xs={3} ><Box component='img' src='https://www.hubspot.com/hubfs/reddit-2.png' sx={{width:'250%', ml:18,"@media (max-width:600px)": {width:'100px',ml:5}}}></Box></Grid>
          <Grid items xs={3} ><Box component='img' src='https://www.hubspot.com/hubfs/weightwatchers.png' sx={{width:'250%', ml:30,"@media (max-width:1000px)": {display:'none'}}}></Box></Grid>
          <Grid items xs={3} ><Box component='img' src='https://www.hubspot.com/hubfs/tumblr.png' sx={{width:'250%',"@media (max-width:600px)": {width:'100px',ml:5}}}></Box></Grid>
          <Grid items xs={3} ><Box component='img' src='https://www.hubspot.com/hubfs/howard-university.png' sx={{width:'250%', ml:8 ,"@media (max-width:600px)": {width:'100px',ml:5}}}></Box></Grid>
          <Grid items xs={3} ><Box component='img' src='https://www.hubspot.com/hubfs/motley-fool.png' sx={{width:'250%', ml:18,"@media (max-width:600px)": {width:'100px',ml:5}}}></Box></Grid>
          <Grid items xs={3} ><Box component='img' src='https://www.hubspot.com/hubfs/eventbrite-Mar-16-2023-05-12-14-9624-PM.png' sx={{width:'250%', ml:30,"@media (max-width:1000px)": {display:'none'}}}></Box></Grid>
        </Grid>
    </Grid> 
    </>
  )
}

export default Section4
