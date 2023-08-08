 import React from 'react';
import { Grid, Box,Typography } from '@mui/material';

const GridLayout = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      color='white'
      padding='30px'
      textAlign='center'
      style={{background: 'linear-gradient(45deg,#0fbfbf,#4fb06d)'}}
    >
      <Grid items xs={12} mt={10} mb={5}>
        <Typography
          variant="h4"
        >
         Learn and grow better with award-winning <br /> support and a thriving community
        </Typography>
        <Typography
          variant="body1"
          mt={2}
        >
         Learn how to get the most out of HubSpot with free courses, certifications, and resources —<br /> plus a legendary customer support team and an active user community to back you up.
        </Typography>
      </Grid>
      <Grid items xs={12} sm={6} md={3} sx={{"@media (min-width:600px)": { borderBottom: 1, borderRight:1},"@media (max-width:600px)": {mt:5}}}><Box
          component="img"
          src='https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_agency.svg'
        ></Box>
        <Typography variant='h4'sx={{
          mt:2
          }}>
          150+
          </Typography>
          <Typography variant='body1'sx={{
          mt:1,
          mb:3
          }}>
          HubSpot user groups
          </Typography>
          </Grid>
      <Grid items xs={12} sm={6} md={3} sx={{"@media (min-width:900px)": { borderBottom: 1,borderRight: 1},"@media (min-width:600px)": { borderBottom: 1},"@media (max-width:600px)": {mt:5}}}><Box
          component="img"
          src='https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_blog.svg'>
            
            </Box>
            <Typography variant='h4'sx={{
          mt:2
          }}>
          7M+
          </Typography>
          <Typography variant='body1'sx={{
          mt:1,
          mb:3
          }}>
          monthly visits
          </Typography>
            
            </Grid>
      <Grid items xs={12} sm={6} md={3} sx={{"@media (min-width:600px)": { borderBottom: 1,borderRight: 1  },"@media (max-width:600px)": {mt:5}}}><Box
          component="img"
          src='https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_academy.svg'
          sx={{"@media (max-width:899px)": {mt:5}}}
        >
        </Box>
        <Typography variant='h4'sx={{
          mt:2
          }}>
          483K+
          </Typography>
          <Typography variant='body1'sx={{
          mt:1,
          mb:3
          }}>
          certified professionals
          </Typography>
        </Grid>
      <Grid items xs={12} sm={6} md={3} sx={{"@media (min-width:600px)": { borderBottom: 1}}}><Box
          component="img"
          src='https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_inbound.svg'
          sx={{"@media (max-width:899px)": {mt:5}}}
        ></Box> <Typography variant='h4'sx={{
          mt:2
          }}>
          70K
          </Typography>
          <Typography variant='body1'sx={{
          mt:1,
          mb:3
          }}>
          registered attendees
          </Typography></Grid>
      <Grid items xs={12} sm={6} md={3} sx={{"@media (min-width:900px)": { borderRight: 1},"@media (min-width:600px) and (max-width:900px)": { borderRight: 1,borderBottom:1}}}><Box
          component="img"
          src='https://cdn2.hubspot.net/hubfs/53/HubSpot-App-Marketplace-White.png'
          sx={{
            width:'40%',
            mt:5
          }}
        ></Box> <Typography variant='h4'sx={{
          mt:2
          }}>
          1,400+
          </Typography>
          <Typography variant='body1'sx={{
          mt:1,
          mb:10
          }}>
          integrations
          </Typography></Grid>
      <Grid items xs={12} sm={6} md={3} sx={{"@media (min-width:900px)": { borderRight: 1},"@media (min-width:600px) and (max-width:900px)": {borderBottom:1}}}><Box
          component="img"
          src='https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_globe.svg'
          sx={{
            mt:5
          }}
        ></Box>
         <Typography variant='h4'sx={{
          mt:2
          }}>
          6
          </Typography>
          <Typography variant='body1'sx={{
          mt:1,
          mb:10
          }}>
          languages
          </Typography>
        </Grid>
      <Grid items xs={12} sm={6} md={3} sx={{"@media (min-width:600px)": { borderRight: 1}}}><Box
          component="img"
          src='https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_followers.svg'
          sx={{
            mt:5
          }}
        ></Box>
         <Typography variant='h4'sx={{
          mt:2
          }}>
          3.1M+
          </Typography>
          <Typography variant='body1'sx={{
          mt:1,
          mb:10
          }}>
          social followers
          </Typography>
        </Grid>
      <Grid items xs={12} sm={6} md={3}><Box
          component="img"
          src='https://cdn2.hubspot.net/hubfs/53/Lists.svg'
          sx={{
            mt:5
          }}
        ></Box>
         <Typography variant='h4'sx={{
          mt:2,
          }}>
          177,000+
          </Typography>
          <Typography variant='body1'sx={{
          mt:1,
          mb:10
          }}>
          Customers
          </Typography>
        </Grid>
    </Grid>
  );
};

export default GridLayout;
