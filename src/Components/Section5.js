import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import img from "../images/hubspot.webp";
const Section5 = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
    >
      <Grid items xs={12} sm={6} alignContent="center" mb={10}>
        <Typography
          variant="h6"
          color="#2e475d"
          fontWeight='bold'
          ml={20}
          sx={{
            "@media (max-width:950px)": { fontSize:"30px" },
            "@media (max-width:600px)": {textAlign:'center',ml:0},
          }}
        >
          Grow Better With HubSpot Today
        </Typography>
        <Typography
          variant="body1"
          color="#2e475d"
          mt={2}
          ml={20}
          sx={{ "@media (max-width:1080px)": { fontSize: 12 }, "@media (max-width:600px)": {textAlign:'center',ml:10, mr:10}, }}
        >
          With tools to make every part of your process more human and a support team excited to help you, getting started with HubSpot has never been easier.
        </Typography>
        <Button
          className="btn1"
          size="large"
          variant="contained"
          sx={{
            mt: 2,
            ml: 20,
            width: "230px",
            height: "60px",
            border: "1px solid #ff5c35",
            bgcolor: "#ff5c35",
            "@media (max-width:500px)": { ml:10 },
            '&:hover': {
              backgroundColor: 'transparent'
            },
          }}
        >
          Get a demo
        </Button>
        <Button
          className="btn2"
          size="large"
          variant="contained"
          sx={{
            mt: 2,
            width: "230px",
            height: "60px",
            border: "1px solid #ff5c35",
            bgcolor: "#fff",
            color: "#ff5c35",
            ml: 5,
            "@media (max-width:1160px)": { ml: 20 },
            "@media (max-width:500px)": { ml:10 },
            '&:hover': {
              backgroundColor: 'transparent'
            },
          }}
        >
          Get Started Free
        </Button>
        <Typography
          variant="body2"
          color="#2e475d"
          mt={2}
          ml={20}
          sx={{ "@media (max-width:1080px)": { fontSize: 12 },"@media (max-width:450px)": { fontSize: 10, mr: 10 }, "@media (max-width:600px)": {textAlign:'center',ml:10, mr:10}  }}
        >
          Get a demo of our premium software, or get started with free tools.
        </Typography>
      </Grid>
      <Grid container item xs={12} sm={6} justifyContent="center">
        <Box
          component="img"
          src='https://www.hubspot.com/hubfs/cta_contentblock_headshot_man.png'
          sx={{
            width: "50%",
            mb:10,
            mt:0,
          }}
        ></Box>
      </Grid>
    </Grid>
  );
};

export default Section5;
