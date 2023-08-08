import { Box,Grid,Link,Typography } from "@mui/material";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoTiktok } from "react-icons/io5";
const Muigridfooter = () => {
  return (
    <>
         <Box
        sx={{   bgcolor: "#213343", color: "#fff", p: 3 }}
      >
        <Grid container direction='row'sx={{"@media (max-width:1007px)": {ml:2, mt:5},"@media (max-width:600px)":{ml:5},"@media (max-width:430px)":{ml:0}}}>
          <Grid container item xs={12} sm={4} ml={15} sx={{"@media (min-width:600px)": {borderRight:1}}}>
               <Grid item xs={12}><Typography fontWeight='bold'>Popular Features</Typography></Grid>
              <Grid item xs={12} sm={6} mt={2}><Link sx={{color:'#b6c7d6',textDecoration:"none",cursor:'pointer' ,'&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>All Products and Features</Link></Grid>
              <Grid item xs={12} sm={6} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Free Website Builder</Link></Grid>
              <Grid item xs={12} sm={6} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Free Meeting Scheduler App</Link></Grid>
              <Grid item xs={12} sm={6} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Sales Email Templates</Link></Grid>
              <Grid item xs={12} sm={6} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Social Media Tools</Link></Grid>
              <Grid item xs={12} sm={6} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Help Desk Software</Link></Grid>
              <Grid item xs={12} sm={6} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Email Tracking Software</Link></Grid>
              <Grid item xs={12} sm={6} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Free Online Form Builder</Link></Grid>
              <Grid item xs={12} sm={6} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Sales Email Automation</Link></Grid>
              <Grid item xs={12} sm={6} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Free Chatbot Builder</Link></Grid>
              <Grid item xs={12} sm={6} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Ads Software</Link></Grid>
              <Grid item xs={12} sm={6} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Free Live Chat Software</Link></Grid>
              <Grid item xs={12} sm={6} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Email Marketing Software</Link></Grid>
              <Grid item xs={12} sm={6} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Marketing Analytics</Link></Grid>
              <Grid item xs={12} sm={6} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Lead Management Software</Link></Grid>
              <Grid item xs={12} sm={6} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}></Link></Grid>
          </Grid>
          {/* second grid */}
          <Grid item container xs={12} sm={2} ml={5}sx={{"@media (max-width:600px)":{ml:15}}} spacing={2}>
          <Grid item xs={12}><Typography fontWeight='bold'>Free Tools</Typography></Grid>
              <Grid item sx={12}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            }}}>Website Grader</Link></Grid>
              <Grid item xs={12}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },"@media (max-width:600px)": {mt:2}}}>Make My Persona</Link></Grid>
              <Grid item xs={12}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },"@media (max-width:600px)": {mt:2}}}>Email Signature Generator</Link></Grid>
              <Grid item xs={12}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },"@media (max-width:600px)": {mt:2}}}>Brand Kit Generator</Link></Grid>
              <Grid item xs={12}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },"@media (max-width:600px)": {mt:2}}}>Blog Ideas Generator</Link></Grid>
              <Grid item xs={12}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },"@media (max-width:600px)": {mt:2}}}>Email Tracking Software</Link></Grid>
              <Grid item xs={12}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },"@media (max-width:600px)": {mt:2}}}>Free Online Form Builder</Link></Grid>
              <Grid item xs={12}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },"@media (max-width:600px)": {mt:2}}}>Sales Email Automation</Link></Grid>
          </Grid>
          {/* grid 3 */}
          <Grid item  xs={12} sm={2} sx={{"@media (max-width:600px)": {ml:15,mt:5}}}>
          <Grid item xs={12}><Typography fontWeight='bold'>Company</Typography></Grid>
          <Grid item xs={12} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>About US</Link></Grid>
              <Grid item xs={12} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Careers</Link></Grid>
              <Grid item xs={12} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Management Team</Link></Grid>
              <Grid item xs={12} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Board of Directors</Link></Grid>
            <Grid item xs={12} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Investor Relations</Link></Grid>
            <Grid item xs={12} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Blogs</Link></Grid>
              <Grid item xs={12} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Contact US</Link></Grid>
            
          </Grid>
           {/* 4th Grid */}
           <Grid item xs={12} sm={2} sx={{"@media (max-width:1007px)": {ml:15, mt:5}}}>
           <Grid item xs={12}><Typography fontWeight='bold'>Customers</Typography></Grid>
           <Grid item xs={12} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Customer Supports</Link></Grid>
              <Grid item xs={12} mt={2}><Link sx={{color:'#b6c7d6', textDecoration:"none",cursor:'pointer','&:hover': {
              color: '#0b8484',
              textDecoration:'underline'
            },}}>Join a local user group</Link></Grid>
          </Grid>
          </Grid>
        <Box
          sx={{
            my: 3,
            textAlign:'center',
            "& svg": {
              fontSize: "30px",
              cursor: "pointer",
              mr: 2,
              color:"#b6c7d6"
            },
            '& svg:hover':{
                color:'#2e475d',
                Transform:'translateX(5px)',
                transition: 'all 400ms'
            }
          }}
        >
           <Link href="https://www.facebook.com/"><FaFacebookF/></Link>
          <Link href="https://www.instagram.com/"><InstagramIcon /></Link>
          <Link href="https://www.youtube.com/"><YouTubeIcon /></Link>
          <Link href="https://www.twitter.com/"><TwitterIcon /></Link>
          <Link href="https://www.linkdin.com/"><BiLogoLinkedin /></Link>
          <Link href="https://www.tiktok.com/"><IoLogoTiktok/></Link>
        </Box>
        <Typography variant='h5' textAlign='center'>
            HubSpot
        </Typography>
        <Typography
          variant="h6"
          sx={{ "@media (max-width:600px)": { fontSize: "1rem" } }}
          textAlign='center'
        >
          Copyright &copy; 2023 HubSpot, Inc.
        </Typography>
      </Box>
    </>
  );
};

export default Muigridfooter;